Crafty.c("BlockElements", {
    _name: "Block",
    _tileSize: 50,
    _tiles: [[]],
    __move: {
        left: false, 
        right: false, 
        up: false, 
        down: false
    },  
    _blockElements: [
    {
        name: 'J',
        shape: [ 
        [0,1,0],
        [0,1,0],
        [1,1,0],    
        ],
        entity: "block0"
    },
    {
        name: 'L',
        shape: [ 
        [0,1,0],
        [0,1,0],
        [0,1,1],   
        ],
        entity: "block1"
    },
    {
        name: 'T',
        shape: [ 
        [0,0,0],
        [1,1,1],
        [0,1,0],   
        ],
        entity: "block2"
    },
    {
        name: 'S',
        shape: [ 
        [0,1,0],
        [0,1,1],
        [0,0,1],     
        ],
        entity: "block3"
    },
    {
        name: 'O',
        shape: [ 
        [1,1],
        [1,1],  
        ],
        entity: "block4"
    },
    {
        name: 'Z',
        shape: [ 
        [0,0,1],
        [0,1,1],
        [0,1,0],    
        ],
        entity: "block5"
    },
    {
        name: 'I',
        shape: [ 
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],    
        [0,1,0,0],    
        ],
        entity: "block6"
    }
    ],
    init: function(){
        return this;
    },
    /**
    * Factory for Block creation
    * blockElements are default defined in BlockElements
    * 
    * @param {Number} tileX The x start position of Block in Map
    * @param {Number} tileX The y start position of Block in Map
    * @return {Block} Block
    */
    getRandomBlockElement: function(tileX, tileY){
        var blockElement = this._blockElements[Math.floor(Math.random() * this._blockElements.length)];
        return blockElement;
    }
});


