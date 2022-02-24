const jwt = require("jsonwebtoken");
const movie = require("../model/index");

module.exports = async function (req, res, next) {
  try {
    const auth = req.headers["authorization"];
    if (auth) {
      const token = auth.split(" ")[1];
      const checkToken = await jwt.verify(token, process.env.secret);
      const movies = await movie.findOne({ token });
      if (movies) {
        req.data = movies;
        next();
      } else return next();
    } else res.json({ success: false, message: "Unauthorized access" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Unauthorized access" });
  }
};
