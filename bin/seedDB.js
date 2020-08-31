const {db , Champion, ChampInfo } = require('../server/db/index')

const dravenSplash = ['shorturl.at/mpvGP','shorturl.at/owCL3']
const yasuoSplash = ['shorturl.at/gpFIK','shorturl.at/sNT36']
const lucianSplash = ['shorturl.at/noyDH','shorturl.at/gHNR3']

const seed = async () =>{
//delete everything
await db.sync({force:true})

 //make rows on champion table
const draven = await Champion.create({name:'Draven'})
const yasuo = await Champion.create({name:'Yasuo'})
const lucian = await Champion.create({name:'Lucian'})

const champInfo = await Promise.all([
    ChampInfo.create({splashUrls:yasuoSplash,champId:yasuo.id}),
    ChampInfo.create({splashUrls:dravenSplash, champId:draven.id}),
    ChampInfo.create({splashUrls:lucianSplash,champId:lucian.id})
])

console.log('Seed Successful!')
}

module.exports = { seed }