var gamejs = require('gamejs');

/**
 * Player
 * 
 * @param {Tetris} game The game
 * @param {Map} map
 *
 * @returns
 */
var Player = function(game, map){
    this.game = game;
    this.map = map;
    this.currentBlock;
    this.nextBlock;
    this.level = 0;
    this.lines = 0;
    this.score = 0;
    this.input = null;
    this.isGameOver = false;
    
    this.init = function(){
        this.currentBlock = this.game.createBlock();
        this.nextBlock = this.game.createBlock();
    }
    
    this.update = function(){
        switch(this.input){
            case "RIGHT":
                if(!this.currentBlock.collide(this.map, 1, 0)){
                    this.currentBlock.tileX++;
                    this.currentBlock.isUpdated = true;
                }
                break;
            case "LEFT":
                if(!this.currentBlock.collide(this.map, -1, 0)){
                    this.currentBlock.tileX--;
                    this.currentBlock.isUpdated = true;
                }
                break;
            case "DOWN":
                if(this.currentBlock.collide(this.map, 0, 1)){
                    this.map.fixStone(this.currentBlock, this.map);
                    this.map.reduceLines();
                    this.currentBlock = this.nextBlock;
                    this.nextBlock = this.game.createBlock();
                }
                this.currentBlock.tileY++;
                this.currentBlock.isUpdated = true;
                break;
            case "TURN":
                this.currentBlock.turn('right');
                if(this.currentBlock.collide(this.map, 0, 0)){
                    this.currentBlock.turn('left');
                }
                break;
            default:
                break;
        }
        this.input = null;
    }
    
    this.draw = function(display){
        this.currentBlock.draw(display); 
    }
}

exports.Player = Player;


