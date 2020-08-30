const Sequelize = require("sequelize") //for things like Sequelize.STRING
const { db }  = require("../db")

const SomeModel = db.define('someModel',{
    column : {
        type:   Sequelize.STRING,
        allowNull : false
    }
})

const SomeOtherModel = db.define('someOtherModel',{
    someColumn : Sequelize.STRING
})

module.exports = { SomeModel, SomeOtherModel }

//import your db

//define your model

//define any class or instance methods

//export your model
