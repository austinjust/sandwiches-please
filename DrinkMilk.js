var tits = 0
	
function drinkMilk(){
	//on click, tits increase
	tits++;
	}

//OLD GOAT VARIABLES
var totalClicks = 0,
    clickIncrement = 1,
    autoClicker = {
        amount: 0,
        cost: 0,
        increment: 1
    },
    totalGoats = 1,
    goatIncrement = 1,
    tick = 1000;

/* Run the AutoClicker */
var runAutoClicker = setInterval(function () {
    totalClicks += (autoClicker.increment * autoClicker.amount);
    updateValues();
}, tick)

$('#goatCount').click(function () {
    totalGoats++;
    document.getElementById("total_goats").innerHTML = totalGoats;
});

/*Update All Values*/
function updateValues() {
    $('#total_clicks').html(totalClicks);
    $('#autoClickers').html(autoClicker.amount);
    $('#total_goats').html(totalGoats);
}

/* Buy AutoClickers */
$('#autoClickerBuy').click(function () {
    if (totalClicks >= 10) {
        totalClicks -= 10;
        autoClicker.amount++;
        updateValues();
    }
});
	//end old function
	

//function update tits
// if tits blah blah multiplier
// tits = new number


//moon
// every x amount of time, moon appears, for x amount of time
//clicking moon gives 1 period, then also a multiplier to energy
// moon powers!
// space astronaut updates frequency and power of moon
// until the moon exists all the time and/or // ?? // your period is done (menopause)
// then moon bonus gets extra submoon bonus (pluto moon?) for same multiplier etc etc
// until spacemasteronaut
// in real time moon clicking -- only at midnight
//Boost = moon comes out twice as much - "NEW MOON = FULL MOON"
//12 moons every 8 hours, or 1 moon an hour, or 90 minutes, or ...more often?
//bonus game involved??
//spaceman flies through space in real planet distance time.
//time travel unlocks edge of galaxy?? cuz speed of light.
//or speed of light == a quality for applying to .. science? / some other thing?
//so time travel = space + ? (science) maxed out.
//time travel keeps some nonpersistent things ?
//reincarnation == permanent things

//memory games
//at old age, reminescence
//delays countdown???
//

//bike travel -- 4:45 game ideas in phone

//autotimer makes you idle for x amount of time, but no gains
//so waiting = mechanic
//to do stuff in the game, you have to turn idle off

//Goat Game
//"you've always wanted a goat"

	damage += swordPower*bonusDPS;
	evoPoints += swordPower*bonusDPS/damageToEvo;
	statDmgSword += swordPower*bonusDPS;
	statSwordSwings += 1;
	
	if (statSwordSwings >= 1000 && achieve015got === 0) { 
		achieve015got = 1;
		achievementsCheck();
		achieveText();
	};
	if (statSwordSwings >= 50000 && achieve016got === 0) { 
		achieve016got = 1;
		achievementsCheck();
		achieveText();
	};
	if (statSwordSwings >= 250000 && achieve017got === 0) { 
		achieve017got = 1;
		achievementsCheck();
		achieveText();
	};
	if (statSwordSwings >= 25000000 && achieve018got === 0) { 
		achieve018got = 1;
		achievementsCheck();
		achieveText();
	};
	
	statDmgAllTime += swordPower*bonusDPS;
	statEvoAllTime += swordPower*bonusDPS/damageToEvo;
	statEvoGame += swordPower*bonusDPS/damageToEvo;
	
	document.getElementById('damage').innerHTML = numberWithCommas(Math.floor(damage)) + "<br />" + "Damage";
	document.getElementById('evoPoints').innerHTML = numberWithCommas(Math.floor(evoPoints)) + " Evo Points";
	
	var e = e || window.event;
	
	var x = e.pageX-10-Math.floor(Math.random()*6);
	var y = e.pageY-25;
	
	var w = e.pageX;
	var z = e.pageY;
	
	damDiv++;
	makeNumber(damDiv);
	
	function makeNumber(i) {
		var damageNumber = document.createElement("div");
		beastButton.appendChild(damageNumber);
		
		damageNumber.setAttribute("id", "damageNumber"+i);
		$('#damageNumber'+i).addClass( "damageNumber" );
		$('#damageNumber'+i).css('left',x+'px');
		$('#damageNumber'+i).css('top',y+'px');
			
		document.getElementById('damageNumber'+i).innerHTML = numberWithCommas(Math.floor(swordPower*bonusDPS));
		
		function damNumTransition() {
			$('#damageNumber'+i).css('left',x+'px');
			$('#damageNumber'+i).css('top',y-128+'px');
			$('#damageNumber'+i).css('opacity','0');
		};
		
		function deleteDamDiv() {
			this.remove();
		};
			
		window.setTimeout(damNumTransition, 10);
		
		document.getElementById("damageNumber"+i).addEventListener("transitionend", deleteDamDiv, true);
	};
	
	particleDiv++;
	makeParticle(particleDiv);
	
	function makeParticle(p) {
		var particle = document.createElement("div");
		beastButton.appendChild(particle);
		
		particle.setAttribute("id", "particle"+p);
		$('#particle'+p).addClass( "particle" );
		$('#particle'+p).css('width',Math.floor(Math.random()*10)+5+'px');
		$('#particle'+p).css('height',Math.floor(Math.random()*10)+5+'px');
		$('#particle'+p).css('left',w+'px');
		$('#particle'+p).css('top',z+'px');
		
		function particleTransition() {
			$('#particle'+p).css('left',w+Math.floor(Math.random() * 201) - 100+'px');
			$('#particle'+p).css('top',z+Math.floor(Math.random() * 201) - 100+'px');
			$('#particle'+p).css('opacity','0');
		};
		
		function deleteParticle() {
			this.remove();
		};
			
		window.setTimeout(particleTransition, 10);
		
		document.getElementById("particle"+p).addEventListener("transitionend", deleteParticle, true);
	};
	
	if (damage >= 25) {
		if (boughtSword_01_a === 0 && unlockedSword_01_a === 0) {
			unlockedSword_01_a = 1;
			unlockedUpgrades();
		};

	};

};
