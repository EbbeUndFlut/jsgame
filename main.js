let life
let randomNumber
let isGameOver 

const lifeTag = document.getElementById('life')
const hintTag = document.getElementById('hint')
const numberInput = document.getElementById('number')

function start(){
    randomNumber = getRandomNumber(1,10)
    console.log(randomNumber)
    life = 3
    isGameOver = false
    lifeTag.innerHTML = life
    hintTag.innerHTML='Good Luck'
    numberInput.value = ''
    
}

function guess() {
    if(!isGameOver && numberInput.value != ''){
        const guess = Number(numberInput.value)
        if(guess === randomNumber){
            hintTag.innerHTML='Winner'
            isGameOver = true
        } else{
            life -= 1
            lifeTag.innerHTML = life
            hint(guess)
            gameOver()
        }
    }else{
        start()
        
    }
}

function hint(guess){
    if(guess > randomNumber) {
        hintTag.innerHTML='Zahl zu groß'
    } else if(guess < randomNumber) {
        hintTag.innerHTML='Zahl ist zu klein'
    }   
}

function gameOver(){
    if(life === 0){
        hintTag.innerHTML='Game Over'
        isGameOver = true
    }
}

function getRandomNumber(min, max){
   const random =  Math.floor(min + (Math.random()*(max-min)))
   return random
}
start()