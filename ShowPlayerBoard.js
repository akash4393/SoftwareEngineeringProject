aom.ShowPlayerBoard = function(game){

};

aom.ShowPlayerBoard.prototype = {

	preload: function(){
		console.log('Player Board Selected');
		/*this.HumanPlayerBoard = this.add.sprite(0,0,aom.PlayerOne.PlayerBoard);
		this.HumanPlayerBoard.scale.setTo((this.game.width/900), this.game.height/800);
*/
		this.add.sprite(0,0,aom.PlayerOne.Board).scale.setTo((this.game.width/900), this.game.height/800);
		console.log(aom.PlayerOne.Board);
		console.log(aom.PlayerTwo.Board);
		console.log(aom.PlayerThree.Board);
		console.log(aom.PlayerFour.Board);
		console.log(aom.PlayerFive.Board);
		console.log(aom.PlayerSix.Board);
		for(var i=0; i<16; i++){
			console.log(aom.PlayerTwo.ProductionTile[i]);
		}
		var tempText, tempBackDrop, tempStyle;
		tempBackDrop = this.add.sprite(0,0,'Black');
		tempBackDrop.scale.setTo(this.world.width/1280, this.world.height/720);
		tempBackDrop.alpha = 0.8;
		tempStyle = { font: "500% Arial", fill: "#E29002", align: "center" };
		tempText = this.add.text(this.world.width/2, this.world.height/2, "This is your (Player 1's) Board.", tempStyle);
		tempText.anchor.setTo(0.5, 0.5);
		this.add.tween(tempText).to({alpha: 1}, 10, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
			this.add.tween(tempText.scale).to({x: 0, y:0}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
			tempStyle = { font: "500% Arial", fill: "#E29002", align: "center" };
			var tempText = this.add.text(this.world.width/2, this.world.height/2, "Time to select Some Tiles!", tempStyle);
			tempText.anchor.setTo(0.5, 0.5);
			this.add.tween(tempText).to({alpha: 1}, 10, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
				this.add.tween(tempText.scale).to({x: 0, y: 0}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
				this.state.start('ProductionTileSelection');	
					}, this);
			
				}, this);
		
			}, this);
		}, this);





		
		//this.state.start('ProductionTileSelection');

	}



};