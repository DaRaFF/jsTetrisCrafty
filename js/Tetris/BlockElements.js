Crafty.extend({
    tetris: {
        blockElements: [
            {
                name: 'J',
                shape: [ 
                    [0,1,0],
                    [0,1,0],
                    [1,1,0],    
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block0",
                imageX: 0,
                imageY: 0
            },
            {
                name: 'L',
                shape: [ 
                    [0,1,0],
                    [0,1,0],
                    [0,1,1],   
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block1",
                imageX: 50,
                imageY: 0
            },
            {
                name: 'T',
                shape: [ 
                    [0,0,0],
                    [1,1,1],
                    [0,1,0],   
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block2",
                imageX: 100,
                imageY: 0
            },
            {
                name: 'S',
                shape: [ 
                    [0,1,0],
                    [0,1,1],
                    [0,0,1],     
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block3",
                imageX: 150,
                imageY: 0
            },
            {
                name: 'O',
                shape: [ 
                    [1,1],
                    [1,1],  
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block4",
                imageX: 200,
                imageY: 0
            },
            {
                name: 'Z',
                shape: [ 
                    [0,0,1],
                    [0,1,1],
                    [0,1,0],    
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block5",
                imageX: 0,
                imageY: 50
            },
            {
                name: 'I',
                shape: [ 
                    [0,1,0,0],
                    [0,1,0,0],
                    [0,1,0,0],    
                    [0,1,0,0],    
                ],
                //            imageSrc: gamejs.image.load('img/blocks.png'),
                entity: "block6",
                imageX: 50,
                imageY: 50
            }
        ]
    }
});


