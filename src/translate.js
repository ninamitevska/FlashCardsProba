const request = require("request");
/* TODO: Add Username/Password from IBM Cloud
Watson Language Translation Service Credentials page */
const translationUsername= "Watson Language Translator Service Username"
const translationPassword= "Watson Language Translator Service Username"
const transUrl = "https://gateway.watsonplatform.net/language-translator/api/v2/translate";

const data = {};

data.source = "English";
data.target = "Spanish";
data.text = "whats going on amigo?";

request.post({
    url: transUrl,
    json: data,
    auth: {
        user: translationUsername,
        pass: translationPassword
    }
}, function (err, response, body) {

    console.log(body);

});
