const Diario = require("../models/diario");
const Viagem = require("../models/viagem");

const listDiarios = async (req, res) => {
    try {
        const diarios = await Diario.find();
        res.json(diarios)
    } catch (error) {
        res.status(500).send("Erro ao carregar diarios")
    }
}

const getDiarioByTitle = async (req, res) => {
    try {
        const diario = await Diario.findOne({ titulodiario: req.params.title });
        if(!diario) {
            return res.status(404).send("Diário não encontrado");
        }
        res.json(diario)
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar diário por título")
    }
}

const getDiariosByViagem = async (req, res) => {
    try {
        const viagem = await Viagem.findOne({ title: req.params.travel });
        if(!viagem) {
            return res.status(404).send("Viagem não encontrada");
        }

        const diarios = await Diario.find({ idviagem: viagem._id });
        if(!diarios) {
            return res.status(404).send("Diário(s) não encontrado(s)");
        }
        res.json(diarios)
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar diário por título")
    }
}

const createDiario = async (req, res) => {
    try {
        const diario = new Diario(req.body);
        const newDiario = await diario.save();
        res.json(newDiario)
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao salvar diário")
    }
}

const updateDiarioByTitle = async (req, res) => {
    try {
        const updatedDiario = await Diario.findOneAndUpdate(
            { titulodiario: req.params.title },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedDiario) {
            return res.status(404).send("Diário não encontrado para atualização");
        }

        res.json(updatedDiario);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar diário");
    }
};

const deleteDiarioByTitle = async (req, res) => {
    try {
        const deletedDiario = await Diario.findOneAndDelete({ titulodiario: req.params.title });

        if (!deletedDiario) {
            return res.status(404).send("Diário não encontrado para exclusão");
        }
        res.json(deletedDiario);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar diario");
    }
};

module.exports = { listDiarios, getDiarioByTitle, getDiariosByViagem, createDiario, updateDiarioByTitle, deleteDiarioByTitle }
