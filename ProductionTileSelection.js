aom.ProductionTileSelection = function(game){
	this.backDrop = null;
	this.BoardProductionArea = null;
	this.Board = null;
	this.TilesToDisplay = null;
	this.SelectedProductionTileVisibleGroup = null;
	this.Tile1;
	this.Tile2;
	this.Tile3;
	this.Tile4;
	this.Tile5;
	this.Tile6;
	this.Tile7;
	this.Tile8;
	this.Tile9;
	this.Tile10;
	this.Tile11;
	this.Tile12;
	this.Tile13;
	this.Tile14;
	this.Tile15;
	this.Tile16;
	this.Tile17;
	this.Tile18;
	this.Tile19;
	this.Tile20;
	this.TurnTracker = 1;
	this.AITurnOver = true;
	this.PlayerMenuButtons = [];
	this.CounterForPlayerMenu = 0;
	this.TilesSlectedByUser = 0;

};



//--------------------------------------------------------Creating ArrayList of Norse Cards---------------------------//

aom.BuildActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var BuildingsAllowed = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.BuildActionCard.prototype = Object.create(aom.BuildActionCard);
aom.BuildActionCard.prototype.constructor = aom.BuildActionCard;
aom.NorseBuildCards = [];
aom.EgyptianBuildCards = [];
aom.GreekBuildCards = [];


aom.AttackActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var AttackAllowed = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.AttackActionCard.prototype = Object.create(aom.AttackActionCard);
aom.AttackActionCard.prototype.constructor = aom.AttackActionCard;
aom.NorseAttackCards = [];
aom.EgyptianAttackCards = [];
aom.GreekAttackCards = [];

aom.ExploreActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var ExtraTilesAllowed = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.ExploreActionCard.prototype = Object.create(aom.ExploreActionCard);
aom.ExploreActionCard.prototype.constructor = aom.ExploreActionCard;
aom.NorseExploreCards = [];
aom.EgyptianExploreCards = [];
aom.GreekExploreCards = [];

aom.GatherActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var ResourceOrTerrain = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.GatherActionCard.prototype = Object.create(aom.GatherActionCard);
aom.GatherActionCard.prototype.constructor = aom.GatherActionCard;
aom.NorseGatherCards = [];
aom.EgyptianGatherCards = [];
aom.GreekGatherCards = [];


aom.NextAgeActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var Classical = null;
	var Heroic = null;
	var Mythic = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.NextAgeActionCard.prototype = Object.create(aom.NextAgeActionCard);
aom.NextAgeActionCard.prototype.constructor = aom.NextAgeActionCard;
aom.NorseNextAgeCards = [];
aom.EgyptianNextAgeCards = [];
aom.GreekNextAgeCards = [];


aom.RecruitActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var RecruitsAllowed = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.RecruitActionCard.prototype = Object.create(aom.RecruitActionCard);
aom.RecruitActionCard.prototype.constructor = aom.RecruitActionCard;
aom.NorseRecruitCards = [];
aom.EgyptianRecruitCards = [];
aom.GreekRecruitCards = [];


aom.TradeActionCard = function(){
	var SpriteName = null;
	var Type = null;
	var Cost = null;
	var IsGod = null;
	var IsNotInHand = null;

};

aom.TradeActionCard.prototype = Object.create(aom.TradeActionCard);
aom.TradeActionCard.prototype.constructor = aom.TradeActionCard;
aom.NorseTradeCards = [];
aom.EgyptianTradeCards = [];
aom.GreekTradeCards = [];

aom.BonusInfo = function(){
	var Against = null;
	var Bonus = null;
};

aom.BonusInfo.prototype = Object.create(aom.BonusInfo);
aom.BonusInfo.prototype.constructor = aom.BonusInfo;

aom.BattleCard = function(){
	var SpriteName = null;
	var Type = null;
	var SubType = null;
	var NumberOfDice = null;
	var BonusDiceString1 = null;				//Each BonusDiceString is going to be a string that store both the type against which it is effective
	var BonusDiceString2 = null;				//and the number of bonus dice you get. Eg. "Heroes = 4". So in order to fetch, check the first character
												//and the last character to get the value.
	
	var CostFood = null;
	var CostWood = null;
	var CostGold = null;
	var CostFavor = null;
	var HasSpecialPower = null;					//1 if yes and 0 if no
	var isRecruited = null;
	var isSelectedForBattle = null;
};

aom.BattleCard.prototype = Object.create(aom.BattleCard);
aom.BattleCard.prototype.constructor = aom.BattleCard;

aom.NorseBattleCards = [];
aom.EgyptianBattleCards = [];
aom.GreekBattleCards = [];

aom.NorsePermanentActionCardDeck = [];
aom.NorseRandomActionCardDeck = [];

aom.EgyptianPermanentActionCardDeck = [];
aom.EgyptianRandomActionCardDeck = [];

aom.GreekPermanentActionCardDeck = [];
aom.GreekRandomActionCardDeck = [];



aom.Building = function(){
	var SpriteName = null;
	var isConstructed = null;
	var CostGold = null;
	var CostWood = null;
	var CostFavor = null;
	var CostFood = null;
};

aom.Building.prototype = Object.create(aom.Building);
aom.Building.prototype.constructor = aom.Building;

aom.NorseBuildings = [];
aom.EgyptianBuildings = [];
aom.GreekBuildings = [];


//--------------------------------------------------------Creating ArrayList of Tiles---------------------------//


aom.Tile = function(){						//Tile is class that contains all the information regarding each tile present in the game
    var SpriteName = null;
    var Favor = null;
    var Gold = null;
    var Wood = null;
    var Food = null;
    var SoilType = null;
    var IsSelected = null;

};

aom.Tile.prototype = Object.create(aom.Tile)
aom.Tile.prototype.constructor = aom.Tile;
aom.Tiles = [];					//Array of Tile objects







aom.ProductionTileSelection.prototype = {


//-----------------------------------------Adding all 20 tile objects to Tiles array-------------------------------------------------------------------//

	InitializeTiles: function(){
		this.Tile1 = new aom.Tile();
		this.Tile1.SpriteName = 'Desert1Gold';
		this.Tile1.Favor = 0;
		this.Tile1.Gold = 1;
		this.Tile1.Food = 0;
		this.Tile1.Wood = 0;
		this.Tile1.SoilType = 'Desert';
		this.Tile1.IsSelected = 0;
		aom.Tiles[0] = this.Tile1;

		this.Tile2 = new aom.Tile();
		this.Tile2.SpriteName = 'Desert2Favor';
		this.Tile2.Favor = 2;
		this.Tile2.Gold = 0;
		this.Tile2.Food = 0;
		this.Tile2.Wood = 0;
		this.Tile2.SoilType = 'Desert';
		this.Tile2.IsSelected = 0;
		aom.Tiles[1] = this.Tile2;

		this.Tile3 = new aom.Tile();
		this.Tile3.SpriteName = 'Fertile1Favor';
		this.Tile3.Favor = 1;
		this.Tile3.Gold = 0;
		this.Tile3.Food = 0;
		this.Tile3.Wood = 0;
		this.Tile3.SoilType = 'Fertile';
		this.Tile3.IsSelected = 0;
		aom.Tiles[2] = this.Tile3;

		this.Tile4 = new aom.Tile();
		this.Tile4.SpriteName = 'Fertile1Gold';
		this.Tile4.Favor = 0;
		this.Tile4.Gold = 1;
		this.Tile4.Food = 0;
		this.Tile4.Wood = 0;
		this.Tile4.SoilType = 'Fertile';
		this.Tile4.IsSelected = 0;
		aom.Tiles[3] = this.Tile4;

		this.Tile5 = new aom.Tile();
		this.Tile5.SpriteName = 'Fertile1Wood';
		this.Tile5.Favor = 0;
		this.Tile5.Gold = 0;
		this.Tile5.Food = 0;
		this.Tile5.Wood = 1;
		this.Tile5.SoilType = 'Fertile';
		this.Tile5.IsSelected = 0;
		aom.Tiles[4] = this.Tile5;

		this.Tile6 = new aom.Tile();
		this.Tile6.SpriteName = 'Fertile2Food';
		this.Tile6.Favor = 0;
		this.Tile6.Gold = 0;
		this.Tile6.Food = 2;
		this.Tile6.Wood = 0;
		this.Tile6.SoilType = 'Fertile';
		this.Tile6.IsSelected = 0;
		aom.Tiles[5] = this.Tile6;

		this.Tile7 = new aom.Tile();
		this.Tile7.SpriteName = 'Forest1Favor';
		this.Tile7.Favor = 1;
		this.Tile7.Gold = 0;
		this.Tile7.Food = 0;
		this.Tile7.Wood = 0;
		this.Tile7.SoilType = 'Forest';
		this.Tile7.IsSelected = 0;
		aom.Tiles[6] = this.Tile7;

		this.Tile8 = new aom.Tile();
		this.Tile8.SpriteName = 'Forest1Food';
		this.Tile8.Favor = 0;
		this.Tile8.Gold = 0;
		this.Tile8.Food = 1;
		this.Tile8.Wood = 0;
		this.Tile8.SoilType = 'Forest';
		this.Tile8.IsSelected = 0;
		aom.Tiles[7] = this.Tile8;

		this.Tile9 = new aom.Tile();
		this.Tile9.SpriteName = 'Forest1Gold';
		this.Tile9.Favor = 0;
		this.Tile9.Gold = 1;
		this.Tile9.Food = 0;
		this.Tile9.Wood = 0;
		this.Tile9.SoilType = 'Forest';
		this.Tile9.IsSelected = 0;
		aom.Tiles[8] = this.Tile9;

		this.Tile10 = new aom.Tile();
		this.Tile10.SpriteName = 'Forest2Wood';
		this.Tile10.Favor = 0;
		this.Tile10.Gold = 0;
		this.Tile10.Food = 0;
		this.Tile10.Wood = 2;
		this.Tile10.SoilType = 'Forest';
		this.Tile10.IsSelected = 0;
		aom.Tiles[9] = this.Tile10;

		this.Tile11 = new aom.Tile();
		this.Tile11.SpriteName = 'Hills1Favor';
		this.Tile11.Favor = 1;
		this.Tile11.Gold = 0;
		this.Tile11.Food = 0;
		this.Tile11.Wood = 0;
		this.Tile11.SoilType = 'Hills';
		this.Tile11.IsSelected = 0;
		aom.Tiles[10] =this.Tile11;

		this.Tile12 = new aom.Tile();
		this.Tile12.SpriteName = 'Hills1Food';
		this.Tile12.Favor = 0;
		this.Tile12.Gold = 0;
		this.Tile12.Food = 1;
		this.Tile12.Wood = 0;
		this.Tile12.SoilType = 'Hills';
		this.Tile12.IsSelected = 0;
		aom.Tiles[11] = this.Tile12;

		this.Tile13 = new aom.Tile();
		this.Tile13.SpriteName = 'Hills1Wood';
		this.Tile13.Favor = 0;
		this.Tile13.Gold = 0;
		this.Tile13.Food = 0;
		this.Tile13.Wood = 1;
		this.Tile13.SoilType = 'Hills';
		this.Tile13.IsSelected = 0;
		aom.Tiles[12] = this.Tile13;

		this.Tile14 = new aom.Tile();
		this.Tile14.SpriteName = 'Hills2Gold';
		this.Tile14.Favor = 0;
		this.Tile14.Gold = 2;
		this.Tile14.Food = 0;
		this.Tile14.Wood = 0;
		this.Tile14.SoilType = 'Hills';
		this.Tile14.IsSelected = 0;
		aom.Tiles[13] = this.Tile14;

		this.Tile15 = new aom.Tile();
		this.Tile15.SpriteName = 'Mountain1Favor';
		this.Tile15.Favor = 1;
		this.Tile15.Gold = 0;
		this.Tile15.Food = 0;
		this.Tile15.Wood = 0;
		this.Tile15.SoilType = 'Mountain';
		this.Tile15.IsSelected = 0;
		aom.Tiles[14] = this.Tile15;

		this.Tile16 = new aom.Tile();
		this.Tile16.SpriteName = 'Mountain1Wood';
		this.Tile16.Favor = 0;
		this.Tile16.Gold = 0;
		this.Tile16.Food = 0;
		this.Tile16.Wood = 1;
		this.Tile16.SoilType = 'Mountain';
		this.Tile16.IsSelected = 0;
		aom.Tiles[15] = this.Tile16;

		this.Tile17 = new aom.Tile();
		this.Tile17.SpriteName = 'Mountain2Gold';
		this.Tile17.Favor = 0;
		this.Tile17.Gold = 2;
		this.Tile17.Food = 0;
		this.Tile17.Wood = 0;
		this.Tile17.SoilType = 'Mountain';
		this.Tile17.IsSelected = 0;
		aom.Tiles[16] = this.Tile17;

		this.Tile18 = new aom.Tile();
		this.Tile18.SpriteName = 'Swamp1Favor';
		this.Tile18.Favor = 1;
		this.Tile18.Gold = 0;
		this.Tile18.Food = 0;
		this.Tile18.Wood = 0;
		this.Tile18.SoilType = 'Swamp';
		this.Tile18.IsSelected = 0;
		aom.Tiles[17] = this.Tile18;

		this.Tile19 = new aom.Tile();
		this.Tile19.SpriteName = 'Swamp1Food';
		this.Tile19.Favor = 0;
		this.Tile19.Gold = 0;
		this.Tile19.Food = 1;
		this.Tile19.Wood = 0;
		this.Tile19.SoilType = 'Swamp';
		this.Tile19.IsSelected = 0;
		aom.Tiles[18] = this.Tile19;

		this.Tile20 = new aom.Tile();
		this.Tile20.SpriteName = 'Swamp1Wood';
		this.Tile20.Favor = 0;
		this.Tile20.Gold = 0;
		this.Tile20.Food = 0;
		this.Tile20.Wood = 1;
		this.Tile20.SoilType = 'Swamp';
		this.Tile20.IsSelected = 0;
		aom.Tiles[19] = this.Tile20;
	
		for(var i = 0; i<20; i++){			
			//console.log(aom.Tiles[i]);
		}
	},

//-----------------------------------------END-------------------------------------------------------------------//



//--------------------------------------------------------Initialize Norse Cards---------------------------//


	InitializeNorseCards: function(){
		var buildcard;
		buildcard = new aom.BuildActionCard();
		buildcard.SpriteName = 'NorseBuildPermanentAction';
		buildcard.Type = 'Permanent';
		buildcard.BuildingsAllowed = 1;
		buildcard.IsGod = 0;
		buildcard.IsNotInHand = 1;
		aom.NorseBuildCards[0] = buildcard;

		var buildcard1;
		buildcard1 = new aom.BuildActionCard();
		buildcard1.SpriteName = 'NorseBuildRandomCard1';
		buildcard1.Type = 'Random';
		buildcard1.BuildingsAllowed = 4;
		buildcard1.IsGod = 1;
		buildcard1.IsNotInHand = 1;
		aom.NorseBuildCards[1] = buildcard1;

		var buildcard2;
		buildcard2 = new aom.BuildActionCard();
		buildcard2.SpriteName = 'NorseBuildRandomCard2';
		buildcard2.Type = 'Random';
		buildcard2.BuildingsAllowed = 4;
		buildcard2.IsGod = 0;
		buildcard2.IsNotInHand = 1;
		aom.NorseBuildCards[2] = buildcard2;

		var buildcard3;
		buildcard3 = new aom.BuildActionCard();
		buildcard3.SpriteName = 'NorseBuildRandomCard3';
		buildcard3.Type = 'Random';
		buildcard3.BuildingsAllowed = 3;
		buildcard3.IsGod = 0;
		buildcard3.IsNotInHand = 1;
		aom.NorseBuildCards[3] = buildcard3;

		var buildcard4;
		buildcard4 = new aom.BuildActionCard();
		buildcard4.SpriteName = 'NorseBuildRandomCard4';
		buildcard4.Type = 'Random';
		buildcard4.BuildingsAllowed = 2;
		buildcard4.IsGod = 0;
		buildcard4.IsNotInHand = 1;
		aom.NorseBuildCards[4] = buildcard4;

		var buildcard5;
		buildcard5 = new aom.BuildActionCard();
		buildcard5.SpriteName = 'NorseBuildRandomCard5';
		buildcard5.Type = 'Random';
		buildcard5.BuildingsAllowed = 3;
		buildcard5.IsGod = 0;
		buildcard5.IsNotInHand = 1;
		aom.NorseBuildCards[5] = buildcard5;

		var buildcard6;
		buildcard6 = new aom.BuildActionCard();
		buildcard6.SpriteName = 'NorseBuildRandomCard6';
		buildcard6.Type = 'Random';
		buildcard6.BuildingsAllowed = 3;
		buildcard6.IsGod = 0;
		buildcard6.IsNotInHand = 1;
		aom.NorseBuildCards[6] = buildcard6;

		var buildcard7;
		buildcard7 = new aom.BuildActionCard();
		buildcard7.SpriteName = 'NorseBuildRandomCard7';
		buildcard7.Type = 'Random';
		buildcard7.BuildingsAllowed = 2;
		buildcard7.IsGod = 0;
		buildcard7.IsNotInHand = 1;
		aom.NorseBuildCards[7] = buildcard7;


		var attackcard;
		attackcard = new aom.AttackActionCard();
		attackcard.SpriteName = 'NorseAttackPermanentAction';
		attackcard.Type = 'Permanent';
		attackcard.AttackAllowed = 4;
		attackcard.IsGod = 0;
		attackcard.IsNotInHand = 1;
		aom.NorseAttackCards[0] = attackcard;

		var attackcard1;
		attackcard1 = new aom.AttackActionCard();
		attackcard1.SpriteName = 'NorseAttackRandomCard1';
		attackcard1.Type = 'Random';
		attackcard1.AttackAllowed = 5;
		attackcard1.IsGod = 0;
		attackcard1.IsNotInHand = 1;
		aom.NorseAttackCards[1] = attackcard1;

		/*var attackcard2;
		attackcard2 = new aom.AttackActionCard();
		attackcard2.SpriteName = 'NorseAttackRandomCard2';
		attackcard2.Type = 'Random';
		attackcard2.AttackAllowed = 4;
		attackcard2.IsGod = 1;
		attackcard2.IsNotInHand = 1;
		aom.NorseAttackCards[2] = attackcard2;*/

		var attackcard3;
		attackcard3 = new aom.AttackActionCard();
		attackcard3.SpriteName = 'NorseAttackRandomCard3';
		attackcard3.Type = 'Random';
		attackcard3.AttackAllowed = 6;
		attackcard3.IsGod = 0;
		attackcard3.IsNotInHand = 1;
		aom.NorseAttackCards[2] = attackcard3;

		var attackcard4;
		attackcard4 = new aom.AttackActionCard();
		attackcard4.SpriteName = 'NorseAttackRandomCard4';
		attackcard4.Type = 'Random';
		attackcard4.AttackAllowed = 7;
		attackcard4.IsGod = 0;
		attackcard4.IsNotInHand = 1;
		aom.NorseAttackCards[3] = attackcard4;

		var attackcard5;
		attackcard5 = new aom.AttackActionCard();
		attackcard5.SpriteName = 'NorseAttackRandomCard5';
		attackcard5.Type = 'Random';
		attackcard5.AttackAllowed = 5;
		attackcard5.IsGod = 0;
		attackcard5.IsNotInHand = 1;
		aom.NorseAttackCards[4] = attackcard5;

		var attackcard6;
		attackcard6 = new aom.AttackActionCard();
		attackcard6.SpriteName = 'NorseAttackRandomCard6';
		attackcard6.Type = 'Random';
		attackcard6.AttackAllowed = 7;
		attackcard6.IsGod = 0;
		attackcard6.IsNotInHand = 1;
		aom.NorseAttackCards[5] = attackcard6;

		/*var attackcard7;
		attackcard7 = new aom.AttackActionCard();
		attackcard7.SpriteName = 'NorseAttackRandomCard7';
		attackcard7.Type = 'Random';
		attackcard7.AttackAllowed = 6;
		attackcard7.IsGod = 1;
		attackcard7.IsNotInHand = 1;
		aom.NorseAttackCards[7] = attackcard7;*/

		var attackcard8;
		attackcard8 = new aom.AttackActionCard();
		attackcard8.SpriteName = 'NorseAttackRandomCard8';
		attackcard8.Type = 'Random';
		attackcard8.AttackAllowed = 6;
		attackcard8.IsGod = 1;
		attackcard8.IsNotInHand = 1;
		aom.NorseAttackCards[6] = attackcard8;

		var explorecard;
		explorecard = new aom.ExploreActionCard();
		explorecard.SpriteName = 'NorseExplorePermanentAction';
		explorecard.Type = 'Permanent';
		explorecard.ExtraTilesAllowed = 1;
		explorecard.IsGod = 0;
		explorecard.IsNotInHand = 1;
		aom.NorseExploreCards[0] = explorecard;

		var explorecard1;
		explorecard1 = new aom.ExploreActionCard();
		explorecard1.SpriteName = 'NorseExploreRandomCard1';
		explorecard1.Type = 'Random';
		explorecard1.ExtraTilesAllowed = 2;
		explorecard1.IsGod = 0;
		explorecard1.IsNotInHand = 1;
		aom.NorseExploreCards[1] = explorecard1;

		var explorecard2;
		explorecard2 = new aom.ExploreActionCard();
		explorecard2.SpriteName = 'NorseExploreRandomCard2';
		explorecard2.Type = 'Random';
		explorecard2.ExtraTilesAllowed = 1;
		explorecard2.IsGod = 0;
		explorecard2.IsNotInHand = 1;
		aom.NorseExploreCards[2] = explorecard2;

		var explorecard3;
		explorecard3 = new aom.ExploreActionCard();
		explorecard3.SpriteName = 'NorseExploreRandomCard3';
		explorecard3.Type = 'Random';
		explorecard3.ExtraTilesAllowed = 0;
		explorecard3.IsGod = 0;
		explorecard3.IsNotInHand = 1;
		aom.NorseExploreCards[3] = explorecard3;

		var explorecard4;
		explorecard4 = new aom.ExploreActionCard();
		explorecard4.SpriteName = 'NorseExploreRandomCard4';
		explorecard4.Type = 'Random';
		explorecard4.ExtraTilesAllowed = 0;
		explorecard4.IsGod = 1;
		explorecard4.IsNotInHand = 1;
		aom.NorseExploreCards[4] = explorecard4;

		var explorecard5;
		explorecard5 = new aom.ExploreActionCard();
		explorecard5.SpriteName = 'NorseExploreRandomCard5';
		explorecard5.Type = 'Random';
		explorecard5.ExtraTilesAllowed = 0;
		explorecard5.IsGod = 0;
		explorecard5.IsNotInHand = 1;
		aom.NorseExploreCards[5] = explorecard5;

		var explorecard6;
		explorecard6 = new aom.ExploreActionCard();
		explorecard6.SpriteName = 'NorseExploreRandomCard6';
		explorecard6.Type = 'Random';
		explorecard6.ExtraTilesAllowed = 2;
		explorecard6.IsGod = 0;
		explorecard6.IsNotInHand = 1;
		aom.NorseExploreCards[6] = explorecard6;


		var gathercard;
		gathercard = new aom.GatherActionCard();
		gathercard.SpriteName = 'NorseGatherPermanentAction';
		gathercard.Type = 'Permanent';
		gathercard.ResourceOrTerrain = 'TerrainOrResource';
		gathercard.IsGod = 0;
		gathercard.IsNotInHand = 1;
		aom.NorseGatherCards[0] = gathercard;

		/*var gathercard1;
		gathercard1 = new aom.GatherActionCard();
		gathercard1.SpriteName = 'NorseGatherRandomCard1';
		gathercard1.Type = 'Random';
		gathercard1.ResourceOrTerrain = 'TerrainOrResource';
		gathercard1.IsGod = 1;
		gathercard1.IsNotInHand = 1;
		aom.NorseGatherCards[1] = gathercard1;*/

		var gathercard2;
		gathercard2 = new aom.GatherActionCard();
		gathercard2.SpriteName = 'NorseGatherRandomCard2';
		gathercard2.Type = 'Random';
		gathercard2.ResourceOrTerrain = 'AllResources';
		gathercard2.IsGod = 0;
		gathercard2.IsNotInHand = 1;
		aom.NorseGatherCards[1] = gathercard2;

		var gathercard3;
		gathercard3 = new aom.GatherActionCard();
		gathercard3.SpriteName = 'NorseGatherRandomCard3';
		gathercard3.Type = 'Random';
		gathercard3.ResourceOrTerrain = 'AllResources';
		gathercard3.IsGod = 0;
		gathercard3.IsNotInHand = 1;
		aom.NorseGatherCards[2] = gathercard3;

		var gathercard4;
		gathercard4 = new aom.GatherActionCard();
		gathercard4.SpriteName = 'NorseGatherRandomCard4';
		gathercard4.Type = 'Random';
		gathercard4.ResourceOrTerrain = 'TerrainOrResource';
		gathercard4.IsGod = 1;
		gathercard4.IsNotInHand = 1;
		aom.NorseGatherCards[3] = gathercard4;

		var gathercard5;
		gathercard5 = new aom.GatherActionCard();
		gathercard5.SpriteName = 'NorseGatherRandomCard5';
		gathercard5.Type = 'Random';
		gathercard5.ResourceOrTerrain = 'AllResources';
		gathercard5.IsGod = 0;
		gathercard5.IsNotInHand = 1;
		aom.NorseGatherCards[4] = gathercard5;

		var gathercard6;
		gathercard6 = new aom.GatherActionCard();
		gathercard6.SpriteName = 'NorseGatherRandomCard6';
		gathercard6.Type = 'Random';
		gathercard6.ResourceOrTerrain = 'AllResources';
		gathercard6.IsGod = 0;
		gathercard6.IsNotInHand = 1;
		aom.NorseGatherCards[5] = gathercard6;

		var gathercard7;
		gathercard7 = new aom.GatherActionCard();
		gathercard7.SpriteName = 'NorseGatherRandomCard7';
		gathercard7.Type = 'Random';
		gathercard7.ResourceOrTerrain = 'AllResources';
		gathercard7.IsGod = 0;
		gathercard7.IsNotInHand = 1;
		aom.NorseGatherCards[6] = gathercard7;

		/*var gathercard8;
		gathercard8 = new aom.GatherActionCard();
		gathercard8.SpriteName = 'NorseGatherRandomCard8';
		gathercard8.Type = 'Random';
		gathercard8.ResourceOrTerrain = 'TerrainOrResource';
		gathercard8.IsGod = 1;
		gathercard8.IsNotInHand = 1;
		aom.NorseGatherCards[8] = gathercard8;*/

		var nextagecard;
		nextagecard = new aom.NextAgeActionCard();
		nextagecard.SpriteName = 'NorseNextAgePermanentAction';
		nextagecard.Type = 'Permanent';
		nextagecard.Classical = 4;
		nextagecard.Heroic = 5;
		nextagecard.Mythic = 6;
		nextagecard.IsGod = 0;
		nextagecard.IsNotInHand = 1;
		aom.NorseNextAgeCards[0] = nextagecard;

		var nextagecard1;
		nextagecard1 = new aom.NextAgeActionCard();
		nextagecard1.SpriteName = 'NorseNextAgeRandomCard1';
		nextagecard1.Type = 'Random';
		nextagecard1.Classical = 3;
		nextagecard1.Heroic = 4;
		nextagecard1.Mythic = 5;
		nextagecard1.IsGod = 0;
		nextagecard1.IsNotInHand = 1;
		aom.NorseNextAgeCards[1] = nextagecard1;

		var nextagecard2;
		nextagecard2 = new aom.NextAgeActionCard();
		nextagecard2.SpriteName = 'NorseNextAgeRandomCard2';
		nextagecard2.Type = 'Random';
		nextagecard2.Classical = 3;
		nextagecard2.Heroic = 4;
		nextagecard2.Mythic = 5;
		nextagecard2.IsGod = 1;
		nextagecard2.IsNotInHand = 1;
		aom.NorseNextAgeCards[2] = nextagecard2;

		var nextagecard3;
		nextagecard3 = new aom.NextAgeActionCard();
		nextagecard3.SpriteName = 'NorseNextAgeRandomCard3';
		nextagecard3.Type = 'Random';
		nextagecard3.Classical = 3;
		nextagecard3.Heroic = 4;
		nextagecard3.Mythic = 5;
		nextagecard3.IsGod = 0;
		nextagecard3.IsNotInHand = 1;
		aom.NorseNextAgeCards[3] = nextagecard3;

		var nextagecard4;
		nextagecard4 = new aom.NextAgeActionCard();
		nextagecard4.SpriteName = 'NorseNextAgeRandomCard4';
		nextagecard4.Type = 'Random';
		nextagecard4.Classical = 3;
		nextagecard4.Heroic = 4;
		nextagecard4.Mythic = 5;
		nextagecard4.IsGod = 0;
		nextagecard4.IsNotInHand = 1;
		aom.NorseNextAgeCards[4] = nextagecard4;

		var recruitcard;
		recruitcard = new aom.RecruitActionCard();
		recruitcard.SpriteName = 'NorseRecruitPermanentAction';
		recruitcard.Type = 'Permanent';
		recruitcard.RecruitsAllowed = 2;
		recruitcard.IsGod = 0;
		recruitcard.IsNotInHand = 1;
		aom.NorseRecruitCards[0] = recruitcard;

		var recruitcard1;
		recruitcard1 = new aom.RecruitActionCard();
		recruitcard1.SpriteName = 'NorseRecruitRandomCard1';
		recruitcard1.Type = 'Random';
		recruitcard1.RecruitsAllowed = 3;
		recruitcard1.IsGod = 1;
		recruitcard1.IsNotInHand = 1;
		aom.NorseRecruitCards[1] = recruitcard1;

		var recruitcard2;
		recruitcard2 = new aom.RecruitActionCard();
		recruitcard2.SpriteName = 'NorseRecruitRandomCard2';
		recruitcard2.Type = 'Random';
		recruitcard2.RecruitsAllowed = 5;
		recruitcard2.IsGod = 0;
		recruitcard2.IsNotInHand = 1;
		aom.NorseRecruitCards[2] = recruitcard2;

		var recruitcard3;
		recruitcard3 = new aom.RecruitActionCard();
		recruitcard3.SpriteName = 'NorseRecruitRandomCard3';
		recruitcard3.Type = 'Random';
		recruitcard3.RecruitsAllowed = 4;
		recruitcard3.IsGod = 0;
		recruitcard3.IsNotInHand = 1;
		aom.NorseRecruitCards[3] = recruitcard3;

		var recruitcard4;
		recruitcard4 = new aom.RecruitActionCard();
		recruitcard4.SpriteName = 'NorseRecruitRandomCard4';
		recruitcard4.Type = 'Random';
		recruitcard4.RecruitsAllowed = 4;
		recruitcard4.IsGod = 0;
		recruitcard4.IsNotInHand = 1;
		aom.NorseRecruitCards[4] = recruitcard4;

		var recruitcard5;
		recruitcard5 = new aom.RecruitActionCard();
		recruitcard5.SpriteName = 'NorseRecruitRandomCard5';
		recruitcard5.Type = 'Random';
		recruitcard5.RecruitsAllowed = 3;
		recruitcard5.IsGod = 0;
		recruitcard5.IsNotInHand = 1;
		aom.NorseRecruitCards[5] = recruitcard5;

		var recruitcard6;
		recruitcard6 = new aom.RecruitActionCard();
		recruitcard6.SpriteName = 'NorseRecruitRandomCard6';
		recruitcard6.Type = 'Random';
		recruitcard6.RecruitsAllowed = 5;
		recruitcard6.IsGod = 0;
		recruitcard6.IsNotInHand = 1;
		aom.NorseRecruitCards[6] = recruitcard6;

		var recruitcard7;
		recruitcard7 = new aom.RecruitActionCard();
		recruitcard7.SpriteName = 'NorseRecruitRandomCard7';
		recruitcard7.Type = 'Random';
		recruitcard7.RecruitsAllowed = 3;
		recruitcard7.IsGod = 0;
		recruitcard7.IsNotInHand = 1;
		aom.NorseRecruitCards[7] = recruitcard7;

		var tradecard;
		tradecard = new aom.TradeActionCard();
		tradecard.SpriteName = 'NorseTradePermanentAction';
		tradecard.Type = 'Permanent';
		tradecard.Cost = 2;
		tradecard.IsGod = 0;
		tradecard.IsNotInHand = 1;
		aom.NorseTradeCards[0] = tradecard;

		var tradecard1;
		tradecard1 = new aom.TradeActionCard();
		tradecard1.SpriteName = 'NorseTradeRandomCard1';
		tradecard1.Type = 'Random';
		tradecard1.Cost = 0;
		tradecard1.IsGod = 1;
		tradecard1.IsNotInHand = 1;
		aom.NorseTradeCards[1] = tradecard1;

		var tradecard2;
		tradecard2 = new aom.TradeActionCard();
		tradecard2.SpriteName = 'NorseTradeRandomCard2';
		tradecard2.Type = 'Random';
		tradecard2.Cost = 1;
		tradecard2.IsGod = 0;
		tradecard2.IsNotInHand = 1;
		aom.NorseTradeCards[2] = tradecard2;

		var tradecard3;
		tradecard3 = new aom.TradeActionCard();
		tradecard3.SpriteName = 'NorseTradeRandomCard3';
		tradecard3.Type = 'Random';
		tradecard3.Cost = 1;
		tradecard3.IsGod = 0;
		tradecard3.IsNotInHand = 1;
		aom.NorseTradeCards[3] = tradecard3;

		/*var tradecard4;
		tradecard4 = new aom.TradeActionCard();
		tradecard4.SpriteName = 'NorseTradeRandomCard4';
		tradecard4.Type = 'Random';
		tradecard4.Cost = 0;
		tradecard4.IsGod = 1;
		tradecard4.IsNotInHand = 1;
		aom.NorseTradeCards[4] = tradecard4;*/

		var tradecard5;
		tradecard5 = new aom.TradeActionCard();
		tradecard5.SpriteName = 'NorseTradeRandomCard5';
		tradecard5.Type = 'Random';
		tradecard5.Cost = 1;
		tradecard5.IsGod = 0;
		tradecard5.IsNotInHand = 1;
		aom.NorseTradeCards[4] = tradecard5;

		var tradecard6;
		tradecard6 = new aom.TradeActionCard();
		tradecard6.SpriteName = 'NorseTradeRandomCard6';
		tradecard6.Type = 'Random';
		tradecard6.Cost = 1;
		tradecard6.IsGod = 0;
		tradecard6.IsNotInHand = 1;
		aom.NorseTradeCards[5] = tradecard6;

		var battlecard1;
		battlecard1 = new aom.BattleCard();
		battlecard1.SpriteName = 'NorseBattleCard1';
		battlecard1.Type = 'Mortal';
		battlecard1.SubType = 'Cavalry';
		battlecard1.NumberOfDice = 3;
		battlecard1.BonusDiceString1 = 'Heroes = 4';				
		battlecard1.BonusDiceString2 = 'Archers = 4';
		battlecard1.CostFood = 1;
		battlecard1.CostWood = 0;
		battlecard1.CostGold = 1;
		battlecard1.CostFavor = 0;
		battlecard1.HasSpecialPower = 0;					
		battlecard1.isRecruited = 0;
		battlecard1.isSelectedForBattle = 0;
		aom.NorseBattleCards[0] = battlecard1;

		var battlecard2;
		battlecard2 = new aom.BattleCard();
		battlecard2.SpriteName = 'NorseBattleCard2';
		battlecard2.Type = 'Myth';
		battlecard2.SubType = 'Warrior';
		battlecard2.NumberOfDice = 6;
		battlecard2.BonusDiceString1 = 'Cavalry = 4';				
		battlecard2.BonusDiceString2 = null;
		battlecard2.CostFood = 3;
		battlecard2.CostWood = 2;
		battlecard2.CostGold = 0;
		battlecard2.CostFavor = 0;
		battlecard2.HasSpecialPower = 0;					
		battlecard2.isRecruited = 0;
		battlecard2.isSelectedForBattle = 0;
		aom.NorseBattleCards[1] = battlecard2;

		var battlecard3;
		battlecard3 = new aom.BattleCard();
		battlecard3.SpriteName = 'NorseBattleCard3';
		battlecard3.Type = 'Myth';
		battlecard3.SubType = 'Cavalry';
		battlecard3.NumberOfDice = 5;
		battlecard3.BonusDiceString1 = 'Archers = 4';				
		battlecard3.BonusDiceString2 = null;
		battlecard3.CostFood = 0;
		battlecard3.CostWood = 0;
		battlecard3.CostGold = 1;
		battlecard3.CostFavor = 3;
		battlecard3.HasSpecialPower = 1;					
		battlecard3.isRecruited = 0;
		battlecard3.isSelectedForBattle = 0;
		aom.NorseBattleCards[2] = battlecard3;

		var battlecard4;
		battlecard4 = new aom.BattleCard();
		battlecard4.SpriteName = 'NorseBattleCard4';
		battlecard4.Type = 'Myth';
		battlecard4.SubType = 'Flyer';
		battlecard4.NumberOfDice = 7;
		battlecard4.BonusDiceString1 = 'Killers = 4';				
		battlecard4.BonusDiceString2 = null;
		battlecard4.CostFood = 0;
		battlecard4.CostWood = 0;
		battlecard4.CostGold = 4;
		battlecard4.CostFavor = 1;
		battlecard4.HasSpecialPower = 1;					
		battlecard4.isRecruited = 0;
		battlecard4.isSelectedForBattle = 0;
		aom.NorseBattleCards[3] = battlecard4;

		var battlecard5;
		battlecard5 = new aom.BattleCard();
		battlecard5.SpriteName = 'NorseBattleCard5';
		battlecard5.Type = 'Myth';
		battlecard5.SubType = 'Killers';
		battlecard5.NumberOfDice = 4;
		battlecard5.BonusDiceString1 = 'Giants = 4';				
		battlecard5.BonusDiceString2 = null;
		battlecard5.CostFood = 2;
		battlecard5.CostWood = 0;
		battlecard5.CostGold = 2;
		battlecard5.CostFavor = 0;
		battlecard5.HasSpecialPower = 1;					
		battlecard5.isRecruited = 0;
		battlecard5.isSelectedForBattle = 0;
		aom.NorseBattleCards[4] = battlecard5;

		var battlecard6;
		battlecard6 = new aom.BattleCard();
		battlecard6.SpriteName = 'NorseBattleCard6';
		battlecard6.Type = 'Mortal';
		battlecard6.SubType = 'Warrior';
		battlecard6.NumberOfDice = 3;
		battlecard6.BonusDiceString1 = 'Cavalry = 4';				
		battlecard6.BonusDiceString2 = null;
		battlecard6.CostFood = 1;
		battlecard6.CostWood = 0;
		battlecard6.CostGold = 2;
		battlecard6.CostFavor = 0;
		battlecard6.HasSpecialPower = 1;					
		battlecard6.isRecruited = 0;
		battlecard6.isSelectedForBattle = 0;
		aom.NorseBattleCards[5] = battlecard6;

		var battlecard7;
		battlecard7 = new aom.BattleCard();
		battlecard7.SpriteName = 'NorseBattleCard7';
		battlecard7.Type = 'Mortal';
		battlecard7.SubType = 'Archer';
		battlecard7.NumberOfDice = 3;
		battlecard7.BonusDiceString1 = 'Warrior = 3';				
		battlecard7.BonusDiceString2 = 'Flyer = 4';
		battlecard7.CostFood = 1;
		battlecard7.CostWood = 1;
		battlecard7.CostGold = 0;
		battlecard7.CostFavor = 0;
		battlecard7.HasSpecialPower = 0;					
		battlecard7.isRecruited = 0;
		battlecard7.isSelectedForBattle = 0;
		aom.NorseBattleCards[6] = battlecard7;

		var battlecard8;
		battlecard8 = new aom.BattleCard();
		battlecard8.SpriteName = 'NorseBattleCard8';
		battlecard8.Type = 'Hero';
		battlecard8.SubType = null;
		battlecard8.NumberOfDice = 3;
		battlecard8.BonusDiceString1 = 'Myth = 4';				
		battlecard8.BonusDiceString2 = null;
		battlecard8.CostFood = 3;
		battlecard8.CostWood = 0;
		battlecard8.CostGold = 3;
		battlecard8.CostFavor = 0;
		battlecard8.HasSpecialPower = 0;					
		battlecard8.isRecruited = 0;
		battlecard8.isSelectedForBattle = 0;
		aom.NorseBattleCards[7] = battlecard8;

		var battlecard9;
		battlecard9 = new aom.BattleCard();
		battlecard9.SpriteName = 'NorseBattleCard9';
		battlecard9.Type = 'Hero';
		battlecard9.SubType = null;
		battlecard9.NumberOfDice = 6;
		battlecard9.BonusDiceString1 = 'Myth = 4';				
		battlecard9.BonusDiceString2 = null;
		battlecard9.CostFood = 3;
		battlecard9.CostWood = 0;
		battlecard9.CostGold = 3;
		battlecard9.CostFavor = 0;
		battlecard9.HasSpecialPower = 1;					
		battlecard9.isRecruited = 0;
		battlecard9.isSelectedForBattle = 0;
		aom.NorseBattleCards[8] = battlecard9;

		var battlecard10;
		battlecard10 = new aom.BattleCard();
		battlecard10.SpriteName = 'NorseBattleCard10';
		battlecard10.Type = 'Hero';
		battlecard10.SubType = null;
		battlecard10.NumberOfDice = 8;
		battlecard10.BonusDiceString1 = 'Myth = 4';				
		battlecard10.BonusDiceString2 = null;
		battlecard10.CostFood = 4;
		battlecard10.CostWood = 0;
		battlecard10.CostGold = 0;
		battlecard10.CostFavor = 4;
		battlecard10.HasSpecialPower = 1;					
		battlecard10.isRecruited = 0;
		battlecard10.isSelectedForBattle = 0;
		aom.NorseBattleCards[9] = battlecard10;

		var battlecard11;
		battlecard11 = new aom.BattleCard();
		battlecard11.SpriteName = 'NorseBattleCard11';
		battlecard11.Type = 'Myth';
		battlecard11.SubType = 'Giant';
		battlecard11.NumberOfDice = 7;
		battlecard11.BonusDiceString1 = 'Warrior = 2';				
		battlecard11.BonusDiceString2 = 'Mortal = 3';
		battlecard11.CostFood = 4;
		battlecard11.CostWood = 0;
		battlecard11.CostGold = 0;
		battlecard11.CostFavor = 2;
		battlecard11.HasSpecialPower = 0;					
		battlecard11.isRecruited = 0;
		battlecard11.isSelectedForBattle = 0;
		aom.NorseBattleCards[10] = battlecard11;

		var battlecard12;
		battlecard12 = new aom.BattleCard();
		battlecard12.SpriteName = 'NorseBattleCard12';
		battlecard12.Type = 'Myth';
		battlecard12.SubType = 'Flyer';
		battlecard12.NumberOfDice = 7;
		battlecard12.BonusDiceString1 = 'Killers = 4';				
		battlecard12.BonusDiceString2 = null;
		battlecard12.CostFood = 0;
		battlecard12.CostWood = 0;
		battlecard12.CostGold = 4;
		battlecard12.CostFavor = 1;
		battlecard12.HasSpecialPower = 1;					
		battlecard12.isRecruited = 0;
		battlecard12.isSelectedForBattle = 0;
		aom.NorseBattleCards[11] = battlecard12;

		/*var battlecard13;
		battlecard13 = new aom.BattleCard();
		battlecard13.SpriteName = 'NorseBattleCard13';
		battlecard13.Type = 'Mortal';
		battlecard13.SubType = 'Cavalry';
		battlecard13.NumberOfDice = 3;
		battlecard13.BonusDiceString1 = 'Heroes = 4';				
		battlecard13.BonusDiceString2 = 'Archers = 4';
		battlecard13.CostFood = 1;
		battlecard13.CostWood = 0;
		battlecard13.CostGold = 1;
		battlecard13.CostFavor = 0;
		battlecard13.HasSpecialPower = 0;					
		battlecard13.isRecruited = 0;
		aom.NorseBattleCards[12] = battlecard13;*/




		this.NorseBuildPermanentActionCardDeck();
		this.NorseBuildRandomActionCardDeck();


	},


	NorseBuildPermanentActionCardDeck: function(){
		aom.NorsePermanentActionCardDeck[0] = aom.NorseAttackCards[0];
		aom.NorsePermanentActionCardDeck[1] = aom.NorseBuildCards[0];
		aom.NorsePermanentActionCardDeck[2] = aom.NorseExploreCards[0];
		aom.NorsePermanentActionCardDeck[3] = aom.NorseGatherCards[0];
		aom.NorsePermanentActionCardDeck[4] = aom.NorseNextAgeCards[0];
		aom.NorsePermanentActionCardDeck[5] = aom.NorseRecruitCards[0];
		aom.NorsePermanentActionCardDeck[6] = aom.NorseTradeCards[0];
	},


	NorseBuildRandomActionCardDeck: function(){
		for(var i = 1; i < 7; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseAttackCards[i]; 
		}

		for(var i = 7; i < 13; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseBuildCards[i-6]; 
		}

		for(var i = 13; i < 19; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseExploreCards[i-12]; 
		}

		for(var i = 19; i < 25; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseGatherCards[i - 18]; 
		}

		for(var i = 25; i < 29; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseNextAgeCards[i - 24]; 
		}

		for(var i = 29; i < 36; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseRecruitCards[i - 28]; 
		}

		for(var i = 36; i < 41; i++){
			aom.NorseRandomActionCardDeck[i-1] = aom.NorseTradeCards[i - 35]; 
		}


		//this.DebugRandomCardDeck();
	},

	DebugRandomCardDeck: function(){
		for(var i = 0; i<aom.NorseRandomActionCardDeck.length; i++){
			console.log(i);
			console.log(aom.NorseRandomActionCardDeck[i]);
		}

		for(var i = 0; i<aom.EgyptianRandomActionCardDeck.length; i++){
			console.log(i)
			console.log(aom.EgyptianRandomActionCardDeck[i]);
		}

		for(var i = 0; i<aom.GreekRandomActionCardDeck.length; i++){
			console.log(i)
			console.log(aom.GreekRandomActionCardDeck[i]);
		}
		/*for(var i = 0; i<8; i++){
			console.log(aom.NorseBuildCards[i]);
		}*/

	},

//--------------------------------------------------------End---------------------------//


//--------------------------------------------------------Initialize Egyptian Cards----------------------------//

	InitializeEgyptianCards: function(){
		var buildcard;
		buildcard = new aom.BuildActionCard();
		buildcard.SpriteName = 'EgyptianBuildPermanentAction';
		buildcard.Type = 'Permanent';
		buildcard.BuildingsAllowed = 1;
		buildcard.IsGod = 0;
		buildcard.IsNotInHand = 1;
		aom.EgyptianBuildCards[0] = buildcard;

		var buildcard1;
		buildcard1 = new aom.BuildActionCard();
		buildcard1.SpriteName = 'EgyptianBuildRandomCard1';
		buildcard1.Type = 'Random';
		buildcard1.BuildingsAllowed = 4;
		buildcard1.IsGod = 0;
		buildcard1.IsNotInHand = 1;
		aom.EgyptianBuildCards[1] = buildcard1;

		var buildcard2;
		buildcard2 = new aom.BuildActionCard();
		buildcard2.SpriteName = 'EgyptianBuildRandomCard2';
		buildcard2.Type = 'Random';
		buildcard2.BuildingsAllowed = 3;
		buildcard2.IsGod = 0;
		buildcard2.IsNotInHand = 1;
		aom.EgyptianBuildCards[2] = buildcard2;

		var buildcard3;
		buildcard3 = new aom.BuildActionCard();
		buildcard3.SpriteName = 'EgyptianBuildRandomCard3';
		buildcard3.Type = 'Random';
		buildcard3.BuildingsAllowed = 2;
		buildcard3.IsGod = 0;
		buildcard3.IsNotInHand = 1;
		aom.EgyptianBuildCards[3] = buildcard3;

		var buildcard4;
		buildcard4 = new aom.BuildActionCard();
		buildcard4.SpriteName = 'EgyptianBuildRandomCard4';
		buildcard4.Type = 'Random';
		buildcard4.BuildingsAllowed = 3;
		buildcard4.IsGod = 0;
		buildcard4.IsNotInHand = 1;
		aom.EgyptianBuildCards[4] = buildcard4;

		var buildcard5;
		buildcard5 = new aom.BuildActionCard();
		buildcard5.SpriteName = 'EgyptianBuildRandomCard5';
		buildcard5.Type = 'Random';
		buildcard5.BuildingsAllowed = 2;
		buildcard5.IsGod = 0;
		buildcard5.IsNotInHand = 1;
		aom.EgyptianBuildCards[5] = buildcard5;

		/*var buildcard6;
		buildcard6 = new aom.BuildActionCard();
		buildcard6.SpriteName = 'EgyptianBuildRandomCard6';
		buildcard6.Type = 'Random';
		buildcard6.BuildingsAllowed = 3;
		buildcard6.IsGod = 1;
		buildcard6.IsNotInHand = 1;
		aom.EgyptianBuildCards[6] = buildcard6;*/

		var buildcard7;
		buildcard7 = new aom.BuildActionCard();
		buildcard7.SpriteName = 'EgyptianBuildRandomCard7';
		buildcard7.Type = 'Random';
		buildcard7.BuildingsAllowed = 3;
		buildcard7.IsGod = 1;
		buildcard7.IsNotInHand = 1;
		aom.EgyptianBuildCards[6] = buildcard7;


		var attackcard;
		attackcard = new aom.AttackActionCard();
		attackcard.SpriteName = 'EgyptianAttackPermanentAction';
		attackcard.Type = 'Permanent';
		attackcard.AttackAllowed = 4;
		attackcard.IsGod = 0;
		attackcard.IsNotInHand = 1;
		aom.EgyptianAttackCards[0] = attackcard;

		var attackcard1;
		attackcard1 = new aom.AttackActionCard();
		attackcard1.SpriteName = 'EgyptianAttackRandomCard1';
		attackcard1.Type = 'Random';
		attackcard1.AttackAllowed = 5;
		attackcard1.IsGod = 0;
		attackcard1.IsNotInHand = 1;
		aom.EgyptianAttackCards[1] = attackcard1;

		/*var attackcard2;
		attackcard2 = new aom.AttackActionCard();
		attackcard2.SpriteName = 'EgyptianAttackRandomCard2';
		attackcard2.Type = 'Random';
		attackcard2.AttackAllowed = 6;
		attackcard2.IsGod = 1;
		attackcard2.IsNotInHand = 1;
		aom.EgyptianAttackCards[2] = attackcard2;*/

		var attackcard3;
		attackcard3 = new aom.AttackActionCard();
		attackcard3.SpriteName = 'EgyptianAttackRandomCard3';
		attackcard3.Type = 'Random';
		attackcard3.AttackAllowed = 5;
		attackcard3.IsGod = 0;
		attackcard3.IsNotInHand = 1;
		aom.EgyptianAttackCards[2] = attackcard3;

		/*var attackcard4;
		attackcard4 = new aom.AttackActionCard();
		attackcard4.SpriteName = 'EgyptianAttackRandomCard4';
		attackcard4.Type = 'Random';
		attackcard4.AttackAllowed = 7;
		attackcard4.IsGod = 1;
		attackcard4.IsNotInHand = 1;
		aom.EgyptianAttackCards[4] = attackcard4;*/

		var attackcard5;
		attackcard5 = new aom.AttackActionCard();
		attackcard5.SpriteName = 'EgyptianAttackRandomCard5';
		attackcard5.Type = 'Random';
		attackcard5.AttackAllowed = 7;
		attackcard5.IsGod = 0;
		attackcard5.IsNotInHand = 1;
		aom.EgyptianAttackCards[3] = attackcard5;

		var attackcard6;
		attackcard6 = new aom.AttackActionCard();
		attackcard6.SpriteName = 'EgyptianAttackRandomCard6';
		attackcard6.Type = 'Random';
		attackcard6.AttackAllowed = 6;
		attackcard6.IsGod = 0;
		attackcard6.IsNotInHand = 1;
		aom.EgyptianAttackCards[4] = attackcard6;

		var attackcard7;
		attackcard7 = new aom.AttackActionCard();
		attackcard7.SpriteName = 'EgyptianAttackRandomCard7';
		attackcard7.Type = 'Random';
		attackcard7.AttackAllowed = 6;
		attackcard7.IsGod = 1;
		attackcard7.IsNotInHand = 1;
		aom.EgyptianAttackCards[5] = attackcard7;

		/*var attackcard8;
		attackcard8 = new aom.AttackActionCard();
		attackcard8.SpriteName = 'EgyptianAttackRandomCard8';
		attackcard8.Type = 'Random';
		attackcard8.AttackAllowed = 6;
		attackcard8.IsGod = 1;
		attackcard8.IsNotInHand = 1;
		aom.EgyptianAttackCards[8] = attackcard8;*/

		var explorecard;
		explorecard = new aom.ExploreActionCard();
		explorecard.SpriteName = 'EgyptianExplorePermanentAction';
		explorecard.Type = 'Permanent';
		explorecard.ExtraTilesAllowed = 1;
		explorecard.IsGod = 0;
		explorecard.IsNotInHand = 1;
		aom.EgyptianExploreCards[0] = explorecard;

		var explorecard1;
		explorecard1 = new aom.ExploreActionCard();
		explorecard1.SpriteName = 'EgyptianExploreRandomCard1';
		explorecard1.Type = 'Random';
		explorecard1.ExtraTilesAllowed = 2;
		explorecard1.IsGod = 1;
		explorecard1.IsNotInHand = 1;
		aom.EgyptianExploreCards[1] = explorecard1;

		var explorecard2;
		explorecard2 = new aom.ExploreActionCard();
		explorecard2.SpriteName = 'EgyptianExploreRandomCard2';
		explorecard2.Type = 'Random';
		explorecard2.ExtraTilesAllowed = 2;
		explorecard2.IsGod = 0;
		explorecard2.IsNotInHand = 1;
		aom.EgyptianExploreCards[2] = explorecard2;

		var explorecard3;
		explorecard3 = new aom.ExploreActionCard();
		explorecard3.SpriteName = 'EgyptianExploreRandomCard3';
		explorecard3.Type = 'Random';
		explorecard3.ExtraTilesAllowed = 0;
		explorecard3.IsGod = 0;
		explorecard3.IsNotInHand = 1;
		aom.EgyptianExploreCards[3] = explorecard3;

		var explorecard4;
		explorecard4 = new aom.ExploreActionCard();
		explorecard4.SpriteName = 'EgyptianExploreRandomCard4';
		explorecard4.Type = 'Random';
		explorecard4.ExtraTilesAllowed = 0;
		explorecard4.IsGod = 0;
		explorecard4.IsNotInHand = 1;
		aom.EgyptianExploreCards[4] = explorecard4;

		var explorecard5;
		explorecard5 = new aom.ExploreActionCard();
		explorecard5.SpriteName = 'EgyptianExploreRandomCard5';
		explorecard5.Type = 'Random';
		explorecard5.ExtraTilesAllowed = 2;
		explorecard5.IsGod = 0;
		explorecard5.IsNotInHand = 1;
		aom.EgyptianExploreCards[5] = explorecard5;

		/*var explorecard6;
		explorecard6 = new aom.ExploreActionCard();
		explorecard6.SpriteName = 'EgyptianExploreRandomCard6';
		explorecard6.Type = 'Random';
		explorecard6.ExtraTilesAllowed = 2;
		explorecard6.IsGod = 0;
		explorecard6.IsNotInHand = 1;
		aom.EgyptianExploreCards[6] = explorecard6;*/


		var gathercard;
		gathercard = new aom.GatherActionCard();
		gathercard.SpriteName = 'EgyptianGatherPermanentAction';
		gathercard.Type = 'Permanent';
		gathercard.ResourceOrTerrain = 'TerrainOrResource';
		gathercard.IsGod = 0;
		gathercard.IsNotInHand = 1;
		aom.EgyptianGatherCards[0] = gathercard;

		var gathercard1;
		gathercard1 = new aom.GatherActionCard();
		gathercard1.SpriteName = 'EgyptianGatherRandomCard1';
		gathercard1.Type = 'Random';
		gathercard1.ResourceOrTerrain = 'AllResources';
		gathercard1.IsGod = 0;
		gathercard1.IsNotInHand = 1;
		aom.EgyptianGatherCards[1] = gathercard1;

		var gathercard2;
		gathercard2 = new aom.GatherActionCard();
		gathercard2.SpriteName = 'EgyptianGatherRandomCard2';
		gathercard2.Type = 'Random';
		gathercard2.ResourceOrTerrain = 'AllResources';
		gathercard2.IsGod = 0;
		gathercard2.IsNotInHand = 1;
		aom.EgyptianGatherCards[2] = gathercard2;

		var gathercard3;
		gathercard3 = new aom.GatherActionCard();
		gathercard3.SpriteName = 'EgyptianGatherRandomCard3';
		gathercard3.Type = 'Random';
		gathercard3.ResourceOrTerrain = 'AllResources';
		gathercard3.IsGod = 0;
		gathercard3.IsNotInHand = 1;
		aom.EgyptianGatherCards[3] = gathercard3;

		/*var gathercard4;
		gathercard4 = new aom.GatherActionCard();
		gathercard4.SpriteName = 'EgyptianGatherRandomCard4';
		gathercard4.Type = 'Random';
		gathercard4.ResourceOrTerrain = 'AllResources';
		gathercard4.IsGod = 1;
		gathercard4.IsNotInHand = 1;
		aom.EgyptianGatherCards[4] = gathercard4;*/

		var gathercard5;
		gathercard5 = new aom.GatherActionCard();
		gathercard5.SpriteName = 'EgyptianGatherRandomCard5';
		gathercard5.Type = 'Random';
		gathercard5.ResourceOrTerrain = 'AllResources';
		gathercard5.IsGod = 0;
		gathercard5.IsNotInHand = 1;
		aom.EgyptianGatherCards[4] = gathercard5;

		var gathercard6;
		gathercard6 = new aom.GatherActionCard();
		gathercard6.SpriteName = 'EgyptianGatherRandomCard6';
		gathercard6.Type = 'Random';
		gathercard6.ResourceOrTerrain = 'AllResources';
		gathercard6.IsGod = 0;
		gathercard6.IsNotInHand = 1;
		aom.EgyptianGatherCards[5] = gathercard6;

		var gathercard7;
		gathercard7 = new aom.GatherActionCard();
		gathercard7.SpriteName = 'EgyptianGatherRandomCard7';
		gathercard7.Type = 'Random';
		gathercard7.ResourceOrTerrain = 'AllResources';
		gathercard7.IsGod = 0;
		gathercard7.IsNotInHand = 1;
		aom.EgyptianGatherCards[6] = gathercard7;

		var gathercard8;
		gathercard8 = new aom.GatherActionCard();
		gathercard8.SpriteName = 'EgyptianGatherRandomCard8';
		gathercard8.Type = 'Random';
		gathercard8.ResourceOrTerrain = 'Food';
		gathercard8.IsGod = 1;
		gathercard8.IsNotInHand = 1;
		aom.EgyptianGatherCards[7] = gathercard8;

		var nextagecard;
		nextagecard = new aom.NextAgeActionCard();
		nextagecard.SpriteName = 'EgyptianNextAgePermanentAction';
		nextagecard.Type = 'Permanent';
		nextagecard.Classical = 4;
		nextagecard.Heroic = 5;
		nextagecard.Mythic = 6;
		nextagecard.IsGod = 0;
		nextagecard.IsNotInHand = 1;
		aom.EgyptianNextAgeCards[0] = nextagecard;

		/*var nextagecard1;
		nextagecard1 = new aom.NextAgeActionCard();
		nextagecard1.SpriteName = 'EgyptianNextAgeRandomCard1';
		nextagecard1.Type = 'Random';
		nextagecard1.Classical = 3;
		nextagecard1.Heroic = 4;
		nextagecard1.Mythic = 5;
		nextagecard1.IsGod = 1;
		nextagecard1.IsNotInHand = 1;
		aom.EgyptianNextAgeCards[1] = nextagecard1;*/

		var nextagecard2;
		nextagecard2 = new aom.NextAgeActionCard();
		nextagecard2.SpriteName = 'EgyptianNextAgeRandomCard2';
		nextagecard2.Type = 'Random';
		nextagecard2.Classical = 3;
		nextagecard2.Heroic = 4;
		nextagecard2.Mythic = 5;
		nextagecard2.IsGod = 1;
		nextagecard2.IsNotInHand = 1;
		aom.EgyptianNextAgeCards[1] = nextagecard2;

		var nextagecard3;
		nextagecard3 = new aom.NextAgeActionCard();
		nextagecard3.SpriteName = 'EgyptianNextAgeRandomCard3';
		nextagecard3.Type = 'Random';
		nextagecard3.Classical = 3;
		nextagecard3.Heroic = 4;
		nextagecard3.Mythic = 5;
		nextagecard3.IsGod = 0;
		nextagecard3.IsNotInHand = 1;
		aom.EgyptianNextAgeCards[2] = nextagecard3;

		var nextagecard4;
		nextagecard4 = new aom.NextAgeActionCard();
		nextagecard4.SpriteName = 'EgyptianNextAgeRandomCard4';
		nextagecard4.Type = 'Random';
		nextagecard4.Classical = 3;
		nextagecard4.Heroic = 4;
		nextagecard4.Mythic = 5;
		nextagecard4.IsGod = 0;
		nextagecard4.IsNotInHand = 1;
		aom.EgyptianNextAgeCards[3] = nextagecard4;

		var recruitcard;
		recruitcard = new aom.RecruitActionCard();
		recruitcard.SpriteName = 'EgyptianRecruitPermanentAction';
		recruitcard.Type = 'Permanent';
		recruitcard.RecruitsAllowed = 2;
		recruitcard.IsGod = 0;
		recruitcard.IsNotInHand = 1;
		aom.EgyptianRecruitCards[0] = recruitcard;

		var recruitcard1;
		recruitcard1 = new aom.RecruitActionCard();
		recruitcard1.SpriteName = 'EgyptianRecruitRandomCard1';
		recruitcard1.Type = 'Random';
		recruitcard1.RecruitsAllowed = 6;
		recruitcard1.IsGod = 1;
		recruitcard1.IsNotInHand = 1;
		aom.EgyptianRecruitCards[1] = recruitcard1;

		var recruitcard2;
		recruitcard2 = new aom.RecruitActionCard();
		recruitcard2.SpriteName = 'EgyptianRecruitRandomCard2';
		recruitcard2.Type = 'Random';
		recruitcard2.RecruitsAllowed = 5;
		recruitcard2.IsGod = 0;
		recruitcard2.IsNotInHand = 1;
		aom.EgyptianRecruitCards[2] = recruitcard2;

		var recruitcard3;
		recruitcard3 = new aom.RecruitActionCard();
		recruitcard3.SpriteName = 'EgyptianRecruitRandomCard3';
		recruitcard3.Type = 'Random';
		recruitcard3.RecruitsAllowed = 3;
		recruitcard3.IsGod = 0;
		recruitcard3.IsNotInHand = 1;
		aom.EgyptianRecruitCards[3] = recruitcard3;

		/*var recruitcard4;
		recruitcard4 = new aom.RecruitActionCard();
		recruitcard4.SpriteName = 'EgyptianRecruitRandomCard4';
		recruitcard4.Type = 'Random';
		recruitcard4.RecruitsAllowed = 4;
		recruitcard4.IsGod = 1;
		recruitcard4.IsNotInHand = 1;
		aom.EgyptianRecruitCards[4] = recruitcard4;*/

		var recruitcard5;
		recruitcard5 = new aom.RecruitActionCard();
		recruitcard5.SpriteName = 'EgyptianRecruitRandomCard5';
		recruitcard5.Type = 'Random';
		recruitcard5.RecruitsAllowed = 4;
		recruitcard5.IsGod = 0;
		recruitcard5.IsNotInHand = 1;
		aom.EgyptianRecruitCards[4] = recruitcard5;

		var recruitcard6;
		recruitcard6 = new aom.RecruitActionCard();
		recruitcard6.SpriteName = 'EgyptianRecruitRandomCard6';
		recruitcard6.Type = 'Random';
		recruitcard6.RecruitsAllowed = 3;
		recruitcard6.IsGod = 0;
		recruitcard6.IsNotInHand = 1;
		aom.EgyptianRecruitCards[5] = recruitcard6;

		/*var recruitcard7;
		recruitcard7 = new aom.RecruitActionCard();
		recruitcard7.SpriteName = 'EgyptianRecruitRandomCard7';
		recruitcard7.Type = 'Random';
		recruitcard7.RecruitsAllowed = 4;
		recruitcard7.IsGod = 1;
		recruitcard7.IsNotInHand = 1;
		aom.EgyptianRecruitCards[7] = recruitcard7;*/

		var tradecard;
		tradecard = new aom.TradeActionCard();
		tradecard.SpriteName = 'EgyptianTradePermanentAction';
		tradecard.Type = 'Permanent';
		tradecard.Cost = 2;
		tradecard.IsGod = 0;
		tradecard.IsNotInHand = 1;
		aom.EgyptianTradeCards[0] = tradecard;

		var tradecard1;
		tradecard1 = new aom.TradeActionCard();
		tradecard1.SpriteName = 'EgyptianTradeRandomCard1';
		tradecard1.Type = 'Random';
		tradecard1.Cost = 1;
		tradecard1.IsGod = 0;
		tradecard1.IsNotInHand = 1;
		aom.EgyptianTradeCards[1] = tradecard1;

		var tradecard2;
		tradecard2 = new aom.TradeActionCard();
		tradecard2.SpriteName = 'EgyptianTradeRandomCard2';
		tradecard2.Type = 'Random';
		tradecard2.Cost = 1;
		tradecard2.IsGod = 0;
		tradecard2.IsNotInHand = 1;
		aom.EgyptianTradeCards[2] = tradecard2;

		var tradecard3;
		tradecard3 = new aom.TradeActionCard();
		tradecard3.SpriteName = 'EgyptianTradeRandomCard3';
		tradecard3.Type = 'Random';
		tradecard3.Cost = 1;
		tradecard3.IsGod = 0;
		tradecard3.IsNotInHand = 1;
		aom.EgyptianTradeCards[3] = tradecard3;

		var tradecard4;
		tradecard4 = new aom.TradeActionCard();
		tradecard4.SpriteName = 'EgyptianTradeRandomCard4';
		tradecard4.Type = 'Random';
		tradecard4.Cost = 1;
		tradecard4.IsGod = 0;
		tradecard4.IsNotInHand = 1;
		aom.EgyptianTradeCards[4] = tradecard4;

		var tradecard5;
		tradecard5 = new aom.TradeActionCard();
		tradecard5.SpriteName = 'EgyptianTradeRandomCard5';
		tradecard5.Type = 'Random';
		tradecard5.Cost = 1;
		tradecard5.IsGod = 0;
		tradecard5.IsNotInHand = 1;
		aom.EgyptianTradeCards[5] = tradecard5;

		var tradecard6;
		tradecard6 = new aom.TradeActionCard();
		tradecard6.SpriteName = 'EgyptianTradeRandomCard6';
		tradecard6.Type = 'Random';
		tradecard6.Cost = 0;
		tradecard6.IsGod = 1;
		tradecard6.IsNotInHand = 1;
		aom.EgyptianTradeCards[6] = tradecard6;

		var battlecard1;
		battlecard1 = new aom.BattleCard();
		battlecard1.SpriteName = 'EgyptianBattleCard1';
		battlecard1.Type = 'Myth';
		battlecard1.SubType = 'Warrior';
		battlecard1.NumberOfDice = 5;
		battlecard1.BonusDiceString1 = 'Cavalry = 4';				
		battlecard1.BonusDiceString2 = null;
		battlecard1.CostFood = 2;
		battlecard1.CostWood = 0;
		battlecard1.CostGold = 0;
		battlecard1.CostFavor = 2;
		battlecard1.HasSpecialPower = 1;					
		battlecard1.isRecruited = 0;
		battlecard1.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[0] = battlecard1;

		var battlecard2;
		battlecard2 = new aom.BattleCard();
		battlecard2.SpriteName = 'EgyptianBattleCard2';
		battlecard2.Type = 'Myth';
		battlecard2.SubType = 'Flyer';
		battlecard2.NumberOfDice = 6;
		battlecard2.BonusDiceString1 = 'Killers = 4';				
		battlecard2.BonusDiceString2 = null;
		battlecard2.CostFood = 0;
		battlecard2.CostWood = 2;
		battlecard2.CostGold = 0;
		battlecard2.CostFavor = 3;
		battlecard2.HasSpecialPower = 1;					
		battlecard2.isRecruited = 0;
		battlecard2.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[1] = battlecard2;

		var battlecard3;
		battlecard3 = new aom.BattleCard();
		battlecard3.SpriteName = 'EgyptianBattleCard3';
		battlecard3.Type = 'Myth';
		battlecard3.SubType = 'Warrior';
		battlecard3.NumberOfDice = 3;
		battlecard3.BonusDiceString1 = 'Heroes = 4';				
		battlecard3.BonusDiceString2 = 'Cavalry = 3';
		battlecard3.CostFood = 1;
		battlecard3.CostWood = 1;
		battlecard3.CostGold = 0;
		battlecard3.CostFavor = 0;
		battlecard3.HasSpecialPower = 0;					
		battlecard3.isRecruited = 0;
		battlecard3.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[2] = battlecard3;

		var battlecard4;
		battlecard4 = new aom.BattleCard();
		battlecard4.SpriteName = 'EgyptianBattleCard4';
		battlecard4.Type = 'Myth';
		battlecard4.SubType = null;
		battlecard4.NumberOfDice = 5;
		battlecard4.BonusDiceString1 = null;				
		battlecard4.BonusDiceString2 = null;
		battlecard4.CostFood = 0;
		battlecard4.CostWood = 0;
		battlecard4.CostGold = 3;
		battlecard4.CostFavor = 2;
		battlecard4.HasSpecialPower = 1;					
		battlecard4.isRecruited = 0;
		battlecard4.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[3] = battlecard4;

		var battlecard5;
		battlecard5 = new aom.BattleCard();
		battlecard5.SpriteName = 'EgyptianBattleCard5';
		battlecard5.Type = 'Mortal';
		battlecard5.SubType = 'Giant';
		battlecard5.NumberOfDice = 3;
		battlecard5.BonusDiceString1 = 'Mortals = 2';				
		battlecard5.BonusDiceString2 = null;
		battlecard5.CostFood = 2;
		battlecard5.CostWood = 0;
		battlecard5.CostGold = 1;
		battlecard5.CostFavor = 0;
		battlecard5.HasSpecialPower = 1;					
		battlecard5.isRecruited = 0;
		battlecard5.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[4] = battlecard5;

		var battlecard6;
		battlecard6 = new aom.BattleCard();
		battlecard6.SpriteName = 'EgyptianBattleCard6';
		battlecard6.Type = 'Hero';
		battlecard6.SubType = null;//'Warrior';
		battlecard6.NumberOfDice = 4;
		battlecard6.BonusDiceString1 = 'Myth = 5';				
		battlecard6.BonusDiceString2 = null;
		battlecard6.CostFood = 2;
		battlecard6.CostWood = 0;
		battlecard6.CostGold = 4;
		battlecard6.CostFavor = 0;
		battlecard6.HasSpecialPower = 1;					
		battlecard6.isRecruited = 0;
		battlecard6.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[5] = battlecard6;

		var battlecard7;
		battlecard7 = new aom.BattleCard();
		battlecard7.SpriteName = 'EgyptianBattleCard7';
		battlecard7.Type = 'Mortal';
		battlecard7.SubType = 'Archer Cavalry';
		battlecard7.NumberOfDice = 3;
		battlecard7.BonusDiceString1 = 'Warrior = 3';				
		battlecard7.BonusDiceString2 = 'Flyer = 3';
		battlecard7.CostFood = 0;
		battlecard7.CostWood = 1;
		battlecard7.CostGold = 1;
		battlecard7.CostFavor = 0;
		battlecard7.HasSpecialPower = 0;					
		battlecard7.isRecruited = 0;
		battlecard7.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[6] = battlecard7;

		var battlecard8;
		battlecard8 = new aom.BattleCard();
		battlecard8.SpriteName = 'EgyptianBattleCard8';
		battlecard8.Type = 'Hero';
		battlecard8.SubType = null;
		battlecard8.NumberOfDice = 8;
		battlecard8.BonusDiceString1 = 'Myth = 4';				
		battlecard8.BonusDiceString2 = null;
		battlecard8.CostFood = 0;
		battlecard8.CostWood = 0;
		battlecard8.CostGold = 4;
		battlecard8.CostFavor = 4;
		battlecard8.HasSpecialPower = 1;					
		battlecard8.isRecruited = 0;
		battlecard8.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[7] = battlecard8;

		var battlecard9;
		battlecard9 = new aom.BattleCard();
		battlecard9.SpriteName = 'EgyptianBattleCard9';
		battlecard9.Type = 'Myth';
		battlecard9.SubType = 'Cavalry';
		battlecard9.NumberOfDice = 5;
		battlecard9.BonusDiceString1 = 'Archers = 4';				
		battlecard9.BonusDiceString2 = null;
		battlecard9.CostFood = 0;
		battlecard9.CostWood = 0;
		battlecard9.CostGold = 3;
		battlecard9.CostFavor = 1;
		battlecard9.HasSpecialPower = 0;					
		battlecard9.isRecruited = 0;
		battlecard9.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[8] = battlecard9;

		var battlecard10;
		battlecard10 = new aom.BattleCard();
		battlecard10.SpriteName = 'EgyptianBattleCard10';
		battlecard10.Type = 'Myth';
		battlecard10.SubType = 'Killers';
		battlecard10.NumberOfDice = 5;
		battlecard10.BonusDiceString1 = 'Giants = 6';				
		battlecard10.BonusDiceString2 = null;
		battlecard10.CostFood = 0;
		battlecard10.CostWood = 0;
		battlecard10.CostGold = 2;
		battlecard10.CostFavor = 2;
		battlecard10.HasSpecialPower = 0;					
		battlecard10.isRecruited = 0;
		battlecard10.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[9] = battlecard10;

		var battlecard11;
		battlecard11 = new aom.BattleCard();
		battlecard11.SpriteName = 'EgyptianBattleCard11';
		battlecard11.Type = 'Myth';
		battlecard11.SubType = 'Giant';
		battlecard11.NumberOfDice = 5;
		battlecard11.BonusDiceString1 = 'Mortal = 4';				
		battlecard11.BonusDiceString2 = null;
		battlecard11.CostFood = 4;
		battlecard11.CostWood = 0;
		battlecard11.CostGold = 2;
		battlecard11.CostFavor = 0;
		battlecard11.HasSpecialPower = 0;					
		battlecard11.isRecruited = 0;
		battlecard11.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[10] = battlecard11;

		var battlecard12;
		battlecard12 = new aom.BattleCard();
		battlecard12.SpriteName = 'EgyptianBattleCard12';
		battlecard12.Type = 'Hero';
		battlecard12.SubType = null;
		battlecard12.NumberOfDice = 6;
		battlecard12.BonusDiceString1 = 'Myth = 4';				
		battlecard12.BonusDiceString2 = null;
		battlecard12.CostFood = 3;
		battlecard12.CostWood = 0;
		battlecard12.CostGold = 3;
		battlecard12.CostFavor = 0;
		battlecard12.HasSpecialPower = 0;					
		battlecard12.isRecruited = 0;
		battlecard12.isSelectedForBattle = 0;
		aom.EgyptianBattleCards[11] = battlecard12;

		this.EgyptianBuildPermanentActionCardDeck();
		this.EgyptianBuildRandomActionCardDeck();


	},


	EgyptianBuildPermanentActionCardDeck: function(){
		aom.EgyptianPermanentActionCardDeck[0] = aom.EgyptianAttackCards[0];
		aom.EgyptianPermanentActionCardDeck[1] = aom.EgyptianBuildCards[0];
		aom.EgyptianPermanentActionCardDeck[2] = aom.EgyptianExploreCards[0];
		aom.EgyptianPermanentActionCardDeck[3] = aom.EgyptianGatherCards[0];
		aom.EgyptianPermanentActionCardDeck[4] = aom.EgyptianNextAgeCards[0];
		aom.EgyptianPermanentActionCardDeck[5] = aom.EgyptianRecruitCards[0];
		aom.EgyptianPermanentActionCardDeck[6] = aom.EgyptianTradeCards[0];
	},


	EgyptianBuildRandomActionCardDeck: function(){
		for(var i = 1; i < 6; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianAttackCards[i]; 
		}

		for(var i = 6; i < 12; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianBuildCards[i-5]; 
		}

		for(var i = 12; i < 17; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianExploreCards[i-11]; 
		}

		for(var i = 17; i < 24; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianGatherCards[i - 16]; 
		}

		for(var i = 24; i < 27; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianNextAgeCards[i - 23]; 
		}

		for(var i = 27; i < 32; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianRecruitCards[i - 26]; 
		}

		for(var i = 32; i < 38; i++){
			aom.EgyptianRandomActionCardDeck[i-1] = aom.EgyptianTradeCards[i - 31]; 
		}


		//this.DebugRandomCardDeck();
	},


//--------------------------------------------------------------------END-------------------------------------------------------------------//


//--------------------------------------------------------Initialize Greek Cards----------------------------//

	InitializeGreekCards: function(){
		var buildcard;
		buildcard = new aom.BuildActionCard();
		buildcard.SpriteName = 'GreekBuildPermanentAction';
		buildcard.Type = 'Permanent';
		buildcard.BuildingsAllowed = 1;
		buildcard.IsGod = 0;
		buildcard.IsNotInHand = 1;
		aom.GreekBuildCards[0] = buildcard;

		var buildcard1;
		buildcard1 = new aom.BuildActionCard();
		buildcard1.SpriteName = 'GreekBuildRandomCard1';
		buildcard1.Type = 'Random';
		buildcard1.BuildingsAllowed = 2;
		buildcard1.IsGod = 0;
		buildcard1.IsNotInHand = 1;
		aom.GreekBuildCards[1] = buildcard1;

		var buildcard2;
		buildcard2 = new aom.BuildActionCard();
		buildcard2.SpriteName = 'GreekBuildRandomCard2';
		buildcard2.Type = 'Random';
		buildcard2.BuildingsAllowed = 3;
		buildcard2.IsGod = 1;
		buildcard2.IsNotInHand = 1;
		aom.GreekBuildCards[2] = buildcard2;

		var buildcard3;
		buildcard3 = new aom.BuildActionCard();
		buildcard3.SpriteName = 'GreekBuildRandomCard3';
		buildcard3.Type = 'Random';
		buildcard3.BuildingsAllowed = 3;
		buildcard3.IsGod = 0;
		buildcard3.IsNotInHand = 1;
		aom.GreekBuildCards[3] = buildcard3;

		var buildcard4;
		buildcard4 = new aom.BuildActionCard();
		buildcard4.SpriteName = 'GreekBuildRandomCard4';
		buildcard4.Type = 'Random';
		buildcard4.BuildingsAllowed = 3;
		buildcard4.IsGod = 0;
		buildcard4.IsNotInHand = 1;
		aom.GreekBuildCards[4] = buildcard4;

		var buildcard5;
		buildcard5 = new aom.BuildActionCard();
		buildcard5.SpriteName = 'GreekBuildRandomCard5';
		buildcard5.Type = 'Random';
		buildcard5.BuildingsAllowed = 3;
		buildcard5.IsGod = 0;
		buildcard5.IsNotInHand = 1;
		aom.GreekBuildCards[5] = buildcard5;

		var buildcard6;
		buildcard6 = new aom.BuildActionCard();
		buildcard6.SpriteName = 'GreekBuildRandomCard6';
		buildcard6.Type = 'Random';
		buildcard6.BuildingsAllowed = 4;
		buildcard6.IsGod = 0;
		buildcard6.IsNotInHand = 1;
		aom.GreekBuildCards[6] = buildcard6;

		var buildcard7;
		buildcard7 = new aom.BuildActionCard();
		buildcard7.SpriteName = 'GreekBuildRandomCard7';
		buildcard7.Type = 'Random';
		buildcard7.BuildingsAllowed = 2;
		buildcard7.IsGod = 0;
		buildcard7.IsNotInHand = 1;
		aom.GreekBuildCards[7] = buildcard7;


		var attackcard;
		attackcard = new aom.AttackActionCard();
		attackcard.SpriteName = 'GreekAttackPermanentAction';
		attackcard.Type = 'Permanent';
		attackcard.AttackAllowed = 4;
		attackcard.IsGod = 0;
		attackcard.IsNotInHand = 1;
		aom.GreekAttackCards[0] = attackcard;

		var attackcard1;
		attackcard1 = new aom.AttackActionCard();
		attackcard1.SpriteName = 'GreekAttackRandomCard1';
		attackcard1.Type = 'Random';
		attackcard1.AttackAllowed = 6;
		attackcard1.IsGod = 0;
		attackcard1.IsNotInHand = 1;
		aom.GreekAttackCards[1] = attackcard1;

		/*var attackcard2;
		attackcard2 = new aom.AttackActionCard();
		attackcard2.SpriteName = 'GreekAttackRandomCard2';
		attackcard2.Type = 'Random';
		attackcard2.AttackAllowed = 6;
		attackcard2.IsGod = 1;
		attackcard2.IsNotInHand = 1;
		aom.GreekAttackCards[2] = attackcard2;*/

		var attackcard3;
		attackcard3 = new aom.AttackActionCard();
		attackcard3.SpriteName = 'GreekAttackRandomCard3';
		attackcard3.Type = 'Random';
		attackcard3.AttackAllowed = 6;
		attackcard3.IsGod = 1;
		attackcard3.IsNotInHand = 1;
		aom.GreekAttackCards[2] = attackcard3;

		var attackcard4;
		attackcard4 = new aom.AttackActionCard();
		attackcard4.SpriteName = 'GreekAttackRandomCard4';
		attackcard4.Type = 'Random';
		attackcard4.AttackAllowed = 6;
		attackcard4.IsGod = 0;
		attackcard4.IsNotInHand = 1;
		aom.GreekAttackCards[3] = attackcard4;

		var attackcard5;
		attackcard5 = new aom.AttackActionCard();
		attackcard5.SpriteName = 'GreekAttackRandomCard5';
		attackcard5.Type = 'Random';
		attackcard5.AttackAllowed = 5;
		attackcard5.IsGod = 0;
		attackcard5.IsNotInHand = 1;
		aom.GreekAttackCards[4] = attackcard5;

		var attackcard6;
		attackcard6 = new aom.AttackActionCard();
		attackcard6.SpriteName = 'GreekAttackRandomCard6';
		attackcard6.Type = 'Random';
		attackcard6.AttackAllowed = 5;
		attackcard6.IsGod = 0;
		attackcard6.IsNotInHand = 1;
		aom.GreekAttackCards[5] = attackcard6;

		var attackcard7;
		attackcard7 = new aom.AttackActionCard();
		attackcard7.SpriteName = 'GreekAttackRandomCard7';
		attackcard7.Type = 'Random';
		attackcard7.AttackAllowed = 7;
		attackcard7.IsGod = 0;
		attackcard7.IsNotInHand = 1;
		aom.GreekAttackCards[6] = attackcard7;

		var attackcard8;
		attackcard8 = new aom.AttackActionCard();
		attackcard8.SpriteName = 'GreekAttackRandomCard8';
		attackcard8.Type = 'Random';
		attackcard8.AttackAllowed = 7;
		attackcard8.IsGod = 0;
		attackcard8.IsNotInHand = 1;
		aom.GreekAttackCards[7] = attackcard8;

		var explorecard;
		explorecard = new aom.ExploreActionCard();
		explorecard.SpriteName = 'GreekExplorePermanentAction';
		explorecard.Type = 'Permanent';
		explorecard.ExtraTilesAllowed = 1;
		explorecard.IsGod = 0;
		explorecard.IsNotInHand = 1;
		aom.GreekExploreCards[0] = explorecard;

		var explorecard1;
		explorecard1 = new aom.ExploreActionCard();
		explorecard1.SpriteName = 'GreekExploreRandomCard1';
		explorecard1.Type = 'Random';
		explorecard1.ExtraTilesAllowed = 2;
		explorecard1.IsGod = 1;
		explorecard1.IsNotInHand = 1;
		aom.GreekExploreCards[1] = explorecard1;

		var explorecard2;
		explorecard2 = new aom.ExploreActionCard();
		explorecard2.SpriteName = 'GreekExploreRandomCard2';
		explorecard2.Type = 'Random';
		explorecard2.ExtraTilesAllowed = 2;
		explorecard2.IsGod = 0;
		explorecard2.IsNotInHand = 1;
		aom.GreekExploreCards[2] = explorecard2;

		var explorecard3;
		explorecard3 = new aom.ExploreActionCard();
		explorecard3.SpriteName = 'GreekExploreRandomCard3';
		explorecard3.Type = 'Random';
		explorecard3.ExtraTilesAllowed = 2;
		explorecard3.IsGod = 0;
		explorecard3.IsNotInHand = 1;
		aom.GreekExploreCards[3] = explorecard3;

		var explorecard4;
		explorecard4 = new aom.ExploreActionCard();
		explorecard4.SpriteName = 'GreekExploreRandomCard4';
		explorecard4.Type = 'Random';
		explorecard4.ExtraTilesAllowed = 0;
		explorecard4.IsGod = 0;
		explorecard4.IsNotInHand = 1;
		aom.GreekExploreCards[4] = explorecard4;

		var explorecard5;
		explorecard5 = new aom.ExploreActionCard();
		explorecard5.SpriteName = 'GreekExploreRandomCard5';
		explorecard5.Type = 'Random';
		explorecard5.ExtraTilesAllowed = 0;
		explorecard5.IsGod = 0;
		explorecard5.IsNotInHand = 1;
		aom.GreekExploreCards[5] = explorecard5;

		/*var explorecard6;
		explorecard6 = new aom.ExploreActionCard();
		explorecard6.SpriteName = 'GreekExploreRandomCard6';
		explorecard6.Type = 'Random';
		explorecard6.ExtraTilesAllowed = 2;
		explorecard6.IsGod = 0;
		explorecard6.IsNotInHand = 1;
		aom.GreekExploreCards[6] = explorecard6;*/


		var gathercard;
		gathercard = new aom.GatherActionCard();
		gathercard.SpriteName = 'GreekGatherPermanentAction';
		gathercard.Type = 'Permanent';
		gathercard.ResourceOrTerrain = 'TerrainOrResource';
		gathercard.IsGod = 0;
		gathercard.IsNotInHand = 1;
		aom.GreekGatherCards[0] = gathercard;

		var gathercard1;
		gathercard1 = new aom.GatherActionCard();
		gathercard1.SpriteName = 'GreekGatherRandomCard1';
		gathercard1.Type = 'Random';
		gathercard1.ResourceOrTerrain = 'AllResources';
		gathercard1.IsGod = 0;
		gathercard1.IsNotInHand = 1;
		aom.GreekGatherCards[1] = gathercard1;

		var gathercard2;
		gathercard2 = new aom.GatherActionCard();
		gathercard2.SpriteName = 'GreekGatherRandomCard2';
		gathercard2.Type = 'Random';
		gathercard2.ResourceOrTerrain = 'TerrainOrResource';
		gathercard2.IsGod = 1;
		gathercard2.IsNotInHand = 1;
		aom.GreekGatherCards[2] = gathercard2;

		/*var gathercard3;
		gathercard3 = new aom.GatherActionCard();
		gathercard3.SpriteName = 'GreekGatherRandomCard3';
		gathercard3.Type = 'Random';
		gathercard3.ResourceOrTerrain = 'TerrainOrResource';
		gathercard3.IsGod = 1;
		gathercard3.IsNotInHand = 1;
		aom.GreekGatherCards[3] = gathercard3;*/

		var gathercard4;
		gathercard4 = new aom.GatherActionCard();
		gathercard4.SpriteName = 'GreekGatherRandomCard4';
		gathercard4.Type = 'Random';
		gathercard4.ResourceOrTerrain = 'AllResources';
		gathercard4.IsGod = 0;
		gathercard4.IsNotInHand = 1;
		aom.GreekGatherCards[3] = gathercard4;

		/*var gathercard5;
		gathercard5 = new aom.GatherActionCard();
		gathercard5.SpriteName = 'GreekGatherRandomCard5';
		gathercard5.Type = 'Random';
		gathercard5.ResourceOrTerrain = 'Food';
		gathercard5.IsGod = 1;
		gathercard5.IsNotInHand = 1;
		aom.GreekGatherCards[5] = gathercard5;*/

		var gathercard6;
		gathercard6 = new aom.GatherActionCard();
		gathercard6.SpriteName = 'GreekGatherRandomCard6';
		gathercard6.Type = 'Random';
		gathercard6.ResourceOrTerrain = 'AllResources';
		gathercard6.IsGod = 0;
		gathercard6.IsNotInHand = 1;
		aom.GreekGatherCards[4] = gathercard6;

		var gathercard7;
		gathercard7 = new aom.GatherActionCard();
		gathercard7.SpriteName = 'GreekGatherRandomCard7';
		gathercard7.Type = 'Random';
		gathercard7.ResourceOrTerrain = 'AllResources';
		gathercard7.IsGod = 0;
		gathercard7.IsNotInHand = 1;
		aom.GreekGatherCards[5] = gathercard7;

		var gathercard8;
		gathercard8 = new aom.GatherActionCard();
		gathercard8.SpriteName = 'GreekGatherRandomCard8';
		gathercard8.Type = 'Random';
		gathercard8.ResourceOrTerrain = 'AllResources';
		gathercard8.IsGod = 0;
		gathercard8.IsNotInHand = 1;
		aom.GreekGatherCards[6] = gathercard8;

		var nextagecard;
		nextagecard = new aom.NextAgeActionCard();
		nextagecard.SpriteName = 'GreekNextAgePermanentAction';
		nextagecard.Type = 'Permanent';
		nextagecard.Classical = 4;
		nextagecard.Heroic = 5;
		nextagecard.Mythic = 6;
		nextagecard.IsGod = 0;
		nextagecard.IsNotInHand = 1;
		aom.GreekNextAgeCards[0] = nextagecard;

		var nextagecard1;
		nextagecard1 = new aom.NextAgeActionCard();
		nextagecard1.SpriteName = 'GreekNextAgeRandomCard1';
		nextagecard1.Type = 'Random';
		nextagecard1.Classical = 3;
		nextagecard1.Heroic = 4;
		nextagecard1.Mythic = 5;
		nextagecard1.IsGod = 0;
		nextagecard1.IsNotInHand = 1;
		aom.GreekNextAgeCards[1] = nextagecard1;

		var nextagecard2;
		nextagecard2 = new aom.NextAgeActionCard();
		nextagecard2.SpriteName = 'GreekNextAgeRandomCard2';
		nextagecard2.Type = 'Random';
		nextagecard2.Classical = 3;
		nextagecard2.Heroic = 4;
		nextagecard2.Mythic = 5;
		nextagecard2.IsGod = 0;
		nextagecard2.IsNotInHand = 1;
		aom.GreekNextAgeCards[2] = nextagecard2;

		var nextagecard3;
		nextagecard3 = new aom.NextAgeActionCard();
		nextagecard3.SpriteName = 'GreekNextAgeRandomCard3';
		nextagecard3.Type = 'Random';
		nextagecard3.Classical = 3;
		nextagecard3.Heroic = 4;
		nextagecard3.Mythic = 5;
		nextagecard3.IsGod = 1;
		nextagecard3.IsNotInHand = 1;
		aom.GreekNextAgeCards[3] = nextagecard3;

		/*var nextagecard4;
		nextagecard4 = new aom.NextAgeActionCard();
		nextagecard4.SpriteName = 'GreekNextAgeRandomCard4';
		nextagecard4.Type = 'Random';
		nextagecard4.Classical = 3;
		nextagecard4.Heroic = 4;
		nextagecard4.Mythic = 5;
		nextagecard4.IsGod = 1;
		nextagecard4.IsNotInHand = 1;
		aom.GreekNextAgeCards[4] = nextagecard4;*/

		var recruitcard;
		recruitcard = new aom.RecruitActionCard();
		recruitcard.SpriteName = 'GreekRecruitPermanentAction';
		recruitcard.Type = 'Permanent';
		recruitcard.RecruitsAllowed = 2;
		recruitcard.IsGod = 0;
		recruitcard.IsNotInHand = 1;
		aom.GreekRecruitCards[0] = recruitcard;

		var recruitcard1;
		recruitcard1 = new aom.RecruitActionCard();
		recruitcard1.SpriteName = 'GreekRecruitRandomCard1';
		recruitcard1.Type = 'Random';
		recruitcard1.RecruitsAllowed = 3;
		recruitcard1.IsGod = 0;
		recruitcard1.IsNotInHand = 1;
		aom.GreekRecruitCards[1] = recruitcard1;

		var recruitcard2;
		recruitcard2 = new aom.RecruitActionCard();
		recruitcard2.SpriteName = 'GreekRecruitRandomCard2';
		recruitcard2.Type = 'Random';
		recruitcard2.RecruitsAllowed = 5;
		recruitcard2.IsGod = 0;
		recruitcard2.IsNotInHand = 1;
		aom.GreekRecruitCards[2] = recruitcard2;

		var recruitcard3;
		recruitcard3 = new aom.RecruitActionCard();
		recruitcard3.SpriteName = 'GreekRecruitRandomCard3';
		recruitcard3.Type = 'Random';
		recruitcard3.RecruitsAllowed = 4;
		recruitcard3.IsGod = 1;
		recruitcard3.IsNotInHand = 1;
		aom.GreekRecruitCards[3] = recruitcard3;

		var recruitcard4;
		recruitcard4 = new aom.RecruitActionCard();
		recruitcard4.SpriteName = 'GreekRecruitRandomCard4';
		recruitcard4.Type = 'Random';
		recruitcard4.RecruitsAllowed = 3;
		recruitcard4.IsGod = 0;
		recruitcard4.IsNotInHand = 1;
		aom.GreekRecruitCards[4] = recruitcard4;

		var recruitcard5;
		recruitcard5 = new aom.RecruitActionCard();
		recruitcard5.SpriteName = 'GreekRecruitRandomCard5';
		recruitcard5.Type = 'Random';
		recruitcard5.RecruitsAllowed = 5;
		recruitcard5.IsGod = 0;
		recruitcard5.IsNotInHand = 1;
		aom.GreekRecruitCards[5] = recruitcard5;

		var recruitcard6;
		recruitcard6 = new aom.RecruitActionCard();
		recruitcard6.SpriteName = 'GreekRecruitRandomCard6';
		recruitcard6.Type = 'Random';
		recruitcard6.RecruitsAllowed = 4;
		recruitcard6.IsGod = 0;
		recruitcard6.IsNotInHand = 1;
		aom.GreekRecruitCards[6] = recruitcard6;

		var recruitcard7;
		recruitcard7 = new aom.RecruitActionCard();
		recruitcard7.SpriteName = 'GreekRecruitRandomCard7';
		recruitcard7.Type = 'Random';
		recruitcard7.RecruitsAllowed = 4;
		recruitcard7.IsGod = 0;
		recruitcard7.IsNotInHand = 1;
		aom.GreekRecruitCards[7] = recruitcard7;

		var tradecard;
		tradecard = new aom.TradeActionCard();
		tradecard.SpriteName = 'GreekTradePermanentAction';
		tradecard.Type = 'Permanent';
		tradecard.Cost = 2;
		tradecard.IsGod = 0;
		tradecard.IsNotInHand = 1;
		aom.GreekTradeCards[0] = tradecard;

		var tradecard1;
		tradecard1 = new aom.TradeActionCard();
		tradecard1.SpriteName = 'GreekTradeRandomCard1';
		tradecard1.Type = 'Random';
		tradecard1.Cost = 1;
		tradecard1.IsGod = 0;
		tradecard1.IsNotInHand = 1;
		aom.GreekTradeCards[1] = tradecard1;

		var tradecard2;
		tradecard2 = new aom.TradeActionCard();
		tradecard2.SpriteName = 'GreekTradeRandomCard2';
		tradecard2.Type = 'Random';
		tradecard2.Cost = 1;
		tradecard2.IsGod = 0;
		tradecard2.IsNotInHand = 1;
		aom.GreekTradeCards[2] = tradecard2;

		var tradecard3;
		tradecard3 = new aom.TradeActionCard();
		tradecard3.SpriteName = 'GreekTradeRandomCard3';
		tradecard3.Type = 'Random';
		tradecard3.Cost = 1;
		tradecard3.IsGod = 0;
		tradecard3.IsNotInHand = 1;
		aom.GreekTradeCards[3] = tradecard3;

		var tradecard4;
		tradecard4 = new aom.TradeActionCard();
		tradecard4.SpriteName = 'GreekTradeRandomCard4';
		tradecard4.Type = 'Random';
		tradecard4.Cost = 1;
		tradecard4.IsGod = 0;
		tradecard4.IsNotInHand = 1;
		aom.GreekTradeCards[4] = tradecard4;

		var tradecard5;
		tradecard5 = new aom.TradeActionCard();
		tradecard5.SpriteName = 'GreekTradeRandomCard5';
		tradecard5.Type = 'Random';
		tradecard5.Cost = 0;
		tradecard5.IsGod = 1;
		tradecard5.IsNotInHand = 1;
		aom.GreekTradeCards[5] = tradecard5;

		var tradecard6;
		tradecard6 = new aom.TradeActionCard();
		tradecard6.SpriteName = 'GreekTradeRandomCard6';
		tradecard6.Type = 'Random';
		tradecard6.Cost = 1;
		tradecard6.IsGod = 0;
		tradecard6.IsNotInHand = 1;
		aom.GreekTradeCards[6] = tradecard6;

		var battlecard1;
		battlecard1 = new aom.BattleCard();
		battlecard1.SpriteName = 'GreekBattleCard1';
		battlecard1.Type = 'Myth';
		battlecard1.SubType = 'Archer Cavalry';
		battlecard1.NumberOfDice = 5;
		battlecard1.BonusDiceString1 = 'Flyer = 3';				
		battlecard1.BonusDiceString2 = 'Archer = 3';
		battlecard1.CostFood = 0;
		battlecard1.CostWood = 3;
		battlecard1.CostGold = 0;
		battlecard1.CostFavor = 1;
		battlecard1.HasSpecialPower = 0;					
		battlecard1.isRecruited = 0;
		battlecard1.isSelectedForBattle = 0;
		aom.GreekBattleCards[0] = battlecard1;

		var battlecard2;
		battlecard2 = new aom.BattleCard();
		battlecard2.SpriteName = 'GreekBattleCard2';
		battlecard2.Type = 'Myth';
		battlecard2.SubType = 'Giant';
		battlecard2.NumberOfDice = 6;
		battlecard2.BonusDiceString1 = 'Mortals = 4';				
		battlecard2.BonusDiceString2 = null;
		battlecard2.CostFood = 3;
		battlecard2.CostWood = 0;
		battlecard2.CostGold = 0;
		battlecard2.CostFavor = 3;
		battlecard2.HasSpecialPower = 1;					
		battlecard2.isRecruited = 0;
		battlecard2.isSelectedForBattle = 0;
		aom.GreekBattleCards[1] = battlecard2;

		var battlecard3;
		battlecard3 = new aom.BattleCard();
		battlecard3.SpriteName = 'GreekBattleCard3';
		battlecard3.Type = 'Myth';
		battlecard3.SubType = 'Flyer';
		battlecard3.NumberOfDice = 5;
		battlecard3.BonusDiceString1 = 'Killers = 4';				
		battlecard3.BonusDiceString2 = null;
		battlecard3.CostFood = 2;
		battlecard3.CostWood = 0;
		battlecard3.CostGold = 0;
		battlecard3.CostFavor = 2;
		battlecard3.HasSpecialPower = 0;					
		battlecard3.isRecruited = 0;
		battlecard3.isSelectedForBattle = 0;
		aom.GreekBattleCards[2] = battlecard3;

		var battlecard4;
		battlecard4 = new aom.BattleCard();
		battlecard4.SpriteName = 'GreekBattleCard4';
		battlecard4.Type = 'Hero';
		battlecard4.SubType = null;
		battlecard4.NumberOfDice = 5;
		battlecard4.BonusDiceString1 = 'Myth = 4';				
		battlecard4.BonusDiceString2 = null;
		battlecard4.CostFood = 2;
		battlecard4.CostWood = 2;
		battlecard4.CostGold = 0;
		battlecard4.CostFavor = 0;
		battlecard4.HasSpecialPower = 1;					
		battlecard4.isRecruited = 0;
		battlecard4.isSelectedForBattle = 0;
		aom.GreekBattleCards[3] = battlecard4;

		var battlecard5;
		battlecard5 = new aom.BattleCard();
		battlecard5.SpriteName = 'GreekBattleCard5';
		battlecard5.Type = 'Mortal';
		battlecard5.SubType = 'Archer';
		battlecard5.NumberOfDice = 3;
		battlecard5.BonusDiceString1 = 'Flyer = 4';				
		battlecard5.BonusDiceString2 = 'Warrior = 3';
		battlecard5.CostFood = 1;
		battlecard5.CostWood = 1;
		battlecard5.CostGold = 0;
		battlecard5.CostFavor = 0;
		battlecard5.HasSpecialPower = 0;					
		battlecard5.isRecruited = 0;
		battlecard5.isSelectedForBattle = 0;
		aom.GreekBattleCards[4] = battlecard5;

		var battlecard6;
		battlecard6 = new aom.BattleCard();
		battlecard6.SpriteName = 'GreekBattleCard6';
		battlecard6.Type = 'Hero';
		battlecard6.SubType = null;//'Warrior';
		battlecard6.NumberOfDice = 6;
		battlecard6.BonusDiceString1 = 'Myth = 4';				
		battlecard6.BonusDiceString2 = null;
		battlecard6.CostFood = 3;
		battlecard6.CostWood = 0;
		battlecard6.CostGold = 4;
		battlecard6.CostFavor = 0;
		battlecard6.HasSpecialPower = 1;					
		battlecard6.isRecruited = 0;
		battlecard6.isSelectedForBattle = 0;
		aom.GreekBattleCards[5] = battlecard6;

		var battlecard7;
		battlecard7 = new aom.BattleCard();
		battlecard7.SpriteName = 'GreekBattleCard7';
		battlecard7.Type = 'Myth';
		battlecard7.SubType = 'Giant';
		battlecard7.NumberOfDice = 6;
		battlecard7.BonusDiceString1 = 'Warrior = 4';				
		battlecard7.BonusDiceString2 = null;
		battlecard7.CostFood = 0;
		battlecard7.CostWood = 0;
		battlecard7.CostGold = 2;
		battlecard7.CostFavor = 2;
		battlecard7.HasSpecialPower = 1;					
		battlecard7.isRecruited = 0;
		battlecard7.isSelectedForBattle = 0;
		aom.GreekBattleCards[6] = battlecard7;

		var battlecard8;
		battlecard8 = new aom.BattleCard();
		battlecard8.SpriteName = 'GreekBattleCard8';
		battlecard8.Type = 'Myth';
		battlecard8.SubType = 'Warrior';
		battlecard8.NumberOfDice = 5;
		battlecard8.BonusDiceString1 = 'Cavalry = 4';				
		battlecard8.BonusDiceString2 = null;
		battlecard8.CostFood = 2;
		battlecard8.CostWood = 2;
		battlecard8.CostGold = 0;
		battlecard8.CostFavor = 0;
		battlecard8.HasSpecialPower = 1;					
		battlecard8.isRecruited = 0;
		battlecard8.isSelectedForBattle = 0;
		aom.GreekBattleCards[7] = battlecard8;

		var battlecard9;
		battlecard9 = new aom.BattleCard();
		battlecard9.SpriteName = 'GreekBattleCard9';
		battlecard9.Type = 'Hero';
		battlecard9.SubType = null;//'Cavalry';
		battlecard9.NumberOfDice = 5;
		battlecard9.BonusDiceString1 = null;//'Archers = 4';				
		battlecard9.BonusDiceString2 = null;
		battlecard9.CostFood = 0;
		battlecard9.CostWood = 0;
		battlecard9.CostGold = 4;
		battlecard9.CostFavor = 4;
		battlecard9.HasSpecialPower = 1;					
		battlecard9.isRecruited = 0;
		battlecard9.isSelectedForBattle = 0;
		aom.GreekBattleCards[8] = battlecard9;

		var battlecard10;
		battlecard10 = new aom.BattleCard();
		battlecard10.SpriteName = 'GreekBattleCard10';
		battlecard10.Type = 'Mortal';
		battlecard10.SubType = 'Cavalry';
		battlecard10.NumberOfDice = 3;
		battlecard10.BonusDiceString1 = 'Hero = 4';				
		battlecard10.BonusDiceString2 = 'Archer = 4';
		battlecard10.CostFood = 1;
		battlecard10.CostWood = 0;
		battlecard10.CostGold = 1;
		battlecard10.CostFavor = 0;
		battlecard10.HasSpecialPower = 0;					
		battlecard10.isRecruited = 0;
		battlecard10.isSelectedForBattle = 0;
		aom.GreekBattleCards[9] = battlecard10;

		var battlecard11;
		battlecard11 = new aom.BattleCard();
		battlecard11.SpriteName = 'GreekBattleCard11';
		battlecard11.Type = 'Mortal';
		battlecard11.SubType = 'Warrior';
		battlecard11.NumberOfDice = 3;
		battlecard11.BonusDiceString1 = 'Mortal = 1';				
		battlecard11.BonusDiceString2 = 'Cavalry = 3';
		battlecard11.CostFood = 1;
		battlecard11.CostWood = 1;
		battlecard11.CostGold = 0;
		battlecard11.CostFavor = 0;
		battlecard11.HasSpecialPower = 0;					
		battlecard11.isRecruited = 0;
		battlecard11.isSelectedForBattle = 0;
		aom.GreekBattleCards[10] = battlecard11;

		var battlecard12;
		battlecard12 = new aom.BattleCard();
		battlecard12.SpriteName = 'GreekBattleCard12';
		battlecard12.Type = 'Myth';
		battlecard12.SubType = 'Killer';
		battlecard12.NumberOfDice = 5;
		battlecard12.BonusDiceString1 = 'Giants = 6';				
		battlecard12.BonusDiceString2 = null;
		battlecard12.CostFood = 1;
		battlecard12.CostWood = 0;
		battlecard12.CostGold = 0;
		battlecard12.CostFavor = 3;
		battlecard12.HasSpecialPower = 1;					
		battlecard12.isRecruited = 0;
		battlecard12.isSelectedForBattle = 0;
		aom.GreekBattleCards[11] = battlecard12;


		this.GreekBuildPermanentActionCardDeck();
		this.GreekBuildRandomActionCardDeck();


	},


	GreekBuildPermanentActionCardDeck: function(){
		aom.GreekPermanentActionCardDeck[0] = aom.GreekAttackCards[0];
		aom.GreekPermanentActionCardDeck[1] = aom.GreekBuildCards[0];
		aom.GreekPermanentActionCardDeck[2] = aom.GreekExploreCards[0];
		aom.GreekPermanentActionCardDeck[3] = aom.GreekGatherCards[0];
		aom.GreekPermanentActionCardDeck[4] = aom.GreekNextAgeCards[0];
		aom.GreekPermanentActionCardDeck[5] = aom.GreekRecruitCards[0];
		aom.GreekPermanentActionCardDeck[6] = aom.GreekTradeCards[0];
	},


	GreekBuildRandomActionCardDeck: function(){
		for(var i = 1; i < 8; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekAttackCards[i]; 
		}

		for(var i = 8; i < 15; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekBuildCards[i-7]; 
		}

		for(var i = 15; i < 20; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekExploreCards[i-14]; 
		}

		for(var i = 20; i < 26; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekGatherCards[i - 19]; 
		}

		for(var i = 26; i < 29; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekNextAgeCards[i - 25]; 
		}

		for(var i = 29; i < 36; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekRecruitCards[i - 28]; 
		}

		for(var i = 36; i < 42; i++){
			aom.GreekRandomActionCardDeck[i-1] = aom.GreekTradeCards[i - 35]; 
		}


		//this.DebugRandomCardDeck();
		/*aom.GreekRandomActionCardDeck[45] = null;
		aom.EgyptianRandomActionCardDeck[45] = null;*/
	},


//--------------------------------------------------------------------END-------------------------------------------------------------------//


//----------------------------------------------------------------Initialize Norse Buildings-----------------------------------------------//

	InitializeNorseBuildings: function(){
		var build1;
		build1 = new aom.Building();
		build1.SpriteName = 'Armory';
		build1.isConstructed = 0;
		build1.CostGold = 2;
		build1.CostWood = 3;
		build1.CostFood = 0;
		build1.CostFavor = 0;
		aom.NorseBuildings[0] = build1;

		var build2;
		build2 = new aom.Building();
		build2.SpriteName = 'GoldMine';
		build2.isConstructed = 0;
		build2.CostGold = 0;
		build2.CostWood = 2;
		build2.CostFood = 3;
		build2.CostFavor = 0;
		aom.NorseBuildings[1] = build2;
		
		var build3;
		build3 = new aom.Building();
		build3.SpriteName = 'Granary';
		build3.isConstructed = 0;
		build3.CostGold = 3;
		build3.CostWood = 2;
		build3.CostFood = 0;
		build3.CostFavor = 0;
		aom.NorseBuildings[2] = build3;

		var build4;
		build4 = new aom.Building();
		build4.SpriteName = 'GreatTemple';
		build4.isConstructed = 0;
		build4.CostGold = 4;
		build4.CostWood = 4;
		build4.CostFood = 4;
		build4.CostFavor = 4;
		aom.NorseBuildings[3] = build4;

		var build5;
		build5 = new aom.Building();
		build5.SpriteName = 'House';
		build5.isConstructed = 0;
		build5.CostGold = 0;
		build5.CostWood = 2;
		build5.CostFood = 2;
		build5.CostFavor = 0;
		aom.NorseBuildings[4] = build5;

		var build6;
		build6 = new aom.Building();
		build6.SpriteName = 'Market';
		build6.isConstructed = 0;
		build6.CostGold = 3;
		build6.CostWood = 0;
		build6.CostFood = 0;
		build6.CostFavor = 2;
		aom.NorseBuildings[5] = build6;

		var build7;
		build7 = new aom.Building();
		build7.SpriteName = 'Monument';
		build7.isConstructed = 0;
		build7.CostGold = 2;
		build7.CostWood = 0;
		build7.CostFood = 3;
		build7.CostFavor = 0;
		aom.NorseBuildings[6] = build7;

		var build8;
		build8 = new aom.Building();
		build8.SpriteName = 'Quarry';
		build8.isConstructed = 0;
		build8.CostGold = 1;
		build8.CostWood = 0;
		build8.CostFood = 4;
		build8.CostFavor = 0;
		aom.NorseBuildings[7] = build8;

		var build9;
		build9 = new aom.Building();
		build9.SpriteName = 'SiegeWork';
		build9.isConstructed = 0;
		build9.CostGold = 2;
		build9.CostWood = 3;
		build9.CostFood = 0;
		build9.CostFavor = 0;
		aom.NorseBuildings[8] = build9;

		var build10;
		build10 = new aom.Building();
		build10.SpriteName = 'Storehouse';
		build10.isConstructed = 0;
		build10.CostGold = 2;
		build10.CostWood = 2;
		build10.CostFood = 2;
		build10.CostFavor = 2;
		aom.NorseBuildings[9] = build10;

		var build11;
		build11 = new aom.Building();
		build11.SpriteName = 'Tower';
		build11.isConstructed = 0;
		build11.CostGold = 3;
		build11.CostWood = 3;
		build11.CostFood = 0;
		build11.CostFavor = 0;
		aom.NorseBuildings[10] = build11;

		var build12;
		build12 = new aom.Building();
		build12.SpriteName = 'Wall';
		build12.isConstructed = 0;
		build12.CostGold = 3;
		build12.CostWood = 3;
		build12.CostFood = 0;
		build12.CostFavor = 0;
		aom.NorseBuildings[11] = build12;

		var build13;
		build13 = new aom.Building();
		build13.SpriteName = 'Wonder';
		build13.isConstructed = 0;
		build13.CostGold = 10;
		build13.CostWood = 10;
		build13.CostFood = 10;
		build13.CostFavor = 10;
		aom.NorseBuildings[12] = build13;

		var build14;
		build14 = new aom.Building();
		build14.SpriteName = 'WoodWork';
		build14.isConstructed = 0;
		build14.CostGold = 3;
		build14.CostWood = 0;
		build14.CostFood = 2;
		build14.CostFavor = 0;
		aom.NorseBuildings[13] = build14;
	},




	InitializeEgyptianBuildings: function(){
		var build1;
		build1 = new aom.Building();
		build1.SpriteName = 'Armory';
		build1.isConstructed = 0;
		build1.CostGold = 2;
		build1.CostWood = 3;
		build1.CostFood = 0;
		build1.CostFavor = 0;
		aom.EgyptianBuildings[0] = build1;

		var build2;
		build2 = new aom.Building();
		build2.SpriteName = 'GoldMine';
		build2.isConstructed = 0;
		build2.CostGold = 0;
		build2.CostWood = 2;
		build2.CostFood = 3;
		build2.CostFavor = 0;
		aom.EgyptianBuildings[1] = build2;
		
		var build3;
		build3 = new aom.Building();
		build3.SpriteName = 'Granary';
		build3.isConstructed = 0;
		build3.CostGold = 3;
		build3.CostWood = 2;
		build3.CostFood = 0;
		build3.CostFavor = 0;
		aom.EgyptianBuildings[2] = build3;

		var build4;
		build4 = new aom.Building();
		build4.SpriteName = 'GreatTemple';
		build4.isConstructed = 0;
		build4.CostGold = 4;
		build4.CostWood = 4;
		build4.CostFood = 4;
		build4.CostFavor = 4;
		aom.EgyptianBuildings[3] = build4;

		var build5;
		build5 = new aom.Building();
		build5.SpriteName = 'House';
		build5.isConstructed = 0;
		build5.CostGold = 0;
		build5.CostWood = 2;
		build5.CostFood = 2;
		build5.CostFavor = 0;
		aom.EgyptianBuildings[4] = build5;

		var build6;
		build6 = new aom.Building();
		build6.SpriteName = 'Market';
		build6.isConstructed = 0;
		build6.CostGold = 3;
		build6.CostWood = 0;
		build6.CostFood = 0;
		build6.CostFavor = 2;
		aom.EgyptianBuildings[5] = build6;

		var build7;
		build7 = new aom.Building();
		build7.SpriteName = 'Monument';
		build7.isConstructed = 0;
		build7.CostGold = 2;
		build7.CostWood = 0;
		build7.CostFood = 3;
		build7.CostFavor = 0;
		aom.EgyptianBuildings[6] = build7;

		var build8;
		build8 = new aom.Building();
		build8.SpriteName = 'Quarry';
		build8.isConstructed = 0;
		build8.CostGold = 1;
		build8.CostWood = 0;
		build8.CostFood = 4;
		build8.CostFavor = 0;
		aom.EgyptianBuildings[7] = build8;

		var build9;
		build9 = new aom.Building();
		build9.SpriteName = 'SiegeWork';
		build9.isConstructed = 0;
		build9.CostGold = 2;
		build9.CostWood = 3;
		build9.CostFood = 0;
		build9.CostFavor = 0;
		aom.EgyptianBuildings[8] = build9;

		var build10;
		build10 = new aom.Building();
		build10.SpriteName = 'Storehouse';
		build10.isConstructed = 0;
		build10.CostGold = 2;
		build10.CostWood = 2;
		build10.CostFood = 2;
		build10.CostFavor = 2;
		aom.EgyptianBuildings[9] = build10;

		var build11;
		build11 = new aom.Building();
		build11.SpriteName = 'Tower';
		build11.isConstructed = 0;
		build11.CostGold = 3;
		build11.CostWood = 3;
		build11.CostFood = 0;
		build11.CostFavor = 0;
		aom.EgyptianBuildings[10] = build11;

		var build12;
		build12 = new aom.Building();
		build12.SpriteName = 'Wall';
		build12.isConstructed = 0;
		build12.CostGold = 3;
		build12.CostWood = 3;
		build12.CostFood = 0;
		build12.CostFavor = 0;
		aom.EgyptianBuildings[11] = build12;

		var build13;
		build13 = new aom.Building();
		build13.SpriteName = 'Wonder';
		build13.isConstructed = 0;
		build13.CostGold = 10;
		build13.CostWood = 10;
		build13.CostFood = 10;
		build13.CostFavor = 10;
		aom.EgyptianBuildings[12] = build13;

		var build14;
		build14 = new aom.Building();
		build14.SpriteName = 'WoodWork';
		build14.isConstructed = 0;
		build14.CostGold = 3;
		build14.CostWood = 0;
		build14.CostFood = 2;
		build14.CostFavor = 0;
		aom.EgyptianBuildings[13] = build14;
	},




	InitializeGreekBuildings: function(){
		var build1;
		build1 = new aom.Building();
		build1.SpriteName = 'Armory';
		build1.isConstructed = 0;
		build1.CostGold = 2;
		build1.CostWood = 3;
		build1.CostFood = 0;
		build1.CostFavor = 0;
		aom.GreekBuildings[0] = build1;

		var build2;
		build2 = new aom.Building();
		build2.SpriteName = 'GoldMine';
		build2.isConstructed = 0;
		build2.CostGold = 0;
		build2.CostWood = 2;
		build2.CostFood = 3;
		build2.CostFavor = 0;
		aom.GreekBuildings[1] = build2;
		
		var build3;
		build3 = new aom.Building();
		build3.SpriteName = 'Granary';
		build3.isConstructed = 0;
		build3.CostGold = 3;
		build3.CostWood = 2;
		build3.CostFood = 0;
		build3.CostFavor = 0;
		aom.GreekBuildings[2] = build3;

		var build4;
		build4 = new aom.Building();
		build4.SpriteName = 'GreatTemple';
		build4.isConstructed = 0;
		build4.CostGold = 4;
		build4.CostWood = 4;
		build4.CostFood = 4;
		build4.CostFavor = 4;
		aom.GreekBuildings[3] = build4;

		var build5;
		build5 = new aom.Building();
		build5.SpriteName = 'House';
		build5.isConstructed = 0;
		build5.CostGold = 0;
		build5.CostWood = 2;
		build5.CostFood = 2;
		build5.CostFavor = 0;
		aom.GreekBuildings[4] = build5;

		var build6;
		build6 = new aom.Building();
		build6.SpriteName = 'Market';
		build6.isConstructed = 0;
		build6.CostGold = 3;
		build6.CostWood = 0;
		build6.CostFood = 0;
		build6.CostFavor = 2;
		aom.GreekBuildings[5] = build6;

		var build7;
		build7 = new aom.Building();
		build7.SpriteName = 'Monument';
		build7.isConstructed = 0;
		build7.CostGold = 2;
		build7.CostWood = 0;
		build7.CostFood = 3;
		build7.CostFavor = 0;
		aom.GreekBuildings[6] = build7;

		var build8;
		build8 = new aom.Building();
		build8.SpriteName = 'Quarry';
		build8.isConstructed = 0;
		build8.CostGold = 1;
		build8.CostWood = 0;
		build8.CostFood = 4;
		build8.CostFavor = 0;
		aom.GreekBuildings[7] = build8;

		var build9;
		build9 = new aom.Building();
		build9.SpriteName = 'SiegeWork';
		build9.isConstructed = 0;
		build9.CostGold = 2;
		build9.CostWood = 3;
		build9.CostFood = 0;
		build9.CostFavor = 0;
		aom.GreekBuildings[8] = build9;

		var build10;
		build10 = new aom.Building();
		build10.SpriteName = 'Storehouse';
		build10.isConstructed = 0;
		build10.CostGold = 2;
		build10.CostWood = 2;
		build10.CostFood = 2;
		build10.CostFavor = 2;
		aom.GreekBuildings[9] = build10;

		var build11;
		build11 = new aom.Building();
		build11.SpriteName = 'Tower';
		build11.isConstructed = 0;
		build11.CostGold = 3;
		build11.CostWood = 3;
		build11.CostFood = 0;
		build11.CostFavor = 0;
		aom.GreekBuildings[10] = build11;

		var build12;
		build12 = new aom.Building();
		build12.SpriteName = 'Wall';
		build12.isConstructed = 0;
		build12.CostGold = 3;
		build12.CostWood = 3;
		build12.CostFood = 0;
		build12.CostFavor = 0;
		aom.GreekBuildings[11] = build12;

		var build13;
		build13 = new aom.Building();
		build13.SpriteName = 'Wonder';
		build13.isConstructed = 0;
		build13.CostGold = 10;
		build13.CostWood = 10;
		build13.CostFood = 10;
		build13.CostFavor = 10;
		aom.GreekBuildings[12] = build13;

		var build14;
		build14 = new aom.Building();
		build14.SpriteName = 'WoodWork';
		build14.isConstructed = 0;
		build14.CostGold = 3;
		build14.CostWood = 0;
		build14.CostFood = 2;
		build14.CostFavor = 0;
		aom.GreekBuildings[13] = build14;
	},




//-----------------------------------------Displaying 18 randomly selected tiles from Tiles[] array-------------------------------------------------------------------//


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


//-----------------------------------------Function that assigns selected tiles to user board (6 at most) and calls AITurn function-------------------------------------------------------------------//


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
				while(j<16 && this.TilesSlectedByUser < 6){
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
				
				
	},
//-----------------------------------------END-------------------------------------------------------------------//

//-----------------------------------------Function that randomly selects a tile and calls the function that checks if that tile can be selected by the AI-------------------------------------------------------------------//

	AITurn: function(obj){

		var rnd1, rnd2, rnd3, rnd4;
		rnd1 = 0;//this.rnd.integerInRange(0,19);
		rnd2 = 1;//this.rnd.integerInRange(0,19);
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


		while(this.AITurnOver === false && this.TurnTracker%2 === 0 && (rnd1 < 20 || rnd2 < 20 || rnd3 < 20 || rnd4 < 20)){
			
		while(i1 < 20){
			if(this.TilesToDisplay.getAt(rnd1).key === aom.Tiles[i1].SpriteName && aom.Tiles[i1].IsSelected === 0){
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
			if(this.TilesToDisplay.getAt(rnd2).key === aom.Tiles[i2].SpriteName && aom.Tiles[i2].IsSelected === 0){
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
		while(i3 < 20){
			if(this.TilesToDisplay.getAt(rnd3).key === aom.Tiles[i3].SpriteName && aom.Tiles[i3].IsSelected === 0){
				this.AssignAIOneTiles(this.TilesToDisplay.getAt(rnd3));
				/*aom.Tiles[i3].IsSelected = 1;
				this.TilesToDisplay.getAt(rnd3).destroy();*/
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
			if(this.TilesToDisplay.getAt(rnd4).key === aom.Tiles[i4].SpriteName && aom.Tiles[i4].IsSelected === 0){
				this.AssignAITwoTiles(this.TilesToDisplay.getAt(rnd4));
				/*aom.Tiles[i4].IsSelected = 1;
				this.TilesToDisplay.getAt(rnd4).destroy();*/
				count4 = 1;
				i4 = 21;
				console.log('decided 3');
			}
			else{
				i4 = i4+1;
				console.log('deciding 3');
			}
		}
		console.log('count = ' + (count1 + count2 + count3 + count4));
		if(count1 + count2 + count3 + count4 === 4){
			console.log('deceision onComplete');
			this.AITurnOver = true;}
		else if(count1 === 0){
			i1 = 0;
		}
		else if(count2 === 0){
			i2 = 0;
		}
		else if(count3 === 0){
			i3 = 0;
		}
		else if(count4 === 0){
			i4 = 0;
		}
		if(rnd1 <= 21){
			rnd1++;// = this.rnd.integerInRange(0,19);
		}
		if(rnd2 <= 21){
		rnd2++;// = this.rnd.integerInRange(0,19);
		}
		if(rnd3 <= 21){	
		rnd3++;// = this.rnd.integerInRange(0,19);
		}
		if(rnd4 <= 21){
		rnd4++;// = this.rnd.integerInRange(0,19);
		}
		console.log('deciding');
		}



	},

//-----------------------------------------END-------------------------------------------------------------------//



	DisplayPlayerBoard: function(){
		
		//------------------------------------------------Lower Half of the screen-----------------------------//
		this.Board = this.add.sprite(this.world.width/2, this.world.height/2, aom.PlayerOne.Board);
		this.Board.scale.setTo((this.world.width/2)/900, (this.world.height/2)/800);
		this.BoardProductionArea = this.add.sprite(0, 0, aom.PlayerOne.Board);
		this.BoardProductionArea.scale.setTo(this.world.width/900, this.world.height/800);
		this.world.bringToTop(this.Board);
		this.DisplayProductionTiles();
		this.InitializeNorseCards();
		this.InitializeEgyptianCards();
		this.InitializeGreekCards();
		this.InitializeNorseBuildings();
		this.InitializeGreekBuildings();
		this.InitializeEgyptianBuildings();


	},

	//-----------------------------------------Function that displays selected tiles on the board at their respective position-------------------------------------------------------------------//


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
					//obj.ProductionTile[j] = 'Occupied';
					/*obj.SelectedProductionTile[i].SoilType = obj.SelectedProductionTile[i].SoilType + 1;*/
					/*i = i+1;*/
					/*j = j + 1;*/
					/*console.log(i);
					console.log(j);*/
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=4 && j < 8){
					temp = this.add.sprite( 10*(j-4) + ((this.world.width/2)/4.3)*(j-4), this.world.height/2 + (this.world.height/2)/4, obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one2');
					/*console.log(i);
					console.log(j);*/
					//obj.ProductionTile[j] = 'Occupied';
					/*i = i+1;*/
					/*j = j + 1;*/
					
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=8 && j < 12){
					temp = this.add.sprite( 10*(j-8) + ((this.world.width/2)/4.3)*(j-8), this.world.height/2 + 2*(this.world.height/2)/4,obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one3');
					//obj.ProductionTile[j] = 'Occupied';
					/*i = i+1;*/
					/*j = j+1;*/
					
				}
				else if(obj.SelectedProductionTile[i] != undefined && obj.ProductionTile[j] === obj.SelectedProductionTile[i].SoilType + 'Occupied' && j >=12 && j < 16){
					temp = this.add.sprite( 10*(j-12) + ((this.world.width/2)/4.3)*(j-12), this.world.height/2 + 3*(this.world.height/2)/4,obj.SelectedProductionTile[i].SpriteName);
					temp.scale.setTo(((this.world.width/2)/4.5)/90, ((this.world.height/2)/4.3)/90);
					this.SelectedProductionTileVisibleGroup.add(temp);
					console.log('found one4');
					//obj.ProductionTile[j] = 'Occupied';
					/*i = i+1;*/
					/*j = j + 1;*/
					
				}
				/*console.log(i);
					console.log(j);*/
			/*}*/
			
			i = i + 1;//console.log(aom.PlayerOne.SelectedProductionTile[i]);
		}
		/*for(var i = 0; i < 16; i++){
			obj.SelectedProductionTile[i] = obj.SelectedProductionTile[i] - 1;
		}*/
	},


//-----------------------------------------END-------------------------------------------------------------------//



//-----------------------------------------Function that displays "Game Ready to Start"  and calls the GamePlay State-------------------------------------------------------------------//



	BringSelectedTilesToTopPostSelection: function(){

		this.backDrop.alpha = 0;
		this.Board.alpha = 0;
		this.PassButton.alpha = 0;
		this.TilesToDisplay.alpha = 0;
		this.add.tween(this.Board).to({alpha: 0}, 30, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
			var temp, texttemp;
			temp = this.add.sprite(0,0,'Black');
			temp.scale.setTo(this.world.width/1280, this.world.height/720);
			temp.alpha = 0.8;
			styletemp = { font: "500% Arial", fill: "#E29002", align: "center" };
			texttemp = this.add.text(this.world.width/2, this.world.height/2, "Game is Ready to Play!", styletemp);
			texttemp.anchor.setTo(0.5,0.5);
			this.state.start('GamePlay');
		},this);


	},

	//-----------------------------------------END-------------------------------------------------------------------//




	//-----------------------------------------Function that sets the tiles selection environment and contains the Pass Button-------------------------------------------------------------------//


	DisplayProductionTiles: function(){
		this.backDrop = this.add.sprite(0, 0, 'Black');
		this.backDrop.scale.setTo(this.world.width/1280, (this.world.height/2)/720);
		this.world.bringToTop(this.backDrop);
		this.PassButton = this.add.sprite( 3*this.world.width/4, 0,'PassButton');
		this.PassButton.scale.setTo((1/4)*this.world.width/700, (this.world.height/2)/900);
		this.world.bringToTop(this.PassButton);
		this.PassButton.inputEnabled = true;
		this.PassButton.events.onInputDown.add(function(){							//User clicks Pass Button when he can't select any more tiles
			//this.world.bringToTop(this.BoardProductionArea);
			this.BringSelectedTilesToTopPostSelection();						
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
			//this.DisplayStartGameBanner();
		}, this);
		this.InitializeTiles();
		this.DisplayTiles();
		this.DisplayPlayerMenu();
	},


//-----------------------------------------END-------------------------------------------------------------------//




	//------------------------------------------------------------AI Tile Assignment----------------------------------------------//



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


//-----------------------------------------END-------------------------------------------------------------------//



//-----------------------------------------Functions which switch between player boards and render the player menu for each-------------------------------------------------------------------//


	DisplayPlayerMenu: function(){

		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text(this.world.width, this.world.height - this.world.height/15, "Player Two", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(1, 1);
				this.PlayerMenuButtons[1] = this.add.text(this.world.width, this.world.height - this.world.height/30, "Player Three", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(1, 1);
				
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite(this.world.width, this.world.height, 'Black')
		this.ButtonSmall.scale.setTo(0.125, 0.05);
		this.ButtonSmall.anchor.setTo(1,1);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "200% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text(this.world.width, this.world.height, "Player Menu", tempStyle);
		this.PlayerMenuText.anchor.setTo(1, 1);
		this.ButtonSmall.inputEnabled = true;
		
		this.ButtonSmall.events.onInputDown.add(function(){
			this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.25}, 50, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
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
						this.PlayerMenuButtons[0].destroy();
						this.PlayerMenuButtons[1].destroy();
						this.ButtonSmall.destroy();
						this.PlayerMenuText.destroy();
						this.DisplayePlayerTwoBoard();
						console.log('checking the number of calls');
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
				}, this);

				

			}, this);
			
		}, this);
		this.ButtonSmall.events.onInputOut.add(function(){
			this.add.tween(this.ButtonSmall).to({alpha: 0.6}, 2000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					
					this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.05}, 500, Phaser.Easing.Linear.None, true);
					
				
			}, this);
			
		}, this);
	},


	DisplayePlayerTwoBoard: function(){

		this.SelectedProductionTileVisibleGroup.destroy();
		this.BoardTwo = this.add.sprite(this.world.width/2, this.world.height/2, aom.PlayerTwo.Board);
		this.BoardTwo.scale.setTo((this.world.width/2)/900, (this.world.height/2)/800);
		this.BoardTwoProductionArea = this.add.sprite(0, 0, aom.PlayerTwo.Board);
		this.BoardTwoProductionArea.scale.setTo(this.world.width/900, this.world.height/800);
		this.BringSelectedTilesToTop(aom.PlayerTwo);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text(this.world.width, this.world.height - this.world.height/15, "My Board", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(1, 1);
				this.PlayerMenuButtons[1] = this.add.text(this.world.width, this.world.height - this.world.height/30, "Player Three", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(1, 1);
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite(this.world.width, this.world.height, 'Black')
		this.ButtonSmall.scale.setTo(0.125, 0.05);
		this.ButtonSmall.anchor.setTo(1,1);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "200% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text(this.world.width, this.world.height, "Player Menu", tempStyle);
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
			this.add.tween(this.ButtonSmall).to({alpha: 0.6}, 2000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
					this.PlayerMenuButtons[0].alpha = 0;
					this.PlayerMenuButtons[1].alpha = 0;
					this.PlayerMenuButtons[0].inputEnabled = false;
					this.PlayerMenuButtons[1].inputEnabled = false;
					
					this.add.tween(this.ButtonSmall.scale).to({x: 0.125, y: 0.05}, 500, Phaser.Easing.Linear.None, true);
					
				
			}, this);
			
		}, this);
		

	},


	DisplayePlayerThreeBoard: function(){
		this.SelectedProductionTileVisibleGroup.destroy();
		this.BoardThree = this.add.sprite(this.world.width/2, this.world.height/2, aom.PlayerThree.Board);
		this.BoardThree.scale.setTo((this.world.width/2)/900, (this.world.height/2)/800);
		this.BoardProductionAreaThree = this.add.sprite(0, 0, aom.PlayerThree.Board);
		this.BoardProductionAreaThree.scale.setTo(this.world.width/900, this.world.height/800);
		this.BringSelectedTilesToTop(aom.PlayerThree);
		var tempStyle = { font: "200%% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuButtons[0] = this.add.text(this.world.width, this.world.height - this.world.height/15, "My Board", tempStyle);
				this.PlayerMenuButtons[0].anchor.setTo(1, 1);
				this.PlayerMenuButtons[1] = this.add.text(this.world.width, this.world.height - this.world.height/30, "Player Two", tempStyle);
				this.PlayerMenuButtons[1].anchor.setTo(1, 1);
				this.PlayerMenuButtons[0].alpha = 0;
				this.PlayerMenuButtons[1].alpha = 0;
		this.ButtonSmall = this.add.sprite(this.world.width, this.world.height, 'Black')
		this.ButtonSmall.scale.setTo(0.125, 0.05);
		this.ButtonSmall.anchor.setTo(1,1);
		this.ButtonSmall.alpha = 0.6;
		tempStyle = { font: "200% Arial", fill: "#E29002", align: "center" };
		this.PlayerMenuText = this.add.text(this.world.width, this.world.height, "Player Menu", tempStyle);
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
			
		}, this);
	},

	DisplayePlayerOneBoard: function(){
		this.BoardTwo.destroy();
		console.log('Board two destroyed');
		this.BoardTwoProductionArea.destroy();
		this.BoardThree.destroy();
		this.BoardProductionAreaThree.destroy();
		this.SelectedProductionTileVisibleGroup.destroy();
		this.DisplayPlayerMenu();
		this.BringSelectedTilesToTop(aom.PlayerOne);

	},
	

//-----------------------------------------END-------------------------------------------------------------------//



	create: function(){
		this.DisplayPlayerBoard();
	}


};