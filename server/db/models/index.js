const Sequelize = require("sequelize") 
const { db }  = require("../db")

const SongList = db.define('songlist',{
    name : {
      type: Sequelize.STRING,
      allowNull: false
    },
    songURL : {
      type: Sequelize.STRING,
      allowNull: true
    }
  })

const syncAndSeed = async()=> {
    await db.sync({ force: true });
    
    await SongList.create({
      name : "somesong1",
      songURL : "somesong1URL"
    })
    await SongList.create({
      name : "somesong3",
      songURL : "somesong3URL"
    })
    await SongList.create({
      name : "somesong2",
      songURL : "somesong2URL"
    })
  
  };
  
  module.exports = {
    syncAndSeed,
    SongList
  };
  