const Viagem = require("../models/viagem");
const Diario = require("../models/diario");

const listViagens = async (req, res) => {
    try {
        const viagens = await Viagem.find();
        res.json(viagens)
    } catch (error) {
        res.status(500).send("Erro ao carregar viagens")
    }
}

const getViagemByTitle = async (req, res) => {
    try {
        const viagem = await Viagem.findOne({ title: req.params.title });
        if (!viagem){
            return res.status(404).send("Viagem não encontrada");
        }
        res.json(viagem)
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar viagem por título")
    }
}

const createViagem = async (req, res) => {
    try {
        const viagem = new Viagem(req.body);
        const newViagem = await viagem.save();
        res.json(newViagem);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao salvar viagens");
    }
};

const updateViagemByTitle = async (req, res) => {
    try {
        const updatedViagem = await Viagem.findOneAndUpdate(
            { title: req.params.title },
            req.body,
            { new: true, runValidators: true } // Valida e retorna atualizado
        );

        if (!updatedViagem) {
            return res.status(404).send("Viagem não encontrada para atualização");
        }

        res.json(updatedViagem);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao atualizar viagem");
    }
};

const deleteViagemByTitle = async (req, res) => {
    try {
        const selectedViagem = await Viagem.findOne({ title: req.params.title });

        if (!selectedViagem) {
            return res.status(404).send("Viagem não encontrada");
        }

        const verificaDiario = await Diario.findOne({ idviagem: selectedViagem._id });

        if (verificaDiario) {
            return res.status(400).send("Não é possível deletar: há diários associados a essa viagem.");
        }

        const deletedViagem = await Viagem.findOneAndDelete({ title: req.params.title });

        if (!deletedViagem) {
            return res.status(404).send("Viagem não encontrada para exclusão");
        }

        res.json(deletedViagem);

    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar viagem");
    }
};



module.exports = { listViagens, getViagemByTitle, createViagem, updateViagemByTitle, deleteViagemByTitle }
