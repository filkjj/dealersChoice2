const Sequelize = require("sequelize") 
const { db }  = require("../db")

const Champion = db.define('champion',{
    name : {
        type:   Sequelize.STRING,
        allowNull : false
    }
})

const ChampInfo = db.define('champinfo',{
    splashUrls : {
        type : Sequelize.ARRAY(Sequelize.STRING)
    },
    champId : Sequelize.INTEGER
})

module.exports =  {Champion, ChampInfo} 
