const express = require("express");
const router = express.Router();
const mascotaController = require("../controllers/mascotas.controller");

router.get("/", mascotaController.getMascotas);
router.post("/", mascotaController.createMascota);
router.put("/:id", mascotaController.updateMascota);
router.delete("/:id", mascotaController.deleteMascota);

module.exports = router;
