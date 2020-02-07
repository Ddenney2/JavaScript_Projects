//This function will get fired once the DOM is loaded.
//Disable the stop button since it is not needed until game start.
window.onload = function() {watch()};
function watch() {
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); //disable the stop button since the game has not started.
}

//this function will roll a random number twice, one for
// each player and determine which player won the roll.
function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; i < 2; i++) {
        //random whole number between 1 and 10
        ranNum = Math.floor(Math.random()*(maximum - minimum) + minimum);
        xArray.push(ranNum);
    }
    diceRoll();//play dice sounds during the game roll for turn
    //build the string to show which player rolled what die roll
    for (i=0;i<xArray.length;i++) {
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) {//rigging roll on tie to avoid bug in code. Need to address this later.
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ["+pTwo+"]<br><br>";
        setTimeout(function() {writeMsg(txt1);}, 1000); //time delay for dramatic affect
    }
    //determine and cancatenate string showing which player won the roll
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function() { txt1 = txt1 + "Player 1 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function() { txt1 = txt1 + "Player 2 wins, please choose a square.";}, 2000);
        setTimeout(function() {writeMsg(txt1);}, 2000);
    }
    //pass which player won the roll
    return first;
}

//----------------------------------------------------------------------------------------------------------
// initiate the game, roll for turn & determine the active player
//-----------------------------------------------------------------------------------------------------------
function startGame(){
    var xTurn = 0;
    activePlayer = rollForTurn();
    if (activePlayer == "") { //if it was a tie, then reroll
        activePlayer = rollForTurn();
    }
    setTimeout(function() {hideGameMsg();}, 4000);

    //asign proper state of the control buttons
    var btn = document.getElementById('btnStart');
    btnDisabled(btn); //disable the start button since the game started
    var btn = document.getElementById('btnStop');
    stopEnabled(btn); //enable the stop button since the game started

    //Assign the Active Player to the console
    var showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}


//this function styles the game buttons while they are disabled
function btnDisabled(btn) {
    btn.style.color = "fff";
    btn.style.border = "2px solid rgb(153, 153, 102)";
    btn.style.backgroundColor = "rgb(214, 214, 194)";
    btn.disabled = true;
}

//this function styles the game buttons while they are disabled
function stopEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(204, 0, 0)";
    btn.style.backgroundColor = "rgb(255, 51, 51)";
    btn.disabled = false;
}

//this function styles the game buttons while they are disabled
function startEnabled(btn) {
    btn.style.color = "#fff";
    btn.style.border = "2px solid rgb(0, 153, 0)";
    btn.style.backgroundColor = "rgb(57, 230, 0)";
    btn.disabled = false;
}

//when the user indicates, stop the current game and reset game
function stopGame() {
    hideGameMsg(); //clear the text and hide message box
    var btn = document.getElementById('btnStart');
    startEnabled(btn); //enable the start button since the game is done
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); //disable the stop button since the game is done
    var showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color='red';

    // reset all squares to their starting empty states
    var arrayO = document.getElementsByClassName("O");
    var arrayX = document.getElementsByClassName("X");
    for (var i=0; i<arrayO.length;i++) {
        arrayO[i].style.transform = "translateY(-100%)";
    }
    for (var i=0; i<arrayX.length;i++) {
        arrayX[i].style.transform = "translateY(100%)";
    }
    //this clears the running log of all game moves
    document.getElementById('boardState').innerHTML = "";
}

//this function will show the message console and any text
function showGameMsg() {
    document.getElementById('gameMsgBox').style.display = 'block';
}

// this function will conceal the message console from view
function hideGameMsg() {
    clearMsg() //clear the text from the message console
    document.getElementById('gameMsgBox').style.display = 'none'; //hide the div
}

//this function will write text tot he game message console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById('gameMsg').innerHTML = txt;
}

//this function will write to the game message console
function clearMsg() {
    document.getElementById('gameMsg').innerHTML = "";
}

//this function is for the player configuration panel and checks
// the proposed avatar assignments and prevents them from being the same.
function saveSettings() {
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected = document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected = document.getElementById("player2").options;
    if (p1Selected[p1Index].text == p2Selected[p2Index].text) {
        alert("Error - Player 1 and Player 2 cannot both be assigned as: "+p1Selected[p1Index].text)
    } else {
        document.getElementById('p1Display').innerHTML=p1Selected[p1Index].text;
        document.getElementById('p2Display').innerHTML=p2Selected[p2Index].text;
    }
}

//this function return's the currently assigned avatar for each player
function getAvatars() {
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar,p2Avatar];
    return avatarArray;
}

//this function will return the active player's avatar
function determineAvatar() {
    //determine the correct avatar to paint for the active player
    var avatarArray = getAvatars(); //returns an array of both player's assigned avatars
    var active = document.getElementById('showPlayer').innerHTML;//get active player
    p1Avatar = avatarArray[0];
    p2Avatar = avatarArray[1];
    if (active == "Player 1") {//check which player is active and their corresponding avatar
        var paintAvatar = p1Avatar;
    } else if (active == "Player 2") {
        var paintAvatar; //returned back the correct avatar
    }
    return paintAvatar; //returned back the correct avatar
}

// this function changes active player over to the other player
function avatarPlaced() {
    var parseText = document.getElementById('gameMsg').innerHTML;
    var showPlayer = document.getElementById('showPlayer'); //select the current element to memory
    //check if there is already a winner. if there is, then don't continue the game
    if (parseText == "That's three in a row, Player 1 wins!" | | parseText == "That's three in a row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color='red';
    }
    activePlayer = showPlayer.innerHTML; //get the current player from the element
    if (activePlayer == "Player 1") {//once active player selects a square change the active player
        showPlayer.innerHTML = "Player 2";
    } else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie();//call this function to inquire if there was a tie
}

//this function will get the array of the current board
//and check the proposed move for a validity
function check(info,square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0); //comparing index of square
        if (tempInfo == square) {
            return tempInfo;
        }
    }
}

//as squares are selected they check in with this function to see if that particular
//square has already been assigned and if it has not, record new square with the assigned avatar
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById('boardState').innerHTML;
    var info = boardState.split(','); //separate the string by commas to create an array
    verdict = check(info,square); //call function to check if proposed square is already occupied
    return verdict;
}


//this function will get list of previous moves
//and then concatenate the current move to it.
function recordMove(currentMove) {
    var target = document.getElementById('boardState');
    var previousMoves = target.innerHTML;
    target.innerHTML = previousMoves+currentMove;
}

function checkForWinCon() {
    var squareArray = [];
    var target = document.getElementById('boardState');
    var info = target.innerHTML; //raw array with squares and avatars
    info = info.substring(1); //remove leading comma
    info = info.split(','); //seperate the string by commas into an array
    info.sort(); //sort the square array in order despite the actual gameplay sequence
    for (var i in info) {
        squareArray.push(info[i].charAt(0)); //new array with only squares not avatars
    } 
    //call this following array of functions to check for any of the possible win cons
    checkWinCon1(info,squareArray);
    checkWinCon2(info,squareArray);
    checkWinCon3(info,squareArray);
    checkWinCon4(info,squareArray);
    checkWinCon5(info,squareArray);
    checkWinCon6(info,squareArray);
    checkWinCon7(info,squareArray);
    checkWinCon8(info,squareArray);
    //console.log("New CHECK: "+document.getElementById('gameMsg').innerHTML);
    check4Tie();
}

//call this function to check board state for ny ties and act accordingly
function check4Tie() {
    var boardState = document.getElementById('boardState').innerHTML;
    boardState = boardState.substring(1); //remove leading comma
    boardState = boardState.split(','); //seperate the string by commas into an array
    var check = document.getElementById('gameMsg').innerHTML;
    if(boardState.length >= 9 && check != "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "Oh no! Nobody wins, it was a tie!";
        tieSound(); //play a sound when a tie has been detected
        writeMsg(txt1);
        setTimeout(function() {stopGame();}, 3000);
    }
}

//whenever a win is detected the corresponding function will
//call this function to produce the following winning process for the game
function winner(winDetected,winCon) {
    if (winDetected == "win") {
        var showme = winDetected;
        var activePlayer = document.getElementById('showPlayer').innerHTML;
        var txt2 = "That's three in a row, "+activePlayer+" wins!";
        writeMsg(txt2);
        var btn = document.getElementById('btnStart');
        startEnabled(btn); //enable the start button
        var btn = document.getElementById('btnStop');
        btnDisabled(btn); //disbale the stop button
        document.getElementById('showPlayer').innerHTML = "Game Stopped";
        glowBoard(winCon); //call function to make the game board pulse with colors
    }
}
