import { test, expect } from "vitest"

import { oddOrEven, palindrome } from "./main.js"

test("palindrom check true", () => {
   expect(palindrome("racecar")).toBe(true)
   expect(palindrome("level")).toBe(true)
   expect(palindrome("kayak")).toBe(true)
   expect(palindrome("Hannah")).toBe(true)

})

test("palindrome check false", () => {
    expect(palindrome("jupiter")).toBe(false)
    expect(palindrome("Adil")).toBe(false)
    expect(palindrome("schoolofcode")).toBe(false)
    expect(palindrome("olympics")).toBe(false)
 })