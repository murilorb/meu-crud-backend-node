const mongoose = require('mongoose')

const URI = "mongodb+srv://murilo:2krIp2Kpn1uxnO7q@cluster0-3kc7z.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log('conectado no banco de dados')
})

module.exports = mongoose