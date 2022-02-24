const express = require("express");
const os = require("os");
const dotenv = require("dotenv").config();
const cluster = require("cluster");
const logger = require("./config/logger");
const routing = require("./routes/route");
const mongo = require("./config/db");
const Port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.static("uploads"));
app.use("/api/v1", routing);

app.get("/", (req, res) => {
  res.send("status");
});

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else app.listen(Port, () => logger.info(`Server started at ${Port}`));
