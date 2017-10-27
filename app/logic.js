// define win conditions
var firstTwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var secondTwelve = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var thirdTwelve = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
var topRow = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
var midRow = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
var botRow = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
var red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 28, 30, 32, 34, 36];
var black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29, 31, 33, 35];
var zero = [0]
var firstHalf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var secondHalf = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
var chipsPlaced = [];
var prevSpins = [];
var redSpins = [];
var blackSpins = [];
var balance = 10;

var multiplier = chipsPlaced.length;

// click to bet (1 chip per click)
$('#n1to12').click(function() {
    chipsPlaced.push("1-12");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>1st12</a>")
});
$('#n13to24').click(function() {
    chipsPlaced.push("13-24");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>2nd12</a>")
});
$('#n25to36').click(function() {
    chipsPlaced.push("25-36");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>3rd12</a>")
});
$('#ntoprow').click(function() {
    chipsPlaced.push("Top");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>Top</a>")
});
$('#nmidrow').click(function() {
    chipsPlaced.push("Mid");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>Mid</a>")
});
$('#nbotrow').click(function() {
    chipsPlaced.push("Bottom");
    console.log(chipsPlaced)
    $("#currentBets").append("<a class='green-text col s3'>Bottom</a>")
});
$('#n1to18').click(function() {
    chipsPlaced.push("1-18");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>1-18</a>")
});
$('#n19to36').click(function() {
    chipsPlaced.push("19-36");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>19-36</a>")
});
$('#neven').click(function() {
    chipsPlaced.push("even");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>Even</a>")
});
$('#nodd').click(function() {
    chipsPlaced.push("odd");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='green-text col s3'>Odd</a>")
});
$('#nred').click(function() {
    chipsPlaced.push("red");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='red-text col s3'>Red</a>")
});
$('#nblack').click(function() {
    chipsPlaced.push("black");
    console.log(chipsPlaced);
    $("#currentBets").append("<a class='black-text col s3'>top</a>")
});
$('#n1').click(function() {
    chipsPlaced.push(1);
    console.log(chipsPlaced)
});
$('#n2').click(function() {
    chipsPlaced.push(2);
    console.log(chipsPlaced)
});
$('#n3').click(function() {
    chipsPlaced.push(3);
    console.log(chipsPlaced)
});
$('#n4').click(function() {
    chipsPlaced.push(4);
    console.log(chipsPlaced)
});
$('#n5').click(function() {
    chipsPlaced.push(5);
    console.log(chipsPlaced)
});
$('#n6').click(function() {
    chipsPlaced.push(6);
    console.log(chipsPlaced)
});
$('#n7').click(function() {
    chipsPlaced.push(7);
    console.log(chipsPlaced)
});
$('#n8').click(function() {
    chipsPlaced.push(8);
    console.log(chipsPlaced)
});
$('#n9').click(function() {
    chipsPlaced.push(9);
    console.log(chipsPlaced)
});
$('#n10').click(function() {
    chipsPlaced.push(10);
    console.log(chipsPlaced)
});
$('#n11').click(function() {
    chipsPlaced.push(11);
    console.log(chipsPlaced)
});
$('#n12').click(function() {
    chipsPlaced.push(12);
    console.log(chipsPlaced)
});
$('#n13').click(function() {
    chipsPlaced.push(13);
    console.log(chipsPlaced)
});
$('#n14').click(function() {
    chipsPlaced.push(14);
    console.log(chipsPlaced)
});
$('#n15').click(function() {
    chipsPlaced.push(15);
    console.log(chipsPlaced)
});
$('#n16').click(function() {
    chipsPlaced.push(16);
    console.log(chipsPlaced)
});
$('#n17').click(function() {
    chipsPlaced.push(17);
    console.log(chipsPlaced)
});
$('#n18').click(function() {
    chipsPlaced.push(18);
    console.log(chipsPlaced)
});
$('#n19').click(function() {
    chipsPlaced.push(19);
    console.log(chipsPlaced)
});
$('#n20').click(function() {
    chipsPlaced.push(20);
    console.log(chipsPlaced)
});
$('#n21').click(function() {
    chipsPlaced.push(21);
    console.log(chipsPlaced)
});
$('#n22').click(function() {
    chipsPlaced.push(22);
    console.log(chipsPlaced)
});
$('#n23').click(function() {
    chipsPlaced.push(23);
    console.log(chipsPlaced)
});
$('#n24').click(function() {
    chipsPlaced.push(24);
    console.log(chipsPlaced)
});
$('#n25').click(function() {
    chipsPlaced.push(25);
    console.log(chipsPlaced)
});
$('#n26').click(function() {
    chipsPlaced.push(26);
    console.log(chipsPlaced)
});
$('#n27').click(function() {
    chipsPlaced.push(27);
    console.log(chipsPlaced)
});
$('#n28').click(function() {
    chipsPlaced.push(28);
    console.log(chipsPlaced)
});
$('#n29').click(function() {
    chipsPlaced.push(29);
    console.log(chipsPlaced)
});
$('#n30').click(function() {
    chipsPlaced.push(30);
    console.log(chipsPlaced)
});
$('#n31').click(function() {
    chipsPlaced.push(31);
    console.log(chipsPlaced)
});
$('#n32').click(function() {
    chipsPlaced.push(32);
    console.log(chipsPlaced)
});
$('#n33').click(function() {
    chipsPlaced.push(33);
    console.log(chipsPlaced)
});
$('#n34').click(function() {
    chipsPlaced.push(34);
    console.log(chipsPlaced)
});
$('#n35').click(function() {
    chipsPlaced.push(35);
    console.log(chipsPlaced)
});
$('#n36').click(function() {
    chipsPlaced.push(36);
    console.log(chipsPlaced)
});
$('#n0').click(function() {
    chipsPlaced.push(0);
    console.log(chipsPlaced)
});

//remove bets/chips from board
$('#clear').click(function() {
    chipsPlaced = [];
    console.log(chipsPlaced);
});

$('#back').click(function() {
    chipsPlaced.pop();
    console.log(chipsPlaced)
});

//dropdown to place bet
$('.dropdown-button').dropdown({
      inDuration: 33,
      outDuration: 999,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
      
$('.dropdown-button').dropdown('open');

$('.dropdown-button').dropdown('close');

//select bet amount
$("#dropdown1").on("change", function() {
    $("#dropdown").html("<u>" + $("#dropdown1").val() + "</u>฿ per bet");
    console.log($('#dropdown1').val())
});

// calculate bet amount x chip amount
// display current bets
$('button').on("click", function() {
    var multiplier = chipsPlaced.length;
    $('#multiplier').html(multiplier);
    var totalBet = multiplier * $("#dropdown1").val();
    $('#total').html(Math.round(totalBet * 10000) / 10000);
    console.log(totalBet)
});

// spin roulette deducts total bet from balance
// spin roulette generates random number and for each betted chip checks if it meets win condition (lastSpin)
// if win condition is met, player is rewarded payout
$('#spin').on("click", function() {
	var multiplier = chipsPlaced.length;
	var betAmt = $("#dropdown1").val();
	var totalBet = multiplier * betAmt;
	var lastSpin = Math.floor(Math.random() * 37);
    if (totalBet > balance) {
        alert("Insufficient funds!");
        return
    }
	balance = balance - totalBet;

	for (var i = 0; i < chipsPlaced.length; i++) {
		if (chipsPlaced[i]===lastSpin) {
			balance = balance + betAmt * 37;
		};
		if (chipsPlaced[i]==="1-12") {
			if (firstTwelve.includes(lastSpin)) {
			balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="13-24") {
			if (secondTwelve.includes(lastSpin)) {
				balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="25-36") {
			if (thirdTwelve.includes(lastSpin)) {
				balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="Top") {
			if (topRow.includes(lastSpin)) {
				balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="Mid") {
			if (midRow.includes(lastSpin)) {
				balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="Bottom") {
			if (botRow.includes(lastSpin)) {
				balance = balance + betAmt * 3
			}
		};
		if (chipsPlaced[i]==="1-18") {
			if (firstHalf.includes(lastSpin)) {
				balance = balance + betAmt * 2
			}
		};
		if (chipsPlaced[i]==="19-36") {
			if (secondHalf.includes(lastSpin)) {
				balance = balance + betAmt * 2
			}
		};
		if (chipsPlaced[i]==="red") {
			if (red.includes(lastSpin)) {
				balance = balance + betAmt * 2
			}
		};
		if (chipsPlaced[i]==="black") {
			if (black.includes(lastSpin)) {
				balance = balance + betAmt * 2
			}
		};
	};

    if (red.includes(lastSpin)) {
        document.getElementById("lastSpin").style.color = "red"
    };

    if (black.includes(lastSpin)) {
        document.getElementById("lastSpin").style.color = "black"
    };

    if (lastSpin === 0) {
        document.getElementById("lastSpin").style.color = "green"
    }

    $('#lastSpin').html(lastSpin);

    if (black.includes(lastSpin)) {
        var lastSpinDisplay = "<a class='black-text col s1'>" + lastSpin + " </a>";
        $('#spinDisplay').append(lastSpinDisplay)
    };

    if (red.includes(lastSpin)) {
        var lastSpinDisplay = "<a class='red-text col s1'>" + lastSpin + " </a> ";
        $('#spinDisplay').append(lastSpinDisplay)
    };

    if (zero.includes(lastSpin)) {
        var lastSpinDisplay = "<a class='green-text col s1'>" + lastSpin + " </a> ";
        $('#spinDisplay').append(lastSpinDisplay)
    };

	$('#balance').html((Math.round(balance * 10000000) / 10000000))
    console.log("Current Balance: " + (Math.round(balance * 10000000) / 10000000))
});

$('#clearHistory').on('click', function() {
    $('#spinDisplay').empty()
})


console.log("Javascript connected!")