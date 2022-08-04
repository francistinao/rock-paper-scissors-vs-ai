// IDs and Classess will be imported here
//Will create atleast 4 functions I guess
/*
    - for ai for 
    - myChoice 
    - forScoring
    - for displays
*/

const myScore = document.getElementById("your-score");
const aiScore = document.getElementById("ai-score");
const myDisplay = document.getElementById("your-display");
const aiDisplay = document.getElementById("ai-display");
const winnerDisplay = document.getElementById("winner");
const buttons = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("reset-btn");
//This will stand as the values of each buttons when clicked
const val = {
    "rock" : 0,
    "paper" : 1,
    "scissors": 2
}

//The value from the object will be stored in this variable
let myChoice = 0 //<- 

//AI's choices
const ai = ['rock','paper','scissors'];

buttons.forEach(button => {
    //Added an event for each button which is click
    button.addEventListener("click", (e) => {
        //when button is clicked, following statements will be executed
        //Will write a variable to store the keys and value of the object 
        //based on the value of each buttons from HTML 
        myChoice = Number(val[button.value]);
        randomAI(ai);
        gameScore(ai);
    }
})

//Function that returns to my choice
const myButton = (myChoice) => {
    return myChoice;
}

/*for the AI since AI will be randomly generated I have to 
create a function that will generate a random number and it will 
stand as the index of each choices for the AI */

const randomAI = (ai) => {
    //the array has a length of 3, we will import it to store it in a variable
    //for descriptive type of variables
    const length = ai.length;
    //randomNumber generator
    const randomNumber = Math.floor(Math.random() * length); //now we have succesfully generated a random number
    //returns to the array
    return ai[randomNumber];
}


//Next is the score function
const gameScore = (ai) => {
    //Display will also be returned here 
    let myChoiceDisplay = "",
    aiChoiceDisplay = "",
    winner = "",
    myPoint = 0, aiPoint = 0

    /* Conditions part
        -Evaluate first all the choices of the user and for the ai
        - There are 3 choices rock paper and scissors
        - Deal all the possible outcomes
    */

    if(myButton(myChoice) == 0 && randomAI(ai) == "paper") {
        //Mine = Rock && ai == Paper = AI wins
        aiPoint = aiPoint + 1;
        myChoiceDisplay = "🪨"
        aiChoiceDisplay = "✋"
        winner = "AI"
    } else if(myButton(myChoice) == 0 && randomAI(ai) == "scissors") {
        //Mine = Rock and ai == scissors = I win
        myPoint = myPoint + 1;
        myChoiceDisplay = "🪨"
        aiChoiceDisplay = "✌️"
        winner = "You"
    } else if(myButton(myChoice) == 1 && randomAI(ai) == "rock") {
        //Mine == paper and ai == rock = I win
        myPoint = myPoint + 1;
        myChoiceDisplay = "✋"
        aiChoiceDisplay = "🪨"
        winner = "You"
    } else if(myButton(myChoice) == 1 && randomAI(ai) == "scissors") {
        //Mine == paper and ai == scissors = AI win
        aiPoint = aiPoint + 1;
        myChoiceDisplay = "✋"
        aiChoiceDisplay = "✌️"
        winner = "AI"
    } else if(myButton(myChoice) == 2 && randomAI(ai) == "rock") {
        //Mine == scissors and ai == rock = AI wins
        aiPoint = aiPoint + 1;
        myChoiceDisplay = "✌️"
        aiChoiceDisplay = "🪨"
        winner = "AI"
    } else if(myButton(myChoice) == 2 && randomAI(ai) == "paper") {
        //Mine == scissors and ai == paper = I wins
        myPoint = myPoint + 1;
        myChoiceDisplay = "✌️"
        aiChoiceDisplay = "✋"
        winner = "You"
        //In this condition, all of the opposite choices have been evaluated
        //We will now evaluate the homogenous choices
    } else if(myButton(myChoice) == 0 && randomAI(ai) == "rock") {
        //Mine == rock and ai == rock = tie
        myChoiceDisplay = "🪨"
        aiChoiceDisplay = "🪨"
        winner = "No one"
    } else if(myButton(myChoice) == 1 && randomAI(ai) == "paper") {
        //Mine == paper and ai == paper
        myChoiceDisplay = "✋"
        aiChoiceDisplay = "✋"
        winner = "No one"
    } else if(myButton(myChoice) == 2 && randomAI(ai) == "scissors") {
        myChoiceDisplay = "✌️"
        aiChoiceDisplay = "✌️"
        winner = "No one"
    }
    //results display
    aiScore.innerText = `${aiPoint}`
    myScore.innerText = `${myPoint}`
    myDisplay.innerText = "You picked " + myChoiceDisplay
    aiDisplay.innerText = "AI Picked" + aiChoiceDisplay
    winnerDisplay.innerText = winner + " win!";
 }

 //working but there are few bugs, will fix that sooner or later

 //for the reset button
resetBtn.addEventListener("click", () => {
    resetGame();
}

const resetGame = () => {
    aiScore.innerText = "0"
    myScore.innerText = "0"
    myDisplay.innerText = ""
    aiDisplay.innerText = ""
    winnerDisplay.innerText = ""
}



