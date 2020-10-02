const {db} = require('./db')
const { syncAndSeed, SongList} = require('./models')

module.exports = {
    db,
    syncAndSeed,
    SongList
}
