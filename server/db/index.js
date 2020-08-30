const {db} = require('./db')
const { SomeModel, SomeOtherModel } = require('./models/Example')

SomeModel.hasMany(SomeOtherModel)
SomeOtherModel.belongsTo(SomeModel)

module.exports = {
    db,
    SomeModel, 
    SomeOtherModel
}

//import your db
//import your models

//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
