Crafty.c("Block", {
    _x: 0,
    _y: 0,
    _tileSize: 50,
    _tiles: [[]],
    __move: {
        left: false, 
        right: false, 
        up: false, 
        down: false
    },    
    Block: function(x,y) {
        var move = this.__move;
        var tileSize = this._tileSize;
        for(var xCount = 0; xCount < 3; xCount++){
            this._tiles[xCount] = [];
            for(var yCount = 0; yCount < 3; yCount++){
                this._tiles[xCount][yCount] = Crafty.e("2D, Canvas, block0")
                .attr({
                    x: x+xCount*this._tileSize, 
                    y: y+yCount*this._tileSize, 
                    z: 1
                })
            }
        }
        var tiles = this._tiles;

        this.bind('EnterFrame', function() {
            var xMove = 0;
            var yMove = 0;
            
            if (move.right){xMove += tileSize} 
            if (move.left){xMove -= tileSize} 
            if (move.up){yMove -= tileSize} 
            if (move.down){yMove += tileSize} 
            
            for(var x = 0; x < tiles.length; x++){
                for(var y = 0; y < tiles.length; y++){
                    tiles[x][y].attr({
                        x: tiles[x][y]._x + xMove, 
                        y: tiles[x][y]._y + yMove
                        }); 
                }
            }
        }).bind('KeyDown', function(e) {
            // Default movement booleans to false
            move.right = move.left = move.down = move.up = false;

            // If keys are down, set the direction
            if (e.keyCode === Crafty.keys.RIGHT_ARROW) move.right = true;
            if (e.keyCode === Crafty.keys.LEFT_ARROW) move.left = true;
            if (e.keyCode === Crafty.keys.UP_ARROW) move.up = true;
            if (e.keyCode === Crafty.keys.DOWN_ARROW) move.down = true;

        }).bind('KeyUp', function(e) {
            // If key is released, stop moving
            if (e.keyCode === Crafty.keys.RIGHT_ARROW) move.right = false;
            if (e.keyCode === Crafty.keys.LEFT_ARROW) move.left = false;
            if (e.keyCode === Crafty.keys.UP_ARROW) move.up = false;
            if (e.keyCode === Crafty.keys.DOWN_ARROW) move.down = false;

        }).bind('BlockMoveRight', function(e) {
            // If key is released, stop moving
            if (e.keyCode === Crafty.keys.RIGHT_ARROW) move.right = false;
            if (e.keyCode === Crafty.keys.LEFT_ARROW) move.left = false;
            if (e.keyCode === Crafty.keys.UP_ARROW) move.up = false;
            if (e.keyCode === Crafty.keys.DOWN_ARROW) move.down = false;

        });

        return this;
    }
});

/**
 * Block
 *
 * @param {Array} shape The shape of the block in tiles
 * 
 * Example:
 * [ 
 *   [0,1,0],
 *   [0,1,0],
 *   [1,1,0],    
 * ]
 * @param {Number} tileX
 * @param {Number} tileY
 * @returns
 */
var Block = function(shape, tileX, tileY){
    var that = this;
    /** The x position of the block on the map in tiles
     * @type Number
     */
    this.tileX = tileX;
    /** The y position of the block on the map in tiles
     * @type Number
     */
    this.tileY = tileY;
    /** 
     * The shape of the block in tiles
     * 
     * Example:
     * [ 
     *   [0,1,0],
     *   [0,1,0],
     *   [1,1,0],    
     * ]
     * @type Array
     */
    this.shape = shape;
    this.shapeSurface;
    this.tetraederSurface;
    this.isUpdated = true;
    
    this.update = function(){
        
    }
    
    /**
     * Block rendering
     *
     * @return {void} 
     */
    this.draw = function(display){
        if(this.isUpdated){
            this.tetraederSurface = new gamejs.Surface([screen.canvas.width, screen.canvas.height]);
            for(var y = 0; y < that.shape.length; y++){
                for(var x = 0; x < that.shape[0].length; x++){
                    if(that.shape[y][x]){
                        var rect = new gamejs.Rect(
                            screen.tilesX * x + screen.tilesX * that.tileX, 
                            screen.tilesY * y + screen.tilesY * that.tileY, 
                            screen.tilesX, 
                            screen.tilesY
                            );
                        this.tetraederSurface.blit(this.shapeSurface, rect);
                    }
                }
            }
        }
        display.blit(this.tetraederSurface);
        this.isUpdated = false;
    }
    
    /**
     * Turns the shape in given direction
     *
     * @param {String} direction 'right'|'left'
     * @return {void}
     */
    this.turn = function(direction){
        this.isUpdated = true;
        var oldShape = this.shape;
        var newShape = [];
        switch (oldShape.length) {
            case 2:
                newShape = [[],[]];
                break;
            case 3:
                newShape = [[],[],[]];
                break;
            case 4:
                newShape = [[],[],[],[]];
                break;
            default:
                break;
        }

        var newTilePosX;
        var newTilePosY;
    
        for(var y = 0; y < oldShape.length; y++){
            for(var x = 0; x < oldShape[0].length; x++){
                if(direction === 'right'){
                    newTilePosX = oldShape.length - 1 - y;
                    newTilePosY = x;
                    newShape[newTilePosY][newTilePosX] = oldShape[y][x];
                }
                if(direction === 'left'){
                    newTilePosX = y;
                    newTilePosY = oldShape[0].length - 1 - x;
                    newShape[newTilePosY][newTilePosX] = oldShape[y][x];
                }
            }
        }
        this.shape = newShape;
    }
    
    /**
     * Collision detection between block and the map if the block is moving in x,y axis
     *
     * @param {Map} map
     * @param {integer} dTilesX check collision if block is moved dTilesX in x-Axis
     * @param {integer} dTilesY check collision if block is moved dTilesX in y-Axis
     * @returns boolean
     */
    this.collide = function(map, dTilesX, dTilesY){
        for(var y = 0; y < that.shape.length; y++){
            for(var x = 0; x < that.shape[0].length; x++){
                if(that.shape[y][x]){
                    var newTilePosX = that.tileX + x + dTilesX;
                    var newTilePosY = that.tileY + y + dTilesY;
                    //collision border
                    if( newTilePosX >= map.shape[0].length || //collision right border
                        newTilePosX  < 0 || //collision left border
                        newTilePosY >= map.shape.length ){ //collision bottom border
                        return true;
                    }
                    //collision check horizontal with map
                    if(map.shape[newTilePosY][newTilePosX]){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
