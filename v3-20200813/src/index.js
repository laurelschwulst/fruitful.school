	document.getElementById("fruit").style.borderTopRightRadius = Math.random() * 60 + 40 + "%";
	document.getElementById("fruit").style.borderTopLeftRadius = Math.random() * 60 + 40 + "%";
	document.getElementById("fruit").style.borderBottomRightRadius = Math.random() * 60 + 40 + "%";
	document.getElementById("fruit").style.borderBottomLeftRadius = Math.random() * 60 + 40 + "%";


	var fruit = ["🍊 ", "🍋 ", "🍒 ", "🍉 ", "🍇 ", "🥭 ", "🍎 ", "🍐 ", "🍏 ", "🍑 ", "🍈 "];

	function updateClock() {
	    var d = new Date();
	    var minutes = d.getMinutes();
	    var seconds = d.getSeconds();
	    var hours = d.getHours();
	    console.log(hours);

	    if (hours > 0 && hours <= 12) {
	        hours = hours;
	    } else if (hours > 12) {
	        hours = (hours - 12);
	    } else if (hours == 0) {
	        hours = 12;
	    }

	    var hoursE = "";
	    var minutesE = "";
	    var secondsE = "";



	    for (i = 0; i < hours.toString().length; i++) {
	        var stringH = hours.toString().charAt(i);
	        // convert the first digit back to an integer
	        var numberH = parseInt(stringH)
	        console.log(numberH)
	        hoursE += fruit[numberH];
	    };

	    for (i = 0; i < minutes.toString().length; i++) {
	        var stringH = minutes.toString().charAt(i);
	        // convert the first digit back to an integer
	        var numberH = parseInt(stringH)
	        console.log(numberH)

	        minutesE += fruit[numberH];
	    };


	    for (i = 0; i < seconds.toString().length; i++) {
	        var stringH = seconds.toString().charAt(i);
	        // convert the first digit back to an integer
	        var numberH = parseInt(stringH)
	        console.log(numberH)

	        secondsE += fruit[numberH];
	    };

	    document.getElementById("minutes").innerHTML = minutesE;
	    document.getElementById("seconds").innerHTML = secondsE;
	    document.getElementById("hours").innerHTML = hoursE;

	}

	updateClock();

	setInterval(function () {
	    updateClock();

	}, 1000)