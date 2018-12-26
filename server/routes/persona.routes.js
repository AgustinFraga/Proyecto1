const express = require('express');
const router = express.Router();

const persona = require('../controllers/persona.controller');

router.get('/', persona.getPersonas);
router.post('/', persona.createPersona);
router.get('/:id', persona.getPersona);
router.put('/:id', persona.editPersona);
router.delete('/:id', persona.deletePersona);

module.exports = router;