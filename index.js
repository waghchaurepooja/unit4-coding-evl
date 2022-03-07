
const express=require("express")
const app=express()




app.get("/books",(req,res)=>{

  return res.send("books")
})


app.get("/libraries ",(req,res)=>{

    return res.send("libraries ")
  })


  app.get("/authors ",(req,res)=>{

    return res.send("authors ")
  })
  

app.listen(1234,()=>{
    console.log("1234 port is done")
})


