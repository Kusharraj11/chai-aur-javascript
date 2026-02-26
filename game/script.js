const game = document.getElementById("game");

const numberOfCoins = Math.floor(Math.random() * 6) + 20;

for (let i = 0; i < numberOfCoins; i++) {

    const randomX = Math.random() * 1200;
    const randomY = Math.random() * 600;

    game.innerHTML += 
        `<img src="coin.png" 
              class="coin" 
              style="left:${randomX}px; top:${randomY}px;">`;
}