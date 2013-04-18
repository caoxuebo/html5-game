/*传送*/
ig.module(
	'game.entities.deliver'
).requires(
	'impact.entity'
).defines(function(){
		EntityDeliver=ig.Entity.extend({
			size:{x:110,y:142},
			type:ig.Entity.TYPE.A,
			maxVel:{x:100,y:119},
			friction:{x:150,y:0},
			checkAgainst:ig.Entity.TYPE.A,
			collides:ig.Entity.COLLIDES.PASSIVE,
			animSheet:new ig.AnimationSheet('media/animate/icon_3005@2x.png',110,119),
		
			init:function(x,y,settings){
				this.parent(x,y,settings);
				this.addAnim('deliver',0.1,[0,1,2,3,4,5,6,7]);
			},
			update:function(){
				this.parent();
			},
			handleMovementTrace:function(res){
				this.parent(res);
			}
	});
}); 
 