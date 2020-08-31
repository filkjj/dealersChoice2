const router = require("express").Router()
const path = require('path')
const { Champion, ChampInfo} = require('../db')

router.get('/champions', async (req, res, next)=>{
    const data = await Champion.findAll();
    res.send(data);
})

router.get('/champions/:champId', async (req, res, next)=>{
    const data = await Champion.findAll({
        where:
        {id : req.params.champId}
    });
    res.send(data);
})

router.get('/championInfo/', async (req, res, next)=>{
    const data = await ChampInfo.findAll();
    res.send(data);
})
module.exports =  router 
