
ig.module(
	'game.screens.screen_main'
).requires(
	'impact.game',
	'impact.font',
	'plugins.empika.html_button',
	//'impact.debug.debug', 
	//deliver ����
	'game.entities.location',
	'game.entities.warp',
	'game.entities.deliver', 
	//Entities ʵ����
	'game.entities.protagonist',
	'game.entities.monster', 
	//npc
	'game.entities.npcrenwu',
	'game.entities.npc', 
	//Map ��ͼ
	'game.levels.map1',
	'game.levels.map2'
).defines(function(){
	 
	MyGame = ig.Game.extend({
		//gravity:300,//���� ��������
		spawnLocation:null,//�������λ��
		// Load a font
		font: new ig.Font( 'media/04b03.font.png' ),
		
		
		init: function() {
			this.spawnLocation = 'default';//����λ��
			//loadLevel �˷���ɾ������ʵ��ͱ�������ײ��ͼĿǰ��������Ϸ�͸�λ����Ļ����0��0֮ǰ�����µ�ʵ��͵�ͼ��
			this.loadLevel(LevelMap1); //���ش�Weltmeister�����levelObject
			
			this._mapWidth = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - (ig.system.width);//��ͼ��

	 
		},
		warp: function (levelObject, location) {
			this.spawnLocation = location;
			this.loadLevelDeferred(levelObject);
			console.log('warp:'+this.spawnLocation);
		},
		loadLevel:function(levelObject){
			this.parent(levelObject);
			//ָ�����ͣ��ַ���������󣩴���һ���µ�ʵ�壬��X��Y����������ӵ���Ϸ�����С��˷�������ʵ����Ĺ��캯����ֻ��������һ����
			//this.spawnEntity(EntityReticle,0,0);
			var location = this.getEntityByName(this.spawnLocation);
			
			if(location){
				//����ָ�����͵�һ���µ�ʵ�壨�ַ���������󣩲�������ӵ���Ϸ������X��Y���˷������õ�ʵ����Ĺ��캯��
				this.spawnEntity(EntityProtagonist,location.pos.x,location.pos.y);
				if(location.pos.x >= 600){
					this.screen.x = location.pos.x-500;// ���س�ʼ�� ��Ļλ��
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