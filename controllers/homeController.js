const Home = require("../models/User");

const getHome = async (req, res) => {
    try {
        res.send("Tela home")
    } catch (error) {
        res.status(500).send("Erro")
    }
};

module.exports = { getHome }