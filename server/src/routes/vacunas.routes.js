const express = require("express");
const router = express.Router();
const vacunaController = require("../controllers/vacunas.controller");

router.get("/", vacunaController.getVacunas);
router.post("/", vacunaController.createVacuna);
router.put("/:id", vacunaController.updateVacuna);
router.delete("/:id", vacunaController.deleteVacuna);

module.exports = router;
