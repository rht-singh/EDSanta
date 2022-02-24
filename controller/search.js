const movies = require("../model/index");
const logger = require("../config/logger");

const Search = async (req, res) => {
  try {
    const { search } = req.body;
    const movie = await movies.find();
    if (search.length && movie.length) {
      const movie = await movies.find({
        name: { $regex: search, $options: "i" },
      });
      if (movie.length) {
        res.json({ success: true, movie });
      } else res.json({ success: false, message: "No data found" });
    } else {
      res.json({ success: true, movie });
    }
  } catch (err) {
    res.json({ success: false, message: err });
  }
};
module.exports = Search;
