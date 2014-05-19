var Game.fps = 30;

function l(what) {return document.getElementById(what);}

var spaceBall = 0

spaceBall.appear = function (); {
			var me=l('#spaceBall');
			me.body.style.backgroundPosition='center';*/
			me.body.style.backgroundImage='url('moonjust.png')';
			//var screen=l('game').getBoundingClientRect(); okay what is
			//this.x=Math.floor(Math.random()*Math.max(0,(screen.right-300)-screen.left-128)+screen.left+64)-64;
			//this.y=Math.floor(Math.random()*Math.max(0,screen.bottom-screen.top-128)+screen.top+64)-64;
			//me.style.left=this.x+'px';
			//me.style.top=this.y+'px';
			me.style.display='block';
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