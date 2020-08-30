const Sequelize = require("sequelize") 
const { db }  = require("../db")

const Champion = db.define('champion',{
    name : {
        type:   Sequelize.STRING,
        allowNull : false
    }
})

const ChampInfo = db.define('champInfo',{
    splashUrls : {
        type : Sequelize.ARRAY,
        allowNull : false
    }
})

module.exports = { Champion, ChampInfo }
