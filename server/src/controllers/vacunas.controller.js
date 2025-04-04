const express = require('express');
const router = express.Router();
const Vacuna = require("../models/vacuna.model");

// Obtener todas las vacunas
exports.getVacunas = async (req, res) => {
  try {
    const vacunas = await Vacuna.find();
    res.json(vacunas);
  } catch (error) {
    res.status.json({ error: "Error al obtener las vacunas" });
  }
};

// Endpoint para agregar una nueva vacuna
router.post('/vacunas', async (req, res) => {
  try {
    const { nombre, descripcion, fecha, dosis_recomendadas, especies_aplicables } = req.body;

    const nuevaVacuna = new Vacuna({
      nombre,
      descripcion,
      fecha,
      dosis_recomendadas,
      especies_aplicables
    });

    await nuevaVacuna.save();
    res.status(201).json({ message: 'Vacuna registrada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar la vacuna' });
  }
});

// Actualizar vacuna
exports.updateVacuna = async (req, res) => {
  try {
    const vacuna = await Vacuna.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vacuna);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar vacuna" });
  }
};

// Eliminar vacuna
exports.deleteVacuna = async (req, res) => {
  try {
    await Vacuna.findByIdAndDelete(req.params.id);
    res.json({ message: "Vacuna eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar vacuna" });
  }
};

module.exports=router;