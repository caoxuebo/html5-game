
ig.module(
	'game.entities.protagonist'
).requires(
	'impact.entity'
).defines(function(){
	EntityProtagonist =  ig.Entity.extend({
		
		size:{x: 79,y:120},//在像素的实体的大小。这是用于碰撞检测和响应。默认x和y的大小是16。
		//offset:{x:4,y:2},//动画偏移 
		
		maxVel:{x:200,y:200},//最大速度。实体的速度将限制在这些值。
		friction:{x:700,y:700},//减速是每秒的速度减去的实体。仅适用于.accel.* is 0.
			
		type:ig.Entity.TYPE.A,//实体可以被组织为一组
		checkAgainst:ig.Entity.TYPE.NONE,//所有敌对单位
		collides:ig.Entity.COLLIDES.PASSIVE,//碰撞
			
		animSheet:new ig.AnimationSheet('media/animate/animation_1006@2x.png',79,120),
	
		//accelGround:200,
		//accelAir:100,
		speed:100,
		//jump:100,
		//health:30, 
		flip: false,
			
		init:function(x,y,settings){
		 	this.parent(x,y,settings);//调用父类的构造函数  
			this.addAnim('run',0.09,[0,1,2,3,4,5]);
			this.addAnim('idle',1,[6]);
			this.addAnim('chop',0.2,[7,8,9]);
		},
		update:function(){
			//this.standing 布尔，说明如果实体放置在地面上（Y轴）。
			//var accel = this.standing ? this.accelGround : this.accelAir;  
			//state 返回true，如果一个按钮绑定到指定的动作，当前按下不停运动，否则返回false。
			if(ig.input.state('left') || ig.input.state('A')){
				this.accel.x = -this.speed;  
			//	console.log(this.accel.x);
				this.flip = true;
			}else if(ig.input.state('right') || ig.input.state('D')){ 
				this.accel.x = this.speed;
				this.flip = false;
			}else if(ig.input.state('up') || ig.input.state('W')){  
		 		this.accel.y = -this.speed;   
		 	}else if(ig.input.state('down') || ig.input.state('S')){ 
		 		this.accel.y = this.speed;
		 	}else{
				this.accel.x = 0;
				this.accel.y = 0;
			}  
 			/**/
			if(this.vel.y < 0 || this.vel.y > 0 || this.vel.x != 0){
				//由实体的一个实例ig.Animation将绘制draw()方法，如果为null那么就没有动画被定义。
			  	this.currentAnim = this.anims.run;
			}else{
				this.currentAnim = this.anims.idle; 
			}
			 if (ig.input.pressed('leftButton')) { 
			 //this.pos.x //当前位置
			 //ig.input.mouse.x 鼠标点击位置 
			}
			////pressed 返回true，如果一个按钮绑定到指定的动作，只是按下，执行一次，否则返回false。
			/*jump
			if(this.standing && ig.input.pressed('jump')){
			//	this.vel.y = -this.jump;
			}*/
			/*shoot*/
			if(ig.input.pressed('shoot')){ 
			 	ig.game.spawnEntity(EntitySlimeGrenade,this.pos.x,this.pos.y,{flip:this.flip});
			}
			if(ig.input.state('shoot')){
				this.currentAnim = this.anims.chop; 
			}
			//	.flip.x, .flip.y布尔值，表示动画是否应绘制在x和/或y轴翻转
			this.currentAnim.flip.x = this.flip; 
			this.parent();
		} 
	});
	//武器 能量..
	EntitySlimeGrenade = ig.Entity.extend({
		size:{x:92,y:92},
		offset:{x:-50,y:0},
		maxVel:{x:400,y:0},
		bounciness:0,
		type:ig.Entity.TYPE.NONE,
		checkAgainst:ig.Entity.TYPE.B,
		collides:ig.Entity.COLLIDES.NEVER,
		animSheet:new ig.AnimationSheet('media/animate/66Made_JG_16.png',92,92),
		//bounceCounter:0,//弹跳 计数器
		flip:false,
		hasHit:false,
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.vel.x=(settings.flip ? -this.maxVel.x:this.maxVel.x);
			//this.vel.y = -50;
			this.addAnim('idle',1,[0]);
			this.addAnim('hit',0.1[0,1,2,3,4,5],true);
		},
		update:function(){
			//一个整数，指定多久动画已播放通过自上次调用.rewind()
			if(this.hasHit&this.currentAnim.loopCount>0){this.kill();}
			this.parent();
			this.currentAnim.flip.x=this.flip;
		},
			//方法接收此跟踪的结果
		handleMovementTrace:function(res){
			this.parent(res);
			if( res.collision.x || res.collision.y ) {
				this.currentAnim=this.anims.hit;
				this.hasHit=true;
				/**/
				this.bounceCounter++;
				if( this.bounceCounter > 3 ) {
					this.kill();//从游戏世界中删除的实体
				}
			}
		},
		//这种方法被称为该实体与其他实体和其他实体的类型重叠实体的匹配
		check:function(other){
			other.receiveDamage(10,this);
			this.hasHit=true;
			this.currentAnim=this.anims.hit;
			this.vel.x=0;
			//this.kill();
		}
	});
});