const game = document.getElementById("game");

// create random coins (20–25)
const numberOfCoins = Math.floor(Math.random() * 6) + 20;

for (let i = 0; i < numberOfCoins; i++) {

    const randomX = Math.random() * game.clientWidth;
    const randomY = Math.random() * game.clientHeight;

    game.innerHTML += 
        `<img src="coin.png" 
              class="coin" 
              style="position:absolute; left:${randomX}px; top:${randomY}px; width:30px; height:30px;">`;
}

const player = document.getElementById("player");

let x = 50;
let y = 50;
let speed = 20;

let player_size = 50;  // player size
let coin_size = 30;    // coin size

document.addEventListener("keydown", function(e) {

    if (e.key == "ArrowUp") y -= speed;
    if (e.key == "ArrowDown") y += speed;
    if (e.key == "ArrowLeft") x -= speed;
    if (e.key == "ArrowRight") x += speed;

    
    player.style.left = x + "px";
    player.style.top = y + "px";

    
    const coins = document.querySelectorAll(".coin");

    coins.forEach((coin) => {

        const coinX = parseFloat(coin.style.left);
        const coinY = parseFloat(coin.style.top);

        if (isColliding(x, y, player_size, coinX, coinY, coin_size)) {

            console.log("Coin collected!");
            coin.remove();
        }
    });
});


function isColliding(px, py, pSize, cx, cy, cSize) {

    return !(
        px + pSize < cx ||   // player left
        px > cx + cSize ||   // player right
        py + pSize < cy ||   // player above
        py > cy + cSize      // player below
    );
}