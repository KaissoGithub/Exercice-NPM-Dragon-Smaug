const game = DragonSmaug.mount('#game', {
    cols: 16,
    rows: 8,
    speedMs: 140,
    onGameOver(score) { console.log("Score final:", score); }
});
game.start();