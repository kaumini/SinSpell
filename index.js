var Spellchecker = require("Hunspell-spellchecker");
var fs = require('fs')
var spellchecker = new Spellchecker();

var DICT = spellchecker.parse({
    aff: fs.readFileSync("./en_US.aff"),
    dic: fs.readFileSync("./en_US.dic")
});

spellchecker.use(DICT);
var isRight = spellchecker.check("මෙහෙකා");

if(!isRight){
    var suggest = spellchecker.suggest("මෙහෙකා",5);
    var i;
    console.log(suggest)
    for (i = 0; i < suggest.length; i++){
        console.log("here")
    }
}
console.log(isRight);

window.checkSpell = function () {
    var texttocheck = document.getElementById("TextToCheck").value;
    console.log(texttocheck);
    document.getElementById("resultText").value = texttocheck;
}

//var btn = document.getElementById("btn");
//if(btn){
//    console.log("test");
//    btn.addEventListener("click", checkSpell, false);
//}