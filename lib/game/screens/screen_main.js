
ig.module(
	'game.screens.screen_main'
).requires(
	'impact.game',
	'impact.font',
	'plugins.empika.html_button',
	//'impact.debug.debug', 
	//deliver 传送
	'game.entities.location',
	'game.entities.warp',
	'game.entities.deliver', 
	//Entities 实体类
	'game.entities.protagonist',
	'game.entities.monster', 
	//npc
	'game.entities.npcrenwu',
	'game.entities.npc', 
	//Map 地图
	'game.levels.map1',
	'game.levels.map2'
).defines(function(){
	 
	MyGame = ig.Game.extend({
		//gravity:300,//重力 自由下落
		spawnLocation:null,//定义出来位置
		// Load a font
		font: new ig.Font( 'media/04b03.font.png' ),
		
		
		init: function() {
			this.spawnLocation = 'default';//出来位置
			//loadLevel 此方法删除所有实体和背景和碰撞地图目前存在于游戏和复位的屏幕坐标0，0之前创建新的实体和地图。
			this.loadLevel(LevelMap1); //加载从Weltmeister保存的levelObject
			
			this._mapWidth = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - (ig.system.width);//地图宽

	 
		},
		warp: function (levelObject, location) {
			this.spawnLocation = location;
			this.loadLevelDeferred(levelObject);
			console.log('warp:'+this.spawnLocation);
		},
		loadLevel:function(levelObject){
			this.parent(levelObject);
			//指定类型（字符串或类对象）创建一个新的实体，在X，Y，并把它添加到游戏世界中。此方法调用实体类的构造函数，只是像往常一样。
			//this.spawnEntity(EntityReticle,0,0);
			var location = this.getEntityByName(this.spawnLocation);
			
			if(location){
				//创建指定类型的一个新的实体（字符串或类对象）并将其添加到游戏世界在X，Y，此方法调用的实体类的构造函数
				this.spawnEntity(EntityProtagonist,location.pos.x,location.pos.y);
				if(location.pos.x >= 600){
					this.screen.x = location.pos.x-500;// 返回初始化 屏幕位置
				}
				//console.log('location:'+location.pos.x);
			}else{
				console.log(location);
			}
		},

		update: function() {
			// Update all entities and backgroundMaps
			this.parent();
			 
			var player = this.getEntitiesByType( EntityProtagonist )[0],
				xPos;
			
			if(player){
	                    xPos = player.pos.x - (ig.system.width / 2);
	                    this.screen.x = (xPos > 0 && xPos < this._mapWidth) ? xPos : this.screen.x; 
			}
			// Add your own, additional update code here
		},
		getPlayer:function(){
		//	return this.getEntitesByType(EntityProtagonist)[0];
		},
		draw: function() {
			// Draw all entities and backgroundMaps
	                this.parent(); 
			
		//	this.font.draw( 'keys,x ,c !',2,2 );
		}
	});
});