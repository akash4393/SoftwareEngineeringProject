var aom = {
    NumberOfPlayers: 0,
    TotalNumberOfPlayers: 1

};        // creates an object/class of type Bunny Defender

aom.Boot = function(game) {

};

aom.PlayerBoard = function(){
    var Board = null;
    var BoardSelectionConfirmed = false;
    var ProductionTile = new Array();
    var SelectedProductionTile = new Array();
    
    /*ProductionTile2: null;
    ProductionTile3: null;
    ProductionTile4: null;
    ProductionTile5: null;
    ProductionTile6: null;
    ProductionTile7: null;
    ProductionTile8: null;
    ProductionTile9: null;
    ProductionTile10: null;
    ProductionTile11: null;
    ProductionTile12: null;
    ProductionTile13: null;
    ProductionTile14: null;
    ProductionTile15: null;
    ProductionTile16: null;*/
    var CityBlock = new Array();
    /*CityBlock1: null;
    CityBlock2: null;
    CityBlock3: null;
    CityBlock4: null;
    CityBlock5: null;
    CityBlock6: null;
    CityBlock7: null;
    CityBlock8: null;
    CityBlock9: null;
    CityBlock10: null;
    CityBlock11: null;
    CityBlock12: null;
    CityBlock13: null;
    CityBlock14: null;
    CityBlock15: null;
    CityBlock16: null;
*/

};

aom.PlayerBoard.prototype = Object.create(aom.PlayerBoard)
aom.PlayerBoard.prototype.constructor = aom.PlayerBoard;
aom.PlayerOne = new aom.PlayerBoard();          //PlayerOne is an object of Player type
aom.PlayerOne.ProductionTile = [];              //Array of strings which stores the soil type of the playerboard selected by the user
aom.PlayerOne.SelectedProductionTile = [];      //Array of objects which stores the information of the production tile selected by the user
aom.PlayerOne.CityBlock = [];
aom.PlayerOne.CardsSelected = [];
aom.PlayerOne.BattleCardsSelected = [];
aom.PlayerOne.CardsSelectedForCurrentBattle = [];
aom.PlayerOne.Age = 4;                          //Age 4 = ancient, 5 = classical, 6 = Heroic, 7 = Mythical
aom.PlayerOne.VictoryCardSelected = null;
aom.PlayerOne.Food = 5;
aom.PlayerOne.Favor = 5;
aom.PlayerOne.Gold = 5;
aom.PlayerOne.Wood = 5;
aom.PlayerOne.VictoryCubes = 5;
aom.PlayerOne.HasAWonder = 0;
aom.PlayerOne.HasAMarket = 0;
aom.PlayerOne.IsAI = 0;
aom.PlayerOne.CardsPlayed = 0;
aom.PlayerTwo = new aom.PlayerBoard();
aom.PlayerTwo.ProductionTile = [];
aom.PlayerTwo.CityBlock = [];
aom.PlayerTwo.SelectedProductionTile = [];
aom.PlayerTwo.CardsSelected = [];
aom.PlayerTwo.BattleCardsSelected = [];
aom.PlayerTwo.CardsSelectedForCurrentBattle = [];
aom.PlayerTwo.Age = 4;
aom.PlayerTwo.VictoryCardSelected = null;
aom.PlayerTwo.Food = 5;
aom.PlayerTwo.Favor = 5;
aom.PlayerTwo.Gold = 5;
aom.PlayerTwo.Wood = 5;
aom.PlayerTwo.VictoryCubes = 0;
aom.PlayerTwo.HasAWonder = 0;
aom.PlayerTwo.HasAMarket = 0;
aom.PlayerTwo.IsAI = 1;
aom.PlayerTwo.CardsPlayed = 0;
aom.PlayerThree = new aom.PlayerBoard();
aom.PlayerThree.ProductionTile = [];
aom.PlayerThree.CityBlock = [];
aom.PlayerThree.SelectedProductionTile = [];
aom.PlayerThree.CardsSelected = [];
aom.PlayerThree.BattleCardsSelected = [];
aom.PlayerThree.CardsSelectedForCurrentBattle = [];
aom.PlayerThree.Age = 4;
aom.PlayerThree.VictoryCardSelected = null;
aom.PlayerThree.Food = 5;
aom.PlayerThree.Favor = 5;
aom.PlayerThree.Gold = 5;
aom.PlayerThree.Wood = 5;
aom.PlayerThree.VictoryCubes = 0;
aom.PlayerThree.HasAWonder = 0;
aom.PlayerThree.HasAMarket = 0;
aom.PlayerThree.IsAI = 1;
aom.PlayerThree.CardsPlayed = 0;
aom.PlayerFour = new aom.PlayerBoard();
aom.PlayerFour.ProductionTile = [];
aom.PlayerFour.CityBlock = [];
aom.PlayerFour.SelectedProductionTile = [];
aom.PlayerFour.CardsSelected = [];
aom.PlayerFour.BattleCardsSelected = [];
aom.PlayerFour.Age = 4;
aom.PlayerFour.VictoryCardSelected = null;
aom.PlayerFour.Food = 5;
aom.PlayerFour.Favor = 5;
aom.PlayerFour.Gold = 5;
aom.PlayerFour.Wood = 5;
aom.PlayerFour.VictoryCubes = 0;
aom.PlayerFour.HasAWonder = 1;
aom.PlayerFour.HasAMarket = 0;
aom.PlayerFour.IsAI = 0;
aom.PlayerFive = new aom.PlayerBoard();
aom.PlayerFive.ProductionTile = [];
aom.PlayerFive.CityBlock = [];
aom.PlayerFive.SelectedProductionTile = [];
aom.PlayerFive.CardsSelected = [];
aom.PlayerFive.BattleCardsSelected = [];
aom.PlayerFive.Age = 4;
aom.PlayerFive.VictoryCardSelected = null;
aom.PlayerFive.Food = 5;
aom.PlayerFive.Favor = 5;
aom.PlayerFive.Gold = 5;
aom.PlayerFive.Wood = 5;
aom.PlayerFive.VictoryCubes = 0;
aom.PlayerFive.HasAWonder = 1;
aom.PlayerFive.HasAMarket = 0;
aom.PlayerFive.IsAI = 0;
aom.PlayerSix = new aom.PlayerBoard();
aom.PlayerSix.ProductionTile = [];
aom.PlayerSix.CityBlock = [];
aom.PlayerSix.SelectedProductionTile = [];
aom.PlayerSix.CardsSelected = [];
aom.PlayerSix.BattleCardsSelected = [];
aom.PlayerSix.Age = 4;
aom.PlayerSix.VictoryCardSelected = null;
aom.PlayerSix.Food = 5;
aom.PlayerSix.Favor = 5;
aom.PlayerSix.Gold = 5;
aom.PlayerSix.Wood = 5;
aom.PlayerSix.VictoryCubes = 0;
aom.PlayerSix.HasAWonder = 1;
aom.PlayerSix.HasAMarket = 0;
aom.PlayerSix.IsAI = 0;



aom.BankClass = function(){
    var Food;
    var Wood;
    var Gold;
    var Favor;
};

aom.BankClass.prototype = Object.create(aom.BankClass)
aom.BankClass.prototype.constructor = aom.BankClass;
aom.Bank = new aom.BankClass();
aom.Bank.Food = 25;
aom.Bank.Favor = 25;
aom.Bank.Wood = 25;
aom.Bank.Gold = 25;



aom.Boot.prototype = {                 // to make methods preload(),create() etc available to all objects of bunnyDefender
	
	preload: function() 
    {                                          
        
    	this.load.image('SplashScreen', 'images/OtherResources/splashscreen2.jpg');
    	this.load.image('AgeOfMythologyText', 'images/OtherResources/splashscreentext.png');
    	this.load.image('LoadBar', 'images/OtherResources/loadbar.png');
    },

    create: function()
    {
    	this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false; // pause game on tab change
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		/*this.scale.minWidth = 1280;
		this.scale.minHeight = 800;*/
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = false;  // force portrait mode
		this.scale.setScreenSize(true);  // true will force screen resize no matter what
        this.input.addPointer();
		
    	this.state.start('LoadResources');
    }
};
