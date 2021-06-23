let maximum = parseInt(prompt("Enter the maximun number: "));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum);

let guess = prompt("Please enter your guess: ")
let count = 1
while(parseInt(guess) !== targetNum) {
    count ++

    if(guess == 'q') {
        alert("You quite! bye!!!");
        break;
    }
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! enter another guess: "))
    }
    else {
        guess = parseInt(prompt("Too low! enter another guess: "))
    }
    
}

if (guess === targetNum) {
    alert(`Congrats! you have guessed it with ${count} ${count > 1 ? 'attemts' : 'attempt'}`)
}