import {test, expect} from "vitest"

import { kata } from "./main.js"

test("kata odd", () => {
    expect(kata(1)).toBe("odd")
})

test("kata even", () => {
    expect(kata(2)).toBe("even")
})