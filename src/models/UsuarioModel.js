const mongoose  = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true},
    email: { type: String, required: true }
});

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);
module.exports = UsuarioModel;