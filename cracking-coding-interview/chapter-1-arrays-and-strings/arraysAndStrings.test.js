import { isUnique } from "./arraysAndStrings"

describe("1.1 - isUnique", () => {

    it('should return true if a string has all unique characters', () => {
        expect(isUnique("baz")).toBe(true)
        expect(isUnique("qwertyasdfjkh")).toBe(true)
    })

    it("should return false if the string contains non-unique characters", () => {
        expect(isUnique("aa")).toBe(false)
        expect(isUnique("foasdfnadk")).toBe(false)
    })
})