const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate size of canvas from constants

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale Blocks

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

function play() {
	board.getEmptyBoard();
	let piece = new Piece(ctx);
	piece.draw();

	board.piece = piece;
}


moves = {
	[KEY.LEFT]: 	p => ({...p, x: p.x - 1}),
	[KEY.RIGHT]: 	p => ({...p, x: p.x + 1}),
	[KEY.UP]: 		p => ({...p, y: p.y + 1})
};

document.addEventListener('keydown', event=> {
	if(moves[event.keyCode]) {
		// stop the event from bubbling 
		event.preventDefault();

		// Get new state of piece 
		let p = moves[event.keyCode](board.piece);

		if (board.valid(p)) {
			// if the move is valid move the piece 
			board.piece.move(p);

			// Cleaer old position before drawing
			ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

			board.piece.draw();
		}
	}
});