require('dotenv').config('../.env')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

console.log(process.env.MONGO_URI);




mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongodb connected")
).catch(err=>console.log(err)
)


app.get('/',(req,res)=>{
    res.send('Welcome to my express application')
})

const User = mongoose.model('User',new mongoose.Schema({
    name:String,
    age:Number
}))

app.get('/api/users',async(req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json('Error while fetcing users')
    }
})

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`);
})