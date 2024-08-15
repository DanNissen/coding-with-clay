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

export function howMuchILoveYou(nbPetals) {
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

export function fakeFilter(array, num) {
  let newArray = []

  array.forEach((x) => {
    if (x === num) {
      return
    } else {
      newArray.push(x)
    }
  })

  return newArray
}

export function boredom(staff) {
  let boredomScore = 0

  Object.values(staff).forEach(name => {
    switch (name) {
      case 'accounts':
        boredomScore += 1;
        break;
      case 'finance':
        boredomScore += 2;
        break;
      case 'canteen':
        boredomScore += 10;
        break;
      case 'regulation':
        boredomScore += 3;
        break;
      case 'trading':
        boredomScore += 6;
        break;
      case 'change':
        boredomScore += 6;
        break;
      case 'IS':
        boredomScore += 8;
        break;
      case 'retail':
        boredomScore += 5;
        break;
      case 'cleaning':
        boredomScore += 4;
        break;
      case 'pissing about':
        boredomScore += 25;
        break;
    }
  })

  if (boredomScore <= 80) {
    return 'kill me now'
  } else if (boredomScore < 100) {
    return 'i can handle this'
  } else {
    return 'party time!!'
  }

}

export function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 != 0 || flower2 % 2 === 0 && flower1 % 2 != 0) {
    return true
  } else {
    return false
  }
}

export function find(a, e) {
  let f = a.indexOf(e)

  return f === -1 ? "Not found" : f
}


export function removeExclamation(string) {

  let newString = string.replaceAll("!", "")

  newString += "!"

  return newString

}