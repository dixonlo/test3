function diastic (seed, words) {

    var phrase = "";
    var currentWord = 0;

    for (var i = 0; i < seed.length; i++){
      var c = seed.charAt(i); //character at index i

      for (var j = currentWord; j < words.length; j++){
        if (words[j].charAt(i) == c){
          phrase += words[j];
          phrase += " ";
          //console.log(words[j]);
          currentWord = j + 1;
          break;
        }
      }
    }
    return phrase;
}




var srctxt;
var words;

function preload(){
  srctxt = loadStrings('files/bible.txt'); //loads as array
}

function setup() {
  noCanvas();
  srctxt = join(srctxt, ' '); // so you have 1 long string
  words = splitTokens(srctxt, ' ,!.?'); //split string into array of words

  var seed = select("#seed")
  var submit = select("#submit")
  submit.mousePressed(function() {

    var phrase = diastic(seed.value(), words);
    createP(phrase);
    // createP(seed.value());
    // createP(srctxt);
  });

}
