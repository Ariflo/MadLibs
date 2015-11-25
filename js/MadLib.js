var storyWords = [];
var wordCount = 0;
var blankNum = 1;
var example; 
var word; 
var wordType; 
var wordType2;

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

          //$('#StoryIMG').on('click', function(){

              var choosenStory = new Story ();
              choosenStory.pasteStory(storyPusher()); 

              $("#storyBoard").append(choosenStory.story);
              $("#storyBoard").hide(); 

              $("#blank0").clone().appendTo($("#headTag"));

          //});

          $('#wordForm').on('submit', function(evt){
                      evt.preventDefault();
                      word = $('#wordPush').val();

                      wordType = $("#headTag").text();
                      dicWordCheck(word, wordType);

                      storyWords.push(word);

                      $('#wordForm').fadeOut('slow', function(){ 

                            example = $("#blank" + storyWords.length);   

                            $('#wordPush').val('');

                            $("#headTag").empty();
                            example.clone().appendTo($("#headTag"));

                            if(storyWords.length < wordCount){
                                       
                                  $('#wordForm').fadeIn();   

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


//call dictionary api to validate user's input 
function dicWordCheck(word, wordType) {

      var dictionaryQueryRequest;
      searchUrl = "http://api.wordnik.com/v4/word.json/" + word + "/definitions?api_key=fbe35028dbc86f86f900107cadc072d6b918773fd53e1764b";

      // Generate the request object
      dictionaryQueryRequest = $.ajax({
            type: "GET",
            dataType: 'json',
            url: searchUrl
      });

      dictionaryQueryRequest.done(function (data) {

            wordType2 = wordType.toLowerCase(); 
            
            if (!data[0].partOfSpeech.startsWith(wordType2.substr(0, 3))){

                        alert("Sorry, according to the english language you did not enter a " + wordType + ".");
            }  
                
      });

      dictionaryQueryRequest.fail(function (error) {
           console.log("Something Failed During Wordnik Request:");
           console.log(error);
         });

}; 



