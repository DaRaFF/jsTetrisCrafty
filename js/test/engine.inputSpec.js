var screen = require('Tetris/screen').screen;
var Tetris = require('Tetris/Tetris').Tetris;

describe('Input', function () {
    var e = {
        touches: [{
            pageX: 0,
            pageY: 0
        }]
    };
    
    beforeEach(function(){
        spyOn(screen, 'getInnerHeight').andReturn(900);
        spyOn(screen, 'getInnerWidth').andReturn(900);
        Tetris.game = new Tetris();
    });
    
    describe('Touch', function () {
        it('should call move down', function () {
            e.touches[0].pageX = 0;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            
            expect(Tetris.command.DOWN).toEqual(Tetris.game.player.input);
            Tetris.game.player.input = null;
            
            e.touches[0].pageX = 450;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.DOWN).toEqual(Tetris.game.player.input);
            Tetris.game.player.input = null;
            
            e.touches[0].pageX = 900;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.DOWN).toEqual(Tetris.game.player.input);
        });
        
        it('should call move left', function () {
            e.touches[0].pageX = 0;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.LEFT).toEqual(Tetris.game.player.input);
            Tetris.game.player.input = null;
            
            e.touches[0].pageX = 299;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.LEFT).toEqual(Tetris.game.player.input);
        });
        
        it('should call move right', function () {
            e.touches[0].pageX = 601;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.RIGHT).toEqual(Tetris.game.player.input);
            Tetris.game.player.input = null;
            
            e.touches[0].pageX = 900;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.RIGHT).toEqual(Tetris.game.player.input);
        });
        
        it('should call move turn', function () {
            e.touches[0].pageX = 301;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.TURN).toEqual(Tetris.game.player.input);
            Tetris.game.player.input = null;
            
            e.touches[0].pageX = 600;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(Tetris.command.TURN).toEqual(Tetris.game.player.input);
        });
    });
});


