const Person = require("../models/Person");

exports.createPerson = async (req, res) => {
    try {

        let person;
        person = new Person(req.body);
        await person.save();
        res.send(person);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear')
    }
}

exports.obtenerContactos = async (req, res) => {
    try {

        const contacts = await Person.find() 
        res.json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear')
    }
}

exports.getById = async (req, res) => {
    try {

        const contacts = await Person.find({'id':req.params.id}) 
        res.json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear')
    }
}