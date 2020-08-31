const router = require("express").Router()
const path = require('path')
const { Champion, ChampInfo} = require('../db')

router.get('/', async (req, res, next)=>{
    const data = await Champion.findAll();
    res.send(data);
})

router.get('/champions/$id', async (req, res, next)=>{
    const data = await Champion.find({where:{id:req.params.id}});
    res.send(data);
})

module.exports = { router }
