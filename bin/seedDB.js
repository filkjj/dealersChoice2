const {db , Champion, ChampInfo } = require('../server/db/index')

const dravenSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/8/82/Draven_OriginalSkin.jpg/revision/latest?cb=20181021105629','https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bd/Draven_SoulReaverSkin.jpg/revision/latest?cb=20181021080609']
const yasuoSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/3/39/Yasuo_OriginalSkin.jpg/revision/latest?cb=20181021032917','https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0e/Yasuo_TrueDamageSkin.jpg/revision/latest?cb=20191030034050',]
const lucianSplash = ['https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1f/Lucian_OriginalSkin.jpg/revision/latest?cb=20181021041635','https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8e/Lucian_DemaciaViceSkin.jpg/revision/latest?cb=20190701214425']

const seed = async () =>{
//delete everything
await db.sync({force:true})

 //make rows on champion table
const draven = await Champion.create({name:'Draven'})
const yasuo = await Champion.create({name:'Yasuo'})
const lucian = await Champion.create({name:'Lucian'})

const yasuoAbilities = ['https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_Q1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_W1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_E1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.webm']
const dravenAbilities = ['https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.webm']
const lucianAbilities = ['https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_Q1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_W1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_E1.webm','https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0236/ability_0236_R1.webm']

const champInfo = await Promise.all([
    ChampInfo.create({splashUrls:yasuoSplash,champId:yasuo.id,champAbilities:yasuoAbilities,name:"Yasuo"}),
    ChampInfo.create({splashUrls:dravenSplash, champId:draven.id,champAbilities:dravenAbilities,name:"Draven"}),
    ChampInfo.create({splashUrls:lucianSplash,champId:lucian.id,champAbilities:lucianAbilities,name:"Lucian"})
])

console.log('Seed Successful!')
}

module.exports = { seed }