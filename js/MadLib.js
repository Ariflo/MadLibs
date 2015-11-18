var storyObj = {};

window.onload = function(){
//push story selection to storySelect
storyPusher(); 

//push words to story
wordPusher(); 

};

//unpackage story selection 
function storyPusher() {

  var queryString = document.location.search.replace('?', '');
  var choice = queryString.split('.')

  choice[0];
  
};

//push words to storyObj 
function wordPusher() {

   var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
          return pair.split('=');
      })
            if(pairs)
            pairs.forEach(function (pair) {

                      pair.forEach(function(){

                                 storyObj[pair[0]] = pair[1];
                         });
            });
};

//fill in blanks in story 
function fillInTheBlanks (story) {

      $("#blank").append(storyObj.word.replace("+", " "));   

};

function madLibStart(storyChoice) {
    //number of words depends on which story the user chooses
    var wordCount = 0; 
    if(storyChoice === "eulogy"){

      wordCount = 

    }

    //Once the user chooses a story they should be promted for word after word to enter into the story

    var closureFunction = function() {

        if(roundNumber < GLOBALS.NUMBER_OF_ROUNDS) {
            // Create the story 
            for(var i = 0; i < GLOBALS.MOLES_PER_ROUND; i++) {
                new Mole(GLOBALS.MOLE_UP_MIN*1000, GLOBALS.MOLE_UP_MAX*1000);
            }

            // Next round, using our precious closed-over parameter 
            initiateRound(roundNumber + 1);
        }
        else {
            endGame();
        }
    };

    // Set it and forget it.
    setTimeout(closureFunction, GLOBALS.ROUND_COOLDOWN * 1000);
}


