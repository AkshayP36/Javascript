const request = require("postman-request");
const express = require("express");
const app = express();

const option = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  qs: {q: 'sherlock'},
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    useQueryString: true
  }
}

var imdbData=[];

request(option, (err,resp)=>{
  if(err){
    console.log(err);
  }else{
    console.log(resp.body);
    imdbData[0] = resp.body;
  }
});


app.get("", (req,res)=>{
  res.send(imdbData[0]);
});


app.listen(3000, ()=>{
  console.log("app is running on port 3000");
});
