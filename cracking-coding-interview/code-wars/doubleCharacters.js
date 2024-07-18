export const doubleCharacters = (givenString) => {
    const givenStringCharactersArray = givenString.split('')
    let solutionArray = []
    givenStringCharactersArray.forEach(character => {
        solutionArray.push(character)
        solutionArray.push(character)
    });
    return solutionArray.join("")
}