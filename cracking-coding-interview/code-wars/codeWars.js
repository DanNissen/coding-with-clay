export const doubleCharacters = (givenString) => {
    const givenStringCharactersArray = givenString.split('')
    let solutionArray = []
    givenStringCharactersArray.forEach(character => {
        solutionArray.push(character)
        solutionArray.push(character)
    });
    return solutionArray.join("")
}

export function returnPositiveOdd(n) {
    let numOdds = 0
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            numOdds++
        }
    }

    return numOdds
}

export function howMuchILoveYou (nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}

export function fakeFilter (array, num) {
    
}

