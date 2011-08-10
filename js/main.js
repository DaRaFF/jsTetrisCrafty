//var gamejs = require('gamejs');
//
//function main() {
//    var Director = require('Tetris/Scene/Director').Director;
//    var StartScene = require('Tetris/Scene/StartScene').StartScene;
//    var director = new Director();
//    var startScene = new StartScene(director);
//    director.start(startScene);
//};
//
//gamejs.preload([
//    'img/icon.png',
//    'img/blocks.png'
//    ]);
//gamejs.ready(main);

window.onload = function() {
    //var cnv = document.getElementById('canvas');
    
    //start crafty
    Crafty.init(400, 320);
    Crafty.canvas.init();
	
    //turn the sprite map into usable components
    Crafty.sprite(16, "img/blocks.png", {
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
            //Crafty.scene("main"); //when everything is loaded, run the main scene
        });
		
        //black background with some loading text
        Crafty.background("#000");
        Crafty.e("2D, DOM, Text").attr({
            w: 300, 
            h: 20, 
            x: 150, 
            y: 120
        })
        .text("Tetris<br>created by @ralphmeier")
        .css({
            "color": "white",
            "text-align": "center",
        });
    });
	
    //automatically play the loading scene
    Crafty.scene("start");
};
