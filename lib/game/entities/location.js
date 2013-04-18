ig.module(
	'game.entities.location'
).requires(
	'impact.entity'
).defines(function(){
	EntityLocation = ig.Entity.extend({
		_wmScalable:true,//无论实体的大小可以在Weltmeister中改变。默认为false。
		_wmDrawBox:true,//无论Weltmeister应该画一个框，这个实体。的实体，在游戏中是不可见的，这是非常有用的。默认为false。
		_wmBoxColor:'rgba(0,255,0,0.5)',
		
		type:ig.Entity.TYPE.NONE,
		checkAgainst:ig.Entity.TYPE.A,
		size:{x:16,y:16}
	});
});