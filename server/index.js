const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
console.log('REEEEEEEEEE');

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

const init =  () =>{
    try{
        app.listen(PORT, ()=>{
            console.log(`listening on port ${PORT}`)
        })
    }catch(err){
        console.log('oh shit here we go again')
    }
}

init()

//initialize app
//require morgan|volleyball, path packages
//require db from /db

//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT

//listen
