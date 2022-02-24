const movies = require("../model/index");
const logger = require("../config/logger");

const Getlist = async (req, res) => {
  try {
    const totalMovies = await movies.find();
    if (totalMovies.length)
      return res.json({
        success: true,
        total: totalMovies.length,
        totalMovies,
      });
    else return res.json({ success: false, message: "No data found" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err });
  }
};
module.exports = Getlist;
