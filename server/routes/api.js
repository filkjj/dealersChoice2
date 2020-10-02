const router = require("express").Router()
const {SongList} = require('../db/index')

router.get('/', async (req,res,next)=>{
    const data = await SongList.findAll()
    res.send(data)
})

router.get('/:id', async (req,res,next)=>{
    const data = await SongList.findByPk(req.params.id)
    res.send(data)
})

router.delete('/:id', async(req,res,next)=>{
    const data = await SongList.findByPk(req.params.id)
    const destroyedData = await data.destroy()
    res.send(destroyedData)
})

module.exports = router