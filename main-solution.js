// SOLUTION ✅
export function palindrome(string) {
    let upperCaseString = string.toUpperCase()
    for (let i = 0; i < upperCaseString.length; i++) {
        if (upperCaseString[i] !== upperCaseString[upperCaseString.length - 1 - i]) {
            return false
        }
    }
    return true
}



// SOLUTION (COMMENTED) ✅
export function palindrome(string) {

    // Normalise the case so every character is the same
    let upperCaseString = string.toUpperCase()

    // Loop through each character in the string with a For loop, i increments by 1 each loop (i++)    
    for (let i = 0; i < upperCaseString.length; i++) {

        // Compare the left character with the right character to see if they are not the same
        // upperCaseString[i] is the left most character
        // upperCaseString[upperCaseString.length - 1 - i] is the right most character
        // After each loop, upperCaseString[i] will move more right and string[string.length - 1 - i] will move more left
        if (upperCaseString[i] !== upperCaseString[upperCaseString.length - 1 - i]) {

            // If any characters don't match return false, because therefore the word is not a palindrome
            return false;

        }
    }

    // If the loop has finished and there has been no false returns, it means the word is a palindrome, so return true
    return true;

}