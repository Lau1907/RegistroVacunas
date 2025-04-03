const express = require("express");
const router = express.Router();
const propietarioController = require("../controllers/propietarios.controller");

router.get("/", propietarioController.getPropietarios);
router.post("/", propietarioController.createPropietario);
router.put("/:id", propietarioController.updatePropietario);
router.delete("/:id", propietarioController.deletePropietario);

module.exports = router;
