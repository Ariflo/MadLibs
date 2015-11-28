var storyWords = [];
var blankNum = 1;
var wordCount;
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

      var choosenStory = new Story ();
      choosenStory.pasteStory(storyPusher());

      if(storyPusher() === "adventure"){
            var blankTypes = [];
            var authorInput;
            var authorInput2;
            var counter = 0;

            $("#headTag").text('Story Title');
            $("#wordPush").attr("placeholder", "Your Title Here"); 
            $('#wordForm').append('<div class= "form-group"> <center><input id="completeBtn" class="btn btn-success"  type="submit" value="Story Complete" ></center></div>');

            $('#submitBtn').on("click", function(evt){
                    evt.preventDefault();
                    authorInput = $('#wordPush').val();
                    authorInput2 = authorInput.toLowerCase();

                  if(authorInput2.includes("blank")){

                        $('#wordForm').fadeOut('slow', function(){ 

                        $('#wordPush').val('');
                        $("#headTag").text('Tag your BLANK');
      
                        $("#wordPush").attr("placeholder", "Blank Type Here");
                        $('#wordForm').fadeIn();

                      });


                    }else{

                        $('#wordForm').fadeOut('slow', function(){ 
                              wordCount++;

                              $('#wordPush').val('');
                              $("#headTag").text('Please Enter Sentence ' + blankNum);
                              blankNum++;

                              $("#wordPush").attr("placeholder", "Your Sentence Here");
                              $('#wordForm').fadeIn();
                        
                          }); 

                    }  

                    if(wordCount === 0){

                      choosenStory.story.append('<h2 id="title">'+ authorInput +'</h2>');

                    }else if (wordCount > 0 && (authorInput2.includes("blank") || authorInput.length > 20)){

                      choosenStory.story.append('<p id="line'+ wordCount +'">'+ authorInput +'</p>');

                    }else{

                      blankTypes.push(authorInput);

                    }

            });

            $('#completeBtn').on('click',function(evt){
                  var storyLine; 
                  var storyLine2; 
                  var title;
                  var authorBlank;
                  var lineNum = 1;

                  evt.preventDefault();
                  $("#wordForm").hide(); 
                  $('#completeBtn').remove();
                  //$('#submitBtn').fadeOut();
                  //$('#wordPush').fadeOut();
                  

                  $("#storyBoard").append(choosenStory.story);
                  $("#storyBoard").hide();

                  title = $('#title').text();

                  setTimeout(function(){
                   $("#headTag").text('Its Time to Build').fadeIn('slow');

                  setTimeout(function(){

                      $("#headTag").text(title).fadeOut('slow');
                      for(var i = 0; i <= blankNum; i++){

                        storyLine = $('#line' + lineNum);
                        lineNum++;

                            if(storyLine.text().toLowerCase().includes('blank')){

                                    authorBlank = '<b id="blank'+ counter + '">' + blankTypes[i] + '</b>';
                                    counter++;

                                    storyLine2 = storyLine.text().toLowerCase().replace('blank', authorBlank);
                                    storyLine.html(storyLine2);
                            }

                        }

                        $('#wordForm').fadeIn();
                        $("#blank0").clone().appendTo($("#headTag"));

                        $('#submitBtn').on('click', function(evt){
                                  evt.preventDefault();
                                  word = $('#wordPush').val();

                                  wordType = $("#headTag").text();

                                  WordCheck(word, wordType, function(isSuccess){
                                        if(isSuccess === false){

                                               return false; 

                                        }else{
                                                  storyWords.push(word);

                                                  $('#wordForm').fadeOut('slow', function(){ 

                                                          example = $("#blank" + storyWords.length);   

                                                          $('#wordPush').val('');

                                                          $("#headTag").empty();
                                                          example.clone().appendTo($("#headTag"));

                                                          if(storyWords.length < blankTypes.length){
                                                                         
                                                                $('#wordForm').fadeIn();   

                                                          }else{

                                                                $('#pic1').remove();
                                                                $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

                                                                $('#wordForm').hide();

                                                                fillInTheBlanks();
                                                                $("#storyBoard").show();
                                                            }  
                                                      });
                                              }
                                  });

                            });

                  }, 3000);
                      }, 1000); 

            });  

      }else{ 

              $("#storyBoard").append(choosenStory.story);
              $("#storyBoard").hide(); 

              $("#blank0").clone().appendTo($("#headTag"));

              $('#wordForm').on('submit', function(evt){
                        evt.preventDefault();
                        word = $('#wordPush').val();

                        wordType = $("#headTag").text();

                        WordCheck(word, wordType, function(isSuccess){
                              if(isSuccess === false){

                                     return false; 

                              }else{
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
                                    }
                        });

                  });


            }
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

      wordCount = 0;
    }
};


//call dictionary api to validate user's input 
function WordCheck(word, wordType, callback) {

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
            
            if (!wordType2.includes("noun") && !wordType2.includes("verb") && !wordType2.includes("adjective") && !wordType2.includes("adverb") && !wordType2.includes("pronoun") && !wordType2.includes("conjuction") && !wordType2.includes("preposition") && !wordType2.includes("interjection") && !wordType2.includes("article")){
              
                  callback(true);

            }else if (!data[0].partOfSpeech.startsWith(wordType2.substr(0, 3))){

                  alert("Sorry, according to the english language you did not enter a " + wordType + ".");
                  callback(false);

            }else{

                callback(true);
            }
                
      });

      dictionaryQueryRequest.fail(function (error) {
           console.log("Something Failed During Wordnik Request:");
           console.log(error);
         });

}; 



