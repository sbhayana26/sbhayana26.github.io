function startTime()
	{ var today = new Date();
	var hr = today.getHours();
	var min = today.getMinutes();
	hr=checkTime(hr);
	min = checkTime(min);
	document.getElementById("clock").innerHTML = hr + ":" + min + ":" + "Hrs";
	
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var curWeekDay = days[today.getDay()];
	var curDay = today.getDate();
	var curMonth = months[today.getMonth()];
	var curYear = today.getFullYear();
	var date = curWeekDay + ". " + curMonth + " " + curDay + ", " + curYear;
	document.getElementById("date").innerHTML = date;
	
	var time = setTimeout(function(){startTime()}, 500);
	}

function checkTime(i)
	{ if (i<10)
		{ i = "0" + i;
		}
	return i;
}
