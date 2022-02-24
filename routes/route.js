const router = require("express").Router();
const insertMovie = require("../controller/insert");
const getAllMovies = require("../controller/getList");
const RouterGuard = require("../middleware/RouterGuard");
const Search = require("../controller/search");
const DeleteMovie = require("../controller/delete");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.route("/insert").post(upload.single("image"), insertMovie);
router.route("/getList").get(RouterGuard, getAllMovies);
router.route("/search").get(RouterGuard, Search);
router.route("/:id/delete").delete(RouterGuard, DeleteMovie);
module.exports = router;
