<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Game</title>
	<style type="text/css">
		html,body {
			background-color: #000;
			color: #fff;
			font-family: helvetica, arial, sans-serif;
			margin: 0;
			padding: 0;
			font-size: 12pt;
		}
		
		#canvas,#panel {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			border: 1px solid #555;
		}
		#panel {width:640px;height:480px;}
		#gameStart{
			    background: url("media/ui/startBtn.png") no-repeat scroll 0 0 transparent;
			    border: medium none;
			    bottom: 0;
			    cursor: pointer;
			    height: 47px;
			    left: 50%;
			    margin-left: -66px;
			    position: absolute;
			    text-indent: -9999px;
			    width: 132px;
		}
		#gameStart:hover{background-position: 0 -48px;}
	</style>
 
	<script type="text/javascript" src="lib/impact/impact.js"></script>
	<script type="text/javascript" src="lib/game/main.js"></script>
</head>
<body>
	<canvas id="canvas"></canvas>
	<div id="panel"></div>
</body>
</html>
