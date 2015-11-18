aom.ConfirmSelection = function(game){
	this.text = null;
	this.displayText = "Are you sure you want to select";
	this.style = null;
	this.backDrop = null;
	this.NorseBoard = null;
	this.GreekBoard = null;
	this.EgyptianBoard = null;
	this.NorseBoardInformation = null;
	this.EgyptianBoardInformation = null;
	this.GreekBoardInformation = null;
	this.Yes = null;
	this.No = null;
}

aom.ConfirmSelection.prototype = {

	preload: function(){
		this.NorseBoard = this.add.sprite(0,0, 'Norse');
		this.NorseBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.NorseBoard.scale.y = (this.game.height/2)/800;	//0.3771;
		this.NorseBoard.alpha = 0.75;

		this.GreekBoard = this.add.sprite(this.game.width/2,0, 'Greek');
		this.GreekBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.GreekBoard.scale.y = (this.game.height/2)/800;	//0.377;
		this.GreekBoard.alpha = 0.75;

		this.EgyptianBoard = this.add.sprite(0, this.game.height/2, 'Egyptian');
		this.EgyptianBoard.scale.x = (this.game.width/2)/900;	//0.45;
		this.EgyptianBoard.scale.y = (this.game.height/2)/800;	//0.375;
		this.EgyptianBoard.alpha = 0.75;

		if(aom.PlayerOne.PlayerBoard === 'Norse'){
			this.NorseBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'NorseInformation');
			this.NorseBoardInformation.scale.x = (this.world.width/2)/400;	//1.1;
			this.NorseBoardInformation.scale.y = (this.world.height/2)/300;	//1.1;
		}
		else if(aom.PlayerOne.PlayerBoard === 'Greek'){
			this.GreekBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'GreekInformation');
			this.GreekBoardInformation.scale.x = (this.world.width/2)/400;
			this.GreekBoardInformation.scale.y = (this.world.height/2)/300;
		}
		else{
			this.EgyptianBoardInformation = this.add.sprite(this.EgyptianBoard.width, this.GreekBoard.height, 'EgyptianInformation');
			this.EgyptianBoardInformation.scale.x = (this.world.width/2)/400;
			this.EgyptianBoardInformation.scale.y = (this.world.height/2)/300;
		}
	},


//--------------------------------------------------------Assigns the soil type to each board for checking where to place the selected tile---------------//


	NorseProductionAreaAssignment: function(obj){				
		for(var i = 0; i<16; i++){
			if(i===1 || i===2 || i===3 || i===7){
			 	obj.ProductionTile[i] = 'Mountain';
			}
			else if(i===0 || i===4 || i===15){
				obj.ProductionTile[i] = 'Fertile';
			}
			else if(i===5 || i===10 || i===13 || i===14){
				obj.ProductionTile[i] = 'Forest';
			}
			else if(i===6 || i===8 || i===11){
				obj.ProductionTile[i] = 'Hills';
			}
			else if(i===9){
				obj.ProductionTile[i] = 'Swamp';
			}
			else{
				obj.ProductionTile[i] = 'Desert';
			}
		}

	},

	GreekProductionAreaAssignment: function(obj){
		for(var i = 0; i<16; i++){
			if(i===4 || i===8 || i===9 || i===10 || i===11 || i===13 || i===14 || i===15){
				obj.ProductionTile[i] = 'Hills';
			}
			else if(i===0 || i===1 || i===6){
				obj.ProductionTile[i] = 'Fertile';
			}
			else if(i===2 || i===7){
				obj.ProductionTile[i] = 'Forest';
			}
			else if(i===3){
				obj.ProductionTile[i] = 'Swamp';
			}
			else if(i===5){
				obj.ProductionTile[i] = 'Mountain';
			}
			else{
				obj.ProductionTile[i] = 'Desert';
			}

		}
	},

	EgyptianProductionAreaAssignment: function(obj){
		for(var i = 0; i<16; i++){
			if(i===0 || i===1 || i===5 || i===8 || i===9 || i===12){
				obj.ProductionTile[i] = 'Desert';
			}
			else if(i===6 || i===7 || i===10 || i===11 || i===14){
				obj.ProductionTile[i] = 'Fertile';
			}
			else if(i===2 || i===3){
				obj.ProductionTile[i] = 'Swamp';
			}
			else if(i===13 || i===15){
				obj.ProductionTile[i] = 'Hills'
			}
			else{
				obj.ProductionTile[i] = 'Forest';
			}
		}
	},

//-----------------------------------------END-------------------------------------------------------------------//

	create: function(){
		this.backDrop = this.add.sprite(0,0,'Black');
		this.backDrop.scale.setTo(this.world.width/1280, this.world.height/720);
		this.backDrop.alpha = 0.75;
		this.world.bringToTop(this.backDrop);
		this.text = this.displayText + " " + aom.PlayerOne.Board + " ?";
		/*this.add.text(this.world.width/2, this.world.height/2, this.text, this.style).anchor.setTo(0.5,1);
		this.add.text((this.world.width/2 - this.world.width/8), (this.world.height/2 + this.world.height/8), "Yes", this.style);
		this.add.text((this.world.width/2 + this.world.width/8), (this.world.height/2 + this.world.height/8), "No", this.style);*/
		if(aom.PlayerOne.Board === 'Norse'){
			this.NorseBoardInformation = this.add.sprite(this.world.width/2, this.world.height/2, 'NorseInformation');
			this.NorseBoardInformation.anchor.setTo(0.5,0.5);
			this.NorseBoardInformation.scale.x = (this.world.width/2)/400;	//1.1;
			this.NorseBoardInformation.scale.y = (this.world.height/2)/300;	//1.1;
			this.NorseBoardInformation.alpha = 0.85

			this.style = { font: "200% Arial", fill: "#E29002", align: "center" };
			this.add.text(this.world.width/2, this.world.height/2, this.text, this.style).anchor.setTo(0.5,1);
			this.Yes = this.add.text((this.world.width/2 - this.world.width/16), (this.world.height/2 + this.world.height/16), "Yes", this.style);
			this.No = this.add.text((this.world.width/2 + this.world.width/16), (this.world.height/2 + this.world.height/16), "No", this.style);
			this.Yes.inputEnabled = true;
			this.Yes.input.useHandCursor = true;
			this.No.inputEnabled = true;
			this.No.input.useHandCursor = true;
			this.Yes.events.onInputDown.add(function(){
				aom.PlayerOne.Board = 'Norse';
				aom.PlayerOne.BoardSelectionConfirmed = true;


//-----------------------------------------Assigns selected board to each player-------------------------------------------------------------------//
				
				if(aom.NumberOfPlayers === aom.TotalNumberOfPlayers){
					
					this.state.start('ShowPlayerBoard');

				}
				else{
					switch(aom.NumberOfPlayers){
						case 0: 
							aom.PlayerOne.Board = 'Norse';
							aom.PlayerOne.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerOne);
							aom.PlayerTwo.Board = 'Egyptian';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerTwo);
							aom.PlayerThree.Board = 'Greek';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerThree);
							break;
						case 1:
							aom.PlayerTwo.Board = 'Norse';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerTwo);
							break;
						case 2:
							aom.PlayerThree.Board = 'Norse';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerThree);
							break;
						case 3:
							aom.PlayerFour.Board = 'Norse';
							aom.PlayerFour.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerFour);
							break;
						case 4:
							aom.PlayerFive.Board = 'Norse';
							aom.PlayerFive.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerFive);
							break;
						case 5:
							aom.PlayerSix.Board = 'Norse';
							aom.PlayerSix.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerSix);
							break;
						default:
							this.state.start('ShowPlayerBoard');
							break;
					}
					this.state.start('LoadBoard');
				}
				aom.NumberOfPlayers = aom.NumberOfPlayers + 1;
			}, this);
			this.No.events.onInputDown.add(function(){
				aom.PlayerOne.BoardSelectionConfirmed = false;
				aom.PlayerOne.PlayerBoard = null;
				console.log('Values Set');
				this.state.start('LoadBoard');
			}, this);

		}
		else if(aom.PlayerOne.Board === 'Greek'){
			this.GreekBoardInformation = this.add.sprite(this.world.width/2, this.world.height/2, 'GreekInformation');
			this.GreekBoardInformation.scale.x = (this.world.width/2)/400;
			this.GreekBoardInformation.scale.y = (this.world.height/2)/300;
			this.GreekBoardInformation.anchor.setTo(0.5,0.5);
			this.style = { font: "200% Arial", fill: "#E29002", align: "center" };
			this.add.text(this.world.width/2, this.world.height/2, this.text, this.style).anchor.setTo(0.5,1);
			this.Yes = this.add.text((this.world.width/2 - this.world.width/16), (this.world.height/2 + this.world.height/16), "Yes", this.style);
			this.No = this.add.text((this.world.width/2 + this.world.width/16), (this.world.height/2 + this.world.height/16), "No", this.style);
			this.Yes.inputEnabled = true;
			this.Yes.input.useHandCursor = true;
			this.No.inputEnabled = true;
			this.No.input.useHandCursor = true;
			this.Yes.events.onInputDown.add(function(){
				aom.PlayerOne.PlayerBoard = 'Greek';
				aom.PlayerOne.BoardSelectionConfirmed = true;
				
				if(aom.NumberOfPlayers === aom.TotalNumberOfPlayers){
					
					this.state.start('ShowPlayerBoard');
				}
				else{
					switch(aom.NumberOfPlayers){
						case 0: 
							aom.PlayerOne.Board = 'Greek';
							aom.PlayerOne.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerOne);
							aom.PlayerTwo.Board = 'Norse';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerTwo);
							aom.PlayerThree.Board = 'Egyptian';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerThree);
							break;
						case 1:
							aom.PlayerTwo.Board = 'Greek';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerTwo);
							break;
						case 2:
							aom.PlayerThree.Board = 'Greek';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerThree);
							break;
						case 3:
							aom.PlayerFour.Board = 'Greek';
							aom.PlayerFour.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerFour);
							break;
						case 4:
							aom.PlayerFive.Board = 'Greek';
							aom.PlayerFive.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerFive);
							break;
						case 5:
							aom.PlayerSix.Board = 'Greek';
							aom.PlayerSix.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerSix);
							break;
						default:
							this.state.start('ShowPlayerBoard');
							break;
					}
					this.state.start('LoadBoard');
				}
				aom.NumberOfPlayers = aom.NumberOfPlayers + 1;
			}, this);
			this.No.events.onInputDown.add(function(){
				aom.PlayerOne.BoardSelectionConfirmed = false;
				aom.PlayerOne.PlayerBoard = null;
				console.log('Values Set');
				this.state.start('LoadBoard');
			}, this);
		}
		else{
			this.EgyptianBoardInformation = this.add.sprite(this.world.width/2, this.world.height/2, 'EgyptianInformation');
			this.EgyptianBoardInformation.scale.x = (this.world.width/2)/400;
			this.EgyptianBoardInformation.scale.y = (this.world.height/2)/300;
			this.EgyptianBoardInformation.anchor.setTo(0.5,0.5);
			this.style = { font: "200% Arial", fill: "#352100", align: "center" };
			this.add.text(this.world.width/2, this.world.height/2, this.text, this.style).anchor.setTo(0.5,1);
			this.Yes = this.add.text((this.world.width/2 - this.world.width/16), (this.world.height/2 + this.world.height/16), "Yes", this.style);
			this.No = this.add.text((this.world.width/2 + this.world.width/16), (this.world.height/2 + this.world.height/16), "No", this.style);
			this.Yes.inputEnabled = true;
			this.Yes.input.useHandCursor = true;
			this.No.inputEnabled = true;
			this.No.input.useHandCursor = true;
			this.Yes.events.onInputDown.add(function(){
				aom.PlayerOne.PlayerBoard = 'Egyptian';
				aom.PlayerOne.BoardSelectionConfirmed = true;
				
				if(aom.NumberOfPlayers === aom.TotalNumberOfPlayers){
					
					this.state.start('ShowPlayerBoard');
				}
				else{
					switch(aom.NumberOfPlayers){
						case 0: 
							aom.PlayerOne.Board = 'Egyptian';
							aom.PlayerOne.BoardSelectionConfirmed = true;
							aom.PlayerTwo.Board = 'Norse';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.NorseProductionAreaAssignment(aom.PlayerTwo);
							aom.PlayerThree.Board = 'Greek';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.GreekProductionAreaAssignment(aom.PlayerThree);
							this.EgyptianProductionAreaAssignment(aom.PlayerOne);
							break;
						case 1:
							aom.PlayerTwo.Board = 'Egyptian';
							aom.PlayerTwo.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerTwo);
							break;
						case 2:
							aom.PlayerThree.Board = 'Egyptian';
							aom.PlayerThree.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerThree);
							break;
						case 3:
							aom.PlayerFour.Board = 'Egyptian';
							aom.PlayerFour.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerFour);
							break;
						case 4:
							aom.PlayerFive.Board = 'Egyptian';
							aom.PlayerFive.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerFive);
							break;
						case 5:
							aom.PlayerSix.Board = 'Egyptian';
							aom.PlayerSix.BoardSelectionConfirmed = true;
							this.EgyptianProductionAreaAssignment(aom.PlayerSix);
							break;
						default:
							this.state.start('ShowPlayerBoard');
							break;
					}
					this.state.start('LoadBoard');
				}
				aom.NumberOfPlayers = aom.NumberOfPlayers + 1;
			}, this);
			this.No.events.onInputDown.add(function(){
				aom.PlayerOne.BoardSelectionConfirmed = false;
				aom.PlayerOne.PlayerBoard = null;
				console.log('Values Set');
				this.state.start('LoadBoard');
			}, this);
		}


//-----------------------------------------END-------------------------------------------------------------------//

	}

	



};