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