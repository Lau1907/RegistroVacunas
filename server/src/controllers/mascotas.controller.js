const Mascota = require("../models/mascota.model");
const Propietario = require("../models/propietario.model");

// Obtener todas las mascotas
exports.getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find().populate("propietario").populate("vacunas");
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las mascotas" });
  }
};

// Crear una mascota
exports.createMascota = async (req, res) => {
  try {
    const nuevaMascota = new Mascota(req.body);
    await nuevaMascota.save();

    // Asociar mascota con propietario
    await Propietario.findByIdAndUpdate(req.body.propietario, { $push: { mascotas: nuevaMascota._id } });

    res.status(201).json(nuevaMascota);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar mascota" });
  }
};

// Actualizar mascota
exports.updateMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar mascota" });
  }
};

// Eliminar mascota (marcar como inactiva)
exports.deleteMascota = async (req, res) => {
  try {
    await Mascota.findByIdAndUpdate(req.params.id, { estatus: "Inactivo" });
    res.json({ message: "Mascota marcada como inactiva" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar mascota" });
  }
};
