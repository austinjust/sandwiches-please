//MOON POWERS
//UGH AUSTIN COME ON START SLOWER. First: Have a moon even appear. Second. Make it go away. Then worry about clicks etc.
//Game.T = 0;
//Game.drawT = 0;
//Game.fps = 30;
//Game.l = l('game');

var Game.fps = 30;

function l(what) {return document.getElementById(what);}

var spaceBall = 0

spaceBall.appear = function (); {
			var me=l('moon');
			me.style.backgroundPosition='0px 0px';*/
			me.style.background='url(moonjust.png)';
			//var screen=l('game').getBoundingClientRect(); okay what is
			//this.x=Math.floor(Math.random()*Math.max(0,(screen.right-300)-screen.left-128)+screen.left+64)-64;
			//this.y=Math.floor(Math.random()*Math.max(0,screen.bottom-screen.top-128)+screen.top+64)-64;
			//me.style.left=this.x+'px';
			//me.style.top=this.y+'px';
			me.style.display='block';
			//how long will it stay on-screen?
			var dur=13;
			//if (Life.Has('Lucky day')) dur*=2;
			//if (Life.Has('Serendipity')) dur*=2;
			//if (this.chain>0) dur=Math.max(1,10/this.chain);//this is hilarious
			this.dur=dur;
			this.life=Math.ceil(Life.fps*this.dur);
			this.time=0;
			this.toDie=0;


Game.moonClicks = 0;

Life.moon={
	x:0,
	y:0,
	life:0,
	time:0,
	minTime:0
	maxTime:0,
	dur:13,
	toDie:1,
	wrath:0,
	chain:0,
	last:''};

Life.moon.reset=function()
		{
			this.life=1;//the moon's current progression through its lifespan
			this.time=0;//the amount of time since the moon has last been clicked
			this.minTime=this.getMinTime();//the minimum amount of time we must wait for the cookie to spawn
			this.maxTime=this.getMaxTime();//the maximum amount of time we must wait for the cookie to spawn
			this.dur=13;//duration; the cookie's lifespan before it despawns
			this.toDie=1;//should the cookie despawn? (I think that's what it does?)
			this.last='';//what was the last cookie effect?
			this.chain=0;//how far in the chain are we?
		}
		
		Game.moon.getMinTime=function()
		{
			var m=5;
			if (Game.Has('Blue Moon')) m/=2;
			//Blue Moon, appears 1nce more per year
			//Neue Moon, appears once more per helvetica [??]
			//Eclipse, permanent?? http://en.wikipedia.org/wiki/Eclipse
			//Umbra, penumbra and antumbra
			//waxing, waning puns. nickel and dimes, quarter moon?, 75 cents, 3 quarter moon?
			if (Game.Has('Serendipity')) m/=2;
			if (this.chain>0) m=0.05;
			if (Game.Has('Gold hoard')) m=0.01;
			return Math.ceil(Game.fps*60*m);
		}
		Game.moon.getMaxTime=function()
		{
			var m=15;
			if (Game.Has('Lucky day')) m/=2;
			if (Game.Has('Serendipity')) m/=2;
			if (this.chain>0) m=0.05;
			if (Game.Has('Gold hoard')) m=0.01;
			return Math.ceil(Game.fps*60*m);
		}

//MoonEnd


		Game.moon.spawn=function()
		{
			var me=l('moon');
			me.style.backgroundPosition='0px 0px';*/
			me.style.background='url(moonjust.png)';
			
		
			
			var screen=l('life').getBoundingClientRect();
			this.x=Math.floor(Math.random()*Math.max(0,(screen.right-300)-screen.left-128)+screen.left+64)-64;
			this.y=Math.floor(Math.random()*Math.max(0,screen.bottom-screen.top-128)+screen.top+64)-64;
			me.style.left=this.x+'px';
			me.style.top=this.y+'px';
			me.style.display='block';
			//how long will it stay on-screen?
			var dur=13;
			if (Life.Has('Lucky day')) dur*=2;
			if (Life.Has('Serendipity')) dur*=2;
			if (this.chain>0) dur=Math.max(1,10/this.chain);//this is hilarious
			this.dur=dur;
			this.life=Math.ceil(Life.fps*this.dur);
			this.time=0;
			this.toDie=0;
		}
		Life.moon.update=function()
		{
			if (this.toDie==0 && this.life<=0 && Math.random()<Math.pow(Math.max(0,(this.time-this.minTime)/(this.maxTime-this.minTime)),5)) this.spawn();
			if (this.life>0)
			{
				l('moon').style.opacity=1-Math.pow((this.life/(Life.fps*this.dur))*2-1,4);
				if (this.life==0 || this.toDie==1)
				{
					if (this.life==0) this.chain=0;
					l('moon').style.display='none';
					if (this.toDie==0) Life.missedGoldenClicks++;
					this.toDie=0;
					this.life=0;
				}
			}
			else this.time++;
		}
		Life.moon.choose=function()
		{
			var list=[];
			if (this.wrath>0) list.push('clot','multiply cookies','ruin cookies');
			else list.push('frenzy','multiply cookies');
			if (this.wrath>0 && Math.random()<0.3) list.push('blood frenzy','chain cookie');
			else if (Math.random()<0.03 && Life.cookiesEarned>=100000) list.push('chain cookie');
			if (Math.random()<0.1) list.push('click frenzy');
			if (this.last!='' && Math.random()<0.8 && list.indexOf(this.last)!=-1) list.splice(list.indexOf(this.last),1);//80% chance to force a different one
			if (Math.random()<0.0001) list.push('blab');
			var choice=choose(list);
			return choice;
		}
		Life.moon.click=function()
		{
			var me=Life.moon;
			if (me.life>0)
			{
				me.toDie=1;
				Life.moonClicks++;
				
				if (Life.moonClicks>=1) Life.Win('I see the moon');
				if (Life.moonClicks>=12) Life.Win('Year of the Goat');
				if (Life.moonClicks>=60) Life.Win('Five Years');
				if 
				
				if (Life.goldenClicks>=77) Life.Win('Fortune');
				if (Life.goldenClicks>=777) Life.Win('Leprechaun');
				if (Life.goldenClicks>=7777) Life.Win('Black cat\'s paw');
				
				//change to goldenClicksLocal later
				if (Life.goldenClicks>=12) Life.Unlock('And the moon sees me!');
				if (Life.goldenClicks>=27) Life.Unlock('Year of the Goat');
				if (Life.goldenClicks>=77) Life.Unlock('Five Years');
				
				//'I see the moon' (and the moon sees me)
				//if you believe they put a man on the moon REMlyrics?
					//Mott the Hoople and the Game of Life
				//Year of the Goat [change this] -- get a year's worth of full moon's
				//Five Years and that's all we got [ziggy stardust?] [could be badge for being age 5 also]
					//Moonage Daydream oh yeah 
						//starman, all ziggy references
				//Majora's Mask reference -- when you click 72 hours remain?
				//at first, 12 hours remain, until you unlock __
				//Dark Side
				
				
				l('moon').style.display='none';
				
				var choice=me.choose();
				
				if (me.chain>0) choice='chain cookie';
				me.last=choice;
				
				var popup=0;
				//MoonPowers
				
				
				if (choice=='frenzy')
				{
					var time=77+77*Life.Has('Get lucky');
					Life.frenzy=Life.fps*time;
					Life.frenzyPower=7;
					Life.frenzyMax=Life.frenzy;
					Life.recalculateGains=1;
					popup=['Frenzy : cookie production x7 for '+time+' seconds!','Frenzy','Cookie production <b>x7</b> for <b>'+time+'</b> seconds!'];
				}
				
				
				
				if (popup!=0)
				{
					if (Game.prefs.popups) Game.Popup(popup[0]);
					else Game.Notify(popup[1],popup[2],[10,1],6);
				}
				
				me.minTime=me.getMinTime();
				me.maxTime=me.getMaxTime();
			}
		}
		l('moon')[Life.clickStr]=Life.moon.click;
		
		//Game.clickStr=Game.touchEvents?'ontouchend':'onclick';
		
		// function l(what) {return document.getElementById(what);}
		
		
		//achievers
		
		Life.Achievements = [];
        Life.AchievementsById = [];
        Life.AchievementsN = 0;
        Life.AchievementsOwned = 0;
        Life.Achievement = function(name, desc, icon, hideLevel)
        {
            this.id = Life.AchievementsN;
            this.name = name;
            this.desc = desc;
            this.baseDesc = this.desc;
            this.desc = BeautifyInText(this.baseDesc);
            this.icon = icon;
            this.won = 0;
            this.disabled = 0;
            this.hide = hideLevel || hide || 0; //hide levels : 0=show, 1=hide description, 2=hide, 3=secret (doesn't count toward achievement total)
            this.order = this.id;
            if (order) 
                this.order = order + this.id * 0.001;
            this.vanilla = Life.vanilla;

            this.category = 'none';

            Life.last = this;
            Life.Achievements[this.name] = this;
            Life.AchievementsById[this.id] = this;
            Life.AchievementsN++;
            return this;
        }

        Life.Win = function(what)
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

        Life.HasAchiev = function(what)
        {
            return (Life.Achievements[what] ? Life.Achievements[what].won : 0);
        }
	//https://en.wikipedia.org/wiki/%3F:#JavaScript what that means (? if then, : else)	
		