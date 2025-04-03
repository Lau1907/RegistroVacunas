const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Inicializar Express
const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error al conectar a MongoDB:", err));

// Importar rutas
const propietariosRoutes = require("./src/routes/propietarios.routes");
const mascotasRoutes = require("./src/routes/mascotas.routes");
const vacunasRoutes = require("./src/routes/vacunas.routes");

// Usar rutas
app.use("/propietarios", propietariosRoutes);
app.use("/mascotas", mascotasRoutes);
app.use("/vacunas", vacunasRoutes);

// Definir puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
