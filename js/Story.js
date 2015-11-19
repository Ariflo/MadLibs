function Story(){
	this.story; 
};

//choose selected story and fill in the blanks with user inputs 
Story.prototype.pasteStory = function(story){

	switch (story) {
	    case "eulogy":
	    this.story = $("<div class='text-center'><p>If you are <u id='blank1'>Verb-ing</u> this, it means I am <u id='blank2'>Adjective</u>. I am sure </p><p> you are all <u id='blank3'>adverb</u> grieved. Especially my <u>Family Member</u></p><p>Gloria and our <u>Number</u> children. In my life, I <u>verb (past tense)</u></p><p>for many popular <u>Noun</u> shows, including <u>military rank</u></p><p>Bilko and Get <u>Adjective</u>. I led a <u>Adjective</u> life, filled with</p><p><u>Adjective</u> <u>noun</u> and even better memories. I&#39ll never </p><p> forget the day I won my <u>Award</u>, and showed it to my wife.</p><p> She remarked,''It&#39s so much <u>Adjective + er</u> than I thought!'' To </p><p> which I replied, ''That&#39s what <u>Pronoun</u>  said.'' We laughed and</p><p><u>Verb (past tense)</u>. When I <u>Verb (past tense)</u> Mad Libs, I never</p><p>imagined it would be as <u>Adjective</u> as the Bible, but I guess</p><p><u>plural noun</u> really prefer filling in the <u>plural noun</u>. I hope to be </p><p> remembered as a <u>Noun</u> who loved to make people <u>verb</u>,</p><p> but more importantly, as a(n) <u>adjective</u> man. Thank you all for</p><p><u>verb-ing</u>, I promise not to <u>verb</u> you while you sleep.</p><p><u>feeling</u> forever, <u>your Name</u>.</p></div>");
	    break;

	    case "pirate":
	    this.story = $("<div class='text-center'><p>Ye can always pretend to be a bloodthirsty <u>noun</u>,</p><p>threatening everyone by waving yer <u>adjective</u> sword</p><p>in the air, but until ye learn to <u>verb</u> like a pirate,</p><p>ye'll never be <u>adverb</u> accepted as an authentic</p><p><u>noun</u>, So here's what ye do: Cleverly work into yer</p><p>daily conversations <u>adjective</u> pirate phrases such as</p><p>''Ahoy there, <u>plural noun</u>,''Avast ye <u>plural noun</u>,'' and ''Shiver me <u>Plural noun</u>,'' Remember to drop all yer g's</p><p>when ye say such words as <em>sailin'</em> <em>spittin'</em> and <em>fightin'</em>. This will</p><p>give ye a/an <u>part of the body</u> start to being recognized as a swashbucklin' <u>noun</u>, Once ye have the lingo down</p><p>pat, it helps to wear a three-cornered <u>noun</u> on yer</p><p>head, stash a/an <u>noun</u> in yer pants, and keep a/an</p><p><u>noun</u> perched atop yer <u>part of the body</u>, Aye, now ye be a real pirate!</p></div>");
	    break;

	    case "date":
	    this.story = $("<div class='text-center'><p>It's simple. Turn to the <u>plural noun</u>. Make him/her want to</p><p><u>adverb</u> date you. Make sure you're always dressed</p><p>to <u>verb</u>. Each and every day, wear a/an <u>article of clothing</u></p><p>that you know shows off your <u>body part</u> to <u>adjective</u></p><p>advantage and make your <u>noun</u> look like a million</p><p><u>plural noun</u>. Even if the two of you make meaningful</p><p><u>another body part</u> contact, don't admit it. No hugs or</p><p><u>plural noun</u>. Just shake his/her <u>another body part</u></p><p> firmly. And remember, when he/she asks you out, even though a</p><p>chill may run down your <u>noun</u> and you can't stop your</p><p><u>noun</u> from <u>verb ending in 'ing'</u>, just play it <u>adjective</u>.</p><p>Take a long pause before answering in a very <u>adjective</u> voice.</p><p>''I'll have to <u>verb</u> it over.''</p></div>");
	    break;	

	    case "adventure":
	    this.story = $("<div class='text-center'></div>");
	    break;

	    default:
	    alert("Check the switch statement, something went horribly wrong!");
	    break;
	}
}


