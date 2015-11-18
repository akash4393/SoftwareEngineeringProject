var aom = {
    
};        // creates an object/class of type Bunny Defender

aom.Boot = function(game) {

};

aom.Boot.prototype = {                 // to make methods preload(),create() etc available to all objects of bunnyDefender
	
	preload: function() 
    {                                          
        
    	this.load.image('SplashScreen', 'images/OtherResources/splashscreen.jpg');
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
		
    	this.state.start('Boot');
    }
};
