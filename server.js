const express=require('express')
const app=express()


app.listen(4444,()=>{
    console.log("Server started on http://localhost:4444")
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/form.html")
})
app.get('/greet',(req,res)=>{
    res.send("good evening "+req.query.person)
})

