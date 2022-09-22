const express = require("express");
const { createFav, updateFav, deleteFav, findAllFav, findByUser } = require("../controller/fav");
const { requireSignin } = require("../middleware/middleware");
const router = express.Router();

router.post("/fav/create", requireSignin, createFav); // user login and token require
router.post("/fav/update/:id", updateFav);
router.post("/fav/delete/:id", deleteFav);
router.post("/fav/getAll", findAllFav); // you get all fav item
router.post("/fav/getByUser", requireSignin, findByUser); // user login and token require

module.exports = router;
