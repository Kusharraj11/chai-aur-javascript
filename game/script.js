const game = document.getElementById("game");

let respawnCount = 2; // 1 coin destroy hone pe kitne coins wapas ayenge


const numberOfCoins = Math.floor(Math.random() * 6) + 20; // 20 se 25 random coins
for (let i = 0; i < numberOfCoins; i++) {
    const randomX = Math.random() * game.clientWidth;  // random X position
    const randomY = Math.random() * game.clientHeight; // random Y position
    game.innerHTML += 
        `<img src="coin.png" 
              class="coin" 
              style="position:absolute; left:${randomX}px; top:${randomY}px; width:30px; height:30px;">`;
              // har coin ko random jagah pe 
}

const player = document.getElementById("player"); // player pakad liya
let x = 50;           // player ki starting X position
let y = 50;           // player ki starting Y position
let speed = 20;       // har key press pe kitna move kare
let player_size = 50; // player ka size 
let coin_size = 30;   // coin ka size 


document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowUp")    y -= speed; 
    if (e.key == "ArrowDown")  y += speed; 
    if (e.key == "ArrowLeft")  x -= speed; 
    if (e.key == "ArrowRight") x += speed; 
    
    // player ki nayi position screen pe 
    player.style.left = x + "px";
    player.style.top  = y + "px";
    

    const coins = document.querySelectorAll(".coin"); // saare coins slecet
    coins.forEach((coin) => {
        const coinX = parseFloat(coin.style.left); // is coin ki X position
        const coinY = parseFloat(coin.style.top);  // is coin ki Y position

        // kya player is coin ko touch kar raha hai??????????
        if (isColliding(x, y, player_size, coinX, coinY, coin_size)) {
            console.log("Coin collected!");
            coin.remove(); // coin remove screen se
let coinQueue = []; 
           
            coinQueue.push("coin"); // queue mein daal do - waiting line mein add 
            setTimeout(() => {
                coinQueue.shift(); // queue se first coin remove
            

                // respawn Count baar naya coin new
                for (let i = 0; i < respawnCount; i++) {
                    const img = document.createElement("img"); // naya coin element banao
                    img.src = "coin.png";       
                    img.className = "coin";     // class dalo taaki future mein pakad sake
                    img.style.cssText = `position:absolute; 
                                        left:${Math.random() * game.clientWidth}px; 
                                        top:${Math.random() * game.clientHeight}px; 
                                        width:30px; height:30px;`;
                                        // random jagah pe naya coin 
                    game.appendChild(img); // game box mein daal do
                }
            }, 0); // 1000ms = 1 second ka wait
        }
    });
});

function isColliding(px, py, pSize, cx, cy, cSize) {
    return !(
        px + pSize < cx ||  // player coin ke LEFT hai (door)
        px > cx + cSize ||  // player coin ke RIGHT hai (door)
        py + pSize < cy ||  // player coin ke UPAR hai (door)
        py > cy + cSize     // player coin ke NEECHE hai (door)
    );
    // agar koi bhi door nahi — matlab TOUCH ho rahe hain
}


