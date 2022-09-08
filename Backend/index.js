const express=require("express")
const mongoose=require("mongoose")
const connect=mongoose.connect("mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/onemg?retryWrites=true&w=majority")
const app=express()
const cors=require("cors")
require("dotenv").config()
const Auth=require("./Routes/User")
const Products=require("./Routes/Product")
const Prod=require("./Mongo/productsmongo")

const Addressdata=require("./Routes/Address")

const Cartdata=require("./Routes/Cartpage")





app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",Auth)

app.use("/",Products)

app.use("/",Cartdata)

app.use("/",Addressdata)

app.get("/",(req,res)=>{
    res.send("welcome to 1mg website")
})


const PORT = process.env.PORT || 8080
app.listen(PORT,async()=>{
    await connect
    console.log("server started 123")
})
