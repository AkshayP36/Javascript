const request = require("postman-request");
const express = require("express");
const app = express();


const option = {
  method: 'GET',
   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
   headers: {
     'accept-encoding': 'application/gzip',
     'x-rapidapi-key': '',
     'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
     useQueryString: true
   }
};

var languages = "";
request(option, (err,resp)=>{
  if(err){
    console.log(err);
  }else{
    console.log(resp.body);
    languages = resp.body;
  }
});

app.get("", (req,res)=>{
  res.send(languages);
});


app.listen(3000, ()=>{
  console.log("app is running on port 3000");
})
