// © Igor Gorlov, 2022. This work is protected by BSD 3-clause license.

// Displays Russian version of date and time in all elements with .miniclock class.
function displayInRussian() {
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
}

if (navigator.language.startsWith("ru")) {
	displayInRussian();
	setInterval(displayInRussian, 1000);
}
