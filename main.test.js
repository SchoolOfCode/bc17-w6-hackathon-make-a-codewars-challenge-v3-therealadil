import { test, expect } from "vitest"

import { oddOrEven, palindrome } from "./main.js"

// test("oddOrEven odd check", () => {
//     expect(oddOrEven(1)).toBe("odd")
// })

// test("oddOrEven even check", () => {
//     expect(oddOrEven(2)).toBe("even")
// })

test("palindrom check true", () => {
   expect(palindrome("racecar")).toBe(true)
   expect(palindrome("level")).toBe(true)
   expect(palindrome("kayak")).toBe(true)
   expect(palindrome("hannah")).toBe(true)

})

test("palindrome check false", () => {
    expect(palindrome("jupiter")).toBe(false)
    expect(palindrome("adil")).toBe(false)
    expect(palindrome("schoolofcode")).toBe(false)
    expect(palindrome("olympics")).toBe(false)
 })