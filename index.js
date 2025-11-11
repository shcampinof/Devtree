//const express = require('express') // CJS Common JS
import express from 'express' // ESM Ecmascript Modules

const app = express()


//Routing

app.get('/', (req,res)=>{
    res.send('Hola mundo en Express')
})

const port = 4000;

app.listen(port, ()=>{
    console.log("Servidor Funcionando en el puerto: ", port)

})