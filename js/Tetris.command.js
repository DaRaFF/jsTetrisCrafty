/**
 * Input commands for game controlling
 */
Tetris.command = {
    TURN: null,
    DOWN: null,
    LEFT: null,
    RIGHT: null
}

Tetris.command.init = function(){
    this.TURN = 38; // 38 = keyCode for ARROW_UP
    this.DOWN = 40 // 40 = keyCode for ARROW_DOWN
    this.LEFT = 37 // 37 = keyCode for ARROW_LEFT
    this.RIGHT = 39 // 39 = keyCode for ARROW_RIGHT
}

Tetris.command.init();

