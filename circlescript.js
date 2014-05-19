/* Variables */


var totalClicks = 0,
    clickIncrement = 1,
    autoClicker = {
        amount: 0,
        cost: 0,
        increment: 1
    },
    totalGoats = 1,
    goatIncrement = 1,
    goatSecondIncrement=2,
    tick = 1000,
    moonCounter = 0;

/* Run the AutoClicker */
var runAutoClicker = setInterval(function () {
    totalClicks += (autoClicker.increment * autoClicker.amount);
    updateValues();
}, tick)

$('#goatCount').click(function () {
    totalGoats++;
    document.getElementById("total_goats").innerHTML = totalGoats;
});
/*
$('#spaceBall').click(function () {
    moonCounter++;
    document.getElementById("total_goats").innerHTML = totalGoats;
*/
/*Update All Values*/
function updateValues() {
    $('#total_clicks').html(totalClicks);
    $('#autoClickers').html(autoClicker.amount);
    $('#total_goats').html(totalGoats);
    //$('#spaceBall').html(moonCounter);
    
    //LOL this turns the moon into a 0
}

/* Buy AutoClickers */
$('#autoClickerBuy').click(function () {
    if (totalClicks >= 10) {
        totalClicks -= 10;
        autoClicker.amount++;
        updateValues();
    }
});

/* Click to Increment */
$('#click').click(function () {
    totalClicks += clickIncrement;
    updateValues();
});

/* I suck at functions
var fadeAwayBro = function () {
    if (totalClicks.amount >= 20) {
        $("#tabs-min").fadeIn(3000);
    };
};
------
fadeAway=function() {
if (totalClicks.amount >= 20) {
        $("#tabs-min").fadeIn(3000);
};
*/

/*Upgrades*/
/*Two Clicks Per Click*/
$('#upgradeTwoClicks').click(function () {
    if (totalClicks >= 20) {
        totalClicks -= 20;
        clickIncrement = 2;
        $(this).addClass('hidden');
        $('#upgradeFiveClicks').removeClass('hidden');
        $('#upgradeTwoAutoClicks').removeClass('hidden');
        $('.tabs-1').removeClass('hidden');
        updateValues();
    }
});


/*Five Clicks Per Click*/
$('#upgradeFiveClicks').click(function () {
    if (totalClicks >= 100) {
        totalClicks -= 100;
        clickIncrement = 5;
        $(this).addClass('hidden');
        $('#upgradeTenClicks').removeClass('hidden');
        updateValues();
    }
});

/*Trying 10 Clicks Per Click*/
$('#upgradeTenClicks').click(function () {
    if (totalClicks >= 100) {
        totalClicks -= 100;
        clickIncrement = 10;
        $(this).addClass('hidden');
        $('#upgradeGoats').removeClass('hidden');
        updateValues();
    }
});



/*Two Clicks Per Autoclicker*/
$('#upgradeTwoAutoClicks').click(function () {
    if (totalClicks >= 20) {
        totalClicks -= 20;
        autoClicker.increment = 2;
        $(this).addClass('hidden');
        $('#upgradeThreeAutoClicks').removeClass('hidden');
        updateValues();
    }
});

$('#upgradeThreeAutoClicks').click(function () {
    if (totalClicks >= 20) {
        totalClicks -= 20;
        autoClicker.increment = 3;
        $(this).addClass('hidden');
        updateValues();
    }
});

/*Goats*/
$('#upgradeGoats').click(function () {
    if (totalClicks >= 500) {
        totalClicks -= 500;
        clickIncrement = 5;
        $(this).addClass('hidden');
        $('#goatCount').removeClass('hidden');
        $('.allClicks').addClass('hidden');
        $('.allGoats').removeClass('hidden');
        $('#autoClickerBuy').addClass('hidden');
        $('#hrpics').removeClass('hidden');
        $('#goatpics').removeClass('hidden');
        $('.notabs-2').removeClass('hidden');
        updateValues();
    }
});

/* I don't need tigers yet for testing 
 $('#upgradeTiger').removeClass('hidden');
        $('#upgradeBagh').removeClass('hidden');
        
        
$('#upgradeTiger').click(function () {
    if (totalClicks >= 1000) {
        totalClicks -= 1000;
        clickIncrement = 5;
        $(this).addClass('hidden');
        updateValues();
    }
});

$('#upgradeBagh').click(function () {
    if (totalClicks >= 1000) {
        totalClicks -= 1000;
        clickIncrement = 5;
        $(this).addClass('hidden');
        updateValues();
    }
});
*/

/* Don't think this does anything
$('#goatCount').click(function(){
    if (totalGoats >= 1) {
        totalGoats -= 1;
        goatCountIncrement = 1;
        updateValues();
    }
});
*/

/*GOATS NOW */
$('#femaleGoat').click(function () {
    totalGoats += goatSecondIncrement;
    goatSecondIncrement.amount++;
    updateValues();
});

$('#goatCount').click(function () {
    if (totalGoats >= 10) {
        totalGoats -= 10;
        goatIncrement.amount++;
        $('#femaleGoat').removeClass('hidden');
        $(this).addClass('hidden');
        // why is this here...
        /*
        $('this').addfunction damageClick(e){
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
Class('hidden');

*/
        updateValues();
    }
});

//NOPE TIGERS DIDNT WORK DARN STILL NOT WORKING
/*
var tigersRawr = function () {
	if (totalGoats>=50) {
		$('.notabs-3').removeClass('hidden');
		updateValues();
		}
	};
	
tigersRawr();
*/		 

/* k right now its deleting by 9 by the blue one, and not going over 10. must be whatever -= means. 
$('#tits').removeClass('hidden'); for later
hm */

$(function () {
    $("#tabs-min").tabs();
});