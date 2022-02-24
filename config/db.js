const mongoose = require("mongoose");
const logger = require("./logger");

mongoose.connect(
  process.env.mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else logger.info("Mongo Connected");
  }
);
