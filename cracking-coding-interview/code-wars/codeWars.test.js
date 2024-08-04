import { doubleCharacters, returnPositiveOdd, howMuchILoveYou } from "./codeWars"


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