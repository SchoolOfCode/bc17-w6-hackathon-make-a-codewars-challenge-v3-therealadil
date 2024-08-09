import {test, expect} from "vitest"

import { oddOrEven } from "./main.js"

test("oddOrEven odd check", () => {
    expect(oddOrEven(1)).toBe("odd")
    expect(oddOrEven(3)).toBe("odd")
    expect(oddOrEven(5)).toBe("odd")
    expect(oddOrEven(7)).toBe("odd")
    expect(oddOrEven(9)).toBe("odd")
    expect(oddOrEven(11)).toBe("odd")
})

test("oddOrEven even check", () => {
    expect(oddOrEven(2)).toBe("even")
    expect(oddOrEven(4)).toBe("even")
    expect(oddOrEven(6)).toBe("even")
    expect(oddOrEven(8)).toBe("even")
    expect(oddOrEven(10)).toBe("even")
    expect(oddOrEven(12)).toBe("even")
    expect(oddOrEven(14)).toBe("even")
})