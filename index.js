let numberOfGames=0, playerCounter1=0, playerCounter2=0, playerDraw = 0;

function click () {
    let randomNum1 = Math.floor(Math.random()*6)+1;
    let randomNum2 = Math.floor(Math.random()*6)+1;
    let result = "";

    document.querySelector(".dice .img1").setAttribute("src", `images/dice${randomNum1}.png`);
    document.querySelector(".dice .img2").setAttribute("src", `images/dice${randomNum2}.png`);
    numberOfGames++;
    if ( randomNum1 > randomNum2) {
        result = "Player 1 wins"; playerCounter1++;
    }
    else if (randomNum1 < randomNum2) {
        result = "Player 2 wins"; playerCounter2++;
    }
    else {
        result = "Draw !"; playerDraw++;
    }
    document.getElementById("announce").textContent = result;
    document.getElementById("counter0").textContent = "Played "+numberOfGames+" games so far";
    document.getElementById("counter1").textContent = "Player 1 has won "+playerCounter1+" times!";
    document.getElementById("counter2").textContent = "Player 2 has won "+playerCounter2+" times!";
    document.getElementById("counter3").textContent = "Both Players have drawn "+playerDraw+" times!";
}
document.getElementById("click").onclick = function() {click()} ;
