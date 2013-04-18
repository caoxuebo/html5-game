ig.module(
	'game.entities.npc'
).requires(
	'impact.entity'
).defines(function(){
	//怪物
	EntityNpc=ig.Entity.extend({
		size:{x:60,y:100},
		maxVel:{x:100,y:100},
		friction:{x:150,y:0},
		type:ig.Entity.TYPE.A, 
		checkAgainst:ig.Entity.TYPE.A,
		collides:ig.Entity.COLLIDES.PASSIVE,
		health:10,
		speed:14,
		flip:false,
			
		animSheet:new ig.AnimationSheet('media/animate/npc_1000_34@2x.png',60,100),
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('npc',0.5,[1,3])
		},
		update:function(){ 
			this.parent();
		},
		handleMovementTrace:function(res){
			this.parent(res); 
		},
		check:function(other){
		 
		} 
	});
});