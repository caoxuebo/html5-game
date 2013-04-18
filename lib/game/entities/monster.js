ig.module(
	'game.entities.monster'
).requires(
	'impact.entity'
).defines(function(){
	//怪物
	EntityMonster=ig.Entity.extend({
		size:{x:16,y:9},
		maxVel:{x:100,y:100},
		friction:{x:150,y:0},
		type:ig.Entity.TYPE.B, 
		checkAgainst:ig.Entity.TYPE.A,
		collides:ig.Entity.COLLIDES.PASSIVE,
		health:10,
		speed:14,
		flip:false,
			
		animSheet:new ig.AnimationSheet('media/uigame/moster.png',16,9),
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('crawl',0.08,[0,1,2])
		},
		update:function(){
			if(!ig.game.collisionMap.getTile(
				this.pos.x + (this.flip ? +4 : this.size.x -4),
				this.pos.y + this.size.y +1
				)
			){
				this.flip = !this.flip;
			}
			
			var xdir = this.flip ? -1 : 1;
			this.vel.x = this.speed * xdir;
			this.parent();
		},
		handleMovementTrace:function(res){
			this.parent(res);
			if(res.collision.x){
				this.flip = !this.flip;
			}
		},
		check:function(other){
			other.receiveDamage(10,this);
		} 
	});
});