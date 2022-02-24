const movies = require("../model/index");
const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
const path = require("path");
const Port = process.env.PORT || 4000;

const insert = async (req, res) => {
  try {
    const { name, duration, film_cast } = req.body;
    const file = req.file;
    const url = `http://localhost:${Port}/uploads/${
      file.fieldname + path.extname(file.originalname)
    }`;
    if (file && name && duration && film_cast) {
      const token = await jwt.sign({ Name: name }, process.env.secret);
      if (token) {
        const movie = new movies({
          name,
          duration,
          Image: url,
          token,
          film_cast,
        });
        await movie.save();
        res.json({ success: true, message: "Movie inserted successfully" });
      } else res.json({ success: false, message: "Token is not created yet" });
    } else
      return res.json({
        success: false,
        message: "Please provide credentials",
      });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err });
  }
};
module.exports = insert;
