function Story(){

     this.Story; 

};

Story.prototype.getSelected = function(story){

	switch (story) {
	  case "eulogy":
	    this.Story = $("<div class='text-left'>If you are <u>Verb-ing</u> this, it means I am <u>Adjective</u>. I am sure <br> you are all <u>adverb</u> grieved. Especially my <u>Family Member</u> <br> Gloria and our <u>Number</u> children. In my life, I <u>verb (past tense)</u> <br> for many popular <u>Noun</u> shows, including <u>military rank</u> <br> Bilko and Get <u>Adjective</u>. <br> I led a <u>Adjective</u> life, filled with <br> <u>Adjective</u> <u>noun</u> and even better memories. I’ll never <br> forget the day I won my <u>Award</u>, and showed it to my wife.<br> She remarked, “It’s so much <u>Adjective+ er</u> than I thought!” To <br> which I replied, “That’s what <u>Pronoun</u>  said.” We laughed and<br><u>Verb (past tense)</u>. When I <u>Verb (past tense)</u> Mad Libs, I never<br> imagined it would be as <u>Adjective</u> as the Bible, but I guess<br><u>plural noun</u>really prefer filling in the <u>plural noun</u>. I hope to be <br> remembered as a <u>Noun</u> who loved to make people <u>verb</u>,<br> but more importantly, as a(n) <u>adjective</u> man. Thank you all for <br><u>verb-ing</u>, I promise not to <u>verb</u> you while you sleep.<br> <u>feeling</u> forever, <u>your Name</u>.</div>");
	    break;

	  case "pirate":
	     this.Story = $("<div></div>");
	    break;

	  case "date":
	    this.Story = $("<div></div>");
	    break;	

	   case "adventure":
	    this.Story = $("<div></div>");
	    break;

	  default:
	     alert("Check the switch statement, something went horribly wrong!");
	    break;
	}
	
}