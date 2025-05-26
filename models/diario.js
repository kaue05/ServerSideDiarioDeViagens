const mongoose = require('mongoose');
const Viagem = require('./viagem')

const DiarioSchema = new mongoose.Schema({
    datadiario: {
        type: Date,
        required: true
    },
    titulodiario: {
        type: String,
        required: true,
        unique: true
    },
    descricaodiario: {
        type: String,
        required: true
    },
    criticadiario: {
        type: String,
    },
    idviagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Viagem',
        required: true
    }
})

const Diario = mongoose.model("Diario", DiarioSchema, 'diarios');

module.exports = Diario;