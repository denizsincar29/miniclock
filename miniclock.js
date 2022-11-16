// © Igor Gorlov, 2022. This work is protected by BSD 3-clause license.

/*
To prevent name conflicts, all Miniclock functions (defined below) reside in a global object,
which works as a namespace.
*/
let miniclock = {};
miniclock.language=navigator.language.split("_")[0];
miniclock.locale=null;

// Displays date and time in all elements with .miniclock class.
miniclock.display = () => {
	let now = new Date();
	let text =miniclock.locale["format"];
	text=text.replace("%wd", miniclock.locale["weekDays"][now.getDay()])
		.replace("%dn", now.getDate())
		.replace("mn", monthStrings[now.getMonth()])
		.replace("yn",now.getFullYear())
		.replace("yw",miniclock.locale["yearWord"])
		.replace("%lt",now.toLocaleTimeString(new Intl.Locale(miniclock.language)));
	let targets = document.getElementsByClassName("miniclock");
	for (let target of targets) {
		target.innerText = text;
	}
};

miniclock.initData=function(){
	load_json("./locale/"+miniclock.language+".json")
		.then(miniclock.start);
}

// Detects end-user's preferred language and calls the appropriate printing function.
miniclock.start = () => {
	miniclock.display();
	setInterval(miniclock.display, 1000);

};

// Start the whole system when DOM is ready.
document.addEventListener("DOMContentLoaded", miniclock.initData);

// global functions
async function load_json(filename){
	let response=await fetch(filename);
	miniclock.locale=await response.json();
}