const Hero = require("../models/Hero.js");

async function list(req, res){
    const movies = await Hero.findAll();
    return res.status(200).json(movies);
}

async function create(req, res) {
    const {name, universe, power} = req.body;

    if (!name || !universe || !power) {
        return res.status(400).json({
            message: "Nome, universo e poder sao obrigatorio"
        });
    }
    const hero = await Hero.create ({name, universe, power});
        return res.status(201).json(Hero);
    
}

async function update(req, res) {
    const {id} = req.params;
    const {name, universe, power} = req.body;

    const hero = await Hero.findByPk(id);

    if (!hero) {
        return res.status(404).json({
            message: "Hero not found"
        });
    }

    await hero.update({name, universe, power});
    return res.status(200).json(hero);
}

async function remove(req, res) {
    const {id} = req.params;
    const hero = await Hero.findByPk(id);

    if (!hero) {
        return res.status(404).json({
            message: "Hero not found"
        });
    }

    await hero.destroy();
    return res.status(200).json({
        message: "Hero deleted successfully"
    });
}

module.exports = {
    list,
    create,
    update,
    remove
};