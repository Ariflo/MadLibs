var storyWords = [];
var wordCount = 0;
var blankNum = 1;
var example; 
var word; 

window.onload = function(){

setInterval(function(){$("#header2").fadeOut();}, 1500);

$("#header3").hide();

setTimeout(function(){
$("#header3").fadeIn();

  setInterval(function(){$("#header3").fadeOut();},2000);
}, 3000); 

$("#header").hide();

setInterval(function(){

  $("#header").fadeIn('slow');

  $('#StoryBox').slideDown('slow'); 
  $('#StoryBox2').slideDown('slow'); 
  $('#StoryBox3').slideDown('slow'); 
  $('#StoryBox4').slideDown('slow'); 

}, 6000); 

$('#StoryBox').hide();
$('#StoryBox2').hide();
$('#StoryBox3').hide();
$('#StoryBox4').hide();




//push story selection to storySelect
storyPusher();

var choosenStory = new Story ();
choosenStory.pasteStory(storyPusher()); 

$("#storyBoard").append(choosenStory.story);
$("#storyBoard").hide(); 

$("#blank0").clone().appendTo($("#headTag"));

$('#wordForm').on('submit', function(evt){
  evt.preventDefault();

  word = $('#wordPush').val();
  storyWords.push(word);

  $('#wordForm').fadeOut('slow', function(){ 
    example = $("#blank" + blankNum);
    blankNum++;   
                  
  if(storyWords.length < wordCount){
      $('#wordPush').val(' ');
      $('#wordForm').fadeIn();   

      $("#headTag").empty();
      example.clone().appendTo($("#headTag"));

    }else{

      $('#pic1').remove();
      $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

      $('#wordForm').hide();
      fillInTheBlanks();
      $("#storyBoard").show();
    }  
});

      
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

