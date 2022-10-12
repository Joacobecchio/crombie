const express = require ('express')()

express.get('/', (req,res) => {
    res.send ("Hello word")
})

express.listen (3000, ()=> {
    console.log ("Estoy escuchando el puerto 3000")
})