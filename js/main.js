window.onload = function() {
    //start crafty
    Crafty.init(800, 600);
    Crafty.canvas.init();
	
    //turn the sprite map into usable components
    Crafty.sprite(50, "img/blocks.png", {
        block0: [0,0],
        block1: [1,0],
        block2: [2,0],
        block3: [3,0],
        block4: [4,0],
        block5: [0,1],
        block6: [1,1]
    });
    
    //the loading screen that will display while our assets load
    Crafty.scene("start", function() {
        //load takes an array of assets and a callback when complete
        Crafty.load(["img/blocks.png", "img/icon.png", "lib/gamejs/ajax-loader.gif"], function() {
            $.ajax({
                url: "js/Tetris/BlockElements.js", 
                async: false
            });
            $.ajax({
                url: "js/Tetris/BlockFactory.js", 
                async: false
            });
            $.ajax({
                url: "js/Tetris/Block.js", 
                async: false
            });
            $.ajax({
                url: "js/Tetris/Player.js", 
                async: false
            });
            $.ajax({
                url: "js/Tetris/Map.js", 
                async: false
            });
            $.ajax({
                url: "js/Tetris/Tetris.js", 
                async: false
            });
            Crafty.e("2D, Canvas, Keyboard")
            .bind("EnterFrame", function(e) {
                Crafty.scene("game");
                if(this.isDown("LEFT_ARROW") 
                    || this.isDown("RIGHT_ARROW")
                    || this.isDown("UP_ARROW")
                    || this.isDown("DOWN_ARROW")
                    ) {
                }
            })
        })
        Crafty.background("#000");
        //black background with some loading text
        Crafty.e("2D, DOM, Text").attr({
            w: 300, 
            h: 20, 
            x: 150, 
            y: 120
        })
        .text("Tetris<br>created by @ralphmeier")
        .css({
            "color": "white",
            "text-align": "center"
        });
    });
	
    //automatically play the loading scene
    Crafty.scene("start");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    Crafty.scene("game", function() {
        //        Tetris.game = new Tetris();
        //create our player entity with some premade components
        player = Crafty.e("2D, Canvas, Keyboard, Block")
        .attr({
            x: 50, 
            y: 50, 
            z: 1
        }).Block(0,0)
    });
};
