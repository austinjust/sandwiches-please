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
        $('.notabs-3').removeClass('hidden');
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
    totalGoats += goatIncrement;
    updateValues();
});

$('#goatCount').click(function () {
    if (totalGoats >= 10) {
        totalGoats -= 10;
        goatIncrement.amount++;
        $('#femaleGoat').removeClass('hidden');
        updateValues();
    }
});

/* k right now its deleting by 9 by the blue one, and not going over 10. must be whatever -= means. 
$('#tits').removeClass('hidden'); for later
hm */

$(function () {
    $("#tabs-min").tabs();
});