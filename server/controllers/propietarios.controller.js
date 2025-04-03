const Propietario = require("../models/propietario.model");

// Obtener todos los propietarios
exports.getPropietarios = async (req, res) => {
  try {
    const propietarios = await Propietario.find().populate("mascotas");
    res.json(propietarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los propietarios" });
  }
};

// Crear un propietario
exports.createPropietario = async (req, res) => {
  try {
    const nuevoPropietario = new Propietario(req.body);
    await nuevoPropietario.save();
    res.status(201).json(nuevoPropietario);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar propietario" });
  }
};

// Actualizar propietario
exports.updatePropietario = async (req, res) => {
  try {
    const propietario = await Propietario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(propietario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar propietario" });
  }
};

// Eliminar propietario
exports.deletePropietario = async (req, res) => {
  try {
    await Propietario.findByIdAndDelete(req.params.id);
    res.json({ message: "Propietario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar propietario" });
  }
};
