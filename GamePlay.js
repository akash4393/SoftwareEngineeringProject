aom.GamePlay = function(game) {
	this.Board = null;
	this.PlayerMenuButtons = [];
	this.ButtonSmall = null;
	this.PlayerMenuText = null;
	this.CounterForPlayerMenu = 0;
	this.NumberOfMovesComplete = 0;
	this.StartingPlayer = aom.PlayerOne;
	this.numberOfCardsToSelect = 4;
	this.numberOfCardsSelected = 0;
	this.CurrentTurnPlayer = aom.PlayerOne;
	this.DrawingCards = null;
	this.DisplayResourcesGroup = null;
	this.PlaceVictoryPointGroup = null;
	this.NorseRandomActionBackSprite = null;
	this.EgyptianRandomActionBackSprite = null;
	this.GreekRandomActionBackSprite = null;
	this.numberOfBuildings = null;
	this.numberOfRecruits = null;
	this.ResourceTrackerForTrade = 0;
	this.TilesSlectedByUser = null;
	this.TurnTracker = 0;
	this.CardsPlayedByPlayerOne = 0;
	this.CardsPlayedByPlayerTwo = 0;
	this.CardsPlayedByPlayerThree = 0;
	this.numberOfTilesOnVictoryCard1 = 0;
	this.numberOfTilesOnVictoryCard2 = 0;
	this.numberOfTilesOnVictoryCard3 = 0;
	this.numberOfTilesOnVictoryCard4 = 0;
	this.TheBankButtonTracker = 0;
	this.cardSelectedForBattle = 0;
	this.opponentIndex = 0;
	this.ButtonSmallClickCounter = 0;
	


};

aom.GamePlay.prototype = {

	/*preload: function(){

	},*/

//------------------------------------------------------------Display Player Board and Related Menu Buttons------------------------------------------//

	DisplayPlayerBoard: function(obj){

		this.Board = this.add.sprite(0, 0, obj.Board);
		this.Board.scale.setTo((this.world.width)/900, (this.world.height)/800);
		this.world.bringToTop(this.Board);
		
		this.DisplayTopMenuBar();
		this.BringSelectedTilesToTop(obj);
		//this.DisplayVictoryPointButton();
		//this.DisplayResources(obj);
		this.DisplayPlayerMenu();

	},

	DisplayTopMenuBar: function(){
		var temp;
		if(this.DisplayTopMenuBarGroup != undefined){
			this.DisplayTopMenuBarGroup.destroy();
			this.DisplayTopMenuBarGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0.8;
		temp.scale.setTo(this.world.width/1280, (this.world.height/34)/720);
		this.DisplayTopMenuBarGroup.add(temp);
		this.world.bringToTop(this.DisplayTopMenuBarGroup);
		this.DisplayVictoryPointButton();
		this.DisplayTheBankButton();
		this.DisplaySaveButton();
	},

	DisplayVictoryPointButton: function(){
		var temp;
		var tempStyle = { font: "180%% Arial", fill: "#E29002", align: "center" };
		if(this.DisplayVictoryPointButtonGroup != undefined){
			this.DisplayVictoryPointButtonGroup.destroy();
			this.DisplayVictoryPointButtonGroup = this.add.group();
		}
		temp = this.add.text((this.world.width*(2/4) + this.world.width/8), 0, "Victory Cards", tempStyle);
		temp.anchor.setTo(0.5, 0);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(this.DisplayVictoryPointCubes,this);
		this.DisplayVictoryPointButtonGroup.add(temp);
		this.world.bringToTop(this.DisplayVictoryPointButtonGroup);
	},

	DisplayTheBankButton: function(){
		var temp;
		var tempStyle = { font: "180%% Arial", fill: "#E29002", align: "center" };
		if(this.DisplayTheBankButtonGroup != undefined){
			this.DisplayTheBankButtonGroup.destroy();
			this.DisplayTheBankButtonGroup = this.add.group();
		}
		temp = this.add.text((this.world.width*(3/4) + this.world.width/8), 0, "The Bank", tempStyle);
		temp.anchor.setTo(0.5, 0);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			this.TheBankButtonTracker++;
			if(this.TheBankButtonTracker%2 === 0 && this.DisplayTheBankGroup != undefined){
				this.DisplayTheBankGroup.destroy();
			}
			else{
				this.DisplayTheBank();
			}
			this.DisplayTheBankButton();
		}, this);
		this.DisplayTheBankButtonGroup.add(temp);
		this.world.bringToTop(this.DisplayTheBankButtonGroup);

	},


	DisplaySaveButton: function(){
		var temp;
		var tempStyle = { font: "180%% Arial", fill: "#E29002", align: "center" };
		if(this.DisplaySaveButtonGroup != undefined){
			this.DisplaySaveButtonGroup.destroy();
			this.DisplaySaveButtonGroup = this.add.group();
		}
		temp = this.add.text((this.world.width*(0/4) + this.world.width/8), 0, "Save Game", tempStyle);
		temp.anchor.setTo(0.5, 0);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			/*console.log('sending data');									//Transmits PlayerOne, PlayerTwo and PlayerThree objects to the URL (Server's action handler)
        	$(function () {
            alert('Saving state');
            var url = "index";
            $.ajax({
                url: url,
                type: 'POST',
                data: JSON.stringify(aom.PlayerOne, aom.PlayerTwo, aom.PlayerThree),
                contentType: 'application/json'
                
//                success: function (data) {
//                    var obj = $.parseJSON(data);
//                    $(obj.test).each(function (index) {
//                        $('#result').append('type: ' + this.type + ', model: ' 
//                                + this.model + ', color: ' + this.color
//                                + '<br/>');
//                    });
//                }
            });
        });*/
        alert('State Saved!');
		},this);
		this.DisplaySaveButtonGroup.add(temp);
		this.world.bringToTop(this.DisplaySaveButtonGroup);
	},


	DisplayePlayerOneBoard: function(){
		this.BoardTwo.destroy();
		//console.log('Board two destroyed');
		this.BoardTwoProductionArea.destroy();
		this.BoardThree.destroy();
		this.BoardProductionAreaThree.destroy();
		this.SelectedProductionTileVisibleGroup.destroy();
		this.DisplayPlayerMenu();
		this.BringSelectedTilesToTop(aom.PlayerOne);

	},


	DisplayPlayerMenu: function(){

		var tempStyle = { font: "180%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text((this.world.width*(1/4) + this.world.width/8), this.world.height/15, "Player Two", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(0.5, 0);
				this.PlayerMenuButtons[1] = this.add.text((this.world.width*(1/4) + this.world.width/8), this.world.height/30, "Player Three", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(0.5, 0);
				
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite((this.world.width*(1/4) + this.world.width/8), 0, 'Black')
		this.ButtonSmall.scale.setTo((this.world.width/4)*(1/1280), (this.world.height/34)*(1/720));
		this.ButtonSmall.anchor.setTo(0.5,0);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "180% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text((this.world.width*(1/4) + this.world.width/8), 0, "Player Menu", tempStyle);
		this.PlayerMenuText.anchor.setTo(0.5, 0);
		this.world.bringToTop(this.PlayerMenuText);
		this.ButtonSmall.inputEnabled = true;
		
		this.ButtonSmall.events.onInputDown.add(function(){
			this.ButtonSmallClickCounter++;
			if(this.ButtonSmallClickCounter%2 === 0){

					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					this.add.tween(this.ButtonSmall.scale).to({x: (this.world.width/4)*(1/1280), y: (this.world.height/34)*(1/720)}, 500, Phaser.Easing.Linear.None, true);
			}
			else{
				this.add.tween(this.ButtonSmall.scale).to({x: (this.world.width/4)*(1/1280), y: (this.world.height/10)*(1/720)}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
				this.CounterForPlayerMenu = 0;
				//this.PlayerMenuButtons[0] = null;
				this.PlayerMenuButtons[0].alpha = 1;
				this.PlayerMenuButtons[1].alpha = 1;
				this.world.bringToTop(this.PlayerMenuButtons[0]);
				this.world.bringToTop(this.PlayerMenuButtons[1]);
				this.PlayerMenuButtons[0].inputEnabled = true;
				this.PlayerMenuButtons[1].inputEnabled = true;
				this.PlayerMenuButtons[0].events.onInputDown.add(function(){
					if(this.CounterForPlayerMenu === 0){
						this.PlayerMenuButtons[0].inputEnabled = false;
						//this.PlayerMenuButtons[0].destroy();
						//this.PlayerMenuButtons[1].destroy();
						//this.ButtonSmall.destroy();
						//this.PlayerMenuText.destroy();
						this.DisplayePlayerTwoBoard();
						console.log('checking the number of calls');
					}
					this.CounterForPlayerMenu = this.CounterForPlayerMenu + 1;
				}, this);
				this.PlayerMenuButtons[1].events.onInputUp.add(function(){
					if(this.CounterForPlayerMenu === 0){
						//this.PlayerMenuButtons[0].destroy();
						//this.PlayerMenuButtons[1].destroy();
						//this.ButtonSmall.destroy();
						//this.PlayerMenuText.destroy();
						this.DisplayePlayerThreeBoard();
					}
				
				}, this);

			

			}, this);
			}
			
		}, this);
		/*this.ButtonSmall.events.onInputOut.add(function(){
			this.add.tween(this.ButtonSmall).to({alpha: 0.6}, 4000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					
					this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.05}, 500, Phaser.Easing.Linear.None, true);
					
				
			}, this);
			
		}, this);*/
	},


	DisplayePlayerTwoBoard: function(){
		var tempStyle = { font: "250%% Arial", fill: "#E29002", align: "center" };
		var temp;
		if(this.DisplayePlayerTwoBoardGroup != undefined){
			this.DisplayePlayerTwoBoardGroup.destroy();
			this.DisplayePlayerTwoBoardGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, aom.PlayerTwo.Board);
		temp.scale.setTo(this.world.width/900, this.world.height/800);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		this.BringSelectedTilesToTop(aom.PlayerTwo);
		this.BringSelectedBuildingsToTop(aom.PlayerTwo);
		this.DisplayPlayerResources(aom.PlayerTwo);
		this.DisplayPlayerAge(aom.PlayerTwo);
		temp = this.add.sprite(this.world.width, 0, 'Black');
		temp.scale.setTo(this.world.width*(1/8)*(1/1280), this.world.height*(1/27)*(1/720));
		temp.alpha = 0.8;
		temp.anchor.setTo(1,0);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		temp = this.add.text(this.world.width*(7/8) + this.world.width/16, 0, "Done", tempStyle);
		temp.inputEnabled = true;
		temp.anchor.setTo(0.5,0);
		
		temp.events.onInputDown.add(function(){
			if(this.SelectedProductionTileVisibleGroup != undefined){
				this.SelectedProductionTileVisibleGroup.destroy();
			}
			if(this.SelectedBuildingsVisibleGroup != undefined){
				this.SelectedBuildingsVisibleGroup.destroy();
			}

			this.DisplayePlayerTwoBoardGroup.destroy();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
		}, this);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		this.world.bringToTop(this.DisplayePlayerTwoBoardGroup);
		this.world.bringToTop(this.SelectedProductionTileVisibleGroup);
		this.world.bringToTop(this.SelectedBuildingsVisibleGroup);


	/*


		this.SelectedProductionTileVisibleGroup.destroy();
		this.BoardTwo = this.add.sprite(this.world.width/2, this.world.height/2, aom.PlayerTwo.Board);
		this.BoardTwo.scale.setTo((this.world.width/2)/900, (this.world.height/2)/800);
		this.BoardTwoProductionArea = this.add.sprite(0, 0, aom.PlayerTwo.Board);
		this.BoardTwoProductionArea.scale.setTo(this.world.width/900, this.world.height/800);
		this.BringSelectedTilesToTop(aom.PlayerTwo);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text(930, 625, "My Board", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(1, 1);
				this.PlayerMenuButtons[1] = this.add.text(937,682.5, "Player Three", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(1, 1);
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite(960, 741, 'Black')
		this.ButtonSmall.scale.setTo(0.125, 0.05);
		this.ButtonSmall.anchor.setTo(1,1);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "200% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text(940, 740.5, "Player Menu", tempStyle);
		this.PlayerMenuText.anchor.setTo(1, 1);
		this.ButtonSmall.inputEnabled = true;
		
		this.ButtonSmall.events.onInputDown.add(function(){
			this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.25}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
				
				//this.PlayerMenuButtons[0] = null;
				this.PlayerMenuButtons[0].alpha = 1;
				this.PlayerMenuButtons[1].alpha = 1;
				this.world.bringToTop(this.PlayerMenuButtons[0]);
				this.world.bringToTop(this.PlayerMenuButtons[1]);
				this.PlayerMenuButtons[0].inputEnabled = true;
				this.PlayerMenuButtons[1].inputEnabled = true;
				this.CounterForPlayerMenu = 0;
				this.PlayerMenuButtons[0].events.onInputDown.add(function(){
					console.log('reached line 849');
					if(this.CounterForPlayerMenu === 0){
						console.log('reached line 851');
						this.PlayerMenuButtons[0].destroy();
						this.PlayerMenuButtons[1].destroy();
						this.ButtonSmall.destroy();
						this.PlayerMenuText.destroy();
						this.DisplayePlayerOneBoard();
						console.log('called display player one board');
					}
					this.CounterForPlayerMenu = this.CounterForPlayerMenu + 1;
				}, this);
				this.PlayerMenuButtons[1].events.onInputUp.add(function(){
					if(this.CounterForPlayerMenu === 0){
					this.PlayerMenuButtons[0].destroy();
					this.PlayerMenuButtons[1].destroy();
					this.ButtonSmall.destroy();
					this.PlayerMenuText.destroy();
					this.DisplayePlayerThreeBoard();
					}
					this.CounterForPlayerMenu = this.CounterForPlayerMenu + 1;
				}, this);

				

			}, this);
			
		}, this);
		this.ButtonSmall.events.onInputOut.add(function(){
			this.add.tween(this.ButtonSmall).to({alpha: 0.6}, 4000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					
					this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.05}, 500, Phaser.Easing.Linear.None, true);
					
				
			}, this);
			
		}, this);
		*/

	},


	DisplayePlayerThreeBoard: function(){

		var tempStyle = { font: "250%% Arial", fill: "#E29002", align: "center" };
		var temp;
		if(this.DisplayePlayerTwoBoardGroup != undefined){
			this.DisplayePlayerTwoBoardGroup.destroy();
			this.DisplayePlayerTwoBoardGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, aom.PlayerTwo.Board);
		temp.scale.setTo(this.world.width/900, this.world.height/800);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		this.BringSelectedTilesToTop(aom.PlayerThree);
		this.BringSelectedBuildingsToTop(aom.PlayerThree);
		this.DisplayPlayerResources(aom.PlayerTwo);
		this.DisplayPlayerAge(aom.PlayerTwo);
		temp = this.add.sprite(this.world.width, 0, 'Black');
		temp.scale.setTo(this.world.width*(1/8)*(1/1280), this.world.height*(1/27)*(1/720));
		temp.alpha = 0.8;
		temp.anchor.setTo(1,0);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		temp = this.add.text(this.world.width*(7/8) + this.world.width/16, 0, "Done", tempStyle);
		temp.inputEnabled = true;
		temp.anchor.setTo(0.5,0);
		
		temp.events.onInputDown.add(function(){
			if(this.SelectedProductionTileVisibleGroup != undefined){
				this.SelectedProductionTileVisibleGroup.destroy();
			}
			if(this.SelectedBuildingsVisibleGroup != undefined){
				this.SelectedBuildingsVisibleGroup.destroy();
			}
			this.DisplayePlayerTwoBoardGroup.destroy();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
		}, this);
		this.DisplayePlayerTwoBoardGroup.add(temp);
		this.world.bringToTop(this.DisplayePlayerTwoBoardGroup);
		this.world.bringToTop(this.SelectedProductionTileVisibleGroup);
		this.world.bringToTop(this.SelectedBuildingsVisibleGroup);



		/*this.SelectedProductionTileVisibleGroup.destroy();
		this.BoardThree = this.add.sprite(this.world.width/2, this.world.height/2, aom.PlayerThree.Board);
		this.BoardThree.scale.setTo((this.world.width/2)/900, (this.world.height/2)/800);
		this.BoardProductionAreaThree = this.add.sprite(0, 0, aom.PlayerThree.Board);
		this.BoardProductionAreaThree.scale.setTo(this.world.width/900, this.world.height/800);
		this.BringSelectedTilesToTop(aom.PlayerThree);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text(930, 625, "My Board", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(1, 1);
				this.PlayerMenuButtons[1] = this.add.text(937,682.5, "Player Two", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(1, 1);
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite(960, 741, 'Black')
		this.ButtonSmall.scale.setTo(0.125, 0.05);
		this.ButtonSmall.anchor.setTo(1,1);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "200% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text(940, 740.5, "Player Menu", tempStyle);
		this.PlayerMenuText.anchor.setTo(1, 1);
		this.ButtonSmall.inputEnabled = true;
		
		this.ButtonSmall.events.onInputDown.add(function(){
			this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.25}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
				
				//this.PlayerMenuButtons[0] = null;
				this.PlayerMenuButtons[0].alpha = 1;
				this.PlayerMenuButtons[1].alpha = 1;
				this.world.bringToTop(this.PlayerMenuButtons[0]);
				this.world.bringToTop(this.PlayerMenuButtons[1]);
				this.PlayerMenuButtons[0].inputEnabled = true;
				this.PlayerMenuButtons[1].inputEnabled = true;
				this.CounterForPlayerMenu = 0;
				this.PlayerMenuButtons[0].events.onInputDown.add(function(){
					console.log('reached line 951');
					if(this.CounterForPlayerMenu === 0){
						console.log('reached line 953');
						this.PlayerMenuButtons[0].destroy();
						this.PlayerMenuButtons[1].destroy();
						this.ButtonSmall.destroy();
						this.PlayerMenuText.destroy();
						this.DisplayePlayerOneBoard();
						console.log('called display player one board');
					}
					this.CounterForPlayerMenu = this.CounterForPlayerMenu + 1;
				}, this);
				this.PlayerMenuButtons[1].events.onInputDown.add(function(){
					if(this.CounterForPlayerMenu === 0){
					this.PlayerMenuButtons[0].destroy();
					this.PlayerMenuButtons[1].destroy();
					this.ButtonSmall.destroy();
					this.PlayerMenuText.destroy();
					this.DisplayePlayerTwoBoard();
					}
					this.CounterForPlayerMenu = this.CounterForPlayerMenu + 1;
				}, this);

				

			}, this);
			
		}, this);
		this.ButtonSmall.events.onInputOut.add(function(){
			this.add.tween(this.ButtonSmall).to({alpha: 0.6}, 4000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					
					this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.05}, 500, Phaser.Easing.Linear.None, true);
					
				
			}, this);
			
		}, this);*/
	},



	BringSelectedTilesToTop: function(obj){
		this.SelectedProductionTileVisibleGroup = this.add.group();
		for(var m = 0; m <16; m++){
			console.log(obj.SelectedProductionTile[m]);
		}
		var i = 0;
		var j;
		/*for(var i = 0; i < 16; i++){*/
		while(i < 16){
			j = i;
			/*for(var j = 0; j<16; j++){*/
				if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=0 && j < 4){
					temp = this.add.sprite(10*j + ((this.world.width/2)/4.3)*j , this.world.height/2,obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one1');
					console.log(obj.SelectedProductionTile[i].SpriteName);
					
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=4 && j < 8){
					temp = this.add.sprite( 10*(j-4) + ((this.world.width/2)/4.3)*(j-4), this.world.height/2 + (this.world.height/2)/4, obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one2');
					
					
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=8 && j < 12){
					temp = this.add.sprite( 10*(j-8) + ((this.world.width/2)/4.3)*(j-8), this.world.height/2 + 2*(this.world.height/2)/4,obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one3');
					
					
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=12 && j < 16){
					temp = this.add.sprite( 10*(j-12) + ((this.world.width/2)/4.3)*(j-12), this.world.height/2 + 3*(this.world.height/2)/4,obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one4');
					
					
				}
				/*console.log(i);
					console.log(j);*/
			/*}*/
			
			i = i + 1;//console.log(aom.PlayerOne.SelectedProductionTile[i]);
		}
		this.BringSelectedBuildingsToTop(obj);
	},


//------------------------------------------------------------Bring Selected Buildings to top------------------------------------------//

	BringSelectedBuildingsToTop: function(obj){
		if(this.SelectedBuildingsVisibleGroup != undefined){
			this.SelectedBuildingsVisibleGroup.destroy()
			
		}
		this.SelectedBuildingsVisibleGroup = this.add.group();
		var temp;
		var varx, vary;
		for(var m = 0; m <obj.CityBlock.length; m++){
			console.log(obj.CityBlock[m]);
		}
		for(var i = 0; i<obj.CityBlock.length; i++){
			if(i >= 0 && i<4){
				varx = this.world.width/2 + ((this.world.width/2)/4.5)*i;
				vary = this.world.height/2;
				temp = this.add.sprite(varx, vary, obj.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.anchor.setTo(0, 0);
				this.SelectedBuildingsVisibleGroup.add(temp);
			}
			if(i >= 4 && i<8){
				varx = this.world.width/2 + ((this.world.width/2)/4.5)*i;
				vary = this.world.height/2 + ((this.world.height/2)/4.3);
				temp = this.add.sprite(varx, vary, obj.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.anchor.setTo(0, 0);
				this.SelectedBuildingsVisibleGroup.add(temp);
			}
			if(i >= 8 && i<12){
				varx = this.world.width/2 + ((this.world.width/2)/4.5)*i;
				vary = this.world.height/2 + 2*(((this.world.height/2)/4.3));
				temp = this.add.sprite(varx, vary, obj.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.anchor.setTo(0, 0);
				this.SelectedBuildingsVisibleGroup.add(temp);
			}
			if(i >= 12 && i<16){
				varx = this.world.width/2 + ((this.world.width/2)/4.5)*i;
				vary = this.world.height/2 + 3*(((this.world.height/2)/4.3));
				temp = this.add.sprite(varx, vary, obj.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.anchor.setTo(0, 0);
				this.SelectedBuildingsVisibleGroup.add(temp);
			}
		}
		//this.BringSelectedBuildingsToTop(obj);
	},


//----------------------------------------------------------------Display player play card menu----------------------------------------------------//	

	DisplayPlayerCardsMenu: function(obj){
		if(this.CardSelectionBackDrop != undefined){
			this.CardSelectionBackDrop.destroy();
			this.CardSelectionBackDrop = this.add.group();
		}
		if(this.PlaceVictoryPointGroup != undefined){
			this.PlaceVictoryPointGroup.destroy();
		}
		this.PlaceVictoryPointGroup = this.add.group();
		/*for(var i = 0; i<this.PlaceVictoryPointGroup.length; i++){
			this.PlaceVictoryPointGroup.getAt(i).destroy();
		}*/
		

		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		var tempBackDrop;
		tempBackDrop = this.add.sprite(0,0, 'Black');
		tempBackDrop.alpha = 0.85;
		tempBackDrop.scale.setTo(this.world.width/1280, this.world.height/720);
		this.CardSelectionBackDrop.add(tempBackDrop);
		var tempPermanentText;
		tempPermanentText = this.add.text(this.world.width*(7/16), this.world.height*(1/20), "Permanent Deck", tempStyle);
		tempPermanentText.anchor.setTo(0.5, 0.5);
		this.CardSelectionBackDrop.add(tempPermanentText);
		var tempRandomText;
		tempRandomText = this.add.text(this.world.width*(15/16), this.world.height*(1/20), "Random Deck", tempStyle);
		tempRandomText.anchor.setTo(0.5, 0.5);
		this.CardSelectionBackDrop.add(tempRandomText);
		var tempHandText;
		tempHandText = this.add.text(this.world.width*(1/2), this.world.height*(11/20), "My Hand", tempStyle);
		tempHandText.anchor.setTo(0.5, 0.5);
		this.CardSelectionBackDrop.add(tempHandText);
		this.world.bringToTop(this.CardSelectionBackDrop);
		this.ShowPlayerCardsOnPlayerCardsMenu(obj);
	},

	ShowPlayerCardsOnPlayerCardsMenu: function(obj){
		
		var temp;
		console.log('gameplay line 382');
		if(obj.Board === 'Norse'){
			for(var i = 0; i<7; i++){
				if(aom.NorsePermanentActionCardDeck[i].IsNotInHand === 1){
					console.log('gameplay line 385');
					var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
					var valy = this.world.height*(6/20);
					temp = this.add.sprite(valx, valy, aom.NorsePermanentActionCardDeck[i].SpriteName);
					temp.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
					temp.alpha = aom.NorsePermanentActionCardDeck[i].IsNotInHand;
					temp.anchor.setTo(0, 0.5);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(this.AssignCardToPlayerHand, this);
					this.CardSelectionBackDrop.add(temp);
				}
				
			}
			var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
			var valy = this.world.height*(6/20);
			this.NorseRandomActionBackSprite = this.add.sprite(valx, valy, 'NorseRandomActionBack');
			this.NorseRandomActionBackSprite.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
			this.NorseRandomActionBackSprite.anchor.setTo(0, 0.5);
			this.NorseRandomActionBackSprite.inputEnabled = true;
			this.NorseRandomActionBackSprite.events.onInputDown.add(function(){
				/*for(var i = 0; i<aom.NorseRandomActionCardDeck.length; i++){
					console.log(i);
					console.log(aom.NorseRandomActionCardDeck[i]);
					console.log(aom.NorseRandomActionCardDeck[i].IsNotInHand);
				}*/
				var temp = this.rnd.integerInRange(0, 40);
				console.log(temp);
				while(aom.NorseRandomActionCardDeck[temp].IsNotInHand != 1){
					temp = this.rnd.integerInRange(0, (aom.NorseRandomActionCardDeck.length - 1));
				}
				aom.NorseRandomActionCardDeck[temp].IsNotInHand = 0;
				var tempObject;
				tempObject = this.add.sprite(this.world.width, this.world.height, aom.NorseRandomActionCardDeck[temp].SpriteName);
				tempObject.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				tempObject.anchor.setTo(0, 0.5);
				var valx, valy;
				valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected + 1))+(this.world.width/100)*(this.numberOfCardsSelected + 1);
				valy = this.NorseRandomActionBackSprite.y + this.world.height/2;
				this.add.tween(this.NorseRandomActionBackSprite).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					console.log(tempObject.key);
					var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
					var valy = this.world.height*(6/20);
					this.add.tween(this.NorseRandomActionBackSprite).to({x: valx, y: valy}, 1, Phaser.Easing.Linear.None, true)
					this.AssignCardToPlayerHand(tempObject);
				}, this);
				
				//console.log('selected card');
			}, this);
			this.CardSelectionBackDrop.add(this.NorseRandomActionBackSprite);
		}

		else if(obj.Board === 'Egyptian'){
			for(var i = 0; i<7; i++){
				console.log('gameplay line 385');
				var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
				var valy = this.world.height*(6/20);
				temp = this.add.sprite(valx, valy, aom.EgyptianPermanentActionCardDeck[i].SpriteName);
				temp.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				temp.alpha = aom.EgyptianPermanentActionCardDeck[i].IsNotInHand;
				temp.anchor.setTo(0, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(this.AssignCardToPlayerHand, this);
				this.CardSelectionBackDrop.add(temp);
				
			}
			var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
			var valy = this.world.height*(6/20);
			this.EgyptianRandomActionBackSprite = this.add.sprite(valx, valy, 'EgyptianRandomActionBack');
			this.EgyptianRandomActionBackSprite.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
			this.EgyptianRandomActionBackSprite.anchor.setTo(0, 0.5);
			this.EgyptianRandomActionBackSprite.inputEnabled = true;
			this.EgyptianRandomActionBackSprite.events.onInputDown.add(function(){
				var temp = this.rnd.integerInRange(0, 37);
				console.log(temp);
				while(aom.EgyptianRandomActionCardDeck[temp].IsNotInHand != 1){
					temp = this.rnd.integerInRange(0, (aom.EgyptianRandomActionCardDeck.length - 1));
				}
				aom.EgyptianRandomActionCardDeck[temp].IsNotInHand = 0;
				var tempObject;
				tempObject = this.add.sprite(this.world.width, this.world.height, aom.EgyptianRandomActionCardDeck[temp].SpriteName);
				tempObject.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				tempObject.anchor.setTo(0, 0.5);
				var valx, valy;
				valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected + 1))+(this.world.width/100)*(this.numberOfCardsSelected + 1);
				valy = this.EgyptianRandomActionBackSprite.y + this.world.height/2;
				this.add.tween(this.EgyptianRandomActionBackSprite).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					console.log(tempObject.key);
					var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
					var valy = this.world.height*(6/20);
					this.add.tween(this.EgyptianRandomActionBackSprite).to({x: valx, y: valy}, 1, Phaser.Easing.Linear.None, true)
					this.AssignCardToPlayerHand(tempObject);
				}, this);
			}, this);
			this.CardSelectionBackDrop.add(this.EgyptianRandomActionBackSprite);
		}

		else if(obj.Board === 'Greek'){
			for(var i = 0; i<7; i++){
				console.log('gameplay line 385');
				var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
				var valy = this.world.height*(6/20);
				temp = this.add.sprite(valx, valy, aom.GreekPermanentActionCardDeck[i].SpriteName);
				temp.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				temp.alpha = aom.GreekPermanentActionCardDeck[i].IsNotInHand;
				temp.anchor.setTo(0, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(this.AssignCardToPlayerHand, this);
				this.CardSelectionBackDrop.add(temp);
				
			}
			var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
			var valy = this.world.height*(6/20);
			this.GreekRandomActionBackSprite = this.add.sprite(valx, valy, 'GreekRandomActionBack');
			this.GreekRandomActionBackSprite.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
			this.GreekRandomActionBackSprite.anchor.setTo(0, 0.5);
			this.GreekRandomActionBackSprite.inputEnabled = true;
			this.GreekRandomActionBackSprite.events.onInputDown.add(function(){
				var temp = this.rnd.integerInRange(0, 41);
				console.log(temp);
				while(aom.GreekRandomActionCardDeck[temp].IsNotInHand != 1){
					temp = this.rnd.integerInRange(0, (aom.GreekRandomActionCardDeck.length - 1));
				}
				aom.GreekRandomActionCardDeck[temp].IsNotInHand = 0;
				var tempObject;
				tempObject = this.add.sprite(this.world.width, this.world.height, aom.GreekRandomActionCardDeck[temp].SpriteName);
				tempObject.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				tempObject.anchor.setTo(0, 0.5);
				var valx, valy;
				valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected + 1))+(this.world.width/100)*(this.numberOfCardsSelected + 1);
				valy = this.GreekRandomActionBackSprite.y + this.world.height/2;
				this.add.tween(this.GreekRandomActionBackSprite).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					console.log(tempObject.key);
					var valx = ((((3/4)*this.world.width/8))*8.5)+(this.world.width/100)*8.5;
					var valy = this.world.height*(6/20);
					this.add.tween(this.GreekRandomActionBackSprite).to({x: valx, y: valy}, 1, Phaser.Easing.Linear.None, true)
					this.AssignCardToPlayerHand(tempObject);
				}, this);
			}, this);
			this.CardSelectionBackDrop.add(this.GreekRandomActionBackSprite);
		}
		this.world.bringToTop(this.CardSelectionBackDrop);
		this.DisplayCardsInHand(this.CurrentTurnPlayer);
		if(this.CurrentTurnPlayer.IsAI === 1 && this.CurrentTurnPlayer.Board === 'Norse'){
			var rnd1 = 10;
			var rnd2 = 7;//this.rnd.integerInRange(4,10);
			var rnd3 = 5;//rnd1 - this.rnd.integerInRange(1, 2);//this.rnd.integerInRange(4,10);
			var rnd4 = this.rnd.integerInRange(8,9);;//rnd1 + 2;// this.rnd.integerInRange(4,10);

			var count = 0;
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd1).key === aom.NorsePermanentActionCardDeck[i].SpriteName && aom.NorsePermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd1).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd1));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd2).key === aom.NorsePermanentActionCardDeck[i].SpriteName && aom.NorsePermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd2).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd2));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd3).key === aom.NorsePermanentActionCardDeck[i].SpriteName && aom.NorsePermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd3).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd3));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd4).key === aom.NorsePermanentActionCardDeck[i].SpriteName && aom.NorsePermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd4).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd4));
					count++;
				}

			}
			while(count != this.CurrentTurnPlayer.Age){
				this.CardSelectionBackDrop.getAt(11).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(11));	
				count++;
				console.log('random card');
			}

		}
		else if(this.CurrentTurnPlayer.IsAI === 1 && this.CurrentTurnPlayer.Board === 'Egyptian'){
			var rnd1 = 10;
			var rnd2 = 7;//this.rnd.integerInRange(4,10);
			var rnd3 = 5;//rnd1 - this.rnd.integerInRange(1, 2);//this.rnd.integerInRange(4,10);
			var rnd4 = this.rnd.integerInRange(8,9);;//rnd1 + 2;// this.rnd.integerInRange(4,10);
			var count = 0;
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd1).key === aom.EgyptianPermanentActionCardDeck[i].SpriteName && aom.EgyptianPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd1).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd1));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd2).key === aom.EgyptianPermanentActionCardDeck[i].SpriteName && aom.EgyptianPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd2).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd2));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd3).key === aom.EgyptianPermanentActionCardDeck[i].SpriteName && aom.EgyptianPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd3).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd3));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd4).key === aom.EgyptianPermanentActionCardDeck[i].SpriteName && aom.EgyptianPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd4).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd4));
					count++;
				}

			}
			while(count != this.CurrentTurnPlayer.Age){
				this.CardSelectionBackDrop.getAt(11).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(11));	
				count++;
				console.log('random card');
			}

		}
		else if(this.CurrentTurnPlayer.IsAI === 1 && this.CurrentTurnPlayer.Board === 'Greek'){
			var rnd1 = 10;
			var rnd2 = 7;//this.rnd.integerInRange(4,10);
			var rnd3 = 5;//rnd1 - this.rnd.integerInRange(1, 2);//this.rnd.integerInRange(4,10);
			var rnd4 = this.rnd.integerInRange(8,9);;//rnd1 + 2;// this.rnd.integerInRange(4,10);
			var count = 0;
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd1).key === aom.GreekPermanentActionCardDeck[i].SpriteName && aom.GreekPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd1).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd1));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd2).key === aom.GreekPermanentActionCardDeck[i].SpriteName && aom.GreekPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd2).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd2));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd3).key === aom.GreekPermanentActionCardDeck[i].SpriteName && aom.GreekPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd3).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd3));
					count++;
				}

			}
			for(var i = 0; i<7; i++){
				if(this.CardSelectionBackDrop.getAt(rnd4).key === aom.GreekPermanentActionCardDeck[i].SpriteName && aom.GreekPermanentActionCardDeck[i].IsNotInHand === 1){
					this.CardSelectionBackDrop.getAt(rnd4).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(rnd4));
					count++;
				}

			}
			while(count != this.CurrentTurnPlayer.Age){
				this.CardSelectionBackDrop.getAt(11).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(11));	
				count++;
				console.log('random card');
			}	

		}
		/*this.CardSelectionBackDrop.getAt(5).events.onInputDown.dispatch(this.CardSelectionBackDrop.getAt(5));
		console.log('passing click event to ');
		console.log(this.CardSelectionBackDrop.getAt(5));*/
		/*for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
			console.log(this.CurrentTurnPlayer.CardsSelected[i]);
		}*/

	},

	AssignCardToPlayerHand: function(obj){
		console.log(obj);

		if(this.numberOfCardsSelected < this.numberOfCardsToSelect - 1){
			console.log(this.numberOfCardsToSelect);
			console.log(this.numberOfCardsSelected);
			for(var i = 0; i<7; i++){
				if(obj.key === aom.NorsePermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.NorsePermanentActionCardDeck[i];
					aom.NorsePermanentActionCardDeck[i].IsNotInHand = 0;
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(this.DisplayCardsInHand, this);
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.EgyptianPermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.EgyptianPermanentActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(this.DisplayCardsInHand, this);
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.GreekPermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.GreekPermanentActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(this.DisplayCardsInHand, this);
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}
			for(var i = 0; i<aom.NorseRandomActionCardDeck.length; i++){
				if(obj.key === aom.NorseRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.NorseRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}
			for(var i = 0; i<aom.EgyptianRandomActionCardDeck.length; i++){
				if(obj.key === aom.EgyptianRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.EgyptianRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.GreekRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.GreekRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}

		}
		else if(this.numberOfCardsSelected = this.numberOfCardsToSelect - 1){
			console.log(this.numberOfCardsToSelect);
			console.log(this.numberOfCardsSelected);
			for(var i = 0; i<7; i++){
				if(obj.key === aom.NorsePermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.NorsePermanentActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
						this.DisplayCardsInHand();
						this.DrawingCards = 0;
						this.PlayerMove(this.CurrentTurnPlayer);
						//this.PickACardToPlay();
					}, this);
					
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.EgyptianPermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.EgyptianPermanentActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
						this.DisplayCardsInHand();
						this.DrawingCards = 0;
						this.PlayerMove(this.CurrentTurnPlayer);
						//this.PickACardToPlay();
					}, this);
					
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.GreekPermanentActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.GreekPermanentActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.add.tween(obj).to({x: valx, y: (obj.y+this.world.height/2)}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
						this.DisplayCardsInHand();
						this.DrawingCards = 0;
						this.PlayerMove(this.CurrentTurnPlayer);
						//this.PickACardToPlay();
					}, this);
					
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}
			for(var i = 0; i<aom.NorseRandomActionCardDeck.length; i++){
				if(obj.key === aom.NorseRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.NorseRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					this.DrawingCards = 0;
					this.PlayerMove(this.CurrentTurnPlayer);
					//this.PickACardToPlay();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}
			for(var i = 0; i<aom.EgyptianRandomActionCardDeck.length; i++){
				if(obj.key === aom.EgyptianRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.EgyptianRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					this.DrawingCards = 0;
					this.PlayerMove(this.CurrentTurnPlayer);
					//this.PickACardToPlay();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
				else if(obj.key === aom.GreekRandomActionCardDeck[i].SpriteName){
					this.DrawingCards = 1;
					this.CurrentTurnPlayer.CardsSelected[this.numberOfCardsSelected] = aom.GreekRandomActionCardDeck[i];
					this.numberOfCardsSelected = this.numberOfCardsSelected + 1;
					var valx = ((((3/4)*this.world.width/8))*(this.numberOfCardsSelected))+(this.world.width/100)*(this.numberOfCardsSelected);
					this.DisplayCardsInHand();
					this.DrawingCards = 0;
					this.PlayerMove(this.CurrentTurnPlayer);
					//this.PickACardToPlay();
					
					//this.numberOfCardsToSelect = this.numberOfCardsToSelect - 1;
				}
			}
		}
		else{
			for(var i=0; i<4; i++){
				console.log(aom.PlayerOne.CardsSelected[i]);
				this.DrawingCards = 0;
				//this.PickACardToPlay();
				this.PlayerMove(this.CurrentTurnPlayer);
			}
		}
		//this.add.tween(obj).to({x:  , y: }, 1000, Phaser.Easing.Linear.None, true);


	},


	DisplayCardsInHand: function(){
		if(this.CardsInHandGroup != undefined){
			this.CardsInHandGroup.destroy();
			this.CardsInHandGroup = this.add.group();
		}

		if(this.DrawingCards === 0){
			
			var tempBackDrop;
			tempBackDrop = this.add.sprite(0,this.world.height/2, 'Black');
			tempBackDrop.alpha = 0.85;
			tempBackDrop.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
			this.CardsInHandGroup.add(tempBackDrop);
			var tempHandText;
			var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
			tempHandText = this.add.text(this.world.width*(1/2), this.world.height*(11/20), "My Hand", tempStyle);
			tempHandText.anchor.setTo(0.5, 0.5);
			this.CardsInHandGroup.add(tempHandText);
			
		}
		
		for(var i = 0; i<7; i++){
			
			if(this.CurrentTurnPlayer.CardsSelected[i] != undefined){
				var valx = ((((3/4)*this.world.width/8))*(i+1))+(this.world.width/100)*(i+1);
				var valy = (this.world.height*(6/20)) + (this.world.height/2);
				var temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.CardsSelected[i].SpriteName);
				temp.scale.setTo(((3/4)*this.world.width/8)/470, this.world.height*(8/20)*(1/670));
				temp.anchor.setTo(0, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(obj){
					console.log('function to call when playing this card');
					console.log(obj);
					this.RecognizeCardSelectedToPlay(obj);
				}, this);
				this.CardsInHandGroup.add(temp);

			}
		}
		this.world.bringToTop(this.CardsInHandGroup);


	},


//-------------------------------------------------------------------Card Play Mechanism-------------------------------------------//


	PickACardToPlay: function(){
		if(this.CardSelectionBackDrop.length != 0 && this.CardSelectionBackDrop != undefined){
			this.CardSelectionBackDrop.destroy();
		}
		this.CardSelectionBackDrop = this.add.group();
		for(var i = 0; i<this.CardsInHandGroup.length; i++){
			this.CardsInHandGroup.getAt(i).destroy();
		}
		this.DisplayCardsInHand();


	},


	RecognizeCardSelectedToPlay: function(obj){
		switch(obj.key.charAt(0)){
			case 'N':
				console.log('Recognized as Norse Card')
				this.NorseCardPlayed(obj);
				
				break;
			case 'G':
				this.GreekCardPlayed(obj);
				break;
			case 'E':
				console.log('line 757');
				this.EgyptianCardPlayed(obj);
				break;
			default:
				break;
		}


	},


	NorseCardPlayed: function(obj){
		switch(obj.key.charAt(5)){
			case 'B':
				this.NorseBuildCardPlayed(obj);
				console.log('769')
				break;
			case 'T':
				console.log('recognized as trade card');
				this.NorseTradeCardPlayed(obj);
				break;
			case 'A':
				this.NorseAttackCardPlayed(obj);
				break;
			case 'N':
				this.NorseNextAgeCardPlayed(obj);
				break;
			case 'R':
				this.NorseRecruitCardPlayed(obj);
				break;
			case 'E':
				this.NorseExploreCardPlayed(obj);
				break;
			case 'G':
				this.NorseGatherCardPlayed(obj);
				break;
			default:
				break;
		}
	},


	EgyptianCardPlayed: function(obj){
		switch(obj.key.charAt(8)){
			case 'B':
				console.log('line 801');
				this.EgyptianBuildCardPlayed(obj);
				break;
			case 'T':
				this.EgyptianTradeCardPlayed(obj);
				break;
			case 'A':
				this.EgyptianAttackCardPlayed(obj);
				break;
			case 'N':
				this.EgyptianNextAgeCardPlayed(obj);
				break;
			case 'R':
				this.EgyptianRecruitCardPlayed(obj);
				break;
			case 'E':
				this.EgyptianExploreCardPlayed(obj);
				break;
			case 'G':
				this.EgyptianGatherCardPlayed(obj);
				break;
			default:
				break;
		}
	},


	GreekCardPlayed: function(obj){
		switch(obj.key.charAt(5)){
			case 'B':
				this.GreekBuildCardPlayed(obj);
				break;
			case 'T':
				this.GreekTradeCardPlayed(obj);
				break;
			case 'A':
				this.GreekAttackCardPlayed(obj);
				break;
			case 'N':
				this.GreekNextAgeCardPlayed(obj);
				break;
			case 'R':
				this.GreekRecruitCardPlayed(obj);
				break;
			case 'E':
				this.GreekExploreCardPlayed(obj);
				break;
			case 'G':
				this.GreekGatherCardPlayed(obj);
				break;
			default:
				break;
		}
	},


//--------------------------------------------------------------------Attack Card Handlers---------------------------------------------------//


	NorseAttackCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseAttackPermanentAction':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(4, obj);
				break;
			case 'NorseAttackRandomCard1':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'NorseAttackRandomCard3':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(6, obj);
				break;
			case 'NorseAttackRandomCard4':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(7, obj);
				break;
			case 'NorseAttackRandomCard5':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'NorseAttackRandomCard6':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(7, obj);
				break;
			case 'NorseAttackRandomCard8':
				if(this.CurrentTurnPlayer.Favor >= 2){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 2;
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackGodCard(7, obj);
				}
				else{
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackCard(7, obj);
				}
				break;
		}
	},

	EgyptianAttackCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianAttackPermanentAction':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(4, obj);
				break;
			case 'EgyptianAttackRandomCard1':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'EgyptianAttackRandomCard3':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'EgyptianAttackRandomCard5':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(7, obj);
				break;
			case 'EgyptianAttackRandomCard6':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(6, obj);
				break;
			case 'EgyptianAttackRandomCard7':
				if(this.CurrentTurnPlayer.Favor >= 3){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 3;
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackGod1Card(8, obj);
				}
				else{
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackCard(6, obj);
				}

				break;
			
		}
	},


	GreekAttackCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekAttackPermanentAction':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(4, obj);
				break;
			case 'GreekAttackRandomCard1':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(6, obj);
				break;
			case 'GreekAttackRandomCard4':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(6, obj);
				break;
			case 'GreekAttackRandomCard5':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'GreekAttackRandomCard6':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(5, obj);
				break;
			case 'GreekAttackRandomCard7':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(7, obj);
				break;
			case 'GreekAttackRandomCard8':
				this.cardSelectedForBattle = 0;
				this.opponentIndex = 0;
				this.AttackCard(7, obj);
				break;
			case 'GreekAttackRandomCard3':
				if(this.CurrentTurnPlayer.Favor >= 3){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 3;
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackGod1Card(8, obj);
				}
				else{
					this.cardSelectedForBattle = 0;
					this.opponentIndex = 0;
					this.AttackCard(6, obj);
				}
				break;
		}
	},


	AttackCard: function(unitsAllowed, cardObject){
		var location, x;
		x = cardObject;
		var temp;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		switch(this.CurrentTurnPlayer.Board){
			case aom.PlayerOne.Board:
				temp = this.add.sprite(0, this.world.height/2, 'Black');
				temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
				temp.alpha = 0.8;
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(1/4), (this.world.height*(5/8)), aom.PlayerTwo.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerTwo, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerTwo, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerTwo, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(3/4), (this.world.height*(5/8)), aom.PlayerThree.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerThree, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerThree, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackCardHandler(unitsAllowed, aom.PlayerThree, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				break;
				
		}
		this.world.bringToTop(this.AttackCardMenuGroup);


	},

	AttackCardHandler: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		if(this.cardSelectedForBattle < unitsAllowed){
			//alert('Entered line 1226');
			temp = this.add.sprite(0, 0, 'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height/720);
			temp.alpha = 0.8;
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Select upto " + unitsAllowed + " Units", tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Currently selected " + this.cardSelectedForBattle + " Units", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height - this.world.height/20, "Start Battle", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.StartBattle(unitsAllowed, opponent, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
			for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
				if(i>=0 && i<3){	
					valx = this.world.width*(i/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(temp){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=3 && i<6){	
					valx = this.world.width*((i-3)/6);
					valy = this.world.height/2+ this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=6 && i<9){	
					valx = this.world.width*((i - 3)/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=9 && i<12){	
					valx = this.world.width*((i - 6)/6);
					valy = this.world.height/2 + this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
			}
		}
		else{
			this.StartBattle(unitsAllowed, opponent, region, cardObject);
		}
		
		this.world.bringToTop(this.AttackCardMenuGroup);
	},


	StartBattle: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, this.world.height/2, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
		temp.alpha = 0.8;
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Select A Unit for Battle", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width - this.world.width/20, this.world.height/2, "Retreat", tempStyle);
		temp.anchor.setTo(1, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			this.BattleOver(this.CurrentTurnPlayer, opponent, region, cardObject);
		}, this);
		this.AttackCardMenuGroup.add(temp);
		for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
			valx = this.world.width*((i)/6);
			valy = this.world.height/2+ this.world.height/4;
			temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName);
			temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
			temp.anchor.setTo(0, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(temp){
				var loc;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
					if(temp.key === this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName){
						loc = i;
					}
				}
				this.BattleBegin(loc, opponent, unitsAllowed, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<unitsAllowed; i++){
			if(opponent.BattleCardsSelected[i] != undefined){
				opponent.CardsSelectedForCurrentBattle[i] = opponent.BattleCardsSelected[i];
				opponent.BattleCardsSelected.IsSelectedForBattle = 1; 
			}
		}

	},

	BattleBegin: function(cardIndex, opponent, unitsAllowed, region, cardObject){
		var location, x;
		//x = cardObject;
		var val1 = [];
		var val2 = [];
		var temp, valx, valy, numberOfDicePlayer, numberOfDiceOpponent, numberOfSixPlayer, numberOfSixOpponent;
		numberOfSixPlayer = 0;
		numberOfSixOpponent = 0;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0.8;
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.sprite(this.world.width/2, this.world.height*(3/4), this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].SpriteName);
		temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
		temp.anchor.setTo(0.5, 0.5);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.sprite(this.world.width/2, this.world.height*(1/4), opponent.CardsSelectedForCurrentBattle[this.opponentIndex].SpriteName);
		temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
		temp.anchor.setTo(0.5, 0.5);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "BATTLE FIELD", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.AttackCardMenuGroup.add(temp);
		numberOfDicePlayer = this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].NumberOfDice;
		numberOfDiceOpponent = opponent.CardsSelectedForCurrentBattle[this.opponentIndex].NumberOfDice;
		//alert(numberOfDice);
		for(var i = 0; i<numberOfDicePlayer; i++){
			val1[i] = this.rnd.integerInRange(1,6);
		}
		for(var i = 0; i<numberOfDicePlayer; i++){
			valx = this.world.width*((i+1)/(numberOfDicePlayer + 2));
			valy = this.world.height - this.world.height/20;
			console.log(val1[i]);
			temp = this.add.text(valx, valy, val1[i], tempStyle);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<numberOfDicePlayer; i++){
			if(val1[i] === 6){
				numberOfSixPlayer++;
			}

		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			val2[i] = this.rnd.integerInRange(1,6);
		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			valx = this.world.width*((i+1)/(numberOfDiceOpponent + 2));
			valy = 0 + this.world.height/20;
			console.log(val2[i]);
			temp = this.add.text(valx, valy, val2[i], tempStyle);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			if(val2[i] === 6){
				numberOfSixOpponent++;
			}

		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0;
		this.add.tween(temp).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
			if(numberOfSixPlayer < numberOfSixOpponent){
				alert('You Lost');
				
				for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
					if(this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].SpriteName === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName){
						this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle = 0;

					}
				}
				this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.splice(cardIndex, 1);
				if(this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length === 0){
					this.BattleOver(this.CurrentTurnPlayer, opponent, region, cardObject);
				}
				else{
					this.StartBattle(unitsAllowed, opponent, region, cardObject);
				}
			}
			else if(numberOfSixPlayer > numberOfSixOpponent){
				alert('Victory');
				for(var i = 0; i<opponent.BattleCardsSelected.length; i++){
					if(opponent.CardsSelectedForCurrentBattle[this.opponentIndex].SpriteName === opponent.BattleCardsSelected[i].SpriteName){
						opponent.BattleCardsSelected[i].IsSelectedForBattle = 0;

					}
				}
				//opponent.CardsSelectedForCurrentBattle.splice(this.opponentIndex, 1);
				this.opponentIndex++;
				if(opponent.CardsSelectedForCurrentBattle[this.opponentIndex] === undefined){
					this.BattleOver(opponent, this.CurrentTurnPlayer, region, cardObject);
				}
				else{
					this.StartBattle(unitsAllowed, opponent, region, cardObject);
				}
			}
			else if(numberOfSixPlayer === numberOfSixOpponent){
				alert('Draw. Rolling Again.');
				this.BattleBegin(cardIndex, opponent, unitsAllowed, region, cardObject);
			}
		}, this);
		
		this.world.bringToTop(this.AttackCardMenuGroup);
	},

	BattleOver: function(loser, winner, region, cardObject){
		var location, x;
		x = cardObject;

		console.log(loser);
		switch(winner.IsAI){
			case 1:
				if(loser.Food >= 5){
					winner.Food = winner.Food + 5;
					loser.Food = loser.Food - 5;
				}
				else{
					loser.Food = loser.Food + winner.Food;
					winner.Food = winner.Food - winner.Food;
				}
				if(loser.Wood >= 5){
					winner.Wood = winner.Wood + 5;
					loser.Wood = loser.Wood - 5;
				}
				else{
					loser.Wood = loser.Wood + winner.Wood;
					winner.Wood = winner.Wood - winner.Wood;
				}
				if(loser.Gold >= 5){
					winner.Gold = winner.Gold + 5;
					loser.Gold = loser.Gold - 5;
				}
				else{
					loser.Gold = loser.Gold + winner.Gold;
					winner.Gold = winner.Gold - winner.Gold;
				}
				if(loser.Favor >= 5){
					winner.Favor = winner.Favor + 5;
					loser.Favor = loser.Favor - 5;
				}
				else{
					loser.Favor = loser.Favor + winner.Favor;
					winner.Favor = winner.Favor - winner.Favor;
				}
				winner.VictoryCubes = this.numberOfTilesOnVictoryCard2;
				this.numberOfTilesOnVictoryCard2 = 0;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				break;
			case 0:
				this.HumanPlayerWinner(loser, winner, region, cardObject);
				break;
		}
			
		
	},

	HumanPlayerWinner: function(loser, winner, region, cardObject){
		var location, x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		switch(region){
			case 'City Area':
				temp = this.add.sprite(0, this.world.height/2, 'Black');
				temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
				temp.alpha = 0.85;
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width - this.world.width/20, this.world.height, "Done", tempStyle);
				temp.anchor.setTo(1, 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				}, this);
				this.AttackCardMenuGroup.add(temp);
				if(loser.CityBlock.length != 0){
					for(var i = 0; i<loser.CityBlock.length; i++){
						if(i>=0 && i<7){
							valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
							valy = this.world.height/2;
							temp = this.add.sprite(valx, valy, loser.CityBlock[i].SpriteName);
							temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
							temp.inputEnabled = true;
							temp.events.onInputDown.add(function(temp){
								for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
									if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
										for(var j = 0; j<41; j++){
											if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
												aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
											}
										}
										for(var m = 0; m<37; m++){
											if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
												aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
											}
										}
										for(var l = 0; l<42; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
										for(var n = 0; n<7; n++){
											if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
												aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
												aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
												aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
											}
										}
										location = i;
										console.log(location);
									}
								}
								this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
								this.AttackCardMenuGroup.destroy();
								this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
								this.DisplayCardsInHand();
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
								this.CurrentTurnPlayer.CardsPlayed++;
								this.PlayerPlayedACard();
							}, this);
						}
						else if(i>=7 && i<14){
							valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
							valy = this.world.height/2 + this.world.height/20 + ((this.world.height/2)/4.3);
							temp = this.add.sprite(valx, valy, loser.CityBlock[i].SpriteName);
							temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
							temp.inputEnabled = true;
							temp.events.onInputDown.add(function(temp){
								for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
									if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
										for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
										for(var n = 0; n<7; n++){
											if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
												aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
												aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
												aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
											}
										}
										location = i;
										console.log(location);
									}
								}
								this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
								this.AttackCardMenuGroup.destroy();
								this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
								this.DisplayCardsInHand();
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
								this.CurrentTurnPlayer.CardsPlayed++;
								this.PlayerPlayedACard();
							}, this);
						}
					}
				}
				else{
					alert('Opponent has no buildings to destroy');
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				}
				break;
			case 'Production Area':
				temp = this.add.sprite(0, this.world.height/2, 'Black');
				temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
				temp.alpha = 0.85;
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width - this.world.width/20, this.world.height, "Done", tempStyle);
				temp.anchor.setTo(1, 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				}, this);
				this.AttackCardMenuGroup.add(temp);
				if(loser.SelectedProductionTile.length != 0){
					for(var i = 0; i<16; i++){
						if(i>=0 && i<8 && loser.SelectedProductionTile[i] != undefined){
							valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
							valy = this.world.height/2;
							temp = this.add.sprite(valx, valy, loser.SelectedProductionTile[i].SpriteName);
							temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
							temp.inputEnabled = true;
							temp.events.onInputDown.add(function(temp){
								for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
									if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
										for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
										for(var n = 0; n<7; n++){
											if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
												aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
												aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
												aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
											}
										}
										location = i;
										console.log(location);
									}
								}
								this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
								this.AttackCardMenuGroup.destroy();
								this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
								this.DisplayCardsInHand();
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
								this.CurrentTurnPlayer.CardsPlayed++;
								this.PlayerPlayedACard();
							}, this);
						}
						else if(i>=8 && i<16 && loser.SelectedProductionTile[i] != undefined){
							valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
							valy = this.world.height/2 + this.world.height/20 + ((this.world.height/2)/4.3);
							temp = this.add.sprite(valx, valy, loser.SelectedProductionTile[i].SpriteName);
							temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
							temp.inputEnabled = true;
							temp.events.onInputDown.add(function(temp){
								for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
									if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
										for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
										for(var n = 0; n<7; n++){
											if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
												aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
												aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
											}
											else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
												aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
											}
										}
										location = i;
										console.log(location);
									}
								}
								this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
								this.AttackCardMenuGroup.destroy();
								this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
								this.DisplayCardsInHand();
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
								this.CurrentTurnPlayer.CardsPlayed++;
								this.PlayerPlayedACard();
							}, this);
						}
					}
				}
				else{
					alert('Opponent has no production tiles to destroy');
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				}
				break;
				case 'Holding Area':
					if(loser.Food >= 5){
						winner.Food = winner.Food + 5;
						loser.Food = loser.Food - 5;
					}
					else{
						loser.Food = loser.Food + winner.Food;
						winner.Food = winner.Food - winner.Food;
					}
					if(loser.Wood >= 5){
						winner.Wood = winner.Wood + 5;
						loser.Wood = loser.Wood - 5;
					}
					else{
						loser.Wood = loser.Wood + winner.Wood;
						winner.Wood = winner.Wood - winner.Wood;
					}
					if(loser.Gold >= 5){
						winner.Gold = winner.Gold + 5;
						loser.Gold = loser.Gold - 5;
					}
					else{
						loser.Gold = loser.Gold + winner.Gold;
						winner.Gold = winner.Gold - winner.Gold;
					}
					if(loser.Favor >= 5){
						winner.Favor = winner.Favor + 5;
						loser.Favor = loser.Favor - 5;
					}
					else{
						loser.Favor = loser.Favor + winner.Favor;
						winner.Favor = winner.Favor - winner.Favor;
					}
					winner.VictoryCubes = this.numberOfTilesOnVictoryCard2;
					this.numberOfTilesOnVictoryCard2 = 0;
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
						if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
							for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
							for(var n = 0; n<7; n++){
								if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
									aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
									aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
								}
								else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
									aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
								}
							}
							location = i;
							console.log(location);
						}
					}
					this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
					this.AttackCardMenuGroup.destroy();
					this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
					this.DisplayCardsInHand();
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.CurrentTurnPlayer.CardsPlayed++;
					this.PlayerPlayedACard();
				break;
		}
	},


	AttackGodCard: function(unitsAllowed, cardObject){
		var location, x;
		x = cardObject;
		var temp;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		switch(this.CurrentTurnPlayer.Board){
			case aom.PlayerOne.Board:
				temp = this.add.sprite(0, this.world.height/2, 'Black');
				temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
				temp.alpha = 0.8;
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(1/4), (this.world.height*(5/8)), aom.PlayerTwo.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerTwo, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerTwo, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerTwo, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(3/4), (this.world.height*(5/8)), aom.PlayerThree.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerThree, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerThree, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGodCardHandler(unitsAllowed, aom.PlayerThree, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				break;
				
		}
		this.world.bringToTop(this.AttackCardMenuGroup);


	},


	AttackGodCardHandler: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		if(this.cardSelectedForBattle < unitsAllowed){
			//alert('Entered line 1226');
			temp = this.add.sprite(0, 0, 'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height/720);
			temp.alpha = 0.8;
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Select upto " + unitsAllowed + " Units", tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Currently selected " + this.cardSelectedForBattle + " Units", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height - this.world.height/20, "Start Battle", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.StartGodBattle(unitsAllowed, opponent, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
			for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
				if(i>=0 && i<3){	
					valx = this.world.width*(i/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(temp){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGodCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=3 && i<6){	
					valx = this.world.width*((i-3)/6);
					valy = this.world.height/2+ this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGodCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=6 && i<9){	
					valx = this.world.width*((i - 3)/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGodCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=9 && i<12){	
					valx = this.world.width*((i - 6)/6);
					valy = this.world.height/2 + this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGodCardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
			}
		}
		else{
			this.StartGodBattle(unitsAllowed, opponent, region, cardObject);
		}
		
		this.world.bringToTop(this.AttackCardMenuGroup);
	},


	StartGodBattle: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, this.world.height/2, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
		temp.alpha = 0.8;
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Select A Unit for Battle", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width - this.world.width/20, this.world.height/2, "Retreat", tempStyle);
		temp.anchor.setTo(1, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			this.BattleOver(this.CurrentTurnPlayer, opponent, region, cardObject);
		}, this);
		this.AttackCardMenuGroup.add(temp);
		for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
			valx = this.world.width*((i)/6);
			valy = this.world.height/2+ this.world.height/4;
			temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName);
			temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
			temp.anchor.setTo(0, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(temp){
				var loc;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
					if(temp.key === this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName){
						loc = i;
					}
				}
				this.BattleGodBegin(loc, opponent, unitsAllowed, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<unitsAllowed; i++){
			if(opponent.BattleCardsSelected[i] != undefined){
				opponent.CardsSelectedForCurrentBattle[i] = opponent.BattleCardsSelected[i];
				opponent.BattleCardsSelected.IsSelectedForBattle = 1; 
			}
		}

	},

	BattleGodBegin: function(cardIndex, opponent, unitsAllowed, region, cardObject){
		var location, x;
		//x = cardObject;
		var val1 = [];
		var val2 = [];
		var temp, valx, valy, numberOfDicePlayer, numberOfDiceOpponent, numberOfSixPlayer, numberOfSixOpponent;
		numberOfSixPlayer = 0;
		numberOfSixOpponent = 0;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0.8;
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.sprite(this.world.width/2, this.world.height*(3/4), this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].SpriteName);
		temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
		temp.anchor.setTo(0.5, 0.5);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.sprite(this.world.width/2, this.world.height*(1/4), opponent.CardsSelectedForCurrentBattle[this.opponentIndex].SpriteName);
		temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
		temp.anchor.setTo(0.5, 0.5);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "BATTLE FIELD", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.AttackCardMenuGroup.add(temp);
		numberOfDicePlayer = this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].NumberOfDice + 1;
		numberOfDiceOpponent = opponent.CardsSelectedForCurrentBattle[this.opponentIndex].NumberOfDice;
		//alert(numberOfDice);
		for(var i = 0; i<numberOfDicePlayer; i++){
			val1[i] = this.rnd.integerInRange(1,6);
		}
		for(var i = 0; i<numberOfDicePlayer; i++){
			valx = this.world.width*((i+1)/(numberOfDicePlayer + 2));
			valy = this.world.height - this.world.height/20;
			console.log(val1[i]);
			temp = this.add.text(valx, valy, val1[i], tempStyle);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<numberOfDicePlayer; i++){
			if(val1[i] === 6){
				numberOfSixPlayer++;
			}

		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			val2[i] = this.rnd.integerInRange(1,6);
		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			valx = this.world.width*((i+1)/(numberOfDiceOpponent + 2));
			valy = 0 + this.world.height/20;
			console.log(val2[i]);
			temp = this.add.text(valx, valy, val2[i], tempStyle);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<numberOfDiceOpponent; i++){
			if(val2[i] === 6){
				numberOfSixOpponent++;
			}

		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0;
		this.add.tween(temp).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
			if(numberOfSixPlayer < numberOfSixOpponent){
				alert('You Lost');
				
				for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
					if(this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[cardIndex].SpriteName === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName){
						this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle = 0;

					}
				}
				this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.splice(cardIndex, 1);
				if(this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length === 0){
					this.BattleOver(this.CurrentTurnPlayer, opponent, region, cardObject);
				}
				else{
					this.StartGodBattle(unitsAllowed, opponent, region, cardObject);
				}
			}
			else if(numberOfSixPlayer > numberOfSixOpponent){
				alert('Victory');
				for(var i = 0; i<opponent.BattleCardsSelected.length; i++){
					if(opponent.CardsSelectedForCurrentBattle[this.opponentIndex].SpriteName === opponent.BattleCardsSelected[i].SpriteName){
						opponent.BattleCardsSelected[i].IsSelectedForBattle = 0;

					}
				}
				//opponent.CardsSelectedForCurrentBattle.splice(this.opponentIndex, 1);
				this.opponentIndex++;
				if(opponent.CardsSelectedForCurrentBattle[this.opponentIndex] === undefined){
					this.BattleOver(opponent, this.CurrentTurnPlayer, region, cardObject);
				}
				else{
					this.StartGodBattle(unitsAllowed, opponent, region, cardObject);
				}
			}
			else if(numberOfSixPlayer === numberOfSixOpponent){
				alert('Draw. Rolling Again.');
				this.BattleGodBegin(cardIndex, opponent, unitsAllowed, region, cardObject);
			}
		}, this);
		
		this.world.bringToTop(this.AttackCardMenuGroup);
	},


	AttackGod1Card: function(unitsAllowed, cardObject){
		var location, x;
		x = cardObject;
		var temp;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		switch(this.CurrentTurnPlayer.Board){
			case aom.PlayerOne.Board:
				temp = this.add.sprite(0, this.world.height/2, 'Black');
				temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
				temp.alpha = 0.8;
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(1/4), (this.world.height*(5/8)), aom.PlayerTwo.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerTwo, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerTwo, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(1/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerTwo.Board === 'Egyptian'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Greek'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerTwo.Board === 'Norse'){
						aom.PlayerTwo.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerTwo.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerTwo, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text(this.world.width*(3/4), (this.world.height*(5/8)), aom.PlayerThree.Board, tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(9/12), "City Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerThree, 'City Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(10/12), "Production Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.Playertwo.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerThree, 'Production Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				temp = this.add.text( this.world.width*(3/4), this.world.height*(11/12), "Holding Area", tempStyle);
				temp.anchor.setTo(0.5, 0.5);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(){
					if(aom.PlayerThree.Board === 'Egyptian'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.EgyptianBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.EgyptianBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Greek'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.GreekBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.GreekBattleCards[1];
					}
					else if(aom.PlayerThree.Board === 'Norse'){
						aom.PlayerThree.BattleCardsSelected[0] = aom.NorseBattleCards[0];
						aom.PlayerThree.BattleCardsSelected[1] = aom.NorseBattleCards[1];
					}
					this.AttackGod1CardHandler(unitsAllowed, aom.PlayerThree, 'Holding Area', cardObject);
				}, this);
				this.AttackCardMenuGroup.add(temp);
				break;
				
		}
		this.world.bringToTop(this.AttackCardMenuGroup);


	},


	AttackGod1CardHandler: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		if(this.cardSelectedForBattle < unitsAllowed){
			//alert('Entered line 1226');
			temp = this.add.sprite(0, 0, 'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height/720);
			temp.alpha = 0.8;
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Select upto " + unitsAllowed + " Units", tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/4, "Currently selected " + this.cardSelectedForBattle + " Units", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.AttackCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height - this.world.height/20, "Start Battle", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.StartGod1Battle(unitsAllowed, opponent, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
			for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
				if(i>=0 && i<3){	
					valx = this.world.width*(i/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(temp){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGod1CardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=3 && i<6){	
					valx = this.world.width*((i-3)/6);
					valy = this.world.height/2+ this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGod1CardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=6 && i<9){	
					valx = this.world.width*((i - 3)/6);
					valy = this.world.height/2;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGod1CardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
				else if(i>=9 && i<12){	
					valx = this.world.width*((i - 6)/6);
					valy = this.world.height/2 + this.world.height/4;
					temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName);
					temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
					temp.alpha = (1 - this.CurrentTurnPlayer.BattleCardsSelected[i].IsSelectedForBattle)*(-1);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						var loc;
						for(var i = 0; i<this.CurrentTurnPlayer.BattleCardsSelected.length; i++){
							if(temp.key === this.CurrentTurnPlayer.BattleCardsSelected[i].SpriteName)
								loc = i;
						}
						this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length] = this.CurrentTurnPlayer.BattleCardsSelected[loc];
						this.cardSelectedForBattle ++;
						this.CurrentTurnPlayer.BattleCardsSelected[loc].IsSelectedForBattle = 1;
						this.AttackGod1CardHandler(unitsAllowed, opponent, region, cardObject);
					}, this);
					this.AttackCardMenuGroup.add(temp);
				}
			}
		}
		else{
			this.StartGod1Battle(unitsAllowed, opponent, region, cardObject);
		}
		
		this.world.bringToTop(this.AttackCardMenuGroup);
	},


	StartGod1Battle: function(unitsAllowed, opponent, region, cardObject){
		var location, x;
		x = cardObject;
		var temp, valx, valy;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.AttackCardMenuGroup != undefined){
			this.AttackCardMenuGroup.destroy();
			this.AttackCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, this.world.height/2, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
		temp.alpha = 0.8;
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Select A Unit for Battle", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.AttackCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width - this.world.width/20, this.world.height/2, "Retreat", tempStyle);
		temp.anchor.setTo(1, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			this.BattleOver(this.CurrentTurnPlayer, opponent, region, cardObject);
		}, this);
		this.AttackCardMenuGroup.add(temp);
		for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
			valx = this.world.width*((i)/6);
			valy = this.world.height/2+ this.world.height/4;
			temp = this.add.sprite(valx, valy, this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName);
			temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
			temp.anchor.setTo(0, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(temp){
				var loc;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelectedForCurrentBattle.length; i++){
					if(temp.key === this.CurrentTurnPlayer.CardsSelectedForCurrentBattle[i].SpriteName){
						loc = i;
					}
				}
				this.BattleBegin(loc, opponent, unitsAllowed, region, cardObject);
			}, this);
			this.AttackCardMenuGroup.add(temp);
		}
		for(var i = 0; i<unitsAllowed - 2; i++){
			if(opponent.BattleCardsSelected[i] != undefined){
				opponent.CardsSelectedForCurrentBattle[i] = opponent.BattleCardsSelected[i];
				opponent.BattleCardsSelected.IsSelectedForBattle = 1; 
			}
		}

	},


//-------------------------------------------------------------------Explore Card Handlers-----------------------------------------------------//

	NorseExploreCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseExplorePermanentAction':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 4;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard1':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard2':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 4;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard3':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard5':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard6':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'NorseExploreRandomCard4':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.TurnTracker = 0;
					this.numberTilesToSelect = 3;
					this.TilesSlectedByUser = 0;
					this.ExploreGodCardPlayed(obj);
				}
				else{
					this.TurnTracker = 0;
					this.numberTilesToSelect = 3;
					this.TilesSlectedByUser = 0;
					this.ExploreCardPlayed(obj);
				}
				break;

		}
	},	

	EgyptianExploreCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianExplorePermanentAction':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 4;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			/*case 'EgyptianExploreRandomCard1':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;*/
			case 'EgyptianExploreRandomCard2':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'EgyptianExploreRandomCard3':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'EgyptianExploreRandomCard4':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'EgyptianExploreRandomCard5':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'EgyptianExploreRandomCard1':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer - 1;
					this.TurnTracker = 0;
					this.numberTilesToSelect = 5;
					this.TilesSlectedByUser = 0;
					this.ExploreGod1CardPlayed(obj);
				}
				else{
					this.TurnTracker = 0;
					this.numberTilesToSelect = 5;
					this.TilesSlectedByUser = 0;
					this.ExploreCardPlayed(obj);
				}
				break;

		}
	},	

	GreekExploreCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekExplorePermanentAction':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 4;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			/*case 'GreekExploreRandomCard1':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;*/
			case 'GreekExploreRandomCard2':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'GreekExploreRandomCard3':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 5;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'GreekExploreRandomCard4':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'GreekExploreRandomCard5':
				this.TurnTracker = 0;
				this.numberTilesToSelect = 3;
				this.TilesSlectedByUser = 0;
				this.ExploreCardPlayed(obj);
				break;
			case 'GreekExploreRandomCard1':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer - 1;
					this.TurnTracker = 0;
					this.numberTilesToSelect = 5;
					this.TilesSlectedByUser = 0;
					this.ExploreGod1CardPlayed(obj);
				}
				else{
					this.TurnTracker = 0;
					this.numberTilesToSelect = 5;
					this.TilesSlectedByUser = 0;
					this.ExploreCardPlayed(obj);
				}
				break;

		}
	},	


	ExploreCardPlayed: function(cardObject){
		var location, x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.ExploreCardMenuGroup != undefined){
			this.ExploreCardMenuGroup.destroy();
			this.ExploreCardMenuGroup = this.add.group();
		}
		console.log('Playing explore card');
		this.CardsInHandGroup.destroy();
		temp = this.add.sprite(this.world.width/2, this.world.height, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/20)/720);
		temp.alpha = 0.85;
		temp.anchor.setTo(0, 1);
		this.ExploreCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), this.world.height, "Done", tempStyle);
		temp.anchor.setTo(0.5, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.ExploreCardMenuGroup.destroy();
				this.TilesToDisplay.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}, this);
		this.ExploreCardMenuGroup.add(temp);
		this.world.bringToTop(this.ExploreCardMenuGroup);
		this.DisplayTiles();
	},

	DisplayTiles: function(){
		this.TilesToDisplay = this.add.group();
		
		var TileToDisplay;
		var i;
		var temp1, temp2;
		var random1, random2;

		random1 = this.rnd.integerInRange(0, 19);
		
		temp1 = aom.Tiles[random1];

		for(var i = 0; i<20; i++){
			if(i === random1){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random1; j<20; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}
		random2 = this.rnd.integerInRange(0, 18);
		
		temp2 = aom.Tiles[random2];
		for(var i = 0; i<19; i++){
			if(i === random2){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random2; j<19; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}

		for(i=0; i<18; i++){
			if(i>=0 && i<6){
				var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
				TileToDisplay = this.add.sprite(valx, this.world.height/100, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoard, this, i);
			}
			else if(i>=6 && i < 12){
				var valx = ((((3/4)*this.world.width/8))*(i-6))+(this.world.width/100)*(i-6);
				var valy =	(this.world.height/7) + (this.world.height/40);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoard, this, i);
			}
			else if(i>=12 && i < 18){
				var valx = ((((3/4)*this.world.width/8))*(i-12))+(this.world.width/100)*(i-12);
				var valy = (2*this.world.height/7) + (this.world.height/25);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoard, this, i);
			}
		}
		//for(var x = 0; x < 16; x++){console.log(aom.PlayerOne.SelectedProductionTile[x]);}
		aom.Tiles[18] = temp1;
		aom.Tiles[19] = temp2;

	},

	//-----------------------------------------END-------------------------------------------------------------------//




	AddTilesToPlayerBoard: function(temp, val){
				//console.log(val);
				console.log(temp);
				//console.log(aom.Tiles[val]);
				var location;
				
				for(var i = 0; i<20; i++){
					if(temp.key === aom.Tiles[i].SpriteName){
						aom.PlayerOne.SelectedProductionTile[20+i] = aom.Tiles[i];
						aom.Tiles[i].IsSelected = 1;
						console.log(aom.PlayerOne.SelectedProductionTile[20+i]);
						
						location = 20+i;
					}
				}
				var j = 0;
				while(j<16 && this.TilesSlectedByUser < this.numberTilesToSelect){
						if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j >=1 && j < 4){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*j + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
							
							
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j === 0 ){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10 + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);

						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 4 && j<8){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-4) + ((this.world.width/2)/4.3)*(j-4);
							valy = this.world.height/2 + (this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 8 && j<12){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-8) + ((this.world.width/2)/4.3)*(j-8);
							valy = this.world.height/2 + 2*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 12 && j<16){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-12) + ((this.world.width/2)/4.3)*(j-12);
							valy = this.world.height/2 + 3*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						j = j+1;
				
				}
				for(var i = 16; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					aom.PlayerOne.SelectedProductionTile[i] = undefined;
				}
				for(var i = 0; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					console.log(aom.PlayerOne.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerTwo.SelectedProductionTile.length; i++){
					console.log(aom.PlayerTwo.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerThree.SelectedProductionTile.length; i++){
					console.log(aom.PlayerThree.SelectedProductionTile[i]);
				}
				
				
	},

	AITurn: function(obj){

		var rnd1, rnd2, rnd3, rnd4;
		rnd1 = this.rnd.integerInRange(0,18);
		rnd2 = this.rnd.integerInRange(0,18);
		rnd3 = 2;//this.rnd.integerInRange(0,19);
		rnd4 = 3;//this.rnd.integerInRange(0,19);
		var rndl = 0;
		console.log(this.TilesToDisplay.getAt(rnd1).key);
		var j = 0;
		var count1, count2, count3, count4;
		count1 = 0; count2 = 0; count3 = 0; count4 = 0;
		var i1, i2, i3, i4;
		i1 = 0;
		i2 = 0;
		i3 = 0;
		i4 = 0;


		while(this.AITurnOver === false && this.TurnTracker%1 === 0 && this.TurnTracker <= 3 && (rnd1 < 20 || rnd2 < 20 || rnd3 < 20 || rnd4 < 20)){
			
		while(i1 < 20){
			if(this.TilesToDisplay.getAt(rnd1).key === aom.Tiles[i1].SpriteName){// && aom.Tiles[i1].IsSelected === 0){
				this.AssignAIOneTiles(this.TilesToDisplay.getAt(rnd1));
				//aom.Tiles[i1].IsSelected = 1;
				//this.TilesToDisplay.getAt(rnd1).destroy();
				count1 = 1;
				i1 = 21;
				console.log('decided 0');
			}
			else{
				i1 = i1+1;
				console.log('deciding 0');
			}
		}
		while(i2 < 20){
			if(this.TilesToDisplay.getAt(rnd2).key === aom.Tiles[i2].SpriteName){// && aom.Tiles[i2].IsSelected === 0){
				this.AssignAITwoTiles(this.TilesToDisplay.getAt(rnd2));
				/*aom.Tiles[i2].IsSelected = 1;
				this.TilesToDisplay.getAt(rnd2).destroy();*/
				count2 = 1;
				i2 = 21;
				console.log('decided 1');
			}
			else{
				i2 = i2+1;
				console.log('deciding 1');
			}
		}
		/*while(i3 < 20){
			if(this.TilesToDisplay.getAt(rnd3).key === aom.Tiles[i3].SpriteName){// && aom.Tiles[i3].IsSelected === 0){
				this.AssignAIOneTiles(this.TilesToDisplay.getAt(rnd3));
				//aom.Tiles[i3].IsSelected = 1;
				//this.TilesToDisplay.getAt(rnd3).destroy();
				count3 = 1;
				i3 = 21;
				console.log('decided 2');
			}
			else{
				i3 = i3+1;
				console.log('deciding 2');
			}
		}
		while(i4 < 20){
			if(this.TilesToDisplay.getAt(rnd4).key === aom.Tiles[i4].SpriteName){ //&& aom.Tiles[i4].IsSelected === 0){
				this.AssignAITwoTiles(this.TilesToDisplay.getAt(rnd4));
				//aom.Tiles[i4].IsSelected = 1;
				/this.TilesToDisplay.getAt(rnd4).destroy();
				count4 = 1;
				i4 = 21;
				console.log('decided 3');
			}
			else{
				i4 = i4+1;
				console.log('deciding 3');
			}
		}*/
		console.log('count = ' + (count1 + count2 + count3 + count4));
		if(count1 + count2 === 2){
			console.log('deceision onComplete');
			this.AITurnOver = true;}
		else if(count1 === 0){
			i1 = 0;
		}
		else if(count2 === 0){
			i2 = 0;
		}
		/*else if(count3 === 0){
			i3 = 0;
		}
		else if(count4 === 0){
			i4 = 0;
		}*/
		if(rnd1 <= 21){
			rnd1 = this.rnd.integerInRange(0,18);
		}
		if(rnd2 <= 21){
		rnd2 = this.rnd.integerInRange(0,18);
		}
		/*if(rnd3 <= 21){	
		rnd3++;// = this.rnd.integerInRange(0,19);
		}
		if(rnd4 <= 21){
		rnd4++;// = this.rnd.integerInRange(0,19);
		}*/
		console.log('deciding');
		}



	},


	AssignAIOneTiles: function(obj){
		console.log('This is the line that prints the value passed to AI one');
		console.log(obj.key);
		var j, location;
		for(var i = 0; i<20; i++){
			if(aom.Tiles[i].SpriteName === obj.key){
				aom.PlayerTwo.SelectedProductionTile[20+i] = aom.Tiles[i];
				console.log('Reached line 675')
				location = 20+i;
			}
		}
		j = 0;
		while(j < 16){
			if(aom.PlayerTwo.ProductionTile[j] === aom.PlayerTwo.SelectedProductionTile[location].SoilType){
				aom.PlayerTwo.ProductionTile[j] = aom.PlayerTwo.ProductionTile[j] + 'Occupied';
				aom.PlayerTwo.SelectedProductionTile[j] = aom.PlayerTwo.SelectedProductionTile[location];
				aom.Tiles[location - 20].IsSelected = 1;
				for(var i = 0; i<20; i++){
					if(this.TilesToDisplay.getAt(i).key === aom.Tiles[location - 20].SpriteName){
						this.TilesToDisplay.getAt(i).destroy();
					}
				}
				console.log('Reached line 685');
				console.log('j = ' + j + 'location = ' + location);
				console.log(aom.PlayerTwo.SelectedProductionTile);
				j = 17;
				
			}
			j++;
		}
	},


	AssignAITwoTiles: function(obj){
		var j, location;
		for(var i = 0; i<20; i++){
			if(aom.Tiles[i].SpriteName === obj.key){
				aom.PlayerThree.SelectedProductionTile[20+i] = aom.Tiles[i];
				
				location = 20+i;
			}
		}
		j = 0;
		while(j < 16){
			if(aom.PlayerThree.ProductionTile[j] === aom.PlayerThree.SelectedProductionTile[location].SoilType){
				aom.PlayerThree.ProductionTile[j] = aom.PlayerThree.ProductionTile[j] + 'Occupied';
				aom.PlayerThree.SelectedProductionTile[j] = aom.PlayerThree.SelectedProductionTile[location];
				aom.Tiles[location - 20].IsSelected = 1;
				for(var i = 0; i<20; i++){
					if(this.TilesToDisplay.getAt(i).key === aom.Tiles[location - 20].SpriteName){
						this.TilesToDisplay.getAt(i).destroy();
					}
				}
				j = 17;
			}
			j++;
		}
	},

	ExploreGodCardPlayed: function(cardObject){
		var location, x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.ExploreCardMenuGroup != undefined){
			this.ExploreCardMenuGroup.destroy();
			this.ExploreCardMenuGroup = this.add.group();
		}
		console.log('Playing explore card');
		this.CardsInHandGroup.destroy();
		temp = this.add.sprite(this.world.width/2, this.world.height, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/20)/720);
		temp.alpha = 0.85;
		temp.anchor.setTo(0, 1);
		this.ExploreCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), this.world.height, "Done", tempStyle);
		temp.anchor.setTo(0.5, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.ExploreCardMenuGroup.destroy();
				this.TilesToDisplay.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}, this);
		this.ExploreCardMenuGroup.add(temp);
		this.world.bringToTop(this.ExploreCardMenuGroup);
		this.DisplayGodTiles();
	},

	DisplayGodTiles: function(){
		this.TilesToDisplay = this.add.group();
		
		var TileToDisplay;
		var i;
		var temp1, temp2;
		var random1, random2;

		random1 = this.rnd.integerInRange(0, 19);
		
		temp1 = aom.Tiles[random1];

		for(var i = 0; i<20; i++){
			if(i === random1){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random1; j<20; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}
		random2 = this.rnd.integerInRange(0, 18);
		
		temp2 = aom.Tiles[random2];
		for(var i = 0; i<19; i++){
			if(i === random2){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random2; j<19; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}

		for(i=0; i<18; i++){
			if(i>=0 && i<6){
				var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
				TileToDisplay = this.add.sprite(valx, this.world.height/100, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod, this, i);
			}
			else if(i>=6 && i < 12){
				var valx = ((((3/4)*this.world.width/8))*(i-6))+(this.world.width/100)*(i-6);
				var valy =	(this.world.height/7) + (this.world.height/40);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod, this, i);
			}
			else if(i>=12 && i < 18){
				var valx = ((((3/4)*this.world.width/8))*(i-12))+(this.world.width/100)*(i-12);
				var valy = (2*this.world.height/7) + (this.world.height/25);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod, this, i);
			}
		}
		//for(var x = 0; x < 16; x++){console.log(aom.PlayerOne.SelectedProductionTile[x]);}
		aom.Tiles[18] = temp1;
		aom.Tiles[19] = temp2;

	},

	//-----------------------------------------END-------------------------------------------------------------------//




	AddTilesToPlayerBoardGod: function(temp, val){
				//console.log(val);
				console.log(temp);
				//console.log(aom.Tiles[val]);
				var location;
				
				for(var i = 0; i<20; i++){
					if(temp.key === aom.Tiles[i].SpriteName){
						aom.PlayerOne.SelectedProductionTile[20+i] = aom.Tiles[i];
						aom.Tiles[i].IsSelected = 1;
						console.log(aom.PlayerOne.SelectedProductionTile[20+i]);
						
						location = 20+i;
					}
				}
				var j = 0;
				while(j<16 && this.TilesSlectedByUser < this.numberTilesToSelect){
						if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j >=1 && j < 4){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*j + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
							
							
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j === 0 ){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10 + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);

						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 4 && j<8){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-4) + ((this.world.width/2)/4.3)*(j-4);
							valy = this.world.height/2 + (this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 8 && j<12){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-8) + ((this.world.width/2)/4.3)*(j-8);
							valy = this.world.height/2 + 2*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 12 && j<16){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-12) + ((this.world.width/2)/4.3)*(j-12);
							valy = this.world.height/2 + 3*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						j = j+1;
				
				}
				for(var i = 16; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					aom.PlayerOne.SelectedProductionTile[i] = undefined;
				}
				for(var i = 0; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					console.log(aom.PlayerOne.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerTwo.SelectedProductionTile.length; i++){
					console.log(aom.PlayerTwo.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerThree.SelectedProductionTile.length; i++){
					console.log(aom.PlayerThree.SelectedProductionTile[i]);
				}
				
				
	},


	ExploreGod1CardPlayed: function(cardObject){
		var location, x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.ExploreCardMenuGroup != undefined){
			this.ExploreCardMenuGroup.destroy();
			this.ExploreCardMenuGroup = this.add.group();
		}
		console.log('Playing explore card');
		this.CardsInHandGroup.destroy();
		temp = this.add.sprite(this.world.width/2, this.world.height, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height/20)/720);
		temp.alpha = 0.85;
		temp.anchor.setTo(0, 1);
		this.ExploreCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), this.world.height, "Done", tempStyle);
		temp.anchor.setTo(0.5, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.ExploreCardMenuGroup.destroy();
				this.TilesToDisplay.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}, this);
		this.ExploreCardMenuGroup.add(temp);
		this.world.bringToTop(this.ExploreCardMenuGroup);
		this.DisplayGod1Tiles();
	},

	DisplayGod1Tiles: function(){
		this.TilesToDisplay = this.add.group();
		
		var TileToDisplay;
		var i;
		var temp1, temp2;
		var random1, random2;

		random1 = this.rnd.integerInRange(0, 19);
		
		temp1 = aom.Tiles[random1];

		for(var i = 0; i<20; i++){
			if(i === random1){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random1; j<20; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}
		random2 = this.rnd.integerInRange(0, 18);
		
		temp2 = aom.Tiles[random2];
		for(var i = 0; i<19; i++){
			if(i === random2){
				aom.Tiles[i] = aom.Tiles[i + 1];
				for(var j = random2; j<19; j++){
					aom.Tiles[j] = aom.Tiles[j+1];
				}
			}
		}

		for(i=0; i<18; i++){
			if(i>=0 && i<6){
				var valx = ((((3/4)*this.world.width/8))*i)+(this.world.width/100)*i;
				TileToDisplay = this.add.sprite(valx, this.world.height/100, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod1, this, i);
			}
			else if(i>=6 && i < 12){
				var valx = ((((3/4)*this.world.width/8))*(i-6))+(this.world.width/100)*(i-6);
				var valy =	(this.world.height/7) + (this.world.height/40);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod1, this, i);
			}
			else if(i>=12 && i < 18){
				var valx = ((((3/4)*this.world.width/8))*(i-12))+(this.world.width/100)*(i-12);
				var valy = (2*this.world.height/7) + (this.world.height/25);
				TileToDisplay = this.add.sprite(valx, valy, aom.Tiles[i].SpriteName);
				TileToDisplay.scale.setTo(((3/4)*this.world.width/8)/90, (this.world.height/7)/90);
				this.TilesToDisplay.add(TileToDisplay, true);
				TileToDisplay.inputEnabled = true;
				TileToDisplay.events.onInputDown.add(this.AddTilesToPlayerBoardGod1, this, i);
			}
		}
		//for(var x = 0; x < 16; x++){console.log(aom.PlayerOne.SelectedProductionTile[x]);}
		aom.Tiles[18] = temp1;
		aom.Tiles[19] = temp2;

	},

	//-----------------------------------------END-------------------------------------------------------------------//




	AddTilesToPlayerBoardGod1: function(temp, val){
				//console.log(val);
				console.log(temp);
				//console.log(aom.Tiles[val]);
				var location;
				
				for(var i = 0; i<20; i++){
					if(temp.key === aom.Tiles[i].SpriteName){
						aom.PlayerOne.SelectedProductionTile[20+i] = aom.Tiles[i];
						aom.Tiles[i].IsSelected = 1;
						console.log(aom.PlayerOne.SelectedProductionTile[20+i]);
						
						location = 20+i;
					}
				}
				var j = 0;
				while(j<16 && this.TilesSlectedByUser < 2){//this.numberTilesToSelect){
						if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j >=1 && j < 4){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*j + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
							
							
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j === 0 ){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10 + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);

						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 4 && j<8){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-4) + ((this.world.width/2)/4.3)*(j-4);
							valy = this.world.height/2 + (this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 8 && j<12){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-8) + ((this.world.width/2)/4.3)*(j-8);
							valy = this.world.height/2 + 2*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 12 && j<16){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-12) + ((this.world.width/2)/4.3)*(j-12);
							valy = this.world.height/2 + 3*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							//this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							//this.AITurn(temp);
							}, this);
						}
						j = j+1;
				
				}
				while(j<16 && this.TilesSlectedByUser >= 2 && this.TilesSlectedByUser < this.numberTilesToSelect){
						if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j >=1 && j < 4){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*j + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
							
							
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j === 0 ){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10 + ((this.world.width/2)/4.3)*j;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: this.world.height/2}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);

						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 4 && j<8){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-4) + ((this.world.width/2)/4.3)*(j-4);
							valy = this.world.height/2 + (this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 8 && j<12){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-8) + ((this.world.width/2)/4.3)*(j-8);
							valy = this.world.height/2 + 2*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						else if(aom.PlayerOne.ProductionTile[j] === aom.PlayerOne.SelectedProductionTile[location].SoilType && j != 0 && j >= 12 && j<16){
							console.log(aom.PlayerOne.SelectedProductionTile[location].SoilType);
							var valx;
							var valy;
							valx = 10*(j-12) + ((this.world.width/2)/4.3)*(j-12);
							valy = this.world.height/2 + 3*(this.world.height/2)/4;
							aom.PlayerOne.ProductionTile[j] = aom.PlayerOne.ProductionTile[j] + 'Occupied';
							this.world.bringToTop(temp);
							aom.PlayerOne.SelectedProductionTile[j] = aom.PlayerOne.SelectedProductionTile[location];
							this.TilesSlectedByUser++;
							j = 17;
							this.add.tween(temp).to({x: valx, y: valy}, 1000, Phaser.Easing.Linear.None, true);
							this.add.tween(temp.scale).to({ x: ((this.world.width/2)/4.5)/90, y: ((this.world.height/2)/4.3)/90}, 1000, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
								console.log('if1');
							
							this.TurnTracker = this.TurnTracker + 1;
							this.AITurnOver = false;
							temp.destroy();
							this.BringSelectedTilesToTop(aom.PlayerOne);
							this.AITurn(temp);
							}, this);
						}
						j = j+1;
				
				}
				for(var i = 16; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					aom.PlayerOne.SelectedProductionTile[i] = undefined;
				}
				for(var i = 0; i<aom.PlayerOne.SelectedProductionTile.length; i++){
					console.log(aom.PlayerOne.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerTwo.SelectedProductionTile.length; i++){
					console.log(aom.PlayerTwo.SelectedProductionTile[i]);
				}
				for(var i = 0; i<aom.PlayerThree.SelectedProductionTile.length; i++){
					console.log(aom.PlayerThree.SelectedProductionTile[i]);
				}
				
				
	},


//-------------------------------------------------------------------Recruit Card Handlers-------------------------------------------------------//

	NorseRecruitCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseRecruitPermanentAction':
				this.numberOfRecruits = 2;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard2':
				this.numberOfRecruits = 5;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard3':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard4':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard5':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard6':
				this.numberOfRecruits = 5;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard7':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			case 'NorseRecruitRandomCard1':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.numberOfRecruits = 3;
					this.RecruitGodCardPlayed(obj);
				}
				else{
					this.numberOfRecruits = 2;
					this.RecruitCardPlayed(obj);
				}
				break;
		}
	},

	EgyptianRecruitCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianRecruitPermanentAction':
				this.numberOfRecruits = 2;
				this.RecruitCardPlayed(obj);
				break;
			case 'EgyptianRecruitRandomCard2':
				this.numberOfRecruits = 5;
				this.RecruitCardPlayed(obj);
				break;
			case 'EgyptianRecruitRandomCard3':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			/*case 'EgyptianRecruitRandomCard4':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;*/
			case 'EgyptianRecruitRandomCard5':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;
			case 'EgyptianRecruitRandomCard6':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			case 'EgyptianRecruitRandomCard1':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.numberOfRecruits = 6;
					this.RecruitCardPlayedGod1(obj);
				}
				else{
					this.numberOfRecruits = 6;
					this.RecruitCardPlayed(obj);
				}
				break;
		}
	},

	GreekRecruitCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekRecruitPermanentAction':
				this.numberOfRecruits = 2;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard1':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard2':
				this.numberOfRecruits = 5;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard4':
				this.numberOfRecruits = 3;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard5':
				this.numberOfRecruits = 5;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard6':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;
			case 'GreekRecruitRandomCard7':
				this.numberOfRecruits = 4;
				this.RecruitCardPlayed(obj);
				break;
			case 'EgyptianRecruitRandomCard3':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					aom.GreekBattleCards[4].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[4];
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[4];
					this.numberOfRecruits = 4;
					this.RecruitCardPlayedGod1(obj);
				}
				else{
					this.numberOfRecruits = 4;
					this.RecruitCardPlayed(obj);
				}
				break;
		}
	},

	RecruitGodCardPlayed: function(obj){
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.RecruitCardMenuGroup != undefined){
			this.RecruitCardMenuGroup.destroy();
			this.RecruitCardMenuGroup = this.add.group();
		}
		if(this.CurrentTurnPlayer.Board === 'Norse' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
						if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
							loc = i;
						}
					}
				
					if(aom.NorseBattleCards[loc].Type === 'Mortal'){
						aom.NorseBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}
				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
						if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
							loc = i;
						}
					}
					if(aom.NorseBattleCards[loc].Type === 'Mortal'){
						aom.NorseBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}
				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.NorseBattleCards[loc].Type === 'Mortal'){
						aom.NorseBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}
				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.NorseBattleCards[loc].Type === 'Mortal'){
						aom.NorseBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}
				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Egyptian' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.EgyptianBattleCards[loc].Type === 'Mortal'){
						aom.EgyptianBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.EgyptianBattleCards[loc].Type === 'Mortal'){
						aom.EgyptianBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.EgyptianBattleCards[loc].Type === 'Mortal'){
						aom.EgyptianBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.EgyptianBattleCards[loc].Type === 'Mortal'){
						aom.EgyptianBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Greek' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.GreekBattleCards[loc].Type === 'Mortal'){
						aom.GreekBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.GreekBattleCards[loc].Type === 'Mortal'){
						aom.GreekBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.GreekBattleCards[loc].Type === 'Mortal'){
						aom.GreekBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}


				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					var loc;
					for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
					}
					if(aom.GreekBattleCards[loc].Type === 'Mortal'){
						aom.GreekBattleCards[loc].isRecruited = 1;
						this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
						this.numberOfRecruits = this.numberOfRecruits - 1;
						this.RecruitGodCardPlayed(obj);
					}
					else{
						alert('Not Mortal Unit');
					}

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else{
			this.numberOfRecruits = 3;
			this.RecruitCardMenuGroup.destroy();
			this.RecruitCardPlayed(obj);
		}
	},


	RecruitCardPlayed: function(cardObject){
		var temp, location;
		var valx, valy;
		var x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.RecruitCardMenuGroup != undefined){
			this.RecruitCardMenuGroup.destroy();
			this.RecruitCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, this.world.height/2 - this.world.height/20, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height)/720);
		this.RecruitCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Select Units", tempStyle);
		temp.anchor.setTo(0.5, 1);
		this.RecruitCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width - this.world.width/20, this.world.height/2, "Done", tempStyle);
		temp.anchor.setTo(1, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.RecruitCardMenuGroup.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}, this);
		this.RecruitCardMenuGroup.add(temp);
		if(this.CurrentTurnPlayer.Board === 'Norse' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Egyptian' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Greek' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedHandler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else{
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.RecruitCardMenuGroup.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}

		this.world.bringToTop(this.RecruitCardMenuGroup);
	},

	RecruitCardPlayedHandler: function(spriteObject, cardObject){
		var loc;
		switch(this.CurrentTurnPlayer.Board){
			case 'Norse':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(this.CurrentTurnPlayer.Food >= aom.NorseBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.NorseBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.NorseBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.NorseBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBattleCards[loc].CostFavor;
					aom.NorseBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayed(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayed(cardObject);
				}
				break;
			case 'Egyptian':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(this.CurrentTurnPlayer.Food >= aom.EgyptianBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.EgyptianBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.EgyptianBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.EgyptianBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBattleCards[loc].CostFavor;
					aom.EgyptianBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayed(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayed(cardObject);
				}
				break;
			case 'Greek':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(this.CurrentTurnPlayer.Food >= aom.GreekBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.GreekBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.GreekBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.GreekBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBattleCards[loc].CostFavor;
					aom.GreekBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayed(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayed(cardObject);
				}
				break;

		}








		/*for(var i = 0; i<12; i++){
			if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
				location = i;
			}
			else if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
				location = i;
			}
			else if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
				location = i;
			}
		}	*/
	},


	RecruitCardPlayedGod1: function(cardObject){
		var temp, location;
		var valx, valy;
		var x;
		x = cardObject;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.RecruitCardMenuGroup != undefined){
			this.RecruitCardMenuGroup.destroy();
			this.RecruitCardMenuGroup = this.add.group();
		}
		temp = this.add.sprite(0, this.world.height/2 - this.world.height/20, 'Black');
		temp.scale.setTo(this.world.width/1280, (this.world.height)/720);
		this.RecruitCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Select Units", tempStyle);
		temp.anchor.setTo(0.5, 1);
		this.RecruitCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width - this.world.width/20, this.world.height/2, "Done", tempStyle);
		temp.anchor.setTo(1, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.RecruitCardMenuGroup.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}, this);
		this.RecruitCardMenuGroup.add(temp);
		if(this.CurrentTurnPlayer.Board === 'Norse' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.NorseBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.NorseBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Egyptian' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.EgyptianBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.EgyptianBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else if(this.CurrentTurnPlayer.Board === 'Greek' && this.numberOfRecruits != 0){
			for(var i = 0; i<3; i++){
				valx = this.world.width*(i/6);
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 3; i<6; i++){
				valx = this.world.width*((i-3)/6);
				valy = this.world.height/2+ this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 6; i<9; i++){
				valx = this.world.width*((i - 3)/6);
				valy = this.world.height/2;// + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
			for(var i = 9; i<12; i++){
				valx = this.world.width*((i - 6)/6);
				valy = this.world.height/2 + this.world.height/4;
				temp = this.add.sprite(valx, valy, aom.GreekBattleCards[i].SpriteName);
				temp.scale.setTo(this.world.width*(1/8)*(1/550), this.world.height*(1/4)*(1/770));
				temp.alpha = (aom.GreekBattleCards[i].isRecruited - 1)*(-1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					this.RecruitCardPlayedGod1Handler(temp, cardObject);

				}, this);
				this.RecruitCardMenuGroup.add(temp);
			}
		}
		else{
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.RecruitCardMenuGroup.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();
		}

		this.world.bringToTop(this.RecruitCardMenuGroup);
	},

	RecruitCardPlayedGod1Handler: function(spriteObject, cardObject){
		var loc;
		switch(this.CurrentTurnPlayer.Board){
			case 'Norse':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.NorseBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(aom.NorseBattleCards[loc].Type != 'Mortal' && this.CurrentTurnPlayer.Food >= aom.NorseBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.NorseBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.NorseBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.NorseBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBattleCards[loc].CostFavor;
					aom.NorseBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else if(aom.NorseBattleCards[loc].Type === 'Mortal' && this.CurrentTurnPlayer.Food >= 1){
					aom.NorseBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.NorseBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayedGod1(cardObject);
				}
				break;
			case 'Egyptian':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.EgyptianBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(aom.EgyptianBattleCards[loc].Type != 'Mortal' && this.CurrentTurnPlayer.Food >= aom.EgyptianBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.EgyptianBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.EgyptianBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.EgyptianBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBattleCards[loc].CostFavor;
					aom.EgyptianBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else if(aom.EgyptianBattleCards[loc].Type === 'Mortal' && this.CurrentTurnPlayer.Food >= 1){
					aom.EgyptianBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.EgyptianBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayedGod1(cardObject);
				}
				break;
			case 'Greek':
				for(var i = 0; i<12; i++){
					if(spriteObject.key === aom.GreekBattleCards[i].SpriteName){
						loc = i;
					}
				}
				if(aom.GreekBattleCards[loc].Type != 'Mortal' && this.CurrentTurnPlayer.Food >= aom.GreekBattleCards[loc].CostFood && this.CurrentTurnPlayer.Wood >= aom.GreekBattleCards[loc].CostWood && this.CurrentTurnPlayer.Gold >= aom.GreekBattleCards[loc].CostGold && this.CurrentTurnPlayer.Favor >= aom.GreekBattleCards[loc].CostFavor){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBattleCards[loc].CostFood;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBattleCards[loc].CostWood;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBattleCards[loc].CostGold;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBattleCards[loc].CostFavor;
					aom.GreekBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else if(aom.GreekBattleCards[loc].Type === 'Mortal' && this.CurrentTurnPlayer.Food >= 1){
					aom.GreekBattleCards[loc].isRecruited = 1;
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - 1;
					this.CurrentTurnPlayer.BattleCardsSelected[this.CurrentTurnPlayer.BattleCardsSelected.length] = aom.GreekBattleCards[loc];
					this.numberOfRecruits = this.numberOfRecruits - 1;
					this.DisplayPlayerResources(this.CurrentTurnPlayer);
					this.RecruitCardPlayedGod1(cardObject);
				}
				else{
					alert("Unable to recruit this unit. Insufficient resource.")
					this.RecruitCardPlayedGod1(cardObject);
				}
				break;

		}
	},


//-------------------------------------------------------------------Next Age Card Handlers-----------------------------------------------------//

	NorseNextAgeCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseNextAgePermanentAction':
				this.NextAgeCard(4, 5, 6, obj);
				break;
			case 'NorseNextAgeRandomCard1':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'NorseNextAgeRandomCard3':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'NorseNextAgeRandomCard4':
				this.NextAgeCard(3, 4, 5, obj);
				break;
		}
	},

	EgyptianNextAgeCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianNextAgePermanentAction':
				this.NextAgeCard(4, 5, 6, obj);
				break;
			case 'EgyptianNextAgeRandomCard3':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'EgyptianNextAgeRandomCard4':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'EgyptianNextAgeRandomCard2':
				var done;
				done = 0;
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].Food != 0 && done != 1){
							aom.PlayerTwo.SelectedProductionTile.splice(i, 1);
							done = 1;
						}
					}
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].Food != 0 && done != 1){
							aom.PlayerThree.SelectedProductionTile.splice(i, 1);
							done = 1;
						}
					}
					this.NextAgeCard(3, 4, 5, obj);
				}
				else{
					this.NextAgeCard(3, 4, 5, obj);
				}
				
				break;
			
		}
	},

	GreekNextAgeCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekNextAgePermanentAction':
				this.NextAgeCard(4, 5, 6, obj);
				break;
			case 'GreekNextAgeRandomCard1':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'GreekNextAgeRandomCard2':
				this.NextAgeCard(3, 4, 5, obj);
				break;
			case 'GreekNextAgeRandomCard3':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && done != 1){
							aom.PlayerTwo.SelectedProductionTile.splice(i, 1);
							done = 1;
						}
					}
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && done != 1){
							aom.PlayerThree.SelectedProductionTile.splice(i, 1);
							done = 1;
						}
					}
					this.NextAgeCard(3, 4, 5, obj);
				}
				else{
					this.NextAgeCard(3, 4, 5, obj);
				}
				break;
			
		}
	},


	NextAgeCard: function(classical, heroic, mythical, cardObject){
		var temp; 
		var x;
		x = cardObject;
		var location;
		console.log(this.CurrentTurnPlayer.Age);
		if(this.NextAgeCardMenuGroup != undefined){
			this.NextAgeCardMenuGroup.destroy();
			this.NextAgeCardMenuGroup = this.add.group();
		}
		switch(this.CurrentTurnPlayer.Age){
			case 4:
				if(this.CurrentTurnPlayer.Food >= classical && this.CurrentTurnPlayer.Wood >= classical && this.CurrentTurnPlayer.Gold >= classical && this.CurrentTurnPlayer.Favor >= classical){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - classical;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - classical;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - classical;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - classical;
					this.CurrentTurnPlayer.Age = this.CurrentTurnPlayer.Age + 1;
					this.DisplayPlayerAge(this.CurrentTurnPlayer);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.NextAgeCardMenuGroup.destroy();
				console.log(this.NextAgeCardMenuGroup);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.PlayerPlayedACard();
				}
				else {
					temp = this.add.sprite(0, this.world.height/2, 'Black');
					temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
					temp.alpha = 0.85;
					this.NextAgeCardMenuGroup.add(temp);
					var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
					temp = this.add.text(this.world.width/2, this.world.height/2, "Not Enough Resource", tempStyle);
					temp.anchor.setTo(0.5, 0);
					this.NextAgeCardMenuGroup.add(temp);
					temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4, "Continue", tempStyle);
					temp.anchor.setTo(0.5, 0.5);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						this.NextAgeCardMenuGroup.destroy();
					}, this);
					this.NextAgeCardMenuGroup.add(temp);
				}
				break;
			case 5:
				if(this.CurrentTurnPlayer.Food >= heroic && this.CurrentTurnPlayer.Wood >= heroic && this.CurrentTurnPlayer.Gold >= heroic && this.CurrentTurnPlayer.Favor >= heroic){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - heroic;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - heroic;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - heroic;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - heroic;
					this.CurrentTurnPlayer.Age = this.CurrentTurnPlayer.Age + 1;
					this.DisplayPlayerAge(this.CurrentTurnPlayer);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.NextAgeCardMenuGroup.destroy();
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.PlayerPlayedACard();
				}
				else {
					temp = this.add.sprite(0, this.world.height/2, 'Black');
					temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
					this.NextAgeCardMenuGroup.add(temp);
					var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
					temp = this.add.text(this.world.width/2, this.world.height/2, "Not Enough Resource", tempStyle);
					temp.anchor.setTo(0.5, 0);
					this.NextAgeCardMenuGroup.add(temp);
					temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4, "Continue", tempStyle);
					temp.anchor.setTo(0.5, 0.5);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						this.NextAgeCardMenuGroup.destroy();
					}, this);
					this.NextAgeCardMenuGroup.add(temp);
				}
				break;
			case 6:
				if(this.CurrentTurnPlayer.Food >= mythical && this.CurrentTurnPlayer.Wood >= mythical && this.CurrentTurnPlayer.Gold >= mythical && this.CurrentTurnPlayer.Favor >= mythical){
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - mythical;
					this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - mythical;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - mythical;
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - mythical;
					this.CurrentTurnPlayer.Age = this.CurrentTurnPlayer.Age + 1;
					this.DisplayPlayerAge(this.CurrentTurnPlayer);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.NextAgeCardMenuGroup.destroy();
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.PlayerPlayedACard();
				}
				else {
					temp = this.add.sprite(0, this.world.height/2, 'Black');
					temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
					this.NextAgeCardMenuGroup.add(temp);
					var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
					temp = this.add.text(this.world.width/2, this.world.height/2, "Not Enough Resource", tempStyle);
					temp.anchor.setTo(0.5, 0);
					this.NextAgeCardMenuGroup.add(temp);
					temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4, "Continue", tempStyle);
					temp.anchor.setTo(0.5, 0.5);
					temp.inputEnabled = true;
					temp.events.onInputDown.add(function(){
						this.NextAgeCardMenuGroup.destroy();
					}, this);
					this.NextAgeCardMenuGroup.add(temp);
				}
		}
		this.world.bringToTop(this.NextAgeCardMenuGroup);


	},


//--------------------------------------------------------------------Gather Card Handlers-------------------------------------------------------//

	NorseGatherCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseGatherPermanentAction':
				this.GatherCard('TerrainOrResource', obj);
				break;
			case 'NorseGatherRandomCard2':
				this.GatherCard('AllResources', obj);
				break;
			case 'NorseGatherRandomCard3':
				this.GatherCard('AllResources', obj);
				break;
			case 'NorseGatherRandomCard5':
				this.GatherCard('AllResources', obj);
				break;
			case 'NorseGatherRandomCard6':
				this.GatherCard('AllResources', obj);
				break;
			case 'NorseGatherRandomCard7':
				this.GatherCard('AllResources', obj);
				break;
			case 'NorseGatherRandomCard4':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + 5
					this.GatherCard('TerrainOrResource', obj);
				}
				else{
					this.GatherCard('TerrainOrResource', obj);
				}
				break;
		}
	},


	EgyptianGatherCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianGatherPermanentAction':
				this.GatherCard('TerrainOrResource', obj);
				break;
			case 'EgyptianGatherRandomCard1':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard2':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard3':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard4':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard5':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard6':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard7':
				this.GatherCard('AllResources', obj);
				break;
			case 'EgyptianGatherRandomCard8':
				if(this.CurrentTurnPlayer.Favor >= 2){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer - 2;
					this.GatherCard('FoodGod', obj);
				}
				else{
					this.GatherCard('Food', obj);
				}
				break;
		}
	},


	GreekGatherCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekGatherPermanentAction':
				this.GatherCard('TerrainOrResource', obj);
				break;
			case 'GreekGatherRandomCard1':
				this.GatherCard('AllResources', obj);
				break;
			case 'GreekGatherRandomCard4':
				this.GatherCard('AllResources', obj);
				break;
			case 'GreekGatherRandomCard6':
				this.GatherCard('AllResources', obj);
				break;
			case 'GreekGatherRandomCard7':
				this.GatherCard('AllResources', obj);
				break;
			case 'GreekGatherRandomCard8':
				this.GatherCard('AllResources', obj);
				break;
			case 'GreekGatherRandomCard2':
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + 5;
					this.GatherCard('TerrainOrResource', obj);
				}
				else{
					this.GatherCard('TerrainOrResource', obj);
				}
				break;
			
		}
	},

	GatherCard: function(string, cardObject){
		var x;
		x = cardObject;
		var temp, foodToCollect, woodToCollect, favorToCollect, goldToCollect;
		var mountainResources = [];
		var hillResources = [];
		var forestResources = [];
		var swampResources = [];
		var fertileResources = [];
		var desertResources = [];
		foodToCollect = 0;
		woodToCollect = 0;
		goldToCollect = 0;
		favorToCollect = 0;
		for(var i = 0; i<4; i++){
			mountainResources[i] = 0;
			hillResources[i] = 0;
			forestResources[i] = 0;
			swampResources[i] = 0;
			fertileResources[i] = 0;
			desertResources[i] = 0;
		}
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.GatherCardMenuGroup != undefined){
			this.GatherCardMenuGroup.destroy();
			this.GatherCardMenuGroup = this.add.group();
		}
		if(string === 'TerrainOrResource'){
			temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
			temp.alpha = 0.85;
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2, "Please Select how to gather resource(s)", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.GatherCardMenuGroup.add(temp);
			for(var i = 0; i<16; i++){
				if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined){
					foodToCollect = foodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					woodToCollect = woodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					favorToCollect = favorToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
					goldToCollect = goldToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					
				}

			}
			for(var i = 0; i<16; i++){
				if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Mountain'){
					mountainResources[0] = mountainResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					mountainResources[1] = mountainResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					mountainResources[2] = mountainResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					mountainResources[3] = mountainResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}
				else if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Hills'){
					hillResources[0] = hillResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					hillResources[1] = hillResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					hillResources[2] = hillResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					hillResources[3] = hillResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}
				else if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Forest'){
					forestResources[0] = forestResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					forestResources[1] = forestResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					forestResources[2] = forestResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					forestResources[3] = forestResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}
				else if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Swamp'){
					swampResources[0] = swampResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					swampResources[1] = swampResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					swampResources[2] = swampResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					swampResources[3] = swampResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}
				else if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Fertile'){
					fertileResources[0] = fertileResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					fertileResources[1] = fertileResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					fertileResources[2] = fertileResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					fertileResources[3] = fertileResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}
				else if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined && this.CurrentTurnPlayer.SelectedProductionTile[i].SoilType === 'Desert'){
					desertResources[0] = desertResources[0] + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					desertResources[1] = desertResources[1] + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					desertResources[2] = desertResources[2] + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					desertResources[3] = desertResources[3] + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
				}

			}
			/*for(var i = 0; i<4; i++){
				console.log('mountain' + mountainResources[i]);
				console.log('hills' + hillResources[i]);
				console.log('forest' + forestResources[i]);
				console.log('swamp' + swampResources[i]);
				console.log('fertile' +fertileResources[i]);
				console.log('desert' + desertResources[i]);
			}*/
			temp = this.add.text(this.world.width/4, this.world.height/2 + this.world.height/8, "By Resource type", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width*(3/4), this.world.height/2 + this.world.height/8, "By Terrain type", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/4, this.world.height/2 + this.world.height/4, "Food:  x" + foodToCollect, tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var foodToCollect1, foodToCollect2;
				foodToCollect1 = 0;
				foodToCollect2 = 0;
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + foodToCollect;
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect2;
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/4, this.world.height/2 + this.world.height/4 + this.world.height/20, "Wood:  x" + woodToCollect, tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var woodToCollect1, woodToCollect2;
				woodToCollect1 = 0;
				woodToCollect2 = 0;
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + woodToCollect;
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							woodToCollect1 = woodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + woodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							woodToCollect2 = woodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + woodToCollect2;
					/*console.log(aom.PlayerTwo.Wood);
					console.log(aom.PlayerThree.Wood);*/
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							woodToCollect1 = woodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + woodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							woodToCollect2 = woodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + woodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							woodToCollect1 = woodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + woodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							woodToCollect2 = woodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Wood;
						}
					}
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + woodToCollect2;
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/4, this.world.height/2 + this.world.height/4 + this.world.height/10, "Gold:  x" + goldToCollect, tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var goldToCollect1, goldToCollect2;
				goldToCollect1 = 0;
				goldToCollect2 = 0;
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + goldToCollect;
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							goldToCollect1 = goldToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + goldToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							goldToCollect2 = goldToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + goldToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							goldToCollect1 = goldToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + goldToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							goldToCollect2 = goldToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + goldToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							goldToCollect1 = goldToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + goldToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							goldToCollect2 = goldToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + goldToCollect2;
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/4, this.world.height/2 + this.world.height/4 + this.world.height*(3/20), "Favor:  x" + favorToCollect, tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var favorToCollect1, favorToCollect2;
				favorToCollect1 = 0;
				favorToCollect2 = 0;
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + favorToCollect;
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							favorToCollect1 = favorToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							favorToCollect2 = favorToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + favorToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							favorToCollect1 = favorToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							favorToCollect2 = favorToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + favorToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							favorToCollect1 = favorToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							favorToCollect2 = favorToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + favorToCollect2;
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);


			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4, "Mountain:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var mountainResources1 = [];
				var mountainResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + mountainResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + mountainResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + mountainResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + mountainResources[3];
				for(var i = 0; i<4; i++){
					mountainResources1[i] = 0;
					mountainResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources1[0] = mountainResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							mountainResources1[1] = mountainResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							mountainResources1[2] = mountainResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							mountainResources1[3] = mountainResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + mountainResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + mountainResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + mountainResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + mountainResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources2[0] = mountainResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							mountainResources2[1] = mountainResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							mountainResources2[2] = mountainResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							mountainResources2[3] = mountainResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + mountainResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + mountainResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + mountainResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + mountainResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources1[0] = mountainResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							mountainResources1[1] = mountainResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							mountainResources1[2] = mountainResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							mountainResources1[3] = mountainResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + mountainResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + mountainResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + mountainResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + mountainResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources2[0] = mountainResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							mountainResources2[1] = mountainResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							mountainResources2[2] = mountainResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							mountainResources2[3] = mountainResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + mountainResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + mountainResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + mountainResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + mountainResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources1[0] = mountainResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							mountainResources1[1] = mountainResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							mountainResources1[2] = mountainResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							mountainResources1[3] = mountainResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + mountainResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + mountainResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + mountainResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + mountainResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Mountain'){
							mountainResources2[0] = mountainResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							mountainResources2[1] = mountainResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							mountainResources2[2] = mountainResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							mountainResources2[3] = mountainResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + mountainResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + mountainResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + mountainResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + mountainResources2[3];
				} 

				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4, "Food x" + mountainResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4, "Wood x" + mountainResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4, "Gold x" + mountainResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4, "Favor x" + mountainResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4 + this.world.height/23, "Hills:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var hillResources1 = [];
				var hillResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + hillResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + hillResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + hillResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + hillResources[3];
				for(var i = 0; i<4; i++){
					hillResources1[i] = 0;
					hillResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources1[0] = hillResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							hillResources1[1] = hillResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							hillResources1[2] = hillResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							hillResources1[3] = hillResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + hillResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + hillResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + hillResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + hillResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources2[0] = hillResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							hillResources2[1] = hillResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							hillResources2[2] = hillResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							hillResources2[3] = hillResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + hillResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + hillResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + hillResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + hillResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources1[0] = hillResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							hillResources1[1] = hillResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							hillResources1[2] = hillResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							hillResources1[3] = hillResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + hillResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + hillResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + hillResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + hillResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources2[0] = hillResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							hillResources2[1] = hillResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							hillResources2[2] = hillResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							hillResources2[3] = hillResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + hillResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + hillResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + hillResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + hillResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources1[0] = hillResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							hillResources1[1] = hillResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							hillResources1[2] = hillResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							hillResources1[3] = hillResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + hillResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + hillResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + hillResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + hillResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Hills'){
							hillResources2[0] = hillResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							hillResources2[1] = hillResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							hillResources2[2] = hillResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							hillResources2[3] = hillResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + hillResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + hillResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + hillResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + hillResources2[3];
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4 + this.world.height/23, "Food x" + hillResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4 + this.world.height/23, "Wood x" + hillResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4 + this.world.height/23, "Gold x" + hillResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4 + this.world.height/23, "Favor x" + hillResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4 + this.world.height*(2/23), "Forest:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var forestResources1 = [];
				var forestResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + forestResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + forestResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + forestResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + forestResources[3];
				for(var i = 0; i<4; i++){
					forestResources1[i] = 0;
					forestResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources1[0] = forestResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							forestResources1[1] = forestResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							forestResources1[2] = forestResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							forestResources1[3] = forestResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + forestResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + forestResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + forestResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + forestResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources2[0] = forestResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							forestResources2[1] = forestResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							forestResources2[2] = forestResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							forestResources2[3] = forestResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + forestResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + forestResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + forestResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + forestResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources1[0] = forestResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							forestResources1[1] = forestResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							forestResources1[2] = forestResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							forestResources1[3] = forestResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + forestResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + forestResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + forestResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + forestResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources2[0] = forestResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							forestResources2[1] = forestResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							forestResources2[2] = forestResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							forestResources2[3] = forestResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + forestResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + forestResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + forestResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + forestResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources1[0] = forestResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							forestResources1[1] = forestResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							forestResources1[2] = forestResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							forestResources1[3] = forestResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + forestResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + forestResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + forestResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + forestResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Forest'){
							forestResources2[0] = forestResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							forestResources2[1] = forestResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							forestResources2[2] = forestResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							forestResources2[3] = forestResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + forestResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + forestResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + forestResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + forestResources2[3];
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4 + this.world.height*(2/23), "Food x" + forestResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4 + this.world.height*(2/23), "Wood x" + forestResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4 + this.world.height*(2/23), "Gold x" + forestResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4 + this.world.height*(2/23), "Favor x" + forestResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4 + this.world.height*(3/23), "Swamp:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var swampResources1 = [];
				var swampResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + swampResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + swampResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + swampResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + swampResources[3];
				for(var i = 0; i<4; i++){
					swampResources1[i] = 0;
					swampResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources1[0] = swampResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							swampResources1[1] = swampResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							swampResources1[2] = swampResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							swampResources1[3] = swampResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + swampResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + swampResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + swampResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + swampResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources2[0] = swampResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							swampResources2[1] = swampResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							swampResources2[2] = swampResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							swampResources2[3] = swampResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + swampResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + swampResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + swampResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + swampResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources1[0] = swampResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							swampResources1[1] = swampResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							swampResources1[2] = swampResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							swampResources1[3] = swampResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + swampResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + swampResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + swampResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + swampResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources2[0] = swampResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							swampResources2[1] = swampResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							swampResources2[2] = swampResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							swampResources2[3] = swampResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + swampResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + swampResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + swampResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + swampResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources1[0] = swampResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							swampResources1[1] = swampResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							swampResources1[2] = swampResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							swampResources1[3] = swampResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + swampResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + swampResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + swampResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + swampResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Swamp'){
							swampResources2[0] = swampResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							swampResources2[1] = swampResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							swampResources2[2] = swampResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							swampResources2[3] = swampResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + swampResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + swampResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + swampResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + swampResources2[3];
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4 + this.world.height*(3/23), "Food x" + swampResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4 + this.world.height*(3/23), "Wood x" + swampResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4 + this.world.height*(3/23), "Gold x" + swampResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4 + this.world.height*(3/23), "Favor x" + swampResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4 + this.world.height*(4/23), "Fertile:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var fertileResources1 = [];
				var fertileResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + fertileResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + fertileResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + fertileResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + fertileResources[3];
				for(var i = 0; i<4; i++){
					fertileResources1[i] = 0;
					fertileResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources1[0] = fertileResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							fertileResources1[1] = fertileResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							fertileResources1[2] = fertileResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							fertileResources1[3] = fertileResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + fertileResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + fertileResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + fertileResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + fertileResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources2[0] = fertileResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							fertileResources2[1] = fertileResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							fertileResources2[2] = fertileResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							fertileResources2[3] = fertileResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + fertileResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + fertileResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + fertileResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + fertileResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources1[0] = fertileResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							fertileResources1[1] = fertileResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							fertileResources1[2] = fertileResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							fertileResources1[3] = fertileResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + fertileResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + fertileResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + fertileResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + fertileResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources2[0] = fertileResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							fertileResources2[1] = fertileResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							fertileResources2[2] = fertileResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							fertileResources2[3] = fertileResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + fertileResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + fertileResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + fertileResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + fertileResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources1[0] = fertileResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							fertileResources1[1] = fertileResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							fertileResources1[2] = fertileResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							fertileResources1[3] = fertileResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + fertileResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + fertileResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + fertileResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + fertileResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Fertile'){
							fertileResources2[0] = fertileResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							fertileResources2[1] = fertileResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							fertileResources2[2] = fertileResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							fertileResources2[3] = fertileResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + fertileResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + fertileResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + fertileResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + fertileResources2[3];
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4 + this.world.height*(4/23), "Food x" + swampResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4 + this.world.height*(4/23), "Wood x" + swampResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4 + this.world.height*(4/23), "Gold x" + swampResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4 + this.world.height*(4/23), "Favor x" + swampResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2 + this.world.height/4 + this.world.height*(5/23), "Desert:", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				var desertResources1 = [];
				var desertResources2 = [];
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + desertResources[0];
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + desertResources[1];
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + desertResources[2];
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + desertResources[3];
				for(var i = 0; i<4; i++){
					desertResources1[i] = 0;
					desertResources2[i] = 0;
				}
				if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources1[0] = desertResources1[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							desertResources1[1] = desertResources1[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							desertResources1[2] = desertResources1[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							desertResources1[3] = desertResources1[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + desertResources1[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + desertResources1[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + desertResources1[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + desertResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources2[0] = desertResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							desertResources2[1] = desertResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							desertResources2[2] = desertResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							desertResources2[3] = desertResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + desertResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + desertResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + desertResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + desertResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources1[0] = desertResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							desertResources1[1] = desertResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							desertResources1[2] = desertResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							desertResources1[3] = desertResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + desertResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + desertResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + desertResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + desertResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined && aom.PlayerThree.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources2[0] = desertResources2[0] + aom.PlayerThree.SelectedProductionTile[i].Food;
							desertResources2[1] = desertResources2[1] + aom.PlayerThree.SelectedProductionTile[i].Wood;
							desertResources2[2] = desertResources2[2] + aom.PlayerThree.SelectedProductionTile[i].Gold;
							desertResources2[3] = desertResources2[3] + aom.PlayerThree.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + desertResources2[0];
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + desertResources2[1];
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + desertResources2[2];
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + desertResources2[3];
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined && aom.PlayerOne.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources1[0] = desertResources1[0] + aom.PlayerOne.SelectedProductionTile[i].Food;
							desertResources1[1] = desertResources1[1] + aom.PlayerOne.SelectedProductionTile[i].Wood;
							desertResources1[2] = desertResources1[2] + aom.PlayerOne.SelectedProductionTile[i].Gold;
							desertResources1[3] = desertResources1[3] + aom.PlayerOne.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + desertResources1[0];
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + desertResources1[1];
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + desertResources1[2];
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + desertResources1[3];
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined && aom.PlayerTwo.SelectedProductionTile[i].SoilType === 'Desert'){
							desertResources2[0] = desertResources2[0] + aom.PlayerTwo.SelectedProductionTile[i].Food;
							desertResources2[1] = desertResources2[1] + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							desertResources2[2] = desertResources2[2] + aom.PlayerTwo.SelectedProductionTile[i].Gold;
							desertResources2[3] = desertResources2[3] + aom.PlayerTwo.SelectedProductionTile[i].Favor;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + desertResources2[0];
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + desertResources2[1];
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + desertResources2[2];
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + desertResources2[3];
				}
				//console.log(cardObject);
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.GatherCardMenuGroup.destroy();
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
			}, this);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(1/5), this.world.height/2 + this.world.height/4 + this.world.height*(5/23), "Food x" + desertResources[0], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(2/5), this.world.height/2 + this.world.height/4 + this.world.height*(5/23), "Wood x" + desertResources[1], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(3/5), this.world.height/2 + this.world.height/4 + this.world.height*(5/23), "Gold x" + desertResources[2], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2 + (this.world.width/2)*(4/5), this.world.height/2 + this.world.height/4 + this.world.height*(5/23), "Favor x" + desertResources[3], tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			this.GatherCardMenuGroup.add(temp);


		}
		else if(string === 'AllResources'){
			var foodToCollect, woodToCollect, goldToCollect, favorToCollect, foodToCollect2, foodToCollect1, woodToCollect1, woodToCollect2, goldToCollect1, goldToCollect2, favorToCollect1, favorToCollect2;
			foodToCollect = 0;
			favorToCollect = 0;
			goldToCollect = 0;
			woodToCollect = 0;
			foodToCollect1 = 0;
			woodToCollect1 = 0;
			goldToCollect1 = 0;
			favorToCollect1 = 0;
			foodToCollect2 = 0;
			woodToCollect2 = 0;
			goldToCollect2 = 0;
			favorToCollect2 = 0;
			for(var i = 0; i<16; i++){
				if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined){
					foodToCollect = foodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					woodToCollect = woodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Wood;
					favorToCollect = favorToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Favor;
					goldToCollect = goldToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Gold;
					
				}

			}
			this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + foodToCollect;
			this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + woodToCollect;
			this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + goldToCollect;
			this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + favorToCollect;
			if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Food;
							woodToCollect1 = woodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							favorToCollect1 = favorToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Favor;
							goldToCollect1 = goldToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect1;
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + woodToCollect1;
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + goldToCollect1;
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
							woodToCollect2 = woodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Wood;
							favorToCollect2 = favorToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Favor;
							goldToCollect2 = goldToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + woodToCollect2;
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + goldToCollect2;
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + favorToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
							woodToCollect1 = woodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Wood;
							favorToCollect1 = favorToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Favor;
							goldToCollect1 = goldToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + woodToCollect1;
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + goldToCollect1;
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
							woodToCollect2 = woodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Wood;
							favorToCollect2 = favorToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Favor;
							goldToCollect2 = goldToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
					aom.PlayerThree.Wood = aom.PlayerThree.Wood + woodToCollect2;
					aom.PlayerThree.Gold = aom.PlayerThree.Gold + goldToCollect2;
					aom.PlayerThree.Favor = aom.PlayerThree.Favor + favorToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
							woodToCollect1 = woodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Wood;
							favorToCollect1 = favorToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Favor;
							goldToCollect1 = goldToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					aom.PlayerOne.Wood = aom.PlayerOne.Wood + woodToCollect1;
					aom.PlayerOne.Gold = aom.PlayerOne.Gold + goldToCollect1;
					aom.PlayerOne.Favor = aom.PlayerOne.Favor + favorToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Food;
							woodToCollect2 = woodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Wood;
							favorToCollect2 = favorToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Favor;
							goldToCollect2 = goldToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Gold;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect2;
					aom.PlayerTwo.Wood = aom.PlayerTwo.Wood + woodToCollect2;
					aom.PlayerTwo.Gold = aom.PlayerTwo.Gold + goldToCollect2;
					aom.PlayerTwo.Favor = aom.PlayerTwo.Favor + favorToCollect2;
				}
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
		}
		else if(string === 'FoodGod'){
			var foodToCollect;
			foodToCollect = 0;
			
			for(var i = 0; i<16; i++){
				if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined){
					foodToCollect = foodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Food + 2;
					
					
				}

			}
			this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + foodToCollect;
			if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect2;
				}
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
		}
		else if(string === 'Food'){
			var foodToCollect;
			foodToCollect = 0;
			
			for(var i = 0; i<16; i++){
				if(this.CurrentTurnPlayer.SelectedProductionTile[i] != undefined){
					foodToCollect = foodToCollect + this.CurrentTurnPlayer.SelectedProductionTile[i].Food;
					
					
				}

			}
			this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + foodToCollect;
			if(this.CurrentTurnPlayer.Board === aom.PlayerOne.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerTwo.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerThree.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerThree.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerThree.Food = aom.PlayerThree.Food + foodToCollect2;
				}
				else if(this.CurrentTurnPlayer.Board === aom.PlayerThree.Board){
					for(var i = 0; i<16; i++){
						if(aom.PlayerOne.SelectedProductionTile[i] != undefined){
							foodToCollect1 = foodToCollect1 + aom.PlayerOne.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerOne.Food = aom.PlayerOne.Food + foodToCollect1;
					for(var i = 0; i<16; i++){
						if(aom.PlayerTwo.SelectedProductionTile[i] != undefined){
							foodToCollect2 = foodToCollect2 + aom.PlayerTwo.SelectedProductionTile[i].Food;
						}
					}
					aom.PlayerTwo.Food = aom.PlayerTwo.Food + foodToCollect2;
				}
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
				var location;
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					//console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
		}
		this.world.bringToTop(this.GatherCardMenuGroup);
	},


//--------------------------------------------------------------------Trade Card Handlers--------------------------------------------------------------//


	NorseTradeCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseTradePermanentAction':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(2, obj);
				break;
			case 'NorseTradeRandomCard2':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'NorseTradeRandomCard3':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'NorseTradeRandomCard5':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'NorseTradeRandomCard6':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'NorseTradeRandomCard1':
				//console.log(obj.key)
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.ResourceTrackerForTrade = 4;
					this.CollectBonusResources(obj);
				}
				else{
					this.ResourceTrackerForTrade = 0;
					this.TradeCard(0, obj);
				}
				break;
		}
	},


	EgyptianTradeCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianTradePermanentAction':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(2, obj);
				break;
			case 'EgyptianTradeRandomCard1':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'EgyptianTradeRandomCard2':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'EgyptianTradeRandomCard3':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'EgyptianTradeRandomCard4':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'EgyptianTradeRandomCard5':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'EgyptianTradeRandomCard6':
				//console.log(obj.key)
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.ResourceTrackerForTrade = 4;
					this.CollectBonusResources(obj);
				}
				else{
					this.ResourceTrackerForTrade = 0;
					this.TradeCard(0, obj);
				}
				break;
		}
	},


	GreekTradeCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekTradePermanentAction':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(2, obj);
				break;
			case 'GreekTradeRandomCard1':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'GreekTradeRandomCard2':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'GreekTradeRandomCard3':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'GreekTradeRandomCard4':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'GreekTradeRandomCard6':
				//console.log(obj.key)
				this.ResourceTrackerForTrade = 0;
				this.TradeCard(1, obj);
				break;
			case 'GreekTradeRandomCard5':
				//console.log(obj.key)
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.ResourceTrackerForTrade = 4;
					this.CollectBonusResources(obj);
				}
				else{
					this.ResourceTrackerForTrade = 0;
					this.TradeCard(0, obj);
				}
				break;
		}
	},


	CollectBonusResources: function(obj){
		var temp, tempAlpha;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.TradeCardMenuGroup.length != 0){
			this.TradeCardMenuGroup.destroy();
			this.TradeCardMenuGroup = this.add.group();
		}
		if(this.ResourceTrackerForTrade != 0){
			temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
			temp.alpha = 0.8;
			temp.anchor.setTo(0, 0);
			this.TradeCardMenuGroup.add(temp);
			var tempText = "Please select any  4 resource(s)";
			temp = this.add.text(this.world.width/2, this.world.height/2, tempText, tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.TradeCardMenuGroup.add(temp);
			/*if(this.CurrentTurnPlayer.Food >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}*/
			temp = this.add.text((this.world.width/8), (this.world.height*(1/2+1/4+1/8)), "Food", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width/8), (this.world.height*(1/2+1/4)), 'Food');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = 1;//tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.CollectBonusResources(obj);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			/*if(this.CurrentTurnPlayer.Wood >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}*/
			temp = this.add.text((this.world.width*(3/8)), (this.world.height*(1/2+1/4+1/8)), "Wood", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(3/8)), (this.world.height*(1/2+1/4)), 'Wood');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = 1;//tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.CollectBonusResources(obj);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			/*if(this.CurrentTurnPlayer.Gold >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}*/
			temp = this.add.text((this.world.width*(5/8)), (this.world.height*(1/2+1/4+1/8)), "Gold", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(5/8)), (this.world.height*(1/2+1/4)), 'Gold');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = 1;//tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.CollectBonusResources(obj);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			/*if(this.CurrentTurnPlayer.Favor >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}*/
			temp = this.add.text((this.world.width*(7/8)), (this.world.height*(1/2+1/4+1/8)), "Favor", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(7/8)), (this.world.height*(1/2+1/4)), 'Favor');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = 1;//tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.CollectBonusResources(obj);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			this.world.bringToTop(this.TradeCardMenuGroup);
		}
		else{
			this.ResourceTrackerForTrade = 0;
			this.TradeCardMenuGroup.destroy();
			this.TradeCard(0, obj);
		}
	},


	TradeCard: function(cost, cardObject){
		console.log('Reached trade card played function' + cost);
		var temp, tempAlpha;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.TradeCardMenuGroup.length != 0){
			this.TradeCardMenuGroup.destroy();
			this.TradeCardMenuGroup = this.add.group();
		}
		if(cost != 0 && this.CurrentTurnPlayer.HasAMarket != 1){

			temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
			temp.alpha = 0.8;
			temp.anchor.setTo(0, 0);
			this.TradeCardMenuGroup.add(temp);
			var tempText = "Please select any " + cost + " resource(s)";
			temp = this.add.text(this.world.width/2, this.world.height/2, tempText, tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Food >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width/8), (this.world.height*(1/2+1/4+1/8)), "Food", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width/8), (this.world.height*(1/2+1/4)), 'Food');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost-1, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Wood >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(3/8)), (this.world.height*(1/2+1/4+1/8)), "Wood", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(3/8)), (this.world.height*(1/2+1/4)), 'Wood');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost-1, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Gold >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(5/8)), (this.world.height*(1/2+1/4+1/8)), "Gold", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(5/8)), (this.world.height*(1/2+1/4)), 'Gold');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost-1, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Favor >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(7/8)), (this.world.height*(1/2+1/4+1/8)), "Favor", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(7/8)), (this.world.height*(1/2+1/4)), 'Favor');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost-1, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			this.world.bringToTop(this.TradeCardMenuGroup);
		}
		else{
			
			temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
			temp.alpha = 0.8;
			temp.anchor.setTo(0, 0);
			this.TradeCardMenuGroup.add(temp);
			this.DisplayTheBank();
			temp = this.add.text(this.world.width*(7/8), this.world.height, 'Confrim', tempStyle);
			temp.anchor.setTo(0.5, 1);
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				//console.log(cardObject);
				this.ReceiveResourcesFromBank(cardObject);
			}, this);
			this.TradeCardMenuGroup.add(temp);
			var tempText = "Total resource(s) selected: " + this.ResourceTrackerForTrade;
			temp = this.add.text(this.world.width/2, this.world.height, tempText, tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2, "Please select any number of resource(s) for Trade", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Food >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width/8), (this.world.height*(1/2+1/4+1/8)), "Food", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width/8), (this.world.height*(1/2+1/4)), 'Food');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade + 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Wood >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(3/8)), (this.world.height*(1/2+1/4+1/8)), "Wood", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(3/8)), (this.world.height*(1/2+1/4)), 'Wood');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade + 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Gold >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(5/8)), (this.world.height*(1/2+1/4+1/8)), "Gold", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(5/8)), (this.world.height*(1/2+1/4)), 'Gold');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade + 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(this.CurrentTurnPlayer.Favor >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(7/8)), (this.world.height*(1/2+1/4+1/8)), "Favor", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(7/8)), (this.world.height*(1/2+1/4)), 'Favor');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade + 1
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.TradeCard(cost, cardObject);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			this.world.bringToTop(this.TradeCardMenuGroup);
		}
	},


	ReceiveResourcesFromBank: function(cardObject){
		console.log('reached here with # resources for trade = ' + this.ResourceTrackerForTrade);
		var temp, tempAlpha;
		var x;
		x = cardObject;
		console.log(cardObject);
		console.log(x);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.TradeCardMenuGroup.length != 0){
			this.TradeCardMenuGroup.destroy();
			this.TradeCardMenuGroup = this.add.group();
		}
		if(this.ResourceTrackerForTrade != 0){

			temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo((this.world.width)/1280, (this.world.height/2)/720);
			temp.alpha = 0.8;
			temp.anchor.setTo(0, 0);
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.text(this.world.width/2, this.world.height/2, "Please select desired resource(s)", tempStyle);
			temp.anchor.setTo(0.5, 0);
			this.TradeCardMenuGroup.add(temp);
			var tempText = "Resource(s) left: " + this.ResourceTrackerForTrade;
			temp = this.add.text(this.world.width/2, this.world.height, tempText, tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.TradeCardMenuGroup.add(temp);
			if(aom.Bank.Food >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width/8), (this.world.height*(1/2+1/4+1/8)), "Food", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width/8), (this.world.height*(1/2+1/4)), 'Food');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food + 1;
				aom.Bank.Food = aom.Bank.Food - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.DisplayTheBank();
				this.ReceiveResourcesFromBank(x);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(aom.Bank.Wood >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(3/8)), (this.world.height*(1/2+1/4+1/8)), "Wood", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(3/8)), (this.world.height*(1/2+1/4)), 'Wood');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood + 1;
				aom.Bank.Wood = aom.Bank.Wood - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.DisplayTheBank();
				this.ReceiveResourcesFromBank(x);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(aom.Bank.Gold >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(5/8)), (this.world.height*(1/2+1/4+1/8)), "Gold", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(5/8)), (this.world.height*(1/2+1/4)), 'Gold');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold + 1;
				aom.Bank.Gold = aom.Bank.Gold - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.DisplayTheBank();
				this.ReceiveResourcesFromBank(x);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			if(aom.Bank.Favor >= 1){
				tempAlpha = 1;
			}
			else{
				tempAlpha = 0;
			}
			temp = this.add.text((this.world.width*(7/8)), (this.world.height*(1/2+1/4+1/8)), "Favor", tempStyle);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			this.TradeCardMenuGroup.add(temp);
			temp = this.add.sprite((this.world.width*(7/8)), (this.world.height*(1/2+1/4)), 'Favor');
			temp.scale.setTo((this.world.width/8)/90, (this.world.height/8)/90);
			temp.anchor.setTo(0.5, 0.5);
			temp.alpha = tempAlpha;
			temp.inputEnabled = true;
			temp.events.onInputDown.add(function(){
				this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor + 1;
				aom.Bank.Favor = aom.Bank.Favor - 1;
				this.ResourceTrackerForTrade = this.ResourceTrackerForTrade - 1;
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.DisplayTheBank();
				this.ReceiveResourcesFromBank(x);

			}, this);
			this.TradeCardMenuGroup.add(temp);
			this.world.bringToTop(this.TradeCardMenuGroup);
		}
		else{
			this.TradeCardMenuGroup.destroy();
			console.log('trade over');
			console.log(x);
			var location;
			console.log('Entered kill build section');
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			if(this.DisplayTheBankGroup != undefined){
				this.DisplayTheBankGroup.destroy();
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();

		}
	},


//--------------------------------------------------------------------Build Card Handlers------------------------------------------------------------//

	NorseBuildCardPlayed: function(obj){
		switch(obj.key){
			case 'NorseBuildPermanentAction':
				console.log(obj)
				this.BuildCard(0, 1, obj);
				break;
			case 'NorseBuildRandomCard2':
				console.log('856')
				this.BuildCard(0, 4, obj);
				break;
			case 'NorseBuildRandomCard3':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'NorseBuildRandomCard4':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'NorseBuildRandomCard5':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'NorseBuildRandomCard6':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'NorseBuildRandomCard7':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'NorseBuildRandomCard1':
				console.log('856')
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.BuildGodCard(0, 4, obj);
				}
				else{
					this.BuildCard(0, 4, obj);
				}
				break;

		}
	},

	EgyptianBuildCardPlayed: function(obj){
		switch(obj.key){
			case 'EgyptianBuildPermanentAction':
				console.log('856')
				this.BuildCard(0, 1, obj);
				break;
			case 'EgyptianBuildRandomCard1':
				console.log('856')
				this.BuildCard(0, 4, obj);
				break;
			case 'EgyptianBuildRandomCard2':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'EgyptianBuildRandomCard3':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'EgyptianBuildRandomCard4':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'EgyptianBuildRandomCard5':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'EgyptianBuildRandomCard7':
				console.log('856')
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.BuildGodCard(0, 3, obj);
				}
				else{
					this.BuildCard(0, 3, obj);
				}
				break;
			

		}
	},

	GreekBuildCardPlayed: function(obj){
		switch(obj.key){
			case 'GreekBuildPermanentAction':
				console.log('856')
				this.BuildCard(0, 1, obj);
				break;
			case 'GreekBuildRandomCard1':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'GreekBuildRandomCard3':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'GreekBuildRandomCard4':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'GreekBuildRandomCard5':
				console.log('856')
				this.BuildCard(0, 3, obj);
				break;
			case 'GreekBuildRandomCard6':
				console.log('856')
				this.BuildCard(0, 4, obj);
				break;
			case 'GreekBuildRandomCard7':
				console.log('856')
				this.BuildCard(0, 2, obj);
				break;
			case 'GreekBuildRandomCard2':
				console.log('856')
				if(this.CurrentTurnPlayer.Favor >= 1){
					this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - 1;
					this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[4];
					this.BuildCard(0, 3, obj);
				}
				else{
					this.BuildCard(0, 3, obj);
				}
				break;

		}
	},

	BuildCard: function(cost, numberOfBuildings, obj){
		this.numberOfBuildings = numberOfBuildings;
		var x = obj;
		console.log(x);
		var buildingsConstructed = 0;
		if(cost != 0 && numberOfBuildings != 0){
			console.log('collect resources');
		}
		else if(cost === 0 && numberOfBuildings != 0){
			var temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height*(1/2)/720);
			temp.alpha = 0.8;
			this.BuildCardMenuGroup.add(temp);
			var valx, valy;
			for(var i = 0; i<7; i++){

				valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.NorseBuildings[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.alpha = (-1)*(aom.NorseBuildings[i].isConstructed - 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					this.BuildingConstructionHandler(temp, obj);
				}, this);//, {param1: temp, param2: obj});
				this.BuildCardMenuGroup.add(temp);
			}
			for(var i = 7; i<14; i++){
				valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
				valy = this.world.height/2 + this.world.height/20 + ((this.world.height/2)/4.3);
				temp = this.add.sprite(valx, valy, aom.NorseBuildings[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.alpha = (-1)*(aom.NorseBuildings[i].isConstructed - 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					this.BuildingConstructionHandler(temp, obj);
				}, this);
				this.BuildCardMenuGroup.add(temp);
			}
			var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
			temp = this.add.text(this.world.width/2, (this.world.height - this.world.height/10), "Refer to Holding Area for cost", tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.BuildCardMenuGroup.add(temp);
			this.world.bringToTop(this.BuildCardMenuGroup);
			var buildNoMoreButton;
			buildNoMoreButton = this.add.text(this.world.width/2+this.world.width/6, (this.world.height - this.world.height/10), "Done", tempStyle);
			buildNoMoreButton.anchor.setTo(0.5, 1);
			buildNoMoreButton.inputEnabled = true;
			buildNoMoreButton.events.onInputDown.add(function(){
				this.BuildCardMenuGroup.destroy();
				var location;
				console.log('Entered kill build section');
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.BuildCardMenuGroup.destroy();
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();

			}, this);
			this.BuildCardMenuGroup.add(buildNoMoreButton);
			
		}
		else{
			var location;
			console.log('Entered kill build section ' + x.key);
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
		}
		
	},

	BuildingConstructionHandler: function(obj, obj1){
					/*var obj = this.param1;
					var obj1 = this.param2;*/
					console.log(this.numberOfBuildings);
					console.log(obj1);
					console.log(obj);
					var loc;

					switch(this.CurrentTurnPlayer.Board){
						case 'Norse':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.NorseBuildings[i].SpriteName){
									loc = i;
									console.log(aom.NorseBuildings[loc]);
									
								}
							}
							

							var v1 = (this.CurrentTurnPlayer.Gold >= aom.NorseBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.NorseBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.NorseBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.NorseBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'Market' && aom.NorseBuildings[loc].SpriteName != 'House'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'Market' && aom.NorseBuildings[loc].SpriteName === 'House'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'House' && aom.NorseBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						case 'Egyptian':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.EgyptianBuildings[i].SpriteName){
									loc = i;
									console.log(aom.EgyptianBuildings[loc]);
									
								}
							}
							
							var v1 = (this.CurrentTurnPlayer.Gold >= aom.EgyptianBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.EgyptianBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.EgyptianBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.EgyptianBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName != 'House' && aom.EgyptianBuildings[loc].SpriteName != 'Market'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName === 'House' && aom.EgyptianBuildings[loc].SpriteName != 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName != 'House' && aom.EgyptianBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						case 'Greek':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.GreekBuildings[i].SpriteName){
									loc = i;
									console.log(aom.GreekBuildings[loc]);
									
								}
							}
							

							var v1 = (this.CurrentTurnPlayer.Gold >= aom.GreekBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.GreekBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.GreekBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.GreekBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName != 'House' && aom.GreekBuildings[loc].SpriteName != 'Market'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName === 'House' && aom.GreekBuildings[loc].SpriteName != 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName != 'House' && aom.GreekBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						default:
							break;

					}



					this.BuildCardMenuGroup.destroy();
					this.BuildCardMenuGroup = this.add.group();
					this.BuildCard(0, this.numberOfBuildings - 1, obj1);
	},


	BuildGodCard: function(cost, numberOfBuildings, obj){
		this.numberOfBuildings = numberOfBuildings;
		var x = obj;
		console.log(x);
		var buildingsConstructed = 0;
		if(cost != 0 && numberOfBuildings != 0){
			console.log('collect resources');
		}
		else if(cost === 0 && numberOfBuildings != 0){
			var temp = this.add.sprite(0, this.world.height/2, 'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height*(1/2)/720);
			temp.alpha = 0.8;
			this.BuildCardMenuGroup.add(temp);
			var valx, valy;
			for(var i = 0; i<7; i++){

				valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.NorseBuildings[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.alpha = (-1)*(aom.NorseBuildings[i].isConstructed - 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					this.BuildingGodConstructionHandler(temp, obj);
				}, this);//, {param1: temp, param2: obj});
				this.BuildCardMenuGroup.add(temp);
			}
			for(var i = 7; i<14; i++){
				valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
				valy = this.world.height/2 + this.world.height/20 + ((this.world.height/2)/4.3);
				temp = this.add.sprite(valx, valy, aom.NorseBuildings[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.alpha = (-1)*(aom.NorseBuildings[i].isConstructed - 1);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					this.BuildingGodConstructionHandler(temp, obj);
				}, this);
				this.BuildCardMenuGroup.add(temp);
			}
			var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
			temp = this.add.text(this.world.width/2, (this.world.height - this.world.height/10), "Refer to Holding Area for cost", tempStyle);
			temp.anchor.setTo(0.5, 1);
			this.BuildCardMenuGroup.add(temp);
			this.world.bringToTop(this.BuildCardMenuGroup);
			var buildNoMoreButton;
			buildNoMoreButton = this.add.text(this.world.width/2+this.world.width/6, (this.world.height - this.world.height/10), "Done", tempStyle);
			buildNoMoreButton.anchor.setTo(0.5, 1);
			buildNoMoreButton.inputEnabled = true;
			buildNoMoreButton.events.onInputDown.add(function(){
				this.BuildCardMenuGroup.destroy();
				var location;
				console.log('Entered kill build section');
				for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
					if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
						for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
						for(var n = 0; n<7; n++){
							if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
								aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
								aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
							}
							else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
								aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
							}
						}
						location = i;
						console.log(location);
					}
				}
				this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
				this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
				this.DisplayCardsInHand();
				this.DisplayPlayerResources(this.CurrentTurnPlayer);
				this.CurrentTurnPlayer.CardsPlayed++;
				this.PlayerPlayedACard();

			}, this);
			this.BuildCardMenuGroup.add(buildNoMoreButton);
			
		}
		else{
			var location;
			console.log('Entered kill build section for God' + x.key);
			/*for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<46; j++){
						if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
							aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
						}
					}
					for(var m = 0; m<45; m++){
						if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
							aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
							aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
						}

					}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}*/
			this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			/*this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);*/
		}
		
	},

	BuildingGodConstructionHandler: function(obj, obj1){
					/*var obj = this.param1;
					var obj1 = this.param2;*/
					console.log(this.numberOfBuildings);
					console.log(obj1);
					console.log(obj);
					var loc;

					switch(this.CurrentTurnPlayer.Board){
						case 'Norse':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.NorseBuildings[i].SpriteName){
									loc = i;
									console.log(aom.NorseBuildings[loc]);
									
								}
							}
							

							var v1 = (this.CurrentTurnPlayer.Gold >= aom.NorseBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.NorseBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.NorseBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.NorseBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'Market' && aom.NorseBuildings[loc].SpriteName != 'House'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'Market' && aom.NorseBuildings[loc].SpriteName === 'House'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.NorseBuildings[loc].SpriteName != 'House' && aom.NorseBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.NorseBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.NorseBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.NorseBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.NorseBuildings[loc].CostWood;
								aom.NorseBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.NorseBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						case 'Egyptian':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.EgyptianBuildings[i].SpriteName){
									loc = i;
									console.log(aom.EgyptianBuildings[loc]);
									
								}
							}
							
							var v1 = (this.CurrentTurnPlayer.Gold >= aom.EgyptianBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.EgyptianBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.EgyptianBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.EgyptianBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName != 'House' && aom.EgyptianBuildings[loc].SpriteName != 'Market'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName === 'House' && aom.EgyptianBuildings[loc].SpriteName != 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.EgyptianBuildings[loc].SpriteName != 'House' && aom.EgyptianBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.EgyptianBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.EgyptianBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.EgyptianBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.EgyptianBuildings[loc].CostWood;
								aom.EgyptianBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.EgyptianBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						case 'Greek':
							for(var i = 0; i<14; i++){
								if(obj.key === aom.GreekBuildings[i].SpriteName){
									loc = i;
									console.log(aom.GreekBuildings[loc]);
									
								}
							}
							

							var v1 = (this.CurrentTurnPlayer.Gold >= aom.GreekBuildings[loc].CostGold);
							var v2 = (this.CurrentTurnPlayer.Food >= aom.GreekBuildings[loc].CostFood);
							var v3 = (this.CurrentTurnPlayer.Wood >= aom.GreekBuildings[loc].CostWood);
							var v4 = (this.CurrentTurnPlayer.Favor >= aom.GreekBuildings[loc].CostFavor);
							if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName != 'House' && aom.GreekBuildings[loc].SpriteName != 'Market'){
								console.log('Entered the if');
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName === 'House' && aom.GreekBuildings[loc].SpriteName != 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 0;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else if(v1 && v2 && v3 && v4 && aom.GreekBuildings[loc].SpriteName != 'House' && aom.GreekBuildings[loc].SpriteName === 'Market'){
								this.CurrentTurnPlayer.Gold = this.CurrentTurnPlayer.Gold - aom.GreekBuildings[loc].CostGold;
								this.CurrentTurnPlayer.Favor = this.CurrentTurnPlayer.Favor - aom.GreekBuildings[loc].CostFavor;
								this.CurrentTurnPlayer.Food = this.CurrentTurnPlayer.Food - aom.GreekBuildings[loc].CostFood;
								this.CurrentTurnPlayer.Wood = this.CurrentTurnPlayer.Wood - aom.GreekBuildings[loc].CostWood;
								aom.GreekBuildings[loc].isConstructed = 1;
								this.CurrentTurnPlayer.HasAMarket = 1;
								this.CurrentTurnPlayer.CityBlock[this.CurrentTurnPlayer.CityBlock.length] = aom.GreekBuildings[loc];
								this.DisplayPlayerResources(this.CurrentTurnPlayer);
							}
							else{
								alert('Unable to Construct. Not Enough Resources');
								this.numberOfBuildings = this.numberOfBuildings + 1;
							}
							break;
						default:
							break;

					}



					this.BuildCardMenuGroup.destroy();
					this.BuildCardMenuGroup = this.add.group();
					this.BuildGodCard(0, this.numberOfBuildings - 1, obj1);
	},


	BuildingGodDestroy: function(cost, numberOfBuildings, obj){
		var location, x, temp;
		x = obj;
		if(this.BuildCardMenuGroup != undefined){
			this.BuildCardMenuGroup.destroy();
			this.BuildCardMenuGroup = this.add.group();
		}
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };

		temp = this.add.sprite(0, 0, 'Black');
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		temp.alpha = 0.8;
		this.BuildCardMenuGroup.add(temp);
		temp = this.add.text(this.world.width, this.world.height, "Done", tempStyle);
		temp.anchor.setTo(1, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			//this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
		}, this);
		temp = this.add.text(this.world.width/2, 0, "Player Two Buildings", tempStyle);
		temp.anchor.setTo(0.5, 0);
		this.BuildCardMenuGroup.add(temp);
		var valx, valy;
			for(var i = 0; i<7; i++){

				valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
				valy = this.world.height/25;
				temp = this.add.sprite(valx, valy, aom.PlayerTwo.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					//console.log(obj);
					var tempLoc;
					for(var i = 0; i<aom.PlayerTwo.CityBlock.length; i++){
						if(temp.key === aom.PlayerTwo.CityBlock[i].SpriteName){
							tempLoc = i;
						}
					}
					aom.PlayerTwo.CityBlock.splice(tempLoc, 1);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			//this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
				}, this);//, {param1: temp, param2: obj});
				this.BuildCardMenuGroup.add(temp);
			}
			for(var i = 7; i<14; i++){
				valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
				valy = this.world.height/25 + this.world.height/20 + ((this.world.height/2)/4.3);
				temp = this.add.sprite(valx, valy, aom.PlayerTwo.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					var tempLoc;
					for(var i = 0; i<aom.PlayerTwo.CityBlock.length; i++){
						if(temp.key === aom.PlayerTwo.CityBlock[i].SpriteName){
							tempLoc = i;
						}
					}
					aom.PlayerTwo.CityBlock.splice(tempLoc, 1);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			//this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
				}, this);
				this.BuildCardMenuGroup.add(temp);
			}
		temp = this.add.text(this.world.width/2, this.world.height/2, "Player Three Buildings", tempStyle);
		temp.anchor.setTo(0.5, 1);
		this.BuildCardMenuGroup.add(temp);
		var valx, valy;
			for(var i = 0; i<7; i++){

				valx = (this.world.width/40)*i + ((this.world.width/2)/4.3)*i;//15 + this.world.width;
				valy = this.world.height/2;
				temp = this.add.sprite(valx, valy, aom.PlayerThree.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					//console.log(obj);
					var tempLoc;
					for(var i = 0; i<aom.PlayerThree.CityBlock.length; i++){
						if(temp.key === aom.PlayerThree.CityBlock[i].SpriteName){
							tempLoc = i;
						}
					}
					aom.PlayerThree.CityBlock.splice(tempLoc, 1);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			//this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
				}, this);//, {param1: temp, param2: obj});
				this.BuildCardMenuGroup.add(temp);
			}
			for(var i = 7; i<14; i++){
				valx = (this.world.width/40)*(i-7) + ((this.world.width/2)/4.3)*(i-7);//15 + this.world.width;
				valy = this.world.height/2 + this.world.height/20 + ((this.world.height/2)/4.3);
				temp = this.add.sprite(valx, valy, aom.PlayerThree.CityBlock[i].SpriteName);
				temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
				temp.inputEnabled = true;
				temp.events.onInputDown.add(function(temp){
					console.log(obj);
					var tempLoc;
					for(var i = 0; i<aom.PlayerThree.CityBlock.length; i++){
						if(temp.key === aom.PlayerThree.CityBlock[i].SpriteName){
							tempLoc = i;
						}
					}
					aom.PlayerThree.CityBlock.splice(tempLoc, 1);
					for(var i = 0; i<this.CurrentTurnPlayer.CardsSelected.length; i++){
				if(x.key === this.CurrentTurnPlayer.CardsSelected[i].SpriteName){
					for(var j = 0; j<40; j++){
								if(x.key === aom.NorseRandomActionCardDeck[j].SpriteName){
									aom.NorseRandomActionCardDeck[j].IsNotInHand = 1;
								}
							}
							for(var m = 0; m<36; m++){
								if(x.key === aom.EgyptianRandomActionCardDeck[m].SpriteName){
									aom.EgyptianRandomActionCardDeck[m].IsNotInHand = 1;
								}
							}
							for(var l = 0; l<41; l++){
								if(x.key === aom.GreekRandomActionCardDeck[m].SpriteName){
									aom.GreekRandomActionCardDeck[m].IsNotInHand = 1;
								}

							}
					for(var n = 0; n<7; n++){
						if(x.key === aom.NorsePermanentActionCardDeck[n].SpriteName){
							aom.NorsePermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.EgyptianPermanentActionCardDeck[n].SpriteName){
							aom.EgyptianPermanentActionCardDeck[n].IsNotInHand = 1;
						}
						else if(x.key === aom.GreekPermanentActionCardDeck[n].SpriteName){
							aom.GreekPermanentActionCardDeck[n].IsNotInHand = 1;
						}
					}
					location = i;
					console.log(location);
				}
			}
			//this.BuildingGodDestroy(cost, numberOfBuildings, obj);
			this.CurrentTurnPlayer.CardsSelected.splice(location, 1);
			this.BringSelectedBuildingsToTop(this.CurrentTurnPlayer);
			this.DisplayCardsInHand();
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.CurrentTurnPlayer.CardsPlayed++;
			this.PlayerPlayedACard();
				}, this);
				this.BuildCardMenuGroup.add(temp);
			}
	},


//------------------------------------------------------------------Round & Turn Calculators-----------------------------------------------------------//

	

	PlayerPlayedACard: function(){
		if(aom.PlayerOne.CardsPlayed === 1 && aom.PlayerTwo.CardsPlayed === 0 && aom.PlayerThree.CardsPlayed === 0){
			this.CurrentTurnPlayer = aom.PlayerTwo;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForGather(this.CurrentTurnPlayer, 3);
		}
		else if(aom.PlayerOne.CardsPlayed === 1 && aom.PlayerTwo.CardsPlayed === 1 && aom.PlayerThree.CardsPlayed === 0){
			this.CurrentTurnPlayer = aom.PlayerThree;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForBuild(this.CurrentTurnPlayer, 4);
		}
		else if(aom.PlayerOne.CardsPlayed === 1 && aom.PlayerTwo.CardsPlayed === 1 && aom.PlayerThree.CardsPlayed === 1){
			this.CurrentTurnPlayer = aom.PlayerOne;
			this.tempMove(this.CurrentTurnPlayer);

		}
		if(aom.PlayerOne.CardsPlayed === 2 && aom.PlayerTwo.CardsPlayed === 1 && aom.PlayerThree.CardsPlayed === 1){
			this.CurrentTurnPlayer = aom.PlayerTwo;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForBuild(this.CurrentTurnPlayer, 3);
		}
		else if(aom.PlayerOne.CardsPlayed === 2 && aom.PlayerTwo.CardsPlayed === 2 && aom.PlayerThree.CardsPlayed === 1){
			this.CurrentTurnPlayer = aom.PlayerThree;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForGather(this.CurrentTurnPlayer, 3);
		}
		else if(aom.PlayerOne.CardsPlayed === 2 && aom.PlayerTwo.CardsPlayed === 2 && aom.PlayerThree.CardsPlayed === 2){
			this.CurrentTurnPlayer = aom.PlayerOne;
			this.tempMove(this.CurrentTurnPlayer);

		}
		if(aom.PlayerOne.CardsPlayed === 3 && aom.PlayerTwo.CardsPlayed === 2 && aom.PlayerThree.CardsPlayed === 2){
			this.CurrentTurnPlayer = aom.PlayerTwo;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForTrade(this.CurrentTurnPlayer, 2);
		}
		else if(aom.PlayerOne.CardsPlayed === 3 && aom.PlayerTwo.CardsPlayed === 3 && aom.PlayerThree.CardsPlayed === 2){
			this.CurrentTurnPlayer = aom.PlayerThree;
			this.tempMove(this.CurrentTurnPlayer);
			this.AITurnForTrade(this.CurrentTurnPlayer, 2);
		}
		else if(aom.PlayerOne.CardsPlayed === 3 && aom.PlayerTwo.CardsPlayed === 3 && aom.PlayerThree.CardsPlayed === 3){
			this.RoundComplete();
		}

		
	},


	PlayerMove: function(obj){
		if(this.numberOfPlayerPlacedVictoryCards === 0){
			this.PlaceVictoryPointCubes(obj);

		}
		else if(this.numberOfPlayerPlacedVictoryCards === 1){
			//console.log('calling ai 1');
			this.PlaceVictoryPointCubes(aom.PlayerTwo);

		}
		else if(this.numberOfPlayerPlacedVictoryCards === 2){
			//console.log('calling ai 2');
			this.PlaceVictoryPointCubes(aom.PlayerThree);

		}
		else if(this.numberOfPlayerPlacedVictoryCards === 3){
			//this.PlaceVictoryPointCubes(this.CurrentTurnPlayer);
			this.numberOfCardsToSelect = this.CurrentTurnPlayer.Age;
			this.numberOfCardsSelected = this.CurrentTurnPlayer.CardsSelected.length;
			this.DisplayPlayerBoard(obj);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			this.DisplayPlayerCardsMenu(this.CurrentTurnPlayer);
			this.numberOfPlayerPlacedVictoryCards = 5;

		}
		if(aom.PlayerOne.CardsSelected.length === aom.PlayerOne.Age && aom.PlayerTwo.CardsSelected.length != aom.PlayerTwo.Age && aom.PlayerThree.CardsSelected.length != aom.PlayerThree.Age){
			this.CurrentTurnPlayer = aom.PlayerTwo;
			this.numberOfCardsToSelect = this.CurrentTurnPlayer.Age;
			this.numberOfCardsSelected = this.CurrentTurnPlayer.CardsSelected.length;
			this.DisplayPlayerBoard(this.CurrentTurnPlayer);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			this.DisplayPlayerCardsMenu(this.CurrentTurnPlayer);
		}
		else if(aom.PlayerOne.CardsSelected.length === aom.PlayerOne.Age && aom.PlayerTwo.CardsSelected.length === aom.PlayerTwo.Age && aom.PlayerThree.CardsSelected.length != aom.PlayerThree.Age){
			this.CurrentTurnPlayer = aom.PlayerThree;
			this.numberOfCardsToSelect = this.CurrentTurnPlayer.Age;
			this.numberOfCardsSelected = this.CurrentTurnPlayer.CardsSelected.length;
			this.DisplayPlayerBoard(this.CurrentTurnPlayer);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			this.DisplayPlayerCardsMenu(this.CurrentTurnPlayer);
		}
		else if(aom.PlayerOne.CardsSelected.length === aom.PlayerOne.Age && aom.PlayerTwo.CardsSelected.length === aom.PlayerTwo.Age && aom.PlayerThree.CardsSelected.length === aom.PlayerThree.Age){
			this.CurrentTurnPlayer = aom.PlayerOne;
			this.numberOfCardsToSelect = this.CurrentTurnPlayer.Age;
			this.numberOfCardsSelected = this.CurrentTurnPlayer.CardsSelected.length;
			this.DisplayPlayerBoard(this.CurrentTurnPlayer);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			this.DisplayCardsInHand(this.CurrentTurnPlayer);
		}

		/*this.numberOfCardsToSelect = this.CurrentTurnPlayer.Age;
		this.numberOfCardsSelected = this.CurrentTurnPlayer.CardsSelected.length;*/
		/*else{
			this.DisplayPlayerBoard(obj);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			/*this.PlaceVictoryPointCubes(obj);
			this.DisplayCardsInHand(this.CurrentTurnPlayer);
		}*/
		
	},

	tempMove: function(obj){
			this.DisplayPlayerBoard(this.CurrentTurnPlayer);
			this.DisplayPlayerResources(this.CurrentTurnPlayer);
			this.DisplayPlayerAge(this.CurrentTurnPlayer);
			/*this.PlaceVictoryPointCubes(obj);*/
			this.DisplayCardsInHand(this.CurrentTurnPlayer);
	},

	RoundComplete: function(){
		var temp;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.RoundCompleteGroup != undefined){
			this.RoundCompleteGroup.destroy();
			this.RoundCompleteGroup = this.add.group();
		}
		temp = this.add.sprite(0, 0, 'Black');
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		temp.alpha = 0.8;
		this.RoundCompleteGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Round Complete", tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.RoundCompleteGroup.add(temp);
		this.world.bringToTop(this.RoundCompleteGroup);
		temp = this.add.sprite(0, 0, 'Black');
		temp.alpha = 0;
		this.add.tween(temp).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
			this.Spoilage();
			this.DiscardPermanentActionCards();
			this.RoundCompleteGroup.destroy();
			aom.PlayerOne.CardsPlayed = 0;
			aom.PlayerTwo.CardsPlayed = 0;
			aom.PlayerThree.CardsPlayed = 0;
			this.numberOfPlayerPlacedVictoryCards = 0;
			this.CurrentTurnPlayer = aom.PlayerOne;
			this.PlayerMove(this.CurrentTurnPlayer);
			

		}, this);
		

		/*this.RoundCompleteGroup.destroy();
		this.RoundCompleteGroup = this.add.group();*/
		/*temp = this.add.sprite(0, 0, 'Black');
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		temp.alpha = 0.8;
		this.RoundCompleteGroup.add(temp);
		temp = this.add.text(this.world.width/2, this.world.height/2, "Next Round", tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.RoundCompleteGroup.add(temp);*/

	},

	DiscardPermanentActionCards: function(){
		var location;
		done = 1;
		while(done != 0){
			for(var i = 0; i<aom.PlayerOne.CardsSelected.length; i++){
				if(aom.PlayerOne.CardsSelected[i].Type === 'Permanent'){
					aom.PlayerOne.CardsSelected.splice(i, 1);
				}
			}
			done = 0;
			for(var i = 0; i<aom.PlayerOne.CardsSelected.length; i++){
				if(aom.PlayerOne.CardsSelected[i].Type === 'Permanent'){
					done++;
				}
			}
			for(var i = 0; i<aom.PlayerTwo.CardsSelected.length; i++){
				if(aom.PlayerTwo.CardsSelected[i].Type === 'Permanent'){
					aom.PlayerTwo.CardsSelected.splice(i, 1);
				}
			}
			done = 0;
			for(var i = 0; i<aom.PlayerTwo.CardsSelected.length; i++){
				if(aom.PlayerTwo.CardsSelected[i].Type === 'Permanent'){
					done++;
				}
			}
			for(var i = 0; i<aom.PlayerThree.CardsSelected.length; i++){
				if(aom.PlayerThree.CardsSelected[i].Type === 'Permanent'){
					aom.PlayerThree.CardsSelected.splice(i, 1);
				}
			}
			done = 0;
			for(var i = 0; i<aom.PlayerThree.CardsSelected.length; i++){
				if(aom.PlayerThree.CardsSelected[i].Type === 'Permanent'){
					done++;
				}
			}
		}
		for(var i = 0; i<7; i++){
			aom.NorsePermanentActionCardDeck[i].IsNotInHand = 1;
			aom.EgyptianPermanentActionCardDeck[i].IsNotInHand = 1;
			aom.GreekPermanentActionCardDeck[i].IsNotInHand = 1;
		}
	},


	Spoilage: function(){
		var playerOneHasStorage, playerTwoHasStorage, playerThreeHasStorage;
		playerOneHasStorage = 5;
		playerTwoHasStorage = 5;
		playerThreeHasStorage = 5;
		var difference;
		for(var i = 0; i<aom.PlayerOne.CityBlock.length; i++){
			if(aom.PlayerOne.CityBlock[i].SpriteName === 'Storehouse'){
				playerOneHasStorage = 8;
			}
		}
		for(var i = 0; i<aom.PlayerTwo.CityBlock.length; i++){
			if(aom.PlayerTwo.CityBlock[i].SpriteName === 'Storehouse'){
				playerTwoHasStorage = 8;
			}
		}
		for(var i = 0; i<aom.PlayerThree.CityBlock.length; i++){
			if(aom.PlayerThree.CityBlock[i].SpriteName === 'Storehouse'){
				playerThreeHasStorage = 8;
			}
		}


		if(aom.PlayerOne.Food > playerOneHasStorage){
			difference = aom.PlayerOne.Food - playerOneHasStorage;
			aom.Bank.Food = aom.Bank.Food + difference;
			aom.PlayerOne.Food = aom.PlayerOne.Food - difference;
		}
		if(aom.PlayerOne.Wood > playerOneHasStorage){
			difference = aom.PlayerOne.Wood - playerOneHasStorage;
			aom.Bank.Wood = aom.Bank.Wood + difference;
			aom.PlayerOne.Wood = aom.PlayerOne.Wood - difference;
		}
		if(aom.PlayerOne.Gold > playerOneHasStorage){
			difference = aom.PlayerOne.Gold - playerOneHasStorage;
			aom.Bank.Gold = aom.Bank.Gold + difference;
			aom.PlayerOne.Gold = aom.PlayerOne.Gold - difference;
		}
		if(aom.PlayerOne.Favor > playerOneHasStorage){
			difference = aom.PlayerOne.Favor - playerOneHasStorage;
			aom.Bank.Favor = aom.Bank.Favor + difference;
			aom.PlayerOne.Favor = aom.PlayerOne.Favor - difference;
		}


		if(aom.PlayerTwo.Food > playerTwoHasStorage){
			difference = aom.PlayerTwo.Food - playerTwoHasStorage;
			aom.Bank.Food = aom.Bank.Food + difference;
			aom.PlayerTwo.Food = aom.PlayerTwo.Food - difference;
		}
		if(aom.PlayerTwo.Wood > playerTwoHasStorage){
			difference = aom.PlayerTwo.Wood - playerTwoHasStorage;
			aom.Bank.Wood = aom.Bank.Wood + difference;
			aom.PlayerTwo.Wood = aom.PlayerTwo.Wood - difference;
		}
		if(aom.PlayerTwo.Gold > playerTwoHasStorage){
			difference = aom.PlayerTwo.Gold - playerTwoHasStorage;
			aom.Bank.Gold = aom.Bank.Gold + difference;
			aom.PlayerTwo.Gold = aom.PlayerTwo.Gold - difference;
		}
		if(aom.PlayerTwo.Favor > playerTwoHasStorage){
			difference = aom.PlayerTwo.Favor - playerTwoHasStorage;
			aom.Bank.Favor = aom.Bank.Favor + difference;
			aom.PlayerTwo.Favor = aom.PlayerTwo.Favor - difference;
		}


		if(aom.PlayerThree.Food > playerThreeHasStorage){
			difference = aom.PlayerThree.Food - playerThreeHasStorage;
			aom.Bank.Food = aom.Bank.Food + difference;
			aom.PlayerThree.Food = aom.PlayerThree.Food - difference;
		}
		if(aom.PlayerThree.Wood > playerThreeHasStorage){
			difference = aom.PlayerThree.Wood - playerThreeHasStorage;
			aom.Bank.Wood = aom.Bank.Wood + difference;
			aom.PlayerThree.Wood = aom.PlayerThree.Wood - difference;
		}
		if(aom.PlayerThree.Gold > playerThreeHasStorage){
			difference = aom.PlayerThree.Gold - playerThreeHasStorage;
			aom.Bank.Gold = aom.Bank.Gold + difference;
			aom.PlayerThree.Gold = aom.PlayerThree.Gold - difference;
		}
		if(aom.PlayerThree.Favor > playerThreeHasStorage){
			difference = aom.PlayerThree.Favor - playerThreeHasStorage;
			aom.Bank.Favor = aom.Bank.Favor + difference;
			aom.PlayerThree.Favor = aom.PlayerThree.Favor - difference;
		}
	},


	TurnCalculator: function(){
		this.CurrentTurnPlayer = this.StartingPlayer;
		console.log(this.CurrentTurnPlayer.Board);
	},


//----------------------------------------------------------------------AI Turns----------------------------------------------------------------------------------//
	AITurnForTrade: function(obj, index){
		if(this.CardsInHandGroup != undefined){
			this.CardsInHandGroup.getAt(index).events.onInputDown.dispatch(this.CardsInHandGroup.getAt(index));
		}
		if(this.TradeCardMenuGroup != undefined){
			this.TradeCardMenuGroup.getAt(7).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(7));
			this.TradeCardMenuGroup.getAt(9).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(9));
			this.TradeCardMenuGroup.getAt(11).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(11));
			this.TradeCardMenuGroup.getAt(11).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(11));
			this.TradeCardMenuGroup.getAt(1).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(1));
			this.TradeCardMenuGroup.getAt(4).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(4));
			this.TradeCardMenuGroup.getAt(4).events.onInputDown.dispatch(this.TradeCardMenuGroup.getAt(4));


		}
	},

	AITurnForBuild: function(obj, index){
		if(this.CardsInHandGroup != undefined){
			this.CardsInHandGroup.getAt(index).events.onInputDown.dispatch(this.CardsInHandGroup.getAt(index));
		}
		var option = [];
		option[0] = 1;
		option[1] = 5;
		option[2] = 2;
		option[3] = 7;
		/*option[4] = 8;
		option[5] = 13;
		option[6] = 18;
		option[7] = 23;
		option[8] = 28;
		option[9] = 33;*/
		var rnd = this.rnd.integerInRange(0, 3);
		var value = option[rnd];
		if(this.BuildCardMenuGroup != undefined){
			this.BuildCardMenuGroup.getAt(value).events.onInputDown.dispatch(this.BuildCardMenuGroup.getAt(value));
		}
	},

	AITurnForGather: function(obj, index){
		if(this.CardsInHandGroup != undefined){
			this.CardsInHandGroup.getAt(index).events.onInputDown.dispatch(this.CardsInHandGroup.getAt(index));
		}
		var option = [];
		option[0] = 4;
		option[1] = 5;
		option[2] = 6;
		option[3] = 7;
		option[4] = 8;
		option[5] = 13;
		option[6] = 18;
		option[7] = 23;
		option[8] = 28;
		option[9] = 33;
		var rnd = this.rnd.integerInRange(0, 9);
		var value = option[rnd];
		if(this.GatherCardMenuGroup != undefined){
			this.GatherCardMenuGroup.getAt(value).events.onInputDown.dispatch(this.GatherCardMenuGroup.getAt(value));
		}


	},

//--------------------------------------------------------------------Display Player resources, Age and Bank------------------------------------------------------//


	DisplayPlayerResources: function(obj){
		var temp;
		if(this.DisplayResourcesGroup != undefined){
			this.DisplayResourcesGroup.destroy();
			this.DisplayResourcesGroup = this.add.group();
		}
		
		for(var i = 0; i<this.DisplayResourcesGroup.length; i++){
			this.DisplayResourcesGroup.getAt(i).destroy();
		}
		for(var i = 0; i<obj.Food; i++){
			var valx = (this.world.width/80*(i+1))+(this.world.width/150)*(i+1);
			var valy = this.world.height/80 + this.world.height/30;
			temp = this.add.sprite(valx, valy,'Food');
			temp.scale.setTo((this.world.width/90)/40, (this.world.height/30)/120);
			temp.alpha = 1;
			this.DisplayResourcesGroup.add(temp);
		}
		for(var i = 0; i<obj.Wood; i++){
			var valx = (this.world.width/80*(i+1))+(this.world.width/150)*(i+1);
			var valy = 2*this.world.height/80 + (this.world.height/30) + this.world.height/30;// + this.world.height/150;
			temp = this.add.sprite(valx, valy,'Wood');
			temp.scale.setTo((this.world.width/90)/40, (this.world.height/30)/120);
			temp.alpha = 1;
			this.DisplayResourcesGroup.add(temp);
		}
		for(var i = 0; i<obj.Gold; i++){
			var valx = (this.world.width/80*(i+1))+(this.world.width/150)*(i+1);
			var valy = 2*((3/2)*this.world.height/80 + (this.world.height/30)) + this.world.height/30;// + this.world.height/150;
			temp = this.add.sprite(valx, valy,'Gold');
			temp.scale.setTo((this.world.width/90)/40, (this.world.height/30)/120);
			temp.alpha = 1;
			this.DisplayResourcesGroup.add(temp);
		}
		for(var i = 0; i<obj.Favor; i++){
			var valx = (this.world.width/80*(i+1))+(this.world.width/150)*(i+1);
			var valy = 3*((4/3)*this.world.height/80 + (this.world.height/30)) + this.world.height/30;// + this.world.height/150;
			temp = this.add.sprite(valx, valy,'Favor');
			temp.scale.setTo((this.world.width/90)/40, (this.world.height/30)/120);
			temp.alpha = 1;
			this.DisplayResourcesGroup.add(temp);
		}
		for(var i = 0; i<obj.VictoryCubes; i++){
			var valx = (this.world.width/80*(i+1))+(this.world.width/150)*(i+1);
			var valy = 4*((5/4)*this.world.height/80 + (this.world.height/30)) + this.world.height/30;// + this.world.height/150;
			temp = this.add.sprite(valx, valy,'Victory');
			temp.scale.setTo((this.world.width/90)/40, (this.world.height/30)/120);
			temp.alpha = 1;
			this.DisplayResourcesGroup.add(temp);
		}
		this.world.bringToTop(this.DisplayResourcesGroup);


	},

	DisplayPlayerAge: function(obj){
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.DisplayPlayerAgeGroup != undefined){
			this.DisplayPlayerAgeGroup.destroy();
			this.DisplayPlayerAgeGroup = this.add.group();
		}
		if(obj.Age === 4 && obj.Board != 'Greek'){
			temp = this.add.sprite(this.world.width*(5.1/6), this.world.height*(1.9/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 5 && obj.Board != 'Greek'){
			temp = this.add.sprite(this.world.width*(5.1/6), this.world.height*(3.4/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 6 && obj.Board != 'Greek'){
			temp = this.add.sprite(this.world.width*(5.1/6), this.world.height*(4.8/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 7 && obj.Board != 'Greek'){
			temp = this.add.sprite(this.world.width*(5.1/6), this.world.height*(6.3/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 4 && obj.Board === 'Greek'){
			temp = this.add.sprite(this.world.width*(4.19/6), this.world.height*(7.4/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 5 && obj.Board === 'Greek'){
			temp = this.add.sprite(this.world.width*(4.19/6), this.world.height*(8.8/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 6 && obj.Board === 'Greek'){
			temp = this.add.sprite(this.world.width*(4.19/6), this.world.height*(10.2/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
		else if(obj.Age === 7 && obj.Board === 'Greek'){
			temp = this.add.sprite(this.world.width*(4.19/6), this.world.height*(11.65/40), 'AgeBox');
			temp.anchor.setTo(0, 0);
			temp.scale.setTo(this.world.width*(1/8)*(1/373), this.world.height*(1/30)*(1/103));
			this.DisplayPlayerAgeGroup.add(temp);


		}
	},


	DisplayTheBank: function(){
		var temp;
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		if(this.DisplayTheBankGroup != undefined){
			this.DisplayTheBankGroup.destroy();
			this.DisplayTheBankGroup = this.add.group();
			}
		temp = this.add.sprite(this.world.width/2, 0, 'Black');
		temp.scale.setTo((this.world.width/2)/1280, (this.world.height/2)/720);
		temp.anchor.setTo(0, 0);
		temp.alpha = 0.8;
		this.DisplayTheBankGroup.add(temp);
		temp = this.add.text((this.world.width*(3/4)), this.world.height*(1/8), "THE BANK", tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayTheBankGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), (this.world.height/4)+(0)*(this.world.height/4), "Food x"+aom.Bank.Food, tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayTheBankGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), (this.world.height/4)+(1/4)*(this.world.height/4), "Wood x"+aom.Bank.Wood, tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayTheBankGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), (this.world.height/4)+(2/4)*(this.world.height/4), "Gold x"+aom.Bank.Gold, tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayTheBankGroup.add(temp);
		temp = this.add.text(this.world.width*(3/4), (this.world.height/4)+(3/4)*(this.world.height/4), "Favor x"+aom.Bank.Favor, tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayTheBankGroup.add(temp);

		this.world.bringToTop(this.DisplayTheBankGroup);
	},


//---------------------------------------------------------------Place & Display Victory cubes---------------------------------------------//

	PlaceVictoryPointCubes: function(obj){
		/*this.CardSelectionBackDrop = this.add.group();
		this.CardsInHandGroup = this.add.group();*/
		if(this.PlaceVictoryPointGroup != undefined){
			this.PlaceVictoryPointGroup.destroy();
			this.PlaceVictoryPointGroup = this.add.group();
		}
		var temp1;
		var temp = this.add.sprite(0, 0, 'Black');
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		temp.alpha = 0.8;
		this.PlaceVictoryPointGroup.add(temp);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		var tempStyle1 = { font: "250%% Arial", fill: "#000000", align: "center" };
		temp = this.add.text(this.world.width/2, this.world.height/20, "Place Victory Cubes", tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.PlaceVictoryPointGroup.add(temp);
		temp = this.add.sprite((1/4)*this.world.width, (1/4)*this.world.height, 'VictoryLargestArmy');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryLargestArmy";
			this.numberOfTilesOnVictoryCard1++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard1');
			this.PlayerMove(this.CurrentTurnPlayer);
			
		}, this);
		this.PlaceVictoryPointGroup.add(temp);
		var tempString1 = 'Cubes = ' + this.numberOfTilesOnVictoryCard1;
		temp1 = this.add.text((1/4)*this.world.width, (1/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString1, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.PlaceVictoryPointGroup.add(temp1);

		//var temp1;
		temp = this.add.sprite((3/4)*this.world.width, (1/4)*this.world.height, 'VictoryLastBattle');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryLastBattle";
			this.numberOfTilesOnVictoryCard2++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard2');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);
		this.PlaceVictoryPointGroup.add(temp);
		var tempString2 = 'Cubes = ' + this.numberOfTilesOnVictoryCard2;
		temp1 = this.add.text((3/4)*this.world.width, (1/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString2, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.PlaceVictoryPointGroup.add(temp1);
		//var temp2;
		temp = this.add.sprite((1/4)*this.world.width, (3/4)*this.world.height, 'VictoryMostBuilding');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryMostBuilding";
			this.numberOfTilesOnVictoryCard3++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard3');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);
		this.PlaceVictoryPointGroup.add(temp);
		var tempString3 = 'Cubes = ' + this.numberOfTilesOnVictoryCard3;
		temp1 = this.add.text((1/4)*this.world.width, (3/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString3, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.PlaceVictoryPointGroup.add(temp1);
		//var temp3;
		temp = this.add.sprite((3/4)*this.world.width, (3/4)*this.world.height, 'VictoryWonder');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryWonder";
			this.numberOfTilesOnVictoryCard4++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard4');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);
		this.PlaceVictoryPointGroup.add(temp);
		var tempString4 = 'Cubes = ' + this.numberOfTilesOnVictoryCard4;
		temp1 = this.add.text((3/4)*this.world.width, (3/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString4, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.PlaceVictoryPointGroup.add(temp1);
		
		this.world.bringToTop(this.PlaceVictoryPointGroup);
		if(obj.IsAI === 1){
			var randomCard = [];
			randomCard[0] = 2;
			randomCard[1] = 4;
			randomCard[2] = 6;
			randomCard[3] = 8;
			var rnd = this.rnd.integerInRange(0,3);
			this.PlaceVictoryPointGroup.getAt(randomCard[rnd]).events.onInputDown.dispatch(this.PlaceVictoryPointGroup.getAt(randomCard[rnd]));

			//console.log(this.numberOfTilesOnVictoryCard1 + this.numberOfTilesOnVictoryCard2 + this.numberOfTilesOnVictoryCard3 + this.numberOfTilesOnVictoryCard4)

		}
		

	},


	DisplayVictoryPointCubes: function(){
		var temp;
		if(this.DisplayVictoryPointCubesGroup != undefined){
			this.DisplayVictoryPointCubesGroup.destroy();
			this.DisplayVictoryPointCubesGroup = this.add.group();
		}
		var temp1;
		var temp = this.add.sprite(0, 0, 'Black');
		temp.scale.setTo(this.world.width/1280, this.world.height/720);
		temp.alpha = 0.8;
		this.DisplayVictoryPointCubesGroup.add(temp);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		var tempStyle1 = { font: "250%% Arial", fill: "#000000", align: "center" };
		temp = this.add.text(this.world.width/2, this.world.height/20, "Victory Cards", tempStyle);
		temp.anchor.setTo(0.5, 0.5);
		this.DisplayVictoryPointCubesGroup.add(temp);
		temp = this.add.sprite((1/4)*this.world.width, (1/4)*this.world.height, 'VictoryLargestArmy');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		/*temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryLargestArmy";
			this.numberOfTilesOnVictoryCard1++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard1');
			this.PlayerMove(this.CurrentTurnPlayer);
			
		}, this);*/
		this.DisplayVictoryPointCubesGroup.add(temp);
		var tempString1 = 'Cubes = ' + this.numberOfTilesOnVictoryCard1;
		temp1 = this.add.text((1/4)*this.world.width, (1/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString1, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.DisplayVictoryPointCubesGroup.add(temp1);

		//var temp1;
		temp = this.add.sprite((3/4)*this.world.width, (1/4)*this.world.height, 'VictoryLastBattle');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		//temp.inputEnabled = true;
		/*temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryLastBattle";
			this.numberOfTilesOnVictoryCard2++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard2');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);*/
		this.DisplayVictoryPointCubesGroup.add(temp);
		var tempString2 = 'Cubes = ' + this.numberOfTilesOnVictoryCard2;
		temp1 = this.add.text((3/4)*this.world.width, (1/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString2, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.DisplayVictoryPointCubesGroup.add(temp1);
		//var temp2;
		temp = this.add.sprite((1/4)*this.world.width, (3/4)*this.world.height, 'VictoryMostBuilding');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		/*temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryMostBuilding";
			this.numberOfTilesOnVictoryCard3++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard3');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);*/
		this.DisplayVictoryPointCubesGroup.add(temp);
		var tempString3 = 'Cubes = ' + this.numberOfTilesOnVictoryCard3;
		temp1 = this.add.text((1/4)*this.world.width, (3/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString3, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.DisplayVictoryPointCubesGroup.add(temp1);
		//var temp3;
		temp = this.add.sprite((3/4)*this.world.width, (3/4)*this.world.height, 'VictoryWonder');
		temp.scale.setTo(this.world.width*(1/6)*(1/720), this.world.height*(1/3)*(1/1028));
		temp.anchor.setTo(0.5, 0.5);
		/*temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			obj.VictoryCardSelected = "VictoryWonder";
			this.numberOfTilesOnVictoryCard4++;
			this.numberOfPlayerPlacedVictoryCards++;
			//console.log('this.numberOfTilesOnVictoryCard4');
			this.PlayerMove(this.CurrentTurnPlayer);
		}, this);*/
		this.DisplayVictoryPointCubesGroup.add(temp);
		var tempString4 = 'Cubes = ' + this.numberOfTilesOnVictoryCard4;
		temp1 = this.add.text((3/4)*this.world.width, (3/4)*this.world.height + this.world.height*(1/3)*(1/2), tempString4, tempStyle);
		temp1.anchor.setTo(0.5, 0);
		this.DisplayVictoryPointCubesGroup.add(temp1);

		temp = this.add.text(this.world.width/2, this.world.height, "DONE", tempStyle);
		temp.anchor.setTo(0.5, 1);
		temp.inputEnabled = true;
		temp.events.onInputDown.add(function(){
			this.DisplayVictoryPointCubesGroup.destroy();
		}, this);
		this.DisplayVictoryPointCubesGroup.add(temp);

		this.world.bringToTop(this.DisplayVictoryPointCubesGroup);

	},


//-----------------------------------------------------------------------------Create and Preload function-------------------------------------------------------//
	

	preload: function(){
		
	},

	create: function(){
		this.numberOfTilesOnVictoryCard1 = 0;
		this.numberOfTilesOnVictoryCard2 = 0;
		this.numberOfTilesOnVictoryCard3 = 0;
		this.numberOfTilesOnVictoryCard4 = 0;
		this.numberOfPlayerPlacedVictoryCards = 0;

		this.DisplaySaveButtonGroup = this.add.group();
		this.RoundCompleteGroup = this.add.group();
		this.DisplayePlayerTwoBoardGroup = this.add.group();
		this.DisplayTheBankButtonGroup = this.add.group();
		this.DisplayTopMenuBarGroup = this.add.group();
		this.DisplayVictoryPointButtonGroup = this.add.group();
		this.DisplayVictoryPointCubesGroup = this.add.group();
		this.DisplayTheBankGroup = this.add.group();
		this.DisplayPlayerAgeGroup = this.add.group();
		this.AttackCardMenuGroup = this.add.group();
		this.ExploreCardMenuGroup = this.add.group();
		this.RecruitCardMenuGroup = this.add.group();
		this.NextAgeCardMenuGroup = this.add.group();
		this.TradeCardMenuGroup = this.add.group();
		this.BuildCardMenuGroup = this.add.group();
		this.GatherCardMenuGroup = this.add.group();
		this.CardSelectionBackDrop = this.add.group();
		this.CardsInHandGroup = this.add.group();
		this.PlaceVictoryPointGroup = this.add.group();
		this.DisplayResourcesGroup = this.add.group();
		console.log('Reached line 349 of gameplay');
		for(var i = 0; i<7; i++){
			console.log(aom.NorsePermanentActionCardDeck[i]);
		}
		this.CurrentTurnPlayer = aom.PlayerOne;
		
		this.PlayerMove(this.CurrentTurnPlayer);
		
		
	},

	update: function(){
		if(aom.Bank.Food === 0 && aom.Bank.Favor === 0 && aom.Bank.Gold === 0 && aom.Bank.Wood === 0){
			alert('Game Over');

		}
		if(aom.PlayerOne.HasAWonder === 1 || aom.PlayerTwo.HasAWonder === 1 || aom.PlayerThree.HasAWonder === 1){
			alert('Game Over');
		}
	}



};