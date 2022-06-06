const express = require("express");
const router = express.Router();
const FavsController = require("./controller");
const { isAuthenticated } = require("../../middlewares/isAuthenticated");

router.get("/", isAuthenticated, FavsController.getAllFavs);
router.post("/", isAuthenticated, FavsController.createFav);
router.get("/:id", isAuthenticated, FavsController.getFavById);
router.delete("/:id", isAuthenticated, FavsController.deleteFav);
router.put("/:id", FavsController.updateFav);

module.exports = router;
