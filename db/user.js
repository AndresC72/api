// Importa la biblioteca Mongoose
const mongoose = require("mongoose");

// Define el esquema de usuario
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  address: String,
  password: String,
});

// Crea el modelo de usuario
const User = mongoose.model('users', userSchema);

// Exporta el modelo
module.exports = User;