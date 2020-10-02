const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require('path')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

app.use('/api',require('./routes/api'))

app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      res.status(404).end()
    } else {
      next()
    }
  })

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const PORT = (process.env.PORT || 8080)


const { syncAndSeed } = require('./db/index')
const init =  async () =>{
    try{
        await syncAndSeed();
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`)
        })
    }catch(err){
        console.log('oh shit here we go again')
    }
}

init()
