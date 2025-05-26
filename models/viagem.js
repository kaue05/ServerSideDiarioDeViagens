const mongoose = require('mongoose');

const ViagemSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true,
        unique: true
    },
    imagepath: {
        type: String,
        required: true
    },
    imagealt: {
        type: String,
        required: true
    }
});

const Viagem = mongoose.model("Viagem", ViagemSchema, 'viagens');
module.exports = Viagem;