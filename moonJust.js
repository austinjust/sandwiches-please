//MOON POWERS
//UGH AUSTIN COME ON START SLOWER. First: Have a moon even appear. Second. Make it go away. Then worry about clicks etc.
//Game.T = 0;
//Game.drawT = 0;
//Game.fps = 30;
//Game.l = l('game');


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
			if (this.time<this.minTime || this.life>0) Life.Win('Cheated cookies taste awful');
			
			var me=l('moon');
			me.style.backgroundPosition='0px 0px';*/
			me.style.background='url(moonjust.png)';
			//I DONT DO ELDER WRATHS HERE
			/*			
			if ((Life.elderWrath==1 && Math.random()<1/3) || (Life.elderWrath==2 && Math.random()<2/3) || (Life.elderWrath==3))
			{
				this.wrath=1;
				if (Life.season=='halloween') me.style.background='url(img/spookyCookie.png)';
				else me.style.background='url(img/wrathCookie.png)';
			}
			
			else
			{
				this.wrath=0;
				me.style.background='url(img/goldCookie.png)';
			}
			*/
		
			//fancy visual stuff
			
			/* DONT NEED ROTATE EITHER
			var r=Math.floor(Math.random()*360);
			*/
			// no seasons either DUMMY	
			/*
			if (Life.season=='halloween' && this.wrath) r=Math.floor(Math.random()*36-18);
			if (Life.season=='valentines')
			{
				me.style.background='url(img/hearts.png)';
				me.style.backgroundPosition=-(Math.floor(Math.random()*8)*96)+'px 0px';
				r=Math.floor(Math.random()*36-18);
				if (this.wrath) r+=180;
			}
			if (Life.season=='fools')
			{
				me.style.background='url(img/contract.png)';
				r=Math.floor(Math.random()*8-4);
				if (this.wrath) me.style.background='url(img/wrathContract.png)';
			}
			*/
			//NO ROTATE
			/*
			me.style.transform='rotate('+r+'deg)';
			me.style.mozTransform='rotate('+r+'deg)';
			me.style.webkitTransform='rotate('+r+'deg)';
			me.style.msTransform='rotate('+r+'deg)';
			me.style.oTransform='rotate('+r+'deg)';
			*/
			
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
				if (!Life.Has('Golden switch')) this.life--;
				
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
				
				if (choice!='chain cookie') me.chain=0;
				if (choice=='frenzy')
				{
					var time=77+77*Life.Has('Get lucky');
					Life.frenzy=Life.fps*time;
					Life.frenzyPower=7;
					Life.frenzyMax=Life.frenzy;
					Life.recalculateGains=1;
					popup=['Frenzy : cookie production x7 for '+time+' seconds!','Frenzy','Cookie production <b>x7</b> for <b>'+time+'</b> seconds!'];
				}
				else if (choice=='multiply cookies')
				{
					var moni=Math.min(Life.cookies*0.1,Life.cookiesPs*60*20)+13;//add 10% to cookies owned (+13), or 20 minutes of cookie production - whichever is lowest
					Life.Earn(moni);
					popup=['Lucky! +'+Beautify(moni)+' cookies!','Lucky!','+<b>'+Beautify(moni)+'</b> cookies!'];
				}
				else if (choice=='ruin cookies')
				{
					var moni=Math.min(Game.cookies*0.05,Game.cookiesPs*60*10)+13;//lose 5% of cookies owned (-13), or 10 minutes of cookie production - whichever is lowest
					moni=Math.min(Game.cookies,moni);
					Game.Spend(moni);
					popup=['Ruin! Lost '+Beautify(moni)+' cookies!','Ruin!','Lost <b>'+Beautify(moni)+'</b> cookies!'];
				}
				else if (choice=='blood frenzy')
				{
					var time=6+6*Game.Has('Get lucky');
					Game.frenzy=Game.fps*time;//*2;//we shouldn't need *2 but I keep getting reports of it lasting only 3 seconds
					Game.frenzyPower=666;
					Game.frenzyMax=Game.frenzy;
					Game.recalculateGains=1;
					popup=['Elder frenzy : cookie production x666 for '+time+' seconds!','Elder frenzy','Cookie production <b>x666</b> for <b>'+time+'</b> seconds!'];
				}
				else if (choice=='clot')
				{
					var time=66+66*Game.Has('Get lucky');
					Game.frenzy=Game.fps*time;
					Game.frenzyPower=0.5;
					Game.frenzyMax=Game.frenzy;
					Game.recalculateGains=1;
					popup=['Clot : cookie production halved for '+time+' seconds!','Clot','Cookie production <b>halved</b> for <b>'+time+'</b> seconds!'];
				}
				else if (choice=='click frenzy')
				{
					var time=13+13*Game.Has('Get lucky');
					Game.clickFrenzy=Game.fps*time;
					Game.clickFrenzyMax=Game.clickFrenzy;
					Game.recalculateGains=1;
					popup=['Click frenzy! Clicking power x777 for '+time+' seconds!','Click frenzy','Clicking power <b>x777</b> for <b>'+time+'</b> seconds!'];
				}
				else if (choice=='chain cookie')
				{
					me.chain++;
					var digit='7';
					if (me.wrath) digit='6';
					var moni='';
					for (var i=0;i<Math.max(0,(Game.cookies.toString().length)-10);i++) {moni+=digit;}
					for (var i=0;i<me.chain;i++) {moni+=digit;}
					moni=parseFloat(moni);
					moni=Math.max(parseInt(digit),Math.min(Math.min(Game.cookiesPs*60*60*3,Game.cookies*0.25),moni));
					var nextMoni='';
					for (var i=0;i<Math.max(0,(Game.cookies.toString().length)-10);i++) {nextMoni+=digit;}
					for (var i=0;i<=me.chain;i++) {nextMoni+=digit;}//there's probably a better way to handle this but ah well
					nextMoni=parseFloat(nextMoni);
					var moniStr=Beautify(moni);
					if ((Math.random()<0.01 || nextMoni>=Game.cookies*0.25 || nextMoni>Game.cookiesPs*60*60*3) && me.chain>4)//break the chain if we're above 5 digits AND it's more than 25% of our bank, it grants more than 3 hours of our CpS, or just a 1% chance each digit
					{
						me.chain=0;
						popup=['Cookie chain : +'+moniStr+' cookies!<br>Cookie chain over.','Cookie chain over','+<b>'+moniStr+'</b> cookies!'];
					}
					else popup=['Cookie chain : +'+moniStr+' cookies!','Cookie chain','+<b>'+moniStr+'</b> cookies!'];
					Game.Earn(moni);
				}
				else if (choice=='blab')//sorry (it's really rare)
				{
					var str=choose([
					'Cookie crumbliness x3 for 60 seconds!',
					'Chocolatiness x7 for 77 seconds!',
					'Dough elasticity halved for 66 seconds!',
					'Golden cookie shininess doubled for 3 seconds!',
					'World economy halved for 30 seconds!',
					'Grandma kisses 23% stingier for 45 seconds!',
					'Thanks for clicking!',
					'Fooled you! This one was just a test.',
					'Golden cookies clicked +1!',
					'Your click has been registered. Thank you for your cooperation.',
					'Thanks! That hit the spot!'
					]);
					popup=[str,'???',str];
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
		