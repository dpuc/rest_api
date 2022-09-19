const express = require('express');
const router = express.Router();
const controllerPerson = require('../controllers/controllerPerson')

//api routes

router.post('/', controllerPerson.createPerson)
router.get('/:id', controllerPerson.getById)
router.get('/', controllerPerson.obtenerContactos)

module.exports = router;