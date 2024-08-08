import { doubleCharacters, returnPositiveOdd, howMuchILoveYou, boredom, lovefunc, fakeFilter } from "./codeWars"


describe("code wars double character challenge", () => {
    it("returns a string where each character of the given string is repeated", () => {
        expect(doubleCharacters("hi")).toBe("hhii")
        expect(doubleCharacters("foo")).toBe("ffoooo")
        expect(doubleCharacters("HHii")).toBe("HHHHiiii")
        expect(doubleCharacters("sOjUrt")).toBe("ssOOjjUUrrtt")
    })
})

describe("code wars return number of positive odd", () => {
    it("returns the numbers of positive odd numbers below given number n", () => {
        expect(returnPositiveOdd(8)).toBe(4)
        expect(returnPositiveOdd(15)).toBe(7)
        expect(returnPositiveOdd(7)).toBe(3)
    })
})

describe("code wars petal challenge", ()=>{
    it("determine which phrase the girls would say at the last petal for a flower of a given number of petals", ()=>{
        expect(howMuchILoveYou(7)).toBe("I love you")
        expect(howMuchILoveYou(3)).toBe("a lot")
        expect(howMuchILoveYou(14)).toBe("a little")
        expect(howMuchILoveYou(9)).toBe("a lot")
    })
})

//need dans help on this one
describe("code wars filter challeng", ()=>{
    it("create a filter function without using the filter function", ()=>{
        expect(fakeFilter([10, 12, 14, 17, 15], 17)).toBe([10, 12, 14, 15])
    })
})

// describe("code wars Boredom Score challenge", ()=>{
//     it("takes in an object of staff members with names as keys and what they are doing as values and returens a boredom score for the office", ()=>{
//         expect(boredom({tim: 'change', jim: 'accounts',
//             randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//             laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//             mr: 'finance' })).toBe('kill me now')
//         expect(boredom({ tim: 'IS', jim: 'finance',
//             randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//             katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//             alex: 'regulation', john: 'accounts', mr: 'canteen' }))
//     .toBe('i can handle this')
// })

// describe("code wars love function challenge"), () => {
//     it("two people pick flowers if one flower has an even number of petals and the other has an odd they are in love...return true", ()=>{
//         expect(lovefunc(1,4)).toBe(true)
//         expect(lovefunc(2,2)).toBe(false)
//         expect(lovefunc(0,1)).toBe(true)
//         expect(lovefunc(10, 7)).toBe(true)
//     })
// }

describe("code wars love function challenge", () => {
    it("two people pick flowers if one flower has an even number of petals and the other has an odd they are in love...return true", () => {
        expect(lovefunc(1,4)).toBe(true)
        expect(lovefunc(2,2)).toBe(false)
        expect(lovefunc(0,1)).toBe(true)
        expect(lovefunc(10, 7)).toBe(true)
    })
})