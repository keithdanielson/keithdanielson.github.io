









const L = 1000;
const H = 500;
/**
 * Card is a class containing
 * information on the current card's suite and type
 */
class Card {
    constructor(suite, type) {
      this.suite = suite;
      this.type = type;
    }
  }

suites = ['clubs', 'diamonds', 'hearts', 'spades'];
types = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

var deck = [];
var playerHand = [];
var dealerHand = [];

function newDeck() {
    var d = [];
    // Make the deck:
    for (let suite = 0; suite < 4; suite++) {
        for (let card = 0; card < 13; card++) {
            c = new Card(suites[suite], types[card])
            d.push(c);
        }
    }
    return d;
}





/**
 * Function that takes in the deck, and shuffles
 * it using "Fisher-Yates Shuffle"
 * This was implemented from:
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle() {
    let currentIndex = deck.length,  randomIndex;
    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
    }
}

function dealToPlayer() {
    playerHand.push(deck.pop());
}

function dealToDealer() {
    dealerHand.push(deck.pop());
}


function drawCard(card, x, y, hidden) {
    var xIncrement = 225;
    var yIncrement = 315;
    ctx.imageSmoothingEnabled = false;
    switch (card.suite) {
        case('hearts'):
            switch(card.type) {
                case(0):
                    ctx.drawImage(image, 0, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(1):
                    ctx.drawImage(image, xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(2):
                    ctx.drawImage(image, 2*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(3):
                    ctx.drawImage(image, 3*xIncrement, 0, xIncrement, yIncrement,x, y, 150 * 0.6428571429, 150);
                    break;
                case(4):
                    ctx.drawImage(image, 4*xIncrement, 0, xIncrement, yIncrement,x, y, 150 * 0.6428571429, 150);
                    break;
                case(5):
                    ctx.drawImage(image, 5*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(6):
                    ctx.drawImage(image, 6*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(7):
                    ctx.drawImage(image, 7*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(8):
                    ctx.drawImage(image, 8*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(9):
                    ctx.drawImage(image, 9*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(10):
                    ctx.drawImage(image, 10*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(11):
                    ctx.drawImage(image, 11*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 12*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 13*xIncrement, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                default: break;
            }
            break;
        case('spades'):
            switch(card.type) {
                case(0):
                    ctx.drawImage(image, 0, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(1):
                    ctx.drawImage(image, xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(2):
                    ctx.drawImage(image, 2*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(3):
                    ctx.drawImage(image, 3*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(4):
                    ctx.drawImage(image, 4*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(5):
                    ctx.drawImage(image, 5*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(6):
                    ctx.drawImage(image, 6*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(7):
                    ctx.drawImage(image, 7*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(8):
                    ctx.drawImage(image, 8*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(9):
                    ctx.drawImage(image, 9*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(10):
                    ctx.drawImage(image, 10*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(11):
                    ctx.drawImage(image, 11*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 12*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 13*xIncrement, yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                default: break;
            }
            break;
        case('diamonds'):
            switch(card.type) {
                case(0):
                    ctx.drawImage(image, 0, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(1):
                    ctx.drawImage(image, xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(2):
                    ctx.drawImage(image, 2*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(3):
                    ctx.drawImage(image, 3*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(4):
                    ctx.drawImage(image, 4*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(5):
                    ctx.drawImage(image, 5*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(6):
                    ctx.drawImage(image, 6*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(7):
                    ctx.drawImage(image, 7*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(8):
                    ctx.drawImage(image, 8*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(9):
                    ctx.drawImage(image, 9*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(10):
                    ctx.drawImage(image, 10*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(11):
                    ctx.drawImage(image, 11*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 12*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 13*xIncrement, 2*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                default: break;
            }
            break;
        case('clubs'):
            switch(card.type) {
                case(0):
                    ctx.drawImage(image, 0, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(1):
                    ctx.drawImage(image, xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(2):
                    ctx.drawImage(image, 2*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(3):
                    ctx.drawImage(image, 3*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(4):
                    ctx.drawImage(image, 4*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(5):
                    ctx.drawImage(image, 5*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(6):
                    ctx.drawImage(image, 6*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(7):
                    ctx.drawImage(image, 7*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(8):
                    ctx.drawImage(image, 8*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(9):
                    ctx.drawImage(image, 9*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(10):
                    ctx.drawImage(image, 10*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(11):
                    ctx.drawImage(image, 11*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 12*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                case(12):
                    ctx.drawImage(image, 13*xIncrement, 3*yIncrement, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
                    break;
                default: break;
            }
            break;
        default:
            break;
    }

    if (hidden) {
        ctx.drawImage(imageback, 0, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
    }
    

}

function drawButtons() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(hitButton.x, hitButton.y, hitButton.width, hitButton.height);
    ctx.stroke();
    ctx.fill();
    ctx.font = '48px serif';
    ctx.fillStyle = 'white';
    ctx.fillText("Hit", hitButton.x + 50, hitButton.y + 38);
    ctx.beginPath();
    ctx.rect(standButton.x, standButton.y, standButton.width, standButton.height);
    ctx.fillStyle = 'green';
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Stand", standButton.x + 30, standButton.y + 38);
}

function countHand(hand) {
    var aceCount = 0;
    var total = 0;
    //Check if the hand has any aces
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].type == 0) {
            aceCount++;
        }
        else if (hand[i].type < 10) {
            total += hand[i].type + 1;
        }
        else if (hand[i].type >= 10) {
            total += 10;
        }
    }
    
    //If ace, either do 1 or 11
    if (aceCount == 1) {
        if (total + 11 > 21) {
            total += 1;
        }
        else {
            total += 11;
        }
    }
    else if (aceCount > 1) {
        if (aceCount == 2) {
            total += 12;
        }
        else if (aceCount == 3) {
            total += 13;
        }
        else if (aceCount == 4) {
            total += 14;
        }
    }

    return total;
}

function drawHand(hand, isPlayer) {
    if (isPlayer) {
        for(let i = 0; i < hand.length; i++) {
            drawCard(hand[i], L/3 + (i*50), H/2+80, false)
        }
    }
    else {
        for(let i = 0; i < hand.length; i++) {
            drawCard(hand[i], L/3 + (i*50), H/2-240, false)
        }
    }
}




var hitButton = {
    x:60,
    y:H/2,
    width:160,
    height:50
};
var standButton = {
    x:L-220,
    y:H/2,
    width:160,
    height:50
};
var playAgain = {
    x:L/2 - 80,
    y:H/2 - 45,
    width:160,
    height:50
};
var playAgainBackground = {
    x:L/2 - 150,
    y:H/2 - 140,
    width:300,
    height:150
}
var betBackground = {
    x:L/2 - 300,
    y:H/2 - 200,
    width:600,
    height:400
}
var addButton = {
    x:betBackground.x + 180,
    y:betBackground.y + 50,
    width:50,
    height:betBackground.height/9
};
var minusButton = {
    x:betBackground.x + 400,
    y:betBackground.y + 50,
    width:50,
    height:betBackground.height/9
};
var chip1 = {
    x:245,
    y:160,
    width:100,
    height:100
};
var chip2 = {
    x:345,
    y:160,
    width:100,
    height:100
};
var chip3 = {
    x:445,
    y:160,
    width:100,
    height:100
};
var chip4 = {
    x:545,
    y:160,
    width:100,
    height:100
};
var chip5 = {
    x:645,
    y:160,
    width:100,
    height:100
};
var chip6 = {
    x:295,
    y:260,
    width:100,
    height:100
};
var chip7 = {
    x:395,
    y:260,
    width:100,
    height:100
};
var chip8 = {
    x:495,
    y:260,
    width:100,
    height:100
};
var chip9 = {
    x:595,
    y:260,
    width:100,
    height:100
};
var placeBetButton = {
    x:betBackground.x + 240,
    y:betBackground.y + 330,
    width:betBackground.width/4,
    height:betBackground.height/9
};

//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

function isInsideCircle(pos, rect) {
    return ((Math.abs(pos.x - (rect.width/2)) < 50) && (Math.abs(rect.y - rect) < (rect.width/2)))
}

function checkRoundCondition() {
    playerWin = false;
    dealerWin = false;
    dealerTotal = countHand(dealerHand);
    playerTotal = countHand(playerHand);
    console.log("Player total: " + playerTotal);
    console.log("Dealer total: " + dealerTotal);
    var difD = Math.abs(21 - dealerTotal);
    var difP = Math.abs(21 - playerTotal);
    console.log("Dealer dif: " + difD);
    console.log("Player dif: " + difP);
    
    if (dealerTotal > 21) {
        if (playerTotal <= 21) {
            playerWin = true;
            dealerWin = false;
            return;
        }
    }
    else if (playerTotal > 21) {
        if (dealerTotal <= 21) {
            dealerWin = true;
            playerWin = false;
            return;
        }
    }
    

    if (difP < difD && playerTotal <= 21) {
        playerWin = true;
        dealerWin = false;
    } else if (difD < difP && dealerTotal <= 21) {
        dealerWin = true;
        playerWin = false;
    }

    if (!playerWin && !dealerWin) {
        if (playerTotal > 21 && dealerTotal > 21) {
            playerWin = false;
            dealerWin = false;
        } else if (playerTotal > 21) {
            playerWin = false;
        } else if (dealerTotal > 21) {
            dealerWin = false;
        }
    
        if (dealerTotal == playerTotal) {
            playerWin = true;
            dealerWin = true;
            return;
        }
    }

    if (dealerTotal == 21) {
        dealerWin = true;
    }
    if (playerTotal == 21) {
        playerWin = true;
    }
    

    
}

function dealerDraw() {
    buttonsEnabled = false;
    while(countHand(dealerHand) < 17) {
        dealToDealer();
        drawHand(dealerHand, false);
    }
    checkRoundCondition();
    console.log("Dealer win: " + dealerWin + " Player win: " + playerWin);

    if (dealerWin && !playerWin) {
        outputString = "Dealer wins.";
    }
    if (playerWin && !dealerWin) {
        outputString = "You win!";
        playerBank += currentBet*2;
    }
    if (!playerWin && !dealerWin || playerWin && dealerWin) {
        outputString = "Tie!"
        playerBank += currentBet;
    }
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(playAgainBackground.x, playAgainBackground.y, playAgainBackground.width, playAgainBackground.height);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(playAgain.x, playAgain.y, playAgain.width, playAgain.height);
    ctx.stroke();
    ctx.fill();
    ctx.font = '22px serif';
    ctx.fillStyle = 'black';
    ctx.fillText("Next Round", playAgain.x + 30, playAgain.y + 38);
    ctx.fillStyle = 'white';
    ctx.fillText(outputString, playAgain.x + 30, playAgain.y - 30);
    playAgainEnabled = true;

    drawTotals();
    drawTotalText();

}

function resetRound() {
    soundTrack.pause();
    soundTrack.play();
    introEnabled = false;
    firstPlay = false;
    playAgainEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBettingTable();
}

function postBet() {
    drawTotals();
    chipsOut = false;
    deck = new newDeck();
    playerHand = [];
    dealerHand = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBank();
    drawButtons();
    buttonsEnabled = true;
    round();
    drawTotalText();

}

function round() {
    shuffle();
    dealToPlayer();
    dealToDealer();
    dealToPlayer();
    dealToDealer();
    drawHand(playerHand, true);
    drawHand(dealerHand, false);

    dealerTotal = countHand(dealerHand);
    playerTotal = countHand(playerHand);
    if (playerTotal == 21) {
        dealerDraw();
    }
    
}


// ---------------------------------------------------------------------------------------

//Initialize the canvas


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const image = document.getElementById('cards');
image.onload = function(){this.ready=true}
const backgroundimg = document.getElementById('table');
const chipsimg = document.getElementById('chips');
backgroundimg.onload = function(){this.ready=true}
const imageback = document.getElementById('cardback')
var chipsnd = new Audio("images/chipsnd.mp3");
var soundTrack = new Audio("images/soundtrack.mp3");
soundTrack.loop = true;


//document.body.addEventListener("mousemove", function () {
//    soundTrack.play();
//})
//soundTrack.play();
//startGame();



var dealarTotal = 0;
var playerTotal = 0;
var playerWin = false;
var dealerWin = false;
var buttonsEnabled = true;
var playAgainEnabled = false;
var introEnabled = true;
var playerBank = 100;
var goalBank = 100;
var currentBet = 0;
var addingBet = true;
var chipsOut = false;
var betIncrementAmount = 0;
var playerLostGame = false;

function incrementBet(n) {
    chipsnd.pause();
    chipsnd.currentTime = 0;
    chipsnd.play();
    if (addingBet) {
        if (playerBank - n >= 0) {
            currentBet += n;
            playerBank -= n;
        }
    }
    else {
        if (currentBet - n >= 0) {
            currentBet -= n;
            playerBank += n;
        }
        
    }
    changeTotal();

}


canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);

    if (buttonsEnabled) {
        if (isInside(mousePos,hitButton)) {
            dealToPlayer();
            drawHand(playerHand, true);
            drawTotals();
            playerTotal = countHand(playerHand);
            drawTotalText();
            if (playerTotal >= 21) {
                dealerDraw();
            }
        }
        else if (isInside(mousePos, standButton)) {
            dealerDraw();
        }
    }
    if (playAgainEnabled || introEnabled) {
        if (isInside(mousePos, playAgain)) {
            if (playerLostGame) {
                playerBank = 100;
                playerLostGame = false;
            }
            resetRound();
        }
    }
    if (chipsOut) {
        if (isInside(mousePos, chip1)) {
            incrementBet(1);
        }
        else if (isInside(mousePos, chip2)) {
            incrementBet(5);
        }
        else if (isInside(mousePos, chip3)) {
            incrementBet(25);
        }
        else if (isInside(mousePos, chip4)) {
            incrementBet(50);
        }
        else if (isInside(mousePos, chip5)) {
            incrementBet(100);
        }
        else if (isInside(mousePos, chip6)) {
            incrementBet(500);
        }
        else if (isInside(mousePos, chip7)) {
            incrementBet(1000);
        }
        else if (isInside(mousePos, chip8)) {
            incrementBet(5000);
        }
        else if (isInside(mousePos, chip9)) {
            incrementBet(10000);
        }
        else if (isInside(mousePos, addButton)) {
            addingBet = true;
            toggleAddMinus();
        }
        else if (isInside(mousePos, minusButton)) {
            addingBet = false;
            toggleAddMinus();
        }
        else if (isInside(mousePos, placeBetButton)) {
            if (currentBet > 0) {
                postBet();
            }
            

        }

        
    }
    
    
}, false);

function toggleAddMinus() {
    
    if (addingBet) {
        ctx.clearRect(betBackground.x + 180,betBackground.y + 50, 50, betBackground.height/9);
        ctx.clearRect(betBackground.x + 400, betBackground.y + 50, 50, betBackground.height/9);

        ctx.fillStyle = 'white';
        ctx.rect(betBackground.x + 400, betBackground.y + 50, 50, betBackground.height/9);
        ctx.stroke();
        
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = '80px serif';
        ctx.fillText("+", betBackground.x+183, betBackground.y + 100);

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = '80px serif';
        ctx.fillText("-", betBackground.x+410, betBackground.y + 94);
        
    } else {
        ctx.beginPath();
        ctx.clearRect(betBackground.x + 180,betBackground.y + 50, 50, betBackground.height/9);
        ctx.clearRect(betBackground.x + 400, betBackground.y + 50, 50, betBackground.height/9);
        ctx.fillStyle = 'white';
        ctx.rect(betBackground.x + 180, betBackground.y + 50, 50, betBackground.height/9);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = '80px serif';
        ctx.fillText("+", betBackground.x+183, betBackground.y + 100);
    
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = '80px serif';
        ctx.fillText("-", betBackground.x+410, betBackground.y + 94);

    }
    
    
    
}

function drawBettingTable() {
    currentBet = 0;
    console.log("Player bank: " + playerBank);
    console.log("Bet: " + currentBet);
    if (playerBank == 0 && currentBet == 0) {
        outOfMoney();
        return;
    }
    chipsOut = false;
    currentBet = 0;
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(betBackground.x, betBackground.y, betBackground.width, betBackground.height);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.font = '22px serif';
    ctx.fillText("Current bet:", betBackground.x + 250, betBackground.y + 38);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(betBackground.x + 240, betBackground.y + 50, betBackground.width/4, betBackground.height/9);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '22px serif';
    ctx.fillText("$" + currentBet, betBackground.x + 300, betBackground.y + 80);

    toggleAddMinus();
    drawChips();
    ctx.fillStyle = 'white';
    ctx.rect(placeBetButton.x, placeBetButton.y, placeBetButton.width, placeBetButton.height);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '22px serif';
    ctx.fillText("Confirm Bet", placeBetButton.x + 20, placeBetButton.y + 30);

    drawBank();


    setTimeout(() => {chipsOut=true}, 300); 



}


function drawBank() {
    ctx.clearRect(L - 180, H - 40, placeBetButton.width + 50, placeBetButton.height);
    ctx.fillStyle = 'white';
    ctx.rect(L - 180, H - 40, placeBetButton.width + 50, placeBetButton.height);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '22px serif';
    ctx.fillText("$"+playerBank, L - 120, H-10);

}

function drawTotals() {
    //ctx.clearRect(0, H - 40, placeBetButton.width - 100, placeBetButton.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(0, H - 40, placeBetButton.width - 100, placeBetButton.height);
    ctx.stroke();
    ctx.fill();
    //ctx.clearRect(0, H - 40, placeBetButton.width - 100, placeBetButton.height);
    ctx.fillStyle = 'white';
    ctx.rect(0, 0, placeBetButton.width - 100, placeBetButton.height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
   
    //ctx.fill();

    
}

function drawTotalText() {
    ctx.beginPath();
    ctx.font = '22px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(dealerTotal, 13, 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.font = '22px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(playerTotal, 13, H-10);
    ctx.closePath();
}




function changeTotal() {
    ctx.clearRect(betBackground.x + 240, betBackground.y + 50, betBackground.width/4, betBackground.height/9);

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(betBackground.x + 240, betBackground.y + 50, betBackground.width/4, betBackground.height/9);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = '22px serif';
    ctx.fillText("$" + currentBet, betBackground.x + 300, betBackground.y + 80);

    drawBank();


}




function drawChips() {
    var x = 20;
    ctx.drawImage(chipsimg, 0, 0, 240, 230, 225 + x, 160, 100, 100);
    ctx.drawImage(chipsimg, 230, 0, 239, 230, 325 + x, 160, 100, 100);
    ctx.drawImage(chipsimg, 460, 0, 239, 230, 425 + x, 160, 100, 100);
    ctx.drawImage(chipsimg, 0, 230, 239, 230, 525 + x, 160, 100, 100);
    ctx.drawImage(chipsimg, 230, 230, 239, 230, 625 + x, 160, 100, 100);
    ctx.drawImage(chipsimg, 460, 231, 239, 230, 275 + x, 260, 100, 100);
    ctx.drawImage(chipsimg, 0, 460, 239, 230, 375 + x, 260, 100, 100);
    ctx.drawImage(chipsimg, 230, 460, 240, 230, 475 + x, 260, 100, 100);
    ctx.drawImage(chipsimg, 460, 460, 240, 230, 575 + x, 260, 100, 100);
    //ctx.drawImage(image, 0, 0, xIncrement, yIncrement, x, y, 150 * 0.6428571429, 150);
    
    

}



function drawBackground() {
    ctx.drawImage(backgroundimg, -15, 0, 1050, 800);
    
}

function intro() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(playAgainBackground.x, playAgainBackground.y, playAgainBackground.width, playAgainBackground.height);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(playAgain.x, playAgain.y, playAgain.width, playAgain.height);
    ctx.stroke();
    ctx.fill();
    ctx.font = '22px serif';
    ctx.fillStyle = 'black';
    ctx.fillText("Start Game", playAgain.x + 30, playAgain.y + 38);
    ctx.fillStyle = 'white';
    ctx.fillText("Beat the dealer!", playAgain.x + 16, playAgain.y - 30);

    
    
}

function outOfMoney() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    ctx.beginPath();
    ctx.fillStyle = '#8B0000';
    ctx.rect(playAgainBackground.x, playAgainBackground.y, playAgainBackground.width, playAgainBackground.height);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(playAgain.x, playAgain.y, playAgain.width, playAgain.height);
    ctx.stroke();
    ctx.fill();
    ctx.font = '22px serif';
    ctx.fillStyle = 'black';
    ctx.fillText("Try Again?", playAgain.x + 30, playAgain.y + 38);
    ctx.fillStyle = 'white';
    ctx.fillText("The House always wins...", playAgain.x - 28, playAgain.y - 30);
    playerLostGame = true;
    introEnabled = true;
}







/*
//Start the game (when the card images have successfully loaded)
function loadGame() {
    if (image.ready) {
        console.log("Game ready!");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startGame();
        return;
    }
    else {
        console.log("Loading...");
        ctx.font = '22px serif';
        ctx.fillStyle = 'white';
        ctx.fillText("Loading...", L/2 - 60, H/2);
        setTimeout(loadGame, 300); 
    }
}
*/
function startGame() {
    soundTrack.play();
    drawBackground();
    drawBank();
    intro();
    drawButtons();
    
}
//startGame();
//loadGame();

window.addEventListener("load", function () {
    startGame();
});










// ---------------------------------------------------------------------------------------
