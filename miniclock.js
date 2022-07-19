// © Igor Gorlov, 2022. This work is protected by BSD 3-clause license.

/*
To prevent name conflicts, all Miniclock functions (defined below) reside in a global object,
which works as a namespace.
*/
let miniclock = {};

// Displays Russian version of date and time in all elements with .miniclock class.
miniclock.displayInRussian = () => {
	const weekDayStrings = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
	const monthStrings = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря"
	];
	let now = new Date();
	let text =
		"Сегодня " +
		weekDayStrings[now.getDay()] +
		", " +
		now.getDate() +
		" " +
		monthStrings[now.getMonth()] +
		" " +
		now.getFullYear() +
		" года, " +
		now.toLocaleTimeString(new Intl.Locale("ru"));
	let targets = document.getElementsByClassName("miniclock");
	for (let target of targets) {
		target.innerText = text;
	}
};

// Detects end-user's preferred language and calls the appropriate printing function.
miniclock.start = () => {
	if (navigator.language.startsWith("ru")) {
		miniclock.displayInRussian();
		setInterval(miniclock.displayInRussian, 1000);
	}
};

// Start the whole system when DOM is ready.
document.addEventListener("DOMContentLoaded", miniclock.start);
