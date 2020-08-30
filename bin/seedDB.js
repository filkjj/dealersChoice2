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
const lucian = await Champion.create({name:'lucian'})

await ChampInfo.create({splashUrls:dravenSplash,champID:draven.id})
await ChampInfo.create({splashUrls:yasuoSplash,champID:yasuo.id})
await ChampInfo.create({splashUrls:lucianSplash,champID:lucian.id})

console.log('Seed Successful!')
}

seed()