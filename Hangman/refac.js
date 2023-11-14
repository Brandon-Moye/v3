'use strict'

const wordBank = {
  tvShows: ['succession', 'game of thrones', 'rupauls drag race', 'family guy'],
  places: ['wyoming', 'yellowstone', 'the smoky mountains', 'new york city'],
  foodAndDrinks: ['sushi', 'coffee', 'stouts', 'hummus'],
  hobbies: ['camping', 'video games', 'coding', 'cooking']
}

const randomProperty = (obj) => {
    const key = randomValue(Object.keys(obj))
    return { key, value: obj[key] }
}

const randomValue = (obj) => obj[obj.length * Math.random() << 0]

const { key: category, value: options } = randomProperty(wordBank)
console.log(category, options)

const hangmanString = randomValue(options)
console.log(hangmanString)

const hangmanArray = [...hangmanString]
const visibleArray = [...'?'.repeat(hangmanArray.length)]
const checkForBlanks = visibleArray.includes('?')

let limbCount = 0
const guessedLetters = []
const newVisibleList = []

const guessingLetters = () => guessedLetters.push(document.getElementById(LETTER).value)

let addedBlanks = document.getElementById('visibleCells')

visibleArray.forEach((value, index) => {
    const checkForSpaces = value.indexOf(' ')
    const myColumn = document.createElement('td')
    myColumn.id = `cell${index}`
    console.log(myColumn.id, value)

    myColumn.innerHTML = visibleArray[index]
    addedBlanks.appendChild(myColumn)

    if (checkForSpaces !== 0) return
    
    visibleArray[index] = ' '
    document.getElementById(`cell${index}`).classList.add('blank')
    console.log(visibleArray)
})

const addLimb = (limb) => document.getElementById(limb).classList.remove(HIDDEN)
const endGameSetup = (endGameClasses, classToAdd) => document.getElementById(endGameClasses).classList.add(classToAdd)
const setFinalMessage = (message) => document.getElementById(FINAL_MESSAGE).innerHTML = message
const clearGuess = () => document.getElementById(LETTER).value = ''

const finishGame = (outcome, message) => {
    console.log(message)
    setFinalMessage(message)
    endGameSetup(LETTER, HIDDEN)
    endGameSetup(SUBMIT, HIDDEN)
    endGameSetup(HANGMAN_CONTAINER, outcome)
}

const parts = ['platform', 'post', 'rope', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg']

const LETTER = 'letter'
const SUBMIT = 'submit'
const HIDDEN = 'hidden'
const HANGMAN_CONTAINER = 'hangmanContainer'
const GAME_LOST = 'gameLost'
const GAME_WON = 'gameWon'
const WRONG_GUESS_CONTAINER = 'wrongGuessContainer'
const RESET = 'reset'
const CLICK = 'click'
const FINAL_MESSAGE = 'finalMessage'

const onSubmit = () => {
    guessingLetters()

    if (checkForBlanks) {
        const guess = guessedLetters[guessedLetters.length - 1]
        let checkForCorrect = 0

        visibleArray.forEach((_, index) => {
            if (guess === hangmanArray[index]) {
                checkForCorrect++
                visibleArray[index] = guess
                addedBlanks.children[index].innerHTML = guess
            }
        })

        if (checkForCorrect === 0) {
            limbCount++;
            console.log(`You have guessed ${limbCount} wrong letters`);
            newVisibleList.unshift(guess);

            addLimb(parts[limbCount - 1])
            if (limbCount - 1 >= parts.length) {
                finishGame(GAME_LOST, `Oh no! The correct answer was '${hangmanString}'. Try again!`)
            }
        }

        document.getElementById(WRONG_GUESS_CONTAINER).innerHTML = newVisibleList;
        checkForBlanks = visibleArray.includes('?');
    }

    if (!checkForBlanks && limbCount <= 9) {
        finishGame(GAME_WON, `You guessed it! The answer is '${hangmanString}'`)
        document.getElementById(RESET).classList.remove(HIDDEN)
    }  
    clearGuess()
}

const reload = () => location.reload()

document.querySelector('.submit').addEventListener(CLICK, onSubmit);
document.querySelector('.reset').addEventListener(CLICK, reload)
document.querySelector('.reload').addEventListener(CLICK, reload)