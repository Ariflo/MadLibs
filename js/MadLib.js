var storyObj = {};


window.onload = function(){

//push words to story
wordPusher(); 

//fill in blanks of story  
fillInTheBlanks ();

};

function wordPusher() {

   var queryString = document.location.search.replace('?', '');
    var pairs = queryString.split('&').map(function (pair) {
          return pair.split('=');
      })

            pairs.forEach(function (pair) {

                      pair.forEach(function(){

                                 storyObj[pair[0]] = pair[1];
                         });
            });
};

function fillInTheBlanks () {

   $("#blank").append(storyObj.word);

};
