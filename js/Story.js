function Story(){
	this.story; 
};

//choose selected story and fill in the blanks with user inputs 
Story.prototype.pasteStory = function(story){

	switch (story) {
	    case "eulogy":
	    this.story = $("<div class='text-center'><p>If you are <u id='blank0'>Verb-ing</u> this, it means I am <u id='blank1'>Adjective</u>. I am sure </p><p> you are all <u id='blank2'>adverb</u> grieved. Especially my <u id='blank3'>Family Member</u></p><p>Gloria and our <u id='blank4'>Number</u> children. In my life, I <u id='blank5'>verb (past tense)</u></p><p>for many popular <u id='blank6'>Noun</u> shows, including <u id='blank7'>military rank</u></p><p>Bilko and Get <u id='blank8'>Adjective</u>. I led a <u id='blank9'>Adjective</u> life, filled with</p><p><u id='blank10'>Adjective</u> <u id='blank11'>noun</u> and even better memories. I&#39ll never </p><p> forget the day I won my <u id='blank12'>Award</u>, and showed it to my wife.</p><p> She remarked,''It&#39s so much <u id='blank13'>Adjective + er</u> than I thought!'' To </p><p> which I replied, ''That&#39s what <u id='blank14'>Pronoun</u>  said.'' We laughed and</p><p><u id='blank15'>Verb (past tense)</u>. When I <u id='blank16'>Verb (past tense)</u> Mad Libs, I never</p><p>imagined it would be as <u id='blank17'>Adjective</u> as the Bible, but I guess</p><p><u id='blank18'>plural noun</u> really prefer filling in the <u id='blank19'>plural noun</u>. I hope to be </p><p> remembered as a <u id='blank20'>Noun</u> who loved to make people <u id='blank21'>verb</u>,</p><p> but more importantly, as a(n) <u id='blank22'>adjective</u> man. Thank you all for</p><p><u id='blank23'>verb-ing</u>, I promise not to <u id='blank24'>verb</u> you while you sleep.</p><p><u id='blank25'>feeling</u> forever, <u id='blank26'>your Name</u>.</p></div>");
	    break;

	    case "pirate":
	    this.story = $("<div class='text-center'><p>Ye can always pretend to be a bloodthirsty <u id='blank0'>noun</u>,</p><p>threatening everyone by waving yer <u id='blank1'>adjective</u> sword</p><p>in the air, but until ye learn to <u id='blank2'>verb</u> like a pirate,</p><p>ye'll never be <u id='blank3'>adverb</u> accepted as an authentic</p><p><u id='blank4'>noun</u>, So here's what ye do: Cleverly work into yer</p><p>daily conversations <u id='blank5'>adjective</u> pirate phrases such as</p><p>''Ahoy there, <u id='blank6'>plural noun</u>,''Avast ye <u id='blank7'>plural noun</u>,'' and ''Shiver me <u id='blank8'>Plural noun</u>,'' Remember to drop all yer g's</p><p>when ye say such words as <em>sailin'</em> <em>spittin'</em> and <em>fightin'</em>. This will</p><p>give ye a/an <u id='blank9'>part of the body</u> start to being recognized as a swashbucklin' <u id='blank10'>noun</u>, Once ye have the lingo down</p><p>pat, it helps to wear a three-cornered <u id='blank11'>noun</u> on yer</p><p>head, stash a/an <u id='blank12'>noun</u> in yer pants, and keep a/an</p><p><u id='blank13'>noun</u> perched atop yer <u id='blank14'>part of the body</u>, Aye, now ye be a real pirate!</p></div>");
	    break;

	    case "date":
	    this.story = $("<div class='text-center'><p>It's simple. Turn to the <u id='blank0'>plural noun</u>. Make him/her want to</p><p><u id='blank1'>adverb</u> date you. Make sure you're always dressed</p><p>to <u id='blank2'>verb</u>. Each and every day, wear a/an <u id='blank3'>article of clothing</u></p><p>that you know shows off your <u id='blank4'>body part</u> to <u id='blank5'>adjective</u></p><p>advantage and make your <u id='blank6'>noun</u> look like a million</p><p><u id='blank7'>plural noun</u>. Even if the two of you make meaningful</p><p><u id='blank8'>another body part</u> contact, don't admit it. No hugs or</p><p><u id='blank9'>plural noun</u>. Just shake his/her <u id='blank10'>another body part</u></p><p> firmly. And remember, when he/she asks you out, even though a</p><p>chill may run down your <u id='blank11'>noun</u> and you can't stop your</p><p><u id='blank12'>noun</u> from <u id='blank13'>verb ending in 'ing'</u>, just play it <u id='blank14'>adjective</u>.</p><p>Take a long pause before answering in a very <u id='blank15'>adjective</u> voice.</p><p>''I'll have to <u id='blank16'>verb</u> it over.''</p></div>");
	    break;	

	    case "adventure":
	    this.story = $("<div class='text-center'></div>");
	    break;

	    default:
	    alert("Check the switch statement, something went horribly wrong!");
	    break;
	}
}


