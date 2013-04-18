ig.module( 
	'plugins.impact-splash-loader',
	'game.main' 
)
.requires(
	//Core
	'impact.game',
	'game.screens.screen_start' 
)
.defines(function(){
	ig.main( '#canvas', StartScreen, 60, 640, 480, 1,ig.ImpactSplashLoader);//开始画面
});
