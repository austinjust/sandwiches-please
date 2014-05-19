var Game.fps = 30;

function l(what) {return document.getElementById(what);}

var spaceBall = 0

spaceBall.appear = function (); {
			var me=l('spaceBall');
			me.body.style.backgroundPosition='0px 0px';*/
			me.body.style.backgroundImage='url('moonjust.png')';
			me.width=50px;
			//
			// moon http://i.imgur.com/CL3apkv.png
			//FUCK IT'S THE MOON OKAY
			//var screen=l('game').getBoundingClientRect(); okay what is
			//this.x=Math.floor(Math.random()*Math.max(0,(screen.right-300)-screen.left-128)+screen.left+64)-64;
			//this.y=Math.floor(Math.random()*Math.max(0,screen.bottom-screen.top-128)+screen.top+64)-64;
			//me.style.left=this.x+'px';
			//me.style.top=this.y+'px';
				//me.style.display='block';
			//how long will it stay on-screen?
				//var dur=13;
			//if (Life.Has('Lucky day')) dur*=2;
			//if (Life.Has('Serendipity')) dur*=2;
			//if (this.chain>0) dur=Math.max(1,10/this.chain);//this is hilarious
				//this.dur=dur;
				//this.life=Math.ceil(Game.fps*this.dur);
				//this.time=0;
				//this.toDie=0;
			}
/*
			
			Goats.Chiever = function(what)
        {
            if (typeof what === 'string')
            {
                if (Life.Achievements[what])
                {
                    if (Life.Achievements[what].won == 0)
                    {
                        Life.Achievements[what].won = 1;
                        if (Life.prefs.popups) 
                            Life.Popup('Achievement Unlocked :<br>' + Life.Achievements[what].name);
                        else 
                            Life.Notify('Achievement Unlocked', '<div class="title" style="font-size:18px;">' + Life.Achievements[what].name + '</div>', Life.Achievements[what].icon);
                        //DONT HAVE HIDDEN ONES [SHADOW ACHIEVERS?
                        //if (Life.Achievements[what].hide != 3) 
                            Life.AchievementsOwned++;
                        Life.recalculateGains = 1;
                    }
                }
            } else {
                for (var i in what) {
                    Life.Win(what[i]);
                }
            }
        }
        
*/