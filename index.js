const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
let pathTofile = path.join(__dirname, 'db.json')

function readmyFile(){
    try{
        let data = fs.readFileSync(pathTofile, 'utf-8')
        const items = JSON.parse(data)
        return items
    }catch(err){
        console.log(err)
    }
}
let products = readmyFile()

app.get('/products',(req,res)=>{
    res.send(products)
    res.end()

})

app.get()

app.listen(3000)