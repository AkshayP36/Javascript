const request = require("postman-request");

//-------------------GET all languages--------------------------------------------------
const optionLanguage = {
  method: 'GET',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
  headers: {
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    useQueryString: true
  }
}

//------------------------------translate-------------------------------------------------
const optionsTranslate = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    useQueryString: true
  },
  form: {q: 'I love you', target: 'mr', source: 'en'}
};

//------------------------------Detect language--------------------------------
const optionsDetectLanguage = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    useQueryString: true
  },
  form: {q: 'सफरचंद'}
};


request(optionLanguage, (error, response)=> {
  if(error){
    console.log(error);
  }else{
    //console.log(response.body);
  }
});

request(optionsTranslate, (error, response)=> {
  if(error){
    console.log(error);
  }else{
    console.log(response.body);
  }
});

request(optionsDetectLanguage, (err, response)=>{
  if(err){
    console.log(err);
  }else{
    console.log(response.body);
  }
});
