var storyObj = {};


window.onload = function(){
//push story selection to storySelect
storyPusher(); 

//push words to story
wordPusher(); 

//fill in blanks of story  
fillInTheBlanks();

};

function storyPusher() {

  var queryString = document.location.search.replace('?', '');
  var choice = queryString.split('.')
  
  getSelected(choice[0]);
};


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

function fillInTheBlanks () {

    $("#blank").append(storyObj.word.replace("+", " "));

};
