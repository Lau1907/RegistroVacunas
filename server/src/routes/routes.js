const express = require('express');
const router = express.Router();

// Ruta de prueba para evitar error
router.route('/user/getAll').get((req, res) => {
    res.json({ message: "Controlador aún no implementado" });
});

module.exports = router;
