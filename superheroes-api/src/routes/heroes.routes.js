const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroes.controller.js")

router.get("/", heroesController.list);
router.post("/", heroesController.create)
router.put("/:id", heroesController.update)
router.delete("/:id", heroesController.remove)
router.patch("/:id", heroesController.update)


module.exports = router;