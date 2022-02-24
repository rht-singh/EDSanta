const movies = require("../model/index");
const logger = require("../config/logger");

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const deleteMovie = await movies.findOneAndRemove({ _id: id });
      if (deleteMovie)
        return res.json({
          success: true,
          deleteMovie,
        });
      else return res.json({ success: false, message: "No data found" });
    } else res.json({ success: false, message: "Please pass id of movie" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err });
  }
};
module.exports = deleteMovie;
