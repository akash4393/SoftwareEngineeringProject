aom.LoadBoard = function(game){
	this.NorseBoard = null;
	this.GreekBoard = null;
	this.EgyptianBoard = null;
	this.NorseBoardInformation = null;
	this.EgyptianBoardInformation = null;
	this.GreekBoardInformation = null;
	this.backDrop;
	this.displayText;
	

};




aom.LoadBoard.prototype = {

	preload: function(){
		
		//this.add.tween(displayText).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true);

	},

	ShowPlayerNumber: function(){
		
		this.backDrop = this.add.sprite(0,0,'Black');
		this.backDrop.alpha = 0.8;
		var value = aom.NumberOfPlayers + 1;//aom.TotalNumberOfPlayers - aom.NumberOfPlayers + 1;
		if(value === aom.TotalNumberOfPlayers + 1){this.state.start('ShowPlayerBoard');}
		var text = "Player " + value + " select your Culture";
		var style = { font: "300% Ariel", fill: "#E29002", align: "center" };
		this.displayText = this.add.text(this.world.width/2, this.world.height/2, text, style);
		this.displayText.anchor.setTo(0.5, 0.5);
		this.world.bringToTop(this.displayText);
		this.add.tween(this.displayText).to({alpha: 1}, 10, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
			this.displayText.destroy();
			this.backDrop.destroy();
			this.DisplayAllBoards();
		}, this);
	},

	DisplayAllBoards: function(){

		var value = aom.NumberOfPlayers + 1;//aom.TotalNumberOfPlayers - aom.NumberOfPlayers + 1;
		var text = "Player " + value + " select your Culture";
		var style = { font: "300% Ariel", fill: "#E29002", align: "center" };
		var displayText = this.add.text(this.world.width/2+this.world.width/4, this.world.height/2+this.world.height/4, text, style);
		displayText.anchor.setTo(0.5, 0.5);
		this.world.bringToTop(displayText);

		this.NorseBoard = this.add.sprite(0,0, 'Norse');
		this.NorseBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.NorseBoard.scale.y = (this.game.height/2)/800;	//0.3771;
		this.NorseBoard.alpha = 0.75;
		this.NorseBoard.inputEnabled = true;
		this.NorseBoard.input.useHandCursor = true;
		this.NorseBoard.events.onInputOver.add(function(){
			this.world.bringToTop(this.NorseBoardInformation);
			this.world.bringToTop(this.NorseBoard);
			this.NorseBoardInformation.alpha = 1;
			this.NorseBoard.alpha = 1;
			this.NorseBoard.scale.x = (this.game.width/2)/(900-20);	//0.47;
			this.NorseBoard.scale.y = (this.game.height/2)/(800-20);		//0.3971;
		}, this);
		this.NorseBoard.events.onInputOut.add(function(){
			this.NorseBoard.alpha = 0.75;
			//this.NorseBoardInformation.alpha = 0;
			this.NorseBoard.scale.x = (this.game.width/2)/900;
			this.NorseBoard.scale.y = (this.game.height/2)/800;
		}, this);

		this.NorseBoard.events.onInputDown.add(function(){
			aom.PlayerOne.Board = 'Norse';
			this.state.start('ConfirmSelection');
			/*var boardName = "Norse"
			this.ConfirmSelection(boardName);*/
		}, this);

		
		this.GreekBoard = this.add.sprite(this.game.width/2,0, 'Greek');
		this.GreekBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.GreekBoard.scale.y = (this.game.height/2)/800;	//0.377;
		this.GreekBoard.alpha = 0.75;
		this.GreekBoard.inputEnabled = true;
		this.GreekBoard.input.useHandCursor = true;
		this.GreekBoard.events.onInputOver.add(function(){
			this.world.bringToTop(this.GreekBoardInformation);
			this.world.bringToTop(this.GreekBoard);
			this.GreekBoardInformation.alpha = 1;
			this.GreekBoard.alpha = 1;
			this.GreekBoard.scale.x = (this.game.width/2)/(900-20);
			this.GreekBoard.scale.y = (this.game.height/2)/(800-20);
		}, this);
		this.GreekBoard.events.onInputOut.add(function(){
			this.GreekBoard.alpha = 0.75;
			//this.GreekBoardInformation.alpha = 0;
			this.GreekBoard.scale.x = (this.game.width/2)/900;
			this.GreekBoard.scale.y = (this.game.height/2)/800;
		}, this);
		
		this.GreekBoard.events.onInputDown.add(function(){
			aom.PlayerOne.Board = 'Greek';
			this.state.start('ConfirmSelection');
		}, this);


		this.EgyptianBoard = this.add.sprite(0, this.game.height/2, 'Egyptian');
		this.EgyptianBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.EgyptianBoard.scale.y = (this.game.height/2)/800;	//0.375;
		this.EgyptianBoard.alpha = 0.75;
		this.EgyptianBoard.inputEnabled = true;
		this.EgyptianBoard.input.useHandCursor = true;
		this.EgyptianBoard.events.onInputOver.add(function(){
			this.world.bringToTop(this.EgyptianBoardInformation);
			this.world.bringToTop(this.EgyptianBoard);
			this.EgyptianBoard.alpha = 1;
			this.EgyptianBoardInformation.alpha = 1;
			this.EgyptianBoard.scale.x = (this.game.width/2)/(900-20);
			this.EgyptianBoard.scale.y = (this.game.height/2)/(800-20);
		}, this);
		this.EgyptianBoard.events.onInputOut.add(function(){
			this.EgyptianBoard.alpha = 0.75;
			//this.EgyptianBoardInformation.alpha = 0;
			this.EgyptianBoard.scale.x = (this.game.width/2)/900;
			this.EgyptianBoard.scale.y = (this.game.height/2)/800;
		}, this);

		this.EgyptianBoard.events.onInputDown.add(function(){
			aom.PlayerOne.Board = 'Egyptian';
			this.state.start('ConfirmSelection');
		}, this);

		this.NorseBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'NorseInformation');
		this.NorseBoardInformation.scale.x = (this.world.width/2)/400;	//1.1;
		this.NorseBoardInformation.scale.y = (this.world.height/2)/300;	//1.1;
		this.NorseBoardInformation.alpha = 0;
		this.EgyptianBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'EgyptianInformation');
		this.EgyptianBoardInformation.scale.x = (this.world.width/2)/400;
		this.EgyptianBoardInformation.scale.y = (this.world.height/2)/300;
		this.EgyptianBoardInformation.alpha = 0;
		this.GreekBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'GreekInformation');
		this.GreekBoardInformation.scale.x = (this.world.width/2)/400;
		this.GreekBoardInformation.scale.y = (this.world.height/2)/300;
		this.GreekBoardInformation.alpha = 0;
	},

	ConfirmSelection: function(boardName){
		var displayText = "Are you sure you want to select";
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
		var backDrop = this.add.sprite(0,0,'Black');
		backDrop.scale.setTo(this.world.width/1280, this.world.height/720);
		backDrop.alpha = 0.5;
		this.world.bringToTop(backDrop);
		if(boardName === 'Norse'){
			this.NorseBoardInformation = this.add.sprite(this.world.width/2, this.world.height/2, 'NorseInformation');
			this.NorseBoardInformation.anchor.setTo(0.5,0.5);
			this.NorseBoardInformation.scale.setTo(this.world.width/4, this.world.height/4);
			var text = displayText + boardName + " ?";
			this.add.text(this.world.width/2, this.world.height/2, text, style).anchor.setTo(0.5,0.5);
			this.add.text((this.NorseBoardInformation.world.x-(this.NorseBoardInformation.width/2))/2, (this.NorseBoardInformation.world.y+(this.NorseBoardInformation.height/2))/2, "Yes", style);
			this.add.text((this.NorseBoardInformation.world.x+(this.NorseBoardInformation.width/2))/2, (this.NorseBoardInformation.world.y+(this.NorseBoardInformation.height/2))/2, "No", style);

		}
		


	},
	

	create: function(){

		this.ShowPlayerNumber();
		

	},

	update: function(){

	}

};