// Hello Challenger 

// Your mission is to create a function named `palindrome` that takes a string as input and returns `true` if the string is a palindrome, and `false` otherwise. 

// Palindrome/ˈpalɪndrəʊm/: a word, phrase, or sequence that reads the same backwards as forwards, e.g. racecar 🏎️

// Examples to guide you:
//      - `palindrome("TENET")` should return `true` because "TENET" is a palindrome. 🔄
//      - `palindrome("icecream")` should return `false` because "icecream" is not a palindrome. ❌

// Note: The function should be case-insensitive, treating "Racecar" and "racecar" as the same. 

//Good luck. 🚀👽🥶


export function palindrome(string) {
    let upperCaseString = string.toUpperCase()
    for (let i = 0; i < upperCaseString.length; i++) {
        if (upperCaseString[i] !== upperCaseString[upperCaseString.length - 1 - i]) {
            return false
        }
    }
    return true
}


// SCROLL FOR HINT ⬇️⬇️
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// A 'For' loop could be useful
