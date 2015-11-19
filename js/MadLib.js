var storyWords = [];
var wordCount = 0; 
var word; 

window.onload = function(){

//push story selection to storySelect
storyPusher();

$('#wordForm').on('click', function(evt){
  evt.preventDefault();
  var choosenStory = new Story ();

        if (storyWords.length === wordCount){

                //fillInTheBlanks();

                choosenStory.pasteStory(storyPusher());   
                $('#pic1').remove();
                $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  
                $('#wordForm').hide();
                $("#storyBoard").append(choosenStory.story);

        }else{
                word = $('#wordPush').val();
                storyWords.push(word);
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
function fillInTheBlanks (story) {

      $("#blank").append(storyObj.word.replace("+", " "));   

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

