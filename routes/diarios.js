var express = require('express');
var router = express.Router();

const { listDiarios, getDiarioByTitle, getDiariosByViagem, createDiario, updateDiarioByTitle, deleteDiarioByTitle } = require("../controllers/diarioController")

/* GET users listing. */
router.get('/', listDiarios);
router.get('/:title', getDiarioByTitle);
router.get('/viagem/:travel', getDiariosByViagem);
router.post('/create', createDiario);
router.post('/update/:title', updateDiarioByTitle);
router.post('/delete/:title', deleteDiarioByTitle);

module.exports = router;
