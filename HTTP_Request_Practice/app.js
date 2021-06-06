const request = require("postman-request");
const customizableEndpoint = {
  method: "GET",
  url: "https://alpha-vantage.p.rapidapi.com/query",
  qs: {
    function: "GLOBAL_QUOTE",
    symbol: "AAPL"
  },
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    useQueryString: true
  }
};

const forexDaily = {
  method: "GET",
  url: "https://alpha-vantage.p.rapidapi.com/query",
  qs:{
    from_symbol: "INR",
    function: "FX_DAILY",
    to_symbol: "USD",
    outputsize: "compact",
    datatype: "JSON"
  },
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    useQueryString: true
  }
};

console.log("Stock details code:::::::::::::::::::;")
var test = "Global Quote"
request(customizableEndpoint, (error, response)=>{
  if(error){
      console.log(error);
  }else{
  const data = JSON.parse(response.body);
  console.log(data);
}
});

// console.log("Forex code::::::::::::::::::::")
// request(forexDaily, (err, response)=>{
//   if(err){
//     console.log(err);
//   }else{
//     const dailyData = response.body;
//     console.log(dailyData);
//   }
// });
