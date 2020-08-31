const {db , Champion, ChampInfo } = require('../server/db/index')

const dravenSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/8/82/Draven_OriginalSkin.jpg/revision/latest?cb=20181021105629','https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bd/Draven_SoulReaverSkin.jpg/revision/latest?cb=20181021080609']
const yasuoSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/3/39/Yasuo_OriginalSkin.jpg/revision/latest?cb=20181021032917','https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0e/Yasuo_TrueDamageSkin.jpg/revision/latest?cb=20191030034050']
const lucianSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1f/Lucian_OriginalSkin.jpg/revision/latest?cb=20181021041635','https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8e/Lucian_DemaciaViceSkin.jpg/revision/latest?cb=20190701214425']

const seed = async () =>{
//delete everything
await db.sync({force:true})

 //make rows on champion table
const draven = await Champion.create({name:'Draven'})
const yasuo = await Champion.create({name:'Yasuo'})
const lucian = await Champion.create({name:'Lucian'})

const yasuoAbilities = ['YasQVal','YasWVal','YasEVal','YasRVal]']
const dravenAbilities = ['dravenQVal','dravenWVal','dravenEVal','dravenRVal']
const lucianAbilities = ['lucianQVal','lucianWVal','lucianEVal','lucianRVal']

const champInfo = await Promise.all([
    ChampInfo.create({splashUrls:yasuoSplash,champId:yasuo.id,champAbilities:yasuoAbilities}),
    ChampInfo.create({splashUrls:dravenSplash, champId:draven.id,champAbilities:dravenAbilities}),
    ChampInfo.create({splashUrls:lucianSplash,champId:lucian.id,champAbilities:lucianAbilities})
])

console.log('Seed Successful!')
}

module.exports = { seed }