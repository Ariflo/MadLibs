var storyWords = [];
var wordCount = 0;
var fadeCount = 0; 
var blankNum = 1;
var example; 
var word; 

window.onload = function(){

//push story selection to storySelect
storyPusher();


$('#wordForm').on('submit', function(evt){
  evt.preventDefault();
  var choosenStory = new Story ();

        if (storyWords.length === wordCount){
      
                choosenStory.pasteStory(storyPusher());   
                $('#pic1').remove();

                $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  
                $('#wordForm').hide();

                $("#storyBoard").append(choosenStory.story);
                fillInTheBlanks();

        }else{
                word = $('#wordPush').val();
                storyWords.push(word);

                $('#wordForm').fadeOut('slow', function(){ 
                    fadeCount++;

                    if(fadeCount <= wordCount){
                      $('#wordForm').fadeIn();  

                    }
                });
        }
        
});

};

//unpackage story selection and send into to gameStart
function storyPusher() {

  var queryString = document.location.search.replace('?', '');
  var choice = queryString.split('.');
  numOfBlanks(choice[0]);
  return choice[0];
  
};

//fill in blanks in story 
function fillInTheBlanks () {

      for(var i = 0; i < storyWords.length; i++){

        //example = $("#blank" + blankNum);
        //$("#wordPush").attr('placeholder', example);
        //blankNum++;

        $("#blank" + i).empty();  
        $("#blank" + i).append(storyWords[i].replace("+", " "));  

      }
       

};

function numOfBlanks(storyChoice) {
    //number of words depends on which story the user chooses
    
    if(storyChoice === "eulogy"){

      wordCount = 27;

    }else if(storyChoice === "pirate"){

      wordCount = 15;

    }else if(storyChoice === "date"){

      wordCount = 17;

    }else if(storyChoice === "adventure"){

      wordCount = undefined;
    }
};

