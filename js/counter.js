var io_date = new Date("April 30 2020 23:59");
var io_timer = setInterval(function(){io_counter(io_date)}, 1000);

var io_counter = function ioCounter(target_date) {
	console.log('into io counter');
	var now_date = new Date(),
		time_remaining = io_date - now_date;

	if (time_remaining <= 0) {
		clearInterval(io_timer);
		console.log('cleared io counter');
		document.getElementsByClassName('io-counter-ctr')[0].innerHTML = 'DONE';
		return;
	}

	var weeks_remain = time_remaining / (1000 * 60 * 60 * 24 * 7),
		days_remain = (weeks_remain % 1) * 7,
		hours_remain = (days_remain % 1) * 24,
		mins_remain = (hours_remain % 1) * 60,
		seconds_remain = (mins_remain % 1) * 60;

	document.getElementsByClassName('weeks-remain')[0].innerHTML = Math.floor(weeks_remain) + ' Weeks';
	document.getElementsByClassName('days-remain')[0].innerHTML = Math.floor(days_remain) + ' Days';
	document.getElementsByClassName('hours-remain')[0].innerHTML = Math.floor(hours_remain) + ' Hours';
	document.getElementsByClassName('mins-remain')[0].innerHTML = Math.floor(mins_remain) + ' Mins';
	document.getElementsByClassName('seconds-remain')[0].innerHTML = Math.floor(seconds_remain) + ' Seconds';
};
