class Board {
	grid;
	// Reset board when we start a new game. 
	reset() {
		this.grid = this.getEmptyBoard();
	}

	// Get Matrix filled with zeros

	getEmptyBoard() {
		return Array.from(
			{length:ROWS}, () => Array(COLS).fill(0)
		);
	}

	
}