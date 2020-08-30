const router = require("express").Router()
const path = require('path')
const { SomeModel, SomeOtherModel} = require('../index')


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

router.get('/api/all', async (req, res, next)=>{
    const data = await SomeModel.findAll();
    res.send(data);
})

module.exports = router
