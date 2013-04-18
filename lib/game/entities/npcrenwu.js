//npc 任务
ig.module(
	'game.entities.npcrenwu'
).requires(
	'impact.entity'
).defines(function(){
		EntityNpcrenwu=ig.Entity.extend({
			size:{x:64,y:102},
			type:ig.Entity.TYPE.A,
			maxVel:{x:100,y:100},
			friction:{x:150,y:0},
			checkAgainst:ig.Entity.TYPE.A,
			collides:ig.Entity.COLLIDES.PASSIVE,
			animSheet:new ig.AnimationSheet('media/animate/npc_1000_1@2x.png',64,102),
		
			init:function(x,y,settings){
				this.parent(x,y,settings);
				this.addAnim('npc',1,[0,1]);
			},
			update:function(){
				this.parent();
			},
			handleMovementTrace:function(res){
				this.parent(res);
			}
	});
});