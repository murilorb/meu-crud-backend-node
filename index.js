const express = require('express')
const app = express()
const cors = require('cors')

const routes = require('./routes/index')



//config
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

//routes
    app.use('/product',routes)

//server
    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })