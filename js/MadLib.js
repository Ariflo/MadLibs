//© 2015 Arian Flores All Rights Reserved
//
// All rights reserved. No part of this code may be reproduced, distributed, or transmitted in any form or by any means, 
// including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the creator, except 
// in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
//  For permission requests, write to the creator,addressed “Attention: Permissions Coordinator,” at the address below.

// AirMan inc
// 6330 QuickSilver Avenue
// San Francisco, CA 94560
// www.arianflores.com


//MADLIBS Global Varibles set here to be used upon page loading
var storyWords = [];
var blankNum = 1;
var counter3 = 1; 
var wordCount;
var example; 
var word; 
var wordType; 
var wordType2;
var savedStory;
var savedStory2;
var savedStoryLetter;
var retrievedStory;


window.onload = function(){

      //Upon loading, TITLE HEADERS will fade-in and out
      setInterval(function(){$("#header2").fadeOut();}, 1500);

      $("#header3").hide();

      setTimeout(function(){
      $("#header3").fadeIn();

      setInterval(function(){$("#header3").fadeOut();},2000);
          }, 3000); 

      $("#header").hide();

      setInterval(function(){

            $("#header").fadeIn('slow');

            // STORY OPTIONS slideDown
            $('#StoryBox').slideDown('slow'); 
            $('#StoryBox2').slideDown('slow'); 
            $('#StoryBox3').slideDown('slow'); 
            $('#StoryBox4').slideDown('slow'); 
            $('#StoryBox5').slideDown('slow'); 

      }, 6000); 

      $('#StoryBox').hide();
      $('#StoryBox2').hide();
      $('#StoryBox3').hide();
      $('#StoryBox4').hide();
      $('#StoryBox5').hide();

      //Parse form for USERS SELECTION and return selected
      storyPusher();

      //Create STORY OBJECT and push user's selection into object
      var choosenStory = new Story ();
      choosenStory.pasteStory(storyPusher());

      //USER CREATED content option 
      if(storyPusher() === "adventure"){
        //LOCAL VARIBLES for user created content
        var blankTypes = [];
        var authorInput;
        var authorInput2;
        var counter = 0;
        var blankCounter = 0; 

        //ask user for TITLE input 
        $("#headTag").text('Story Title');
        $("#wordPush").attr("placeholder", "Your Title Here"); 
        $('#wordForm').append('<div class= "form-group"> <center><input id="completeBtn" class="btn btn-success"  type="submit" value="Story Complete" ></center></div>');

        //ask user for STORY inputs
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

                //Parse through INPUTS and append where necessary
                if(wordCount === 0){

                  choosenStory.story.append('<h2 id="title">'+ authorInput +'</h2>');

                }else if (wordCount > 0 && (authorInput2.includes("blank") || authorInput.length > 20)){

                  choosenStory.story.append('<p id="line'+ wordCount +'">'+ authorInput +'</p>');

                }else{

                  blankTypes.push(authorInput);
                  blankCounter++;

                }

        }); 
        
        //Upon STORY COMPLETION user is asked to play Mad Libs
        $('#completeBtn').on('click',function(evt){
          evt.preventDefault();
          
          //LOCAL VARIBLES for user completed content 
          var storyLine; 
          var storyLine2; 
          var title;
          var authorBlank;
          var lineNum = 1;

          $('#completeBtn').remove();
          $('#submitBtn').remove();

          $("#headTag").hide();
          $('#wordPush').hide();

          $("#storyBoard").append(choosenStory.story);
          $("#storyBoard").hide();

          title = $('#title').text();
          
          setTimeout(function(){
            $("#headTag").text('Time to Create').fadeIn(1500); 

            setTimeout(function(){
              $("#headTag").text(title).fadeOut(3000);}, 3000);
          }, 1000); 

          $('#wordForm').append('<div class= "form-group"> <center><input id="wordBtn" class="btn btn-primary"  type="submit" value="SUBMIT" ></center></div>');
          $('#wordBtn').hide();

          setTimeout(function(){

          $("#headTag").empty();
          $("#blank0").clone().appendTo($("#headTag"));
          $("#headTag").fadeIn(2000);
          $('#wordBtn').fadeIn(2000);
          $('#wordPush').fadeIn(2000).attr("placeholder", "Your Word Here");}, 7000);


          //Run through the BLANKS and REPLACE them with user input
          for(var i = 0; i < blankCounter; i++){

              storyLine = $('#line' + lineNum);
              lineNum++;

              if(storyLine.text().toLowerCase().includes('blank')){

                      authorBlank = '<b id="blank'+ counter + '">' + blankTypes[i] + '</b>';
                      counter++;

                      storyline2 = storyLine.text().toLowerCase().replace('blank', authorBlank);
                      storyLine.html(storyline2);
                  }
            }

          //user INPUT is pushed  in to  the DOM and pasted to the STORYBOARD
          $('#wordBtn').on('click', function(evt){
                    evt.preventDefault();

                    word = $('#wordPush').val();

                    wordType = $("#headTag").text();

                    WordCheck(word, wordType, function(isSuccess){
                          if(isSuccess === false){

                                 return false; 

                              }else{
                                    storyWords.push(word);

                                    $('#wordForm').fadeOut('slow', function(){ 

                                                example = $("#blank" + counter3);   
                                                counter3++;

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
                                                      $('#storyBoard').append('<div class= "form-group"> <center><input id="saveBtn" class="btn btn-danger"  type="button" value="SAVE STORY" ></center></div>');
                                                      $("#storyBoard").show();

                                                      $('#saveBtn').on('click', function(){
                                                            $('#saveBtn').remove();

                                                            savedStory = $("#storyBoard").html();

                                                            localStorage.setItem("savedStory2", JSON.stringify(savedStory));
                                                            $('#storyBoard').append('<div class= "form-group"><strong><p id="savedMsg" class="text-center">SAVED</p></strong></div>');
                                                           });
                                          
                                                      }  
                                           });
                                    }
                        });

              });

        });

      }else if(storyPusher() === "saved"){

          var counter2 = localStorage.length + 1;
          $('#wordForm').hide();


          for (var i = localStorage.length; i > 0; i--){


                  if(localStorage.getItem('savedStoryS') !== null){

                    counter2--;

                    $('#storyBoard').prepend('<div class="form-group"><center><input id="eulogyBtn" class="btn btn-info"  type="button" value="Eulogy Story ' + counter2 + '"></center></div>');
                    retrievedStory = localStorage.getItem('savedStoryS');
                    localStorage.removeItem('savedStoryS');


                  }else if(localStorage.getItem('savedStoryY') !== null){

                    counter2--;

                    $('#storyBoard').prepend('<div class="form-group"><center><input id="pirateBtn" class="btn btn-info"  type="button" value="Pirate Story ' + counter2 + '"></center></div>');
                    retrievedStory = localStorage.getItem('savedStoryY');
                    localStorage.removeItem('savedStoryY');

                  }else if (localStorage.getItem('savedStoryI') !== null){

                    counter2--;

                    $('#storyBoard').prepend('<div class="form-group"><center><input id="dateBtn" class="btn btn-info"  type="button" value="Hot Date Story ' + counter2 + '"></center></div>');
                    retrievedStory = localStorage.getItem('savedStoryI');
                    localStorage.removeItem('savedStoryI');

                  }else{

                    counter2--;

                    $('#storyBoard').prepend('<div class="form-group"><center><input id="storyBtn" class="btn btn-info"  type="button" value="Your Story ' + counter2 + '"></center></div>');
                    retrievedStory = localStorage.getItem('savedStory2');
                    localStorage.removeItem('savedStory2');

                  }

          }

          $('#eulogyBtn').on('click', function(){

            $('#pic1').remove();
            $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

            $('#storyBoard').append(JSON.parse(retrievedStory));

            $('#eulogyBtn').remove();
            $('#pirateBtn').remove();
            $('#saveBtn').remove();
            $('#dateBtn').remove();
            $('#storyBtn').remove();

            $("#storyBoard").show();


          });

          $('#pirateBtn').on('click', function(){

              $('#pic1').remove();
              $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

              $('#storyBoard').append(JSON.parse(retrievedStory));

              $('#pirateBtn').remove();
              $('#saveBtn').remove();
              $('#dateBtn').remove();
              $('#storyBtn').remove();
              $('#eulogyBtn').remove();

              $("#storyBoard").show();

          });

          $('#dateBtn').on('click', function(){

            $('#pic1').remove();
            $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

            $('#storyBoard').append(JSON.parse(retrievedStory));

            $('#dateBtn').remove();
            $('#saveBtn').remove();
            $('#pirateBtn').remove();
            $('#storyBtn').remove();
            $('#eulogyBtn').remove();

            $("#storyBoard").show();


          });

          $('#storyBtn').on('click', function(){

            $('#pic1').remove();
            $('#page2img').append('<img class="headerPic" src=" images/Story_logo.jpg">');  

            $('#storyBoard').append(JSON.parse(retrievedStory));

            $('#saveBtn').remove();
            $('#storyBtn').remove();
            $('#pirateBtn').remove();
            $('#dateBtn').remove();
            $('#eulogyBtn').remove();

            $("#storyBoard").show();

          });


      }else{ 

              //All OTHER STORY options 
              //user INPUT is pushed  in to the DOM and pasted to the STORYBOARD
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
                                                      $('#storyBoard').append('<div class= "form-group"> <center><input id="saveBtn" class="btn btn-danger"  type="button" value="SAVE STORY" ></center></div>');
                                                      $("#storyBoard").show();
                  
                                                      $('#saveBtn').on('click', function(){
                                                        $('#saveBtn').remove();

                                                            savedStoryLetter = $("#storyBoard").text().charAt(0);
                                                            savedStory = $("#storyBoard").html();

                                                            localStorage.setItem("savedStory" + savedStoryLetter, JSON.stringify(savedStory));
                                                            $('#storyBoard').append('<div class= "form-group"><strong><p id="savedMsg" class="text-center">SAVED</p></strong></div>');

                                                      });
                                                  }  
                                            });
                                    }
                        });

                  });


            }
};



//RETURN story selection and send into to numOfBlanks
function storyPusher() {

  var queryString = document.location.search.replace('?', '');
  var choice = queryString.split('.');
  numOfBlanks(choice[0]);

  return choice[0];
}

//Fill in the Blanks of the Story
function fillInTheBlanks () {

      for(var i = 0; i < storyWords.length; i++){

        $("#blank" + i).empty();  
        $("#blank" + i).append(storyWords[i].replace("+", " ")); 
      }
}


//ASSIGN number of Blanks to WordCount
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
}


//Call Wordnik api to validate user's input 
function WordCheck(word, wordType, callback) {
      var word2 = word.toLowerCase(); 
      var dictionaryQueryRequest;
      searchUrl = "http://api.wordnik.com/v4/word.json/" + word2 + "/definitions?api_key=fbe35028dbc86f86f900107cadc072d6b918773fd53e1764b";

      // Generate the requested object
      dictionaryQueryRequest = $.ajax({
            type: "GET",
            dataType: 'json',
            url: searchUrl
      });

      dictionaryQueryRequest.done(function (data) {

            wordType2 = wordType.toLowerCase(); 
            
            //Check if word matches one of eight typical english parts of speech
            if (!wordType2.includes("noun") && !wordType2.includes("verb") && !wordType2.includes("adjective") && !wordType2.includes("adverb") && !wordType2.includes("pronoun") && !wordType2.includes("conjuction") && !wordType2.includes("preposition") && !wordType2.includes("interjection") && !wordType2.includes("article")){
              
                  callback(true);

            }else if(wordType2.includes("ing")){

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

}



