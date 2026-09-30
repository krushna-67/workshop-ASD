const express = require('express')
const path = require('path')
const fs = require('fs/promises')
const app = express()
let pathTofile = path.join(__dirname, 'db.json')

async function readmyFile(){
    setTimeout()
    try{
        let data = await fs.readFile(pathTofile, 'utf-8')
        const items = JSON.parse(data)
        return items
    }catch(err){
        console.log(err)
    }
}


app.get('/products',async (req,res)=>{
    try{
        let products = await readmyFile()
        res.json(products)
    }catch(err){
        console.log(err)
    }

})
app.get('/products/:id',async (req,res)=>{
    try{
        let products = await readmyFile()
        let {id} = req.params
        id = Number(id)
        products = products.find((item)=>{return item.id = id})
        res.json(products)
    }catch(err){
        console.log(err)
    }

})




app.listen(3000)