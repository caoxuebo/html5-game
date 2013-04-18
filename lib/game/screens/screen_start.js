
ig.module(
	'game.screens.screen_start' 
).requires(
	'impact.game',
	'game.screens.screen_main'
).defines(function(){ 
	StartScreen=ig.Class.extend({
		introTimer:null,
		noise:null, 
		ele:ig.$('#panel'),
		background:new ig.Image('media/ui/bg.png'),
		startBtn:new ig.Image('media/ui/startBtn.png'),
		//biolab:new ig.Image('media/biolab/title-biolab.png'),
		logo:new ig.Image('media/ui/logo.png'),
		//player:new ig.Image('media/biolab/title-player.png'),
		font:new ig.Font('media/04b03.font.png'),
		init:function(){
			this.ele.innerHTML='<div id="gameStart">Start</div>';
			if(!StartScreen.initialized){
				// Initialize your game here; bind keys etc.
				ig.input.bind(ig.KEY.LEFT_ARROW,'left');//左
				ig.input.bind(ig.KEY.RIGHT_ARROW,'right');//右
				ig.input.bind(ig.KEY.UP_ARROW,'up');//上
				ig.input.bind(ig.KEY.DOWN_ARROW,'down');//下
				ig.input.bind(ig.KEY.W,'W');//w 上
				ig.input.bind(ig.KEY.S,'S');//s 下
				ig.input.bind(ig.KEY.A,'A');//a 左
				ig.input.bind(ig.KEY.D,'D');//d 右
				ig.input.bind(ig.KEY.X,'jump');//跳
				ig.input.bind(ig.KEY.C,'shoot');//
				ig.input.bind(ig.KEY.MOUSE1, 'click');//鼠标左边点击
				ig.input.bindTouch('#gameStart', false, false, 'gameStart');
				StartScreen.initialized=true;
			}
			this.introTimer=new ig.Timer(1);
		},
		run:function(){ 
			//点击 开始 游戏 0.2
			if(ig.input.pressed('gameStart')){
				ig.system.setGame(MyGame);
				ig.$('#gameStart').style.display='none';
				console.log('gameStart');
			}
			/* old C and  X 0.1
			if(ig.input.pressed('shoot')||ig.input.pressed('jump')){
				ig.system.setGame(MyGame);
				return;
			}*/
			var d=this.introTimer.delta();
			if(!this.soundPlayed&&d>-0.3){
				//this.soundPlayed=true;
				//this.sound.play();
			}
			//ig.system.clear('#ffffff');
			this.background.draw(0,0);
			
			//this.biolab.draw((d*d*-d).limit(0,1).map(1,0,-160,44),26);
			this.logo.draw((d*d*-d).limit(0,1).map(1,0,500,194),50); 
			ig.$('#gameStart').style.bottom=(d*d*-d).limit(0,1).map(0,1,100,-100)+'px';
			//this.player.draw((d*d*-d).limit(0,1).map(0.5,0,240,166),56);
			
			//this.startBtn.draw(254,370); // old 0.1 canvas btn
			/*
			if(d>0&&(d%1<0.5||d>2))
			{
				this.font.draw('Press X or C to Play',120,140,ig.Font.ALIGN.CENTER);
			}*/
		}
	});
	
 
 
});