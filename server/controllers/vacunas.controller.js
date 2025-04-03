const Vacuna = require("../models/vacuna.model");

// Obtener todas las vacunas
exports.getVacunas = async (req, res) => {
  try {
    const vacunas = await Vacuna.find();
    res.json(vacunas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las vacunas" });
  }
};

// Crear una vacuna
exports.createVacuna = async (req, res) => {
  try {
    const nuevaVacuna = new Vacuna(req.body);
    await nuevaVacuna.save();
    res.status(201).json(nuevaVacuna);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar vacuna" });
  }
};

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
