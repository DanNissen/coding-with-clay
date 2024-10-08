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

export function shorterReverseLonger(a, b) {
  if (a.length >= b.length) {
    let aReverse = a.split("").reverse().join("")

    return b + aReverse + b
  } else {
    let bReverse = b.split("").reverse().join("")

    return a + bReverse + a
  }
}

export function doubleEveryOther(a) {
  let newArray = []

  a.forEach((x, i) => i % 2 === 0 ? newArray.push(x) : newArray.push(x * 2))

  return newArray
}

//This one confused me

//('abcdefg&%$', x -> isLetter(x)) == true
// ('&%$=', x -> isLetter x) == false
// ('abcdefg', x -> isLetter x) == false

// ([4, 1], x -> x > 3) == true
// ([1, 1], x -> x > 3) == false
// ([4, 4], x -> x > 3) == false

// const someButNotAll = (seq,pred) => {
//   let numMatch = 0

//   for (i=0; i<seq.length; i++){
//     if (seq[i]=== pred){
//       numMatch += 1
//     }
//   }

//    if (numMatch === seq.length || numMatch === 0){
//      return false
//    } else {
//      return true
//    }
//  }

export function peakAndValley(arr) {
  let peaksAndValleys = [];

  arr.forEach(x, i => {
    if (x > arr[i - 1] && x > arr[i - 2] && x > arr[i - 3] && x > arr[i + 1] && x > arr[i + 2] && x > arr[i + 3] || x < arr[i - 1] && x < arr[i - 2] && x < arr[i - 3] && x < arr[i + 1] && x < arr[i + 2] && x < arr[i + 3]) {
      peaksAndValleys.push(x)
    }
  })
  return peaksAndValleys
}

export function partyPeople(arr) {
  let peopleStaying = 0;

  arr.forEach(x => {
    if (x <= arr.length) {
      peopleStaying += 1
    }

    return peopleStaying
  })

}

export function noOdds(values) {
  let evens = [];
  let odd = [];
  values.forEach(x => x % 2 === 0 ? evens.push(x) : odd.push(x))

  return evens
}


//you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.


export function solve(s) {
  let uppercase = 0
  let lowercase = 0
  let number = 0
  let special = 0

  s.split("").forEach(x => {
    if ((^?=.* [a - z]))
    
  })
}