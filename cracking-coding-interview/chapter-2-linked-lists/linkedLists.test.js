import { foo } from "./linkedLists"

test("it fails", () => {
    foo()
    expect(true).toBe(false)
})