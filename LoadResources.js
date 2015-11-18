


aom.LoadResources = function(game) {
	this.SplashScreenImage = null;
	this.AgeOfMythologyTextImage = null;


};

aom.LoadResources.prototype = {                 // to make methods preload(),create() etc available to all objects of bunnyDefender
	
	preload: function() 
    {                                          
        
    	/*this.load.image('SplashScreen', 'images/OtherResources/splashscreen.jpg');
    	this.load.image('AgeOfMythologyText', 'images/OtherResources/splashscreentext.png');
    	this.load.image('LoadBar', 'images/OtherResources/loadbar.png');*/
    	this.SplashScreenImage = this.add.sprite(0,0,'SplashScreen');
    	this.SplashScreenImage.scale.x = (this.game.width)/1920;
    	this.SplashScreenImage.scale.y = this.game.height/1080;
    	this.SplashScreenImage.alpha = 0;
    	this.AgeOfMythologyTextImage = this.add.sprite(this.game.width/2,this.game.height/2,'AgeOfMythologyText');
    	this.AgeOfMythologyTextImage.anchor.setTo(0.5,1);
    	this.AgeOfMythologyTextImage.scale.setTo((this.game.width/2)/1642, (this.game.height/4)/600);

    	this.preLoadBar = this.add.sprite(this.game.width/2,(this.game.height/2),'LoadBar');
    	/*this.preLoadBar.scale.x = 0.5;
    	this.preLoadBar.scale.y = 0.5;*/
    	this.preLoadBar.anchor.setTo(0.5, 0);
    	this.load.setPreloadSprite(this.preLoadBar, 0);



        this.load.image('AgeBox', 'images/BoardsTerrainBuildings/AgeBox.png');
        this.load.image('Egyptian', 'images/BoardsTerrainBuildings/EgyptBoard9x7.png');
        this.load.image('Norse', 'images/BoardsTerrainBuildings/NorseBoard9x7.png');
        this.load.image('Greek', 'images/BoardsTerrainBuildings/GreekBoard9x7.png');
        this.load.image('NorseInformation', 'images/BoardsTerrainBuildings/NorseBoardInformation.png');
        this.load.image('EgyptianInformation', 'images/BoardsTerrainBuildings/EgyptianBoardInformation.png');
        this.load.image('GreekInformation', 'images/BoardsTerrainBuildings/GreekBoardInformation.png');
        this.load.image('Black', 'images/OtherResources/blackscreen.png');
        this.load.image('Desert1Gold', 'images/BoardsTerrainBuildings/Desert1Gold.png');
        this.load.image('Desert2Favor', 'images/BoardsTerrainBuildings/Desert2Favor.png');
        this.load.image('Fertile1Favor', 'images/BoardsTerrainBuildings/Fertile1Favor.png');
        this.load.image('Fertile1Gold', 'images/BoardsTerrainBuildings/Fertile1Gold.png');
        this.load.image('Fertile1Wood', 'images/BoardsTerrainBuildings/Fertile1Wood.png');
        this.load.image('Fertile2Food', 'images/BoardsTerrainBuildings/Fertile2Food.png');
        this.load.image('Forest1Favor', 'images/BoardsTerrainBuildings/Forest1Favor.png');
        this.load.image('Forest1Food', 'images/BoardsTerrainBuildings/Forest1Food.png');
        this.load.image('Forest1Gold', 'images/BoardsTerrainBuildings/Forest1Gold.png');
        this.load.image('Forest2Wood', 'images/BoardsTerrainBuildings/Forest2Wood.png');
        this.load.image('Hills1Favor', 'images/BoardsTerrainBuildings/Hills1Favor.png');
        this.load.image('Hills1Food', 'images/BoardsTerrainBuildings/Hills1Food.png');
        this.load.image('Hills1Wood', 'images/BoardsTerrainBuildings/Hills1Wood.png');
        this.load.image('Hills2Gold', 'images/BoardsTerrainBuildings/Hills2Gold.png');
        this.load.image('Mountain1Favor', 'images/BoardsTerrainBuildings/Mountain1Favor.png');
        this.load.image('Mountain1Wood', 'images/BoardsTerrainBuildings/Mountain1Wood.png');
        this.load.image('Mountain2Gold', 'images/BoardsTerrainBuildings/Mountain2Gold.png');
        this.load.image('Swamp1Favor', 'images/BoardsTerrainBuildings/Swamp1Favor.png');
        this.load.image('Swamp1Food', 'images/BoardsTerrainBuildings/Swamp1Food.png');
        this.load.image('Swamp1Wood', 'images/BoardsTerrainBuildings/Swamp1Wood.png');
        this.load.image('PassButton', 'images/OtherResources/passbutton.png');
        this.load.image('Food', 'images/OtherResources/Food.png');
        this.load.image('Favor', 'images/OtherResources/Favor.png');
        this.load.image('Wood', 'images/OtherResources/Wood.png');
        this.load.image('Gold', 'images/OtherResources/Gold.png');
        this.load.image('Victory', 'images/OtherResources/Victory.png');


//----------------------------------------------------------------Buildings------------------------------------------------//

        
        this.load.image('Armory', 'images/Buildings/Armory.png');
        this.load.image('GoldMine', 'images/Buildings/GoldMine.png');
        this.load.image('Granary', 'images/Buildings/Granary.png');
        this.load.image('GreatTemple', 'images/Buildings/GreatTemple.png');
        this.load.image('House', 'images/Buildings/House.png');
        this.load.image('Market', 'images/Buildings/Market.png');
        this.load.image('Monument', 'images/Buildings/Monument.png');
        this.load.image('Quarry', 'images/Buildings/Quarry.png');
        this.load.image('SiegeWork', 'images/Buildings/SiegeWork.png');
        this.load.image('Storehouse', 'images/Buildings/Storehouse.png');
        this.load.image('Tower', 'images/Buildings/Tower.png');
        this.load.image('Wall', 'images/Buildings/Wall.png');
        this.load.image('Wonder', 'images/Buildings/Wonder.png');
        this.load.image('WoodWork', 'images/Buildings/WoodWork.png');
        this.load.image('StartingPlayer', 'images/Buildings/StartingPlayer.png')





//----------------------------------------------------------------------Norse Cards------------------------------------//


        this.load.image('NorseGatherPermanentAction', 'images/CardsNorse/NorseGatherPermanentAction.png');
        this.load.image('NorseExplorePermanentAction', 'images/CardsNorse/NorseExplorePermanentAction.png');
        this.load.image('NorseNextAgePermanentAction', 'images/CardsNorse/NorseNextAgePermanentAction.png');
        this.load.image('NorseBuildPermanentAction', 'images/CardsNorse/NorseBuildPermanentAction.png');
        this.load.image('NorseRecruitPermanentAction', 'images/CardsNorse/NorseRecruitPermanentAction.png');
        this.load.image('NorseTradePermanentAction', 'images/CardsNorse/NorseTradePermanentAction.png');
        this.load.image('NorseAttackPermanentAction', 'images/CardsNorse/NorseAttackPermanentAction.png');

        this.load.image('NorseRandomActionBack', 'images/CardsNorse/NorseRandomActionBack.png');

        this.load.image('NorseGatherRandomCard1', 'images/CardsNorse/RandomGather/NorseGatherRandomCard1.png');
        this.load.image('NorseGatherRandomCard2', 'images/CardsNorse/RandomGather/NorseGatherRandomCard2.png');
        this.load.image('NorseGatherRandomCard3', 'images/CardsNorse/RandomGather/NorseGatherRandomCard3.png');
        this.load.image('NorseGatherRandomCard4', 'images/CardsNorse/RandomGather/NorseGatherRandomCard4.png');
        this.load.image('NorseGatherRandomCard5', 'images/CardsNorse/RandomGather/NorseGatherRandomCard5.png');
        this.load.image('NorseGatherRandomCard6', 'images/CardsNorse/RandomGather/NorseGatherRandomCard6.png');
        this.load.image('NorseGatherRandomCard7', 'images/CardsNorse/RandomGather/NorseGatherRandomCard7.png');
        this.load.image('NorseGatherRandomCard8', 'images/CardsNorse/RandomGather/NorseGatherRandomCard8.png');
        

        this.load.image('NorseRecruitRandomCard1', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard1.png');
        this.load.image('NorseRecruitRandomCard2', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard2.png');
        this.load.image('NorseRecruitRandomCard3', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard3.png');
        this.load.image('NorseRecruitRandomCard4', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard4.png');
        this.load.image('NorseRecruitRandomCard5', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard5.png');
        this.load.image('NorseRecruitRandomCard6', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard6.png');
        this.load.image('NorseRecruitRandomCard7', 'images/CardsNorse/RandomRecruit/NorseRecruitRandomCard7.png');


        this.load.image('NorseExploreRandomCard1', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard1.png');
        this.load.image('NorseExploreRandomCard2', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard2.png');
        this.load.image('NorseExploreRandomCard3', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard3.png');
        this.load.image('NorseExploreRandomCard4', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard4.png');
        this.load.image('NorseExploreRandomCard5', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard5.png');
        this.load.image('NorseExploreRandomCard6', 'images/CardsNorse/RandomExplore/NorseExploreRandomCard6.png');


        this.load.image('NorseBuildRandomCard1', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard1.png');
        this.load.image('NorseBuildRandomCard2', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard2.png');
        this.load.image('NorseBuildRandomCard3', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard3.png');
        this.load.image('NorseBuildRandomCard4', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard4.png');
        this.load.image('NorseBuildRandomCard5', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard5.png');
        this.load.image('NorseBuildRandomCard6', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard6.png');
        this.load.image('NorseBuildRandomCard7', 'images/CardsNorse/RandomBuild/NorseBuildRandomCard7.png');


        this.load.image('NorseAttackRandomCard1', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard1.png');
        this.load.image('NorseAttackRandomCard2', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard2.png');
        this.load.image('NorseAttackRandomCard3', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard3.png');
        this.load.image('NorseAttackRandomCard4', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard4.png');
        this.load.image('NorseAttackRandomCard5', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard5.png');
        this.load.image('NorseAttackRandomCard6', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard6.png');
        this.load.image('NorseAttackRandomCard7', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard7.png');
        this.load.image('NorseAttackRandomCard8', 'images/CardsNorse/RandomAttack/NorseAttackRandomCard8.png');


        this.load.image('NorseTradeRandomCard1', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard1.png');
        this.load.image('NorseTradeRandomCard2', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard2.png');
        this.load.image('NorseTradeRandomCard3', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard3.png');
        this.load.image('NorseTradeRandomCard4', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard4.png');
        this.load.image('NorseTradeRandomCard5', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard5.png');
        this.load.image('NorseTradeRandomCard6', 'images/CardsNorse/RandomTrade/NorseTradeRandomCard6.png');


        this.load.image('NorseNextAgeRandomCard1', 'images/CardsNorse/RandomNextAge/NorseNextAgeRandomCard1.png');
        this.load.image('NorseNextAgeRandomCard2', 'images/CardsNorse/RandomNextAge/NorseNextAgeRandomCard2.png');
        this.load.image('NorseNextAgeRandomCard3', 'images/CardsNorse/RandomNextAge/NorseNextAgeRandomCard3.png');
        this.load.image('NorseNextAgeRandomCard4', 'images/CardsNorse/RandomNextAge/NorseNextAgeRandomCard4.png');


        this.load.image('NorseBattleCard1', 'images/CardsNorse/BattleCards/NorseBattleCard1.png');
        this.load.image('NorseBattleCard2', 'images/CardsNorse/BattleCards/NorseBattleCard2.png');
        this.load.image('NorseBattleCard3', 'images/CardsNorse/BattleCards/NorseBattleCard3.png');
        this.load.image('NorseBattleCard4', 'images/CardsNorse/BattleCards/NorseBattleCard4.png');
        this.load.image('NorseBattleCard5', 'images/CardsNorse/BattleCards/NorseBattleCard5.png');
        this.load.image('NorseBattleCard6', 'images/CardsNorse/BattleCards/NorseBattleCard6.png');
        this.load.image('NorseBattleCard7', 'images/CardsNorse/BattleCards/NorseBattleCard7.png');
        this.load.image('NorseBattleCard8', 'images/CardsNorse/BattleCards/NorseBattleCard8.png');
        this.load.image('NorseBattleCard9', 'images/CardsNorse/BattleCards/NorseBattleCard9.png');
        this.load.image('NorseBattleCard10', 'images/CardsNorse/BattleCards/NorseBattleCard10.png');
        this.load.image('NorseBattleCard11', 'images/CardsNorse/BattleCards/NorseBattleCard11.png');
        this.load.image('NorseBattleCard12', 'images/CardsNorse/BattleCards/NorseBattleCard12.png');
        //this.load.image('NorseBattleCard13', 'images/CardsNorse/BattleCards/NorseBattleCard13.png');






//------------------------------------------------------------Egyptian Cards-----------------------------------------------------------------//

        this.load.image('EgyptianGatherPermanentAction', 'images/CardsEgyptian/EgyptianGatherPermanentAction.png');
        this.load.image('EgyptianExplorePermanentAction', 'images/CardsEgyptian/EgyptianExplorePermanentAction.png');
        this.load.image('EgyptianNextAgePermanentAction', 'images/CardsEgyptian/EgyptianNextAgePermanentAction.png');
        this.load.image('EgyptianBuildPermanentAction', 'images/CardsEgyptian/EgyptianBuildPermanentAction.png');
        this.load.image('EgyptianRecruitPermanentAction', 'images/CardsEgyptian/EgyptianRecruitPermanentAction.png');
        this.load.image('EgyptianTradePermanentAction', 'images/CardsEgyptian/EgyptianTradePermanentAction.png');
        this.load.image('EgyptianAttackPermanentAction', 'images/CardsEgyptian/EgyptianAttackPermanentAction.png');

        this.load.image('EgyptianRandomActionBack', 'images/CardsEgyptian/EgyptianRandomActionBack.png');

        this.load.image('EgyptianGatherRandomCard1', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard1.png');
        this.load.image('EgyptianGatherRandomCard2', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard2.png');
        this.load.image('EgyptianGatherRandomCard3', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard3.png');
        this.load.image('EgyptianGatherRandomCard4', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard4.png');
        this.load.image('EgyptianGatherRandomCard5', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard5.png');
        this.load.image('EgyptianGatherRandomCard6', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard6.png');
        this.load.image('EgyptianGatherRandomCard7', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard7.png');
        this.load.image('EgyptianGatherRandomCard8', 'images/CardsEgyptian/RandomGather/EgyptianGatherRandomCard8.png');
        

        this.load.image('EgyptianRecruitRandomCard1', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard1.png');
        this.load.image('EgyptianRecruitRandomCard2', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard2.png');
        this.load.image('EgyptianRecruitRandomCard3', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard3.png');
        this.load.image('EgyptianRecruitRandomCard4', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard4.png');
        this.load.image('EgyptianRecruitRandomCard5', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard5.png');
        this.load.image('EgyptianRecruitRandomCard6', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard6.png');
        this.load.image('EgyptianRecruitRandomCard7', 'images/CardsEgyptian/RandomRecruit/EgyptianRecruitRandomCard7.png');


        this.load.image('EgyptianExploreRandomCard1', 'images/CardsEgyptian/RandomExplore/EgyptianExploreRandomCard1.png');
        this.load.image('EgyptianExploreRandomCard2', 'images/CardsEgyptian/RandomExplore/EgyptianExploreRandomCard2.png');
        this.load.image('EgyptianExploreRandomCard3', 'images/CardsEgyptian/RandomExplore/EgyptianExploreRandomCard3.png');
        this.load.image('EgyptianExploreRandomCard4', 'images/CardsEgyptian/RandomExplore/EgyptianExploreRandomCard4.png');
        this.load.image('EgyptianExploreRandomCard5', 'images/CardsEgyptian/RandomExplore/EgyptianExploreRandomCard5.png');
        

        this.load.image('EgyptianBuildRandomCard1', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard1.png');
        this.load.image('EgyptianBuildRandomCard2', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard2.png');
        this.load.image('EgyptianBuildRandomCard3', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard3.png');
        this.load.image('EgyptianBuildRandomCard4', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard4.png');
        this.load.image('EgyptianBuildRandomCard5', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard5.png');
        this.load.image('EgyptianBuildRandomCard6', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard6.png');
        this.load.image('EgyptianBuildRandomCard7', 'images/CardsEgyptian/RandomBuild/EgyptianBuildRandomCard7.png');


        this.load.image('EgyptianAttackRandomCard1', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard1.png');
        this.load.image('EgyptianAttackRandomCard2', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard2.png');
        this.load.image('EgyptianAttackRandomCard3', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard3.png');
        this.load.image('EgyptianAttackRandomCard4', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard4.png');
        this.load.image('EgyptianAttackRandomCard5', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard5.png');
        this.load.image('EgyptianAttackRandomCard6', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard6.png');
        this.load.image('EgyptianAttackRandomCard7', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard7.png');
        this.load.image('EgyptianAttackRandomCard8', 'images/CardsEgyptian/RandomAttack/EgyptianAttackRandomCard8.png');


        this.load.image('EgyptianTradeRandomCard1', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard1.png');
        this.load.image('EgyptianTradeRandomCard2', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard2.png');
        this.load.image('EgyptianTradeRandomCard3', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard3.png');
        this.load.image('EgyptianTradeRandomCard4', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard4.png');
        this.load.image('EgyptianTradeRandomCard5', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard5.png');
        this.load.image('EgyptianTradeRandomCard6', 'images/CardsEgyptian/RandomTrade/EgyptianTradeRandomCard6.png');


        this.load.image('EgyptianNextAgeRandomCard1', 'images/CardsEgyptian/RandomNextAge/EgyptianNextAgeRandomCard1.png');
        this.load.image('EgyptianNextAgeRandomCard2', 'images/CardsEgyptian/RandomNextAge/EgyptianNextAgeRandomCard2.png');
        this.load.image('EgyptianNextAgeRandomCard3', 'images/CardsEgyptian/RandomNextAge/EgyptianNextAgeRandomCard3.png');
        this.load.image('EgyptianNextAgeRandomCard4', 'images/CardsEgyptian/RandomNextAge/EgyptianNextAgeRandomCard4.png');


        this.load.image('EgyptianBattleCard1', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard1.png');
        this.load.image('EgyptianBattleCard2', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard2.png');
        this.load.image('EgyptianBattleCard3', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard3.png');
        this.load.image('EgyptianBattleCard4', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard4.png');
        this.load.image('EgyptianBattleCard5', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard5.png');
        this.load.image('EgyptianBattleCard6', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard6.png');
        this.load.image('EgyptianBattleCard7', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard7.png');
        this.load.image('EgyptianBattleCard8', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard8.png');
        this.load.image('EgyptianBattleCard9', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard9.png');
        this.load.image('EgyptianBattleCard10', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard10.png');
        this.load.image('EgyptianBattleCard11', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard11.png');
        this.load.image('EgyptianBattleCard12', 'images/CardsEgyptian/BattleCards/EgyptianBattleCard12.png');


//-----------------------------------------------------------------Greek Cards---------------------------------------------------------//


        this.load.image('GreekGatherPermanentAction', 'images/CardsGreek/GreekGatherPermanentAction.png');
        this.load.image('GreekExplorePermanentAction', 'images/CardsGreek/GreekExplorePermanentAction.png');
        this.load.image('GreekNextAgePermanentAction', 'images/CardsGreek/GreekNextAgePermanentAction.png');
        this.load.image('GreekBuildPermanentAction', 'images/CardsGreek/GreekBuildPermanentAction.png');
        this.load.image('GreekRecruitPermanentAction', 'images/CardsGreek/GreekRecruitPermanentAction.png');
        this.load.image('GreekTradePermanentAction', 'images/CardsGreek/GreekTradePermanentAction.png');
        this.load.image('GreekAttackPermanentAction', 'images/CardsGreek/GreekAttackPermanentAction.png');

        this.load.image('GreekRandomActionBack', 'images/CardsGreek/GreekRandomActionBack.png');

        this.load.image('GreekGatherRandomCard1', 'images/CardsGreek/RandomGather/GreekGatherRandomCard1.png');
        this.load.image('GreekGatherRandomCard2', 'images/CardsGreek/RandomGather/GreekGatherRandomCard2.png');
        this.load.image('GreekGatherRandomCard3', 'images/CardsGreek/RandomGather/GreekGatherRandomCard3.png');
        this.load.image('GreekGatherRandomCard4', 'images/CardsGreek/RandomGather/GreekGatherRandomCard4.png');
        this.load.image('GreekGatherRandomCard5', 'images/CardsGreek/RandomGather/GreekGatherRandomCard5.png');
        this.load.image('GreekGatherRandomCard6', 'images/CardsGreek/RandomGather/GreekGatherRandomCard6.png');
        this.load.image('GreekGatherRandomCard7', 'images/CardsGreek/RandomGather/GreekGatherRandomCard7.png');
        this.load.image('GreekGatherRandomCard8', 'images/CardsGreek/RandomGather/GreekGatherRandomCard8.png');
        

        this.load.image('GreekRecruitRandomCard1', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard1.png');
        this.load.image('GreekRecruitRandomCard2', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard2.png');
        this.load.image('GreekRecruitRandomCard3', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard3.png');
        this.load.image('GreekRecruitRandomCard4', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard4.png');
        this.load.image('GreekRecruitRandomCard5', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard5.png');
        this.load.image('GreekRecruitRandomCard6', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard6.png');
        this.load.image('GreekRecruitRandomCard7', 'images/CardsGreek/RandomRecruit/GreekRecruitRandomCard7.png');


        this.load.image('GreekExploreRandomCard1', 'images/CardsGreek/RandomExplore/GreekExploreRandomCard1.png');
        this.load.image('GreekExploreRandomCard2', 'images/CardsGreek/RandomExplore/GreekExploreRandomCard2.png');
        this.load.image('GreekExploreRandomCard3', 'images/CardsGreek/RandomExplore/GreekExploreRandomCard3.png');
        this.load.image('GreekExploreRandomCard4', 'images/CardsGreek/RandomExplore/GreekExploreRandomCard4.png');
        this.load.image('GreekExploreRandomCard5', 'images/CardsGreek/RandomExplore/GreekExploreRandomCard5.png');
        

        this.load.image('GreekBuildRandomCard1', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard1.png');
        this.load.image('GreekBuildRandomCard2', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard2.png');
        this.load.image('GreekBuildRandomCard3', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard3.png');
        this.load.image('GreekBuildRandomCard4', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard4.png');
        this.load.image('GreekBuildRandomCard5', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard5.png');
        this.load.image('GreekBuildRandomCard6', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard6.png');
        this.load.image('GreekBuildRandomCard7', 'images/CardsGreek/RandomBuild/GreekBuildRandomCard7.png');


        this.load.image('GreekAttackRandomCard1', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard1.png');
        this.load.image('GreekAttackRandomCard2', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard2.png');
        this.load.image('GreekAttackRandomCard3', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard3.png');
        this.load.image('GreekAttackRandomCard4', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard4.png');
        this.load.image('GreekAttackRandomCard5', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard5.png');
        this.load.image('GreekAttackRandomCard6', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard6.png');
        this.load.image('GreekAttackRandomCard7', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard7.png');
        this.load.image('GreekAttackRandomCard8', 'images/CardsGreek/RandomAttack/GreekAttackRandomCard8.png');


        this.load.image('GreekTradeRandomCard1', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard1.png');
        this.load.image('GreekTradeRandomCard2', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard2.png');
        this.load.image('GreekTradeRandomCard3', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard3.png');
        this.load.image('GreekTradeRandomCard4', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard4.png');
        this.load.image('GreekTradeRandomCard5', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard5.png');
        this.load.image('GreekTradeRandomCard6', 'images/CardsGreek/RandomTrade/GreekTradeRandomCard6.png');


        this.load.image('GreekNextAgeRandomCard1', 'images/CardsGreek/RandomNextAge/GreekNextAgeRandomCard1.png');
        this.load.image('GreekNextAgeRandomCard2', 'images/CardsGreek/RandomNextAge/GreekNextAgeRandomCard2.png');
        this.load.image('GreekNextAgeRandomCard3', 'images/CardsGreek/RandomNextAge/GreekNextAgeRandomCard3.png');
        this.load.image('GreekNextAgeRandomCard4', 'images/CardsGreek/RandomNextAge/GreekNextAgeRandomCard4.png');


        this.load.image('GreekBattleCard1', 'images/CardsGreek/BattleCards/GreekBattleCard1.png');
        this.load.image('GreekBattleCard2', 'images/CardsGreek/BattleCards/GreekBattleCard2.png');
        this.load.image('GreekBattleCard3', 'images/CardsGreek/BattleCards/GreekBattleCard3.png');
        this.load.image('GreekBattleCard4', 'images/CardsGreek/BattleCards/GreekBattleCard4.png');
        this.load.image('GreekBattleCard5', 'images/CardsGreek/BattleCards/GreekBattleCard5.png');
        this.load.image('GreekBattleCard6', 'images/CardsGreek/BattleCards/GreekBattleCard6.png');
        this.load.image('GreekBattleCard7', 'images/CardsGreek/BattleCards/GreekBattleCard7.png');
        this.load.image('GreekBattleCard8', 'images/CardsGreek/BattleCards/GreekBattleCard8.png');
        this.load.image('GreekBattleCard9', 'images/CardsGreek/BattleCards/GreekBattleCard9.png');
        this.load.image('GreekBattleCard10', 'images/CardsGreek/BattleCards/GreekBattleCard10.png');
        this.load.image('GreekBattleCard11', 'images/CardsGreek/BattleCards/GreekBattleCard11.png');
        this.load.image('GreekBattleCard12', 'images/CardsGreek/BattleCards/GreekBattleCard12.png');



//------------------------------------------------------------------Victory Cards--------------------------------------------------------//

    this.load.image('VictoryLargestArmy','images/VictoryCards/VictoryLargestArmy.png');
    this.load.image('VictoryLastBattle', 'images/VictoryCards/VictoryLastBattle.png');
    this.load.image('VictoryMostBuilding', 'images/VictoryCards/VictoryMostBuilding.png');
    this.load.image('VictoryWonder', 'images/VictoryCards/VictoryWonder.png');



        //----------------------------------------------------------Temporary Resources---------------------------------------------------//
        /*this.load.image('TestImage', 'images/testimage.png');
        this.load.image('temp', 'images/collage.jpg');
        this.load.image('temp1', 'images/collage copy.jpg');
        this.load.image('temp2', 'images/collage copy 5.jpg');
        this.load.image('temp3', 'images/collage copy 4.jpg');
        this.load.image('temp4', 'images/collage copy 3.jpg');
        this.load.image('temp5', 'images/collage copy 2.jpg');*/
        //this.load.image('temp6', 'images/temp.jpg');
        


        
        
    },

	create: function() 
    {
        
        
		/*this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false; // pause game on tab change
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		/*this.scale.minWidth = 1280;
		this.scale.minHeight = 800;*/
		/*this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = false;  // force portrait mode
		this.scale.setScreenSize(true);  // true will force screen resize no matter what
        this.input.addPointer();
		*/
	    console.log('calling the next state loadBoard');
	    this.add.tween(this.SplashScreenImage).to({alpha: 0.3}, 1400, Phaser.Easing.Linear.None, false).start().onComplete.add(function(){
	    this.add.tween(this.SplashScreenImage).to({alpha: 1}, 500, Phaser.Easing.Linear.None, false).start()
        .onComplete.add(function(){
        	this.state.start('LoadBoard');
        }, this);}, this); // launches preloader from Boot.js         
    }
	
};
