var express = require('express');
var router = express.Router();

const { listViagens, getViagemByTitle, createViagem, updateViagemByTitle, deleteViagemByTitle } = require("../controllers/viagemController")

router.get('/', listViagens);
router.get('/:title', getViagemByTitle);
router.post('/create', createViagem);
router.post('/update/:title', updateViagemByTitle);
router.post('/delete/:title', deleteViagemByTitle);

module.exports = router;
