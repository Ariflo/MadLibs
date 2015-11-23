function Story(){
	this.story; 
};

//choose selected story and fill in the blanks with user inputs 
Story.prototype.pasteStory = function(story){

	switch (story) {
	    case "eulogy":
	    this.story = $("<div class='text-center'><p>If you are <b id='blank0'>Verb-ing</b> this, it means I am <b id='blank1'>Adjective</b>. I am sure </p><p> you are all <b id='blank2'>Adverb</b> grieved. Especially my <b id='blank3'>Family Member</b></p><p>Gloria and our <b id='blank4'>Number</b> children. In my life, I <b id='blank5'>Verb (past tense)</b></p><p>for many popular <b id='blank6'>Noun</b> shows, including <b id='blank7'>Military Rank</b></p><p>Bilko and Get <b id='blank8'>Adjective</b>. I led a <b id='blank9'>Adjective</b> life, filled with</p><p><b id='blank10'>Adjective</b> <b id='blank11'>Noun</b> and even better memories. I&#39ll never </p><p> forget the day I won my <b id='blank12'>Award</b>, and showed it to my wife.</p><p> She remarked,''It&#39s so much <b id='blank13'>Adjective + er</b> than I thought!'' To </p><p> which I replied, ''That&#39s what <b id='blank14'>Pronoun</b>  said.'' We laughed and</p><p><b id='blank15'>Verb (past tense)</b>. When I <b id='blank16'>Verb (past tense)</b> Mad Libs, I never</p><p>imagined it would be as <b id='blank17'>Adjective</b> as the Bible, but I guess</p><p><b id='blank18'>Plural Noun</b> really prefer filling in the <b id='blank19'>Plural Noun</b>. I hope to be </p><p> remembered as a <b id='blank20'>Noun</b> who loved to make people <b id='blank21'>Verb</b>,</p><p> but more importantly, as a(n) <b id='blank22'>Adjective</b> man. Thank you all for</p><p><b id='blank23'>Verb-ing</b>, I promise not to <b id='blank24'>Verb</b> you while you sleep.</p><p><b id='blank25'>Feeling</b> forever, <b id='blank26'>Your Name</b>.</p></div>");
	    break;

	    case "pirate":
	    this.story = $("<div class='text-center'><p>Ye can always pretend to be a bloodthirsty <b id='blank0'>Noun</b>,</p><p>threatening everyone by waving yer <b id='blank1'>Adjective</b> sword</p><p>in the air, but until ye learn to <b id='blank2'>Verb</b> like a pirate,</p><p>ye'll never be <b id='blank3'>Adverb</b> accepted as an authentic</p><p><b id='blank4'>Noun</b>, So here's what ye do: Cleverly work into yer</p><p>daily conversations <b id='blank5'>adjective</b> pirate phrases such as</p><p>''Ahoy there, <b id='blank6'>Plural Noun</b>,''Avast ye <b id='blank7'>Plural Noun</b>,'' and ''Shiver me <b id='blank8'>Plural Noun</b>,'' Remember to drop all yer g's</p><p>when ye say such words as <em>sailin'</em> <em>spittin'</em> and <em>fightin'</em>. This will</p><p>give ye a/an <b id='blank9'>Part of the Body</b> start to being recognized as a swashbucklin' <b id='blank10'>Noun</b>, Once ye have the lingo down</p><p>pat, it helps to wear a three-cornered <b id='blank11'>Noun</b> on yer</p><p>head, stash a/an <b id='blank12'>Noun</b> in yer pants, and keep a/an</p><p><b id='blank13'>Noun</b> perched atop yer <b id='blank14'>Part of the Body</b>, Aye, now ye be a real pirate!</p></div>");
	    break;

	    case "date":
	    this.story = $("<div class='text-center'><p>It's simple. Turn to the <b id='blank0'>Plural Noun</b>. Make him/her want to</p><p><b id='blank1'>Adverb</b> date you. Make sure you're always dressed</p><p>to <b id='blank2'>Verb</b>. Each and every day, wear a/an <b id='blank3'>Article of Clothing</b></p><p>that you know shows off your <b id='blank4'>Body Part</b> to <b id='blank5'>Adjective</b></p><p>advantage and make your <b id='blank6'>Noun</b> look like a million</p><p><b id='blank7'>Plural Noun</b>. Even if the two of you make meaningful</p><p><b id='blank8'>Another Body Part</b> contact, don't admit it. No hugs or</p><p><b id='blank9'>Plural Noun</b>. Just shake his/her <b id='blank10'>Another Body Part</b></p><p> firmly. And remember, when he/she asks you out, even though a</p><p>chill may run down your <b id='blank11'>Noun</b> and you can't stop your</p><p><b id='blank12'>Noun</b> from <b id='blank13'>Verb ending in 'ing'</b>, just play it <b id='blank14'>Adjective</b>.</p><p>Take a long pause before answering in a very <b id='blank15'>Adjective</b> voice.</p><p>''I'll have to <b id='blank16'>verb</b> it over.''</p></div>");
	    break;	

	    case "adventure":
	    this.story = $("<div class='text-center'></div>");
	    break;

	    default:
	    return false; 
	    break;
	}
}


