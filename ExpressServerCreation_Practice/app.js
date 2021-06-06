const express = require("express");
const app = express();


app.get("",(req,res)=>{
  res.send("This is Sparta!");
});

app.get("/motherland", (req,resp)=>{
  resp.send("Welcome to my country..");
});
app.listen(3000, ()=>{
  console.log("Sparta homeland 3000 port.");
})
