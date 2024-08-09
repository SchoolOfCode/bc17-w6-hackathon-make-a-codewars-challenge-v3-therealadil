
![Alt text](https://www.englishclub.com/efl/wp-content/uploads/2013/11/palindrome.png)



# Kata code challenge - create a Palindrome

This challenge involves desiging and testing our very own Kata, aka a coding challenge, to be solved by other students. Using unit testing, we are able to challenge the user to write the correct function so that it passes the tests that we have set up.

![Alt text](https://snipboard.io/8VY4DG.jpg)
![Alt text](https://i.redd.it/a96sqrswk5451.jpg)

## Planning

In this challenge, I initially made a simple kata challenge which was to write a function that takes a number and returns ODD if the number was odd and EVEN if the number was even. As this was quite simple, I decided to make a more complex challenge, which was to write a function that checks if a word is a palidnrome, returning true or false if it is or is not.

### Tests

- **Basic Tests**: Check if the function returns `true` for palindromes and `false` for non-palindromes.

- **Case Sensitivity Tests**: Verify that the function handles different cases correctly, such as:
  - Lowercase
  - UPPERCASE
  - rAnDoMCAsE

No matter the case, the function should include logic to make sure all character case is the same.

### Improvements
- This could be improved by making the function work and corresponding tests to work when there are space, because at the moment the only thing that can be passed into the function is a single string with no spaces.


## The challenge

### Installation / setup

1. Clone this repository with the git clone command
2. In the terminal run 'npm install', this will install the correct packages
3. Run 'npm run test', this will run the test continiously each time you save

### Writing the function to pass the test

- Your work should be completed in the "main.js" file, this is where the function is located.
- The function will be exported to the "main.test.js" file so that the tests I have set up can be checked on it.
- There is a hint in the main.js file.
- The solution is also in a file but it is currently in .gitignore


## Screenshots
### main.js - function
![Alt text](https://snipboard.io/WZCLfU.jpg)


### main.test.js - testing 
![Alt text](https://snipboard.io/OirR9s.jpg)





# Make your own Codewars Style Challenge

In this workshop, you'll create your own programming challenge for others to solve, similar to the ones you might have tackled on Codewars. You'll write unit tests to validate solutions. Then you can share your challenge with other bootcampers for them to solve. If a submitted solution passes all your tests, it will be considered a correct solution - just like on Codewars. This is a great chance to get creative and come up with a programming challenge to stump your peers!

## 💡 OBJECTIVES FOR THE WORKSHOP

Here's a glimpse of what you'll be achieving by the end of this workshop:

- Clearly describing a problem/task that you want others to solve
- Writing unit tests to check whether their solution to your task is correct
- Present your project plan, story, and anything else you feel supports your creation process and final outcome in a document

## 🎟️ TICKETS

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Setup

Install Vitest and optionally set up an NPM `test` script that conveniently runs your tests.

You will be making one kata each, but you will be in development teams. The aim is to co-elevate each other. There are several ways you can and should look to help each other:

- Brainstorming: Helping each make your ideas better, and giving feedback to each other to add different perspectives and improve the end product
- Planning: You can help validate each others plans, and sense check in a team review the direction of your products
- Check-ins: Regular team stand-ups / check-ins will help make sure you are building and making progress together
- Support: You should aim to help each other overcome issues if one of your team is stuck and cannot Google their way out of it
- Testing: You can act as a first line user test for each others katas. You might find it a good idea to book in regular checkpoints to demo to each other and get initial feedback in quick bursts, making sure you can build in and adapt to any useful feedback before official release of your katas

### 🎫 Ticket 2 - Plan your kata

Attack this as you would any other problem - plan, plan, plan and use our agile approach to create steps that allow you to build MVPs and incrementally reach your stretch goals. Brainstorm options with a technique like Disney Ideation. Once you have a compelling challenge and story idea, start breaking it down. Think about the goals of your challenge, and the scenarios you could provide to test if people have reached those goals. Provide any examples or additional details that are necessary for someone taking on your kata to understand the problem, but don't give away so much that it removes the challenge. You want to strike a balance - not too vague but not spoon-feeding the solution either.

Write your kata's scenario in a comment in `main.js` and include the start of an exported function that your audience will use to solve it (like you've seen on the katas you've done before). If it's useful to see an example:

```js
/**
 * Hello challenger! Your task is to write a function named `transformLength` which takes in a string and returns 1 if the length of the string is even and otherwise -1.
 *
 * Your implementation should handle strings whose length is between 0 (inclusive) and 2500 (inclusive).
 *
 * A few examples:
 *    `transformLength("table")` should return -1 as the length of "table" is not even
 *    `transformLength("wizard")` should return 1 as the length of "wizard" is even
 */
export function transformLength(string) {
  // Good luck!
}
```

ℹ️ The reason for leaving the function body empty is that you want the people solving your kata to write their own implementation from scratch. Your role is to provide the overall problem statement and function skeleton. The solving and coding is up to them! Leaving an incomplete skeleton function helps point them in the right direction without giving away a full working solution.

### 🎫 Ticket 3 - Write your kata

When drafting your test cases, consider the different inputs that could be passed to the solution function and any edge cases you want to account for. You could put into practice tools such as Equivalency Partitioning, Boundary Value Analysis, and Decision Tables if its useful. Think of test values that will thoroughly cover the expected functionality. The number of tests is up to you, but aim for sufficient coverage to validate correctness.

Since you'll write tests before seeing people's solutions, focus on defining expected outputs for given inputs, without assumptions about how people actually wrote the code. You're testing for outcomes. You could follow a TDD workflow - write a failing test, then temporarily add code to pass it. Just be sure to remove the solution code before sharing the kata. This helps ensure your tests fail when logic is missing or incorrect and pass when implemented properly.

If it's useful to see an example (continuing the `checkLength` example from earlier):

```js
import { test, expect } from "vitest";
import { checkLength } from "./main.js";

test("should return -1 for strings with an odd length", () => {
  const expected = -1;
  const actual = checkLength("table");
  expect(actual).toBe(expected);
});

test("should return 1 for strings with an even length", () => {
  const expected = 1;
  const actual = checkLength("wizard");
  expect(actual).toBe(expected);
});
```

🎯 At this stage you should have a description of the problem in `main.js` and some tests in `main.test.js`.

### 🎫 Ticket 4 - Check your tests

To verify your tests, temporarily add a working implementation to the solution function in `main.js`. Check that the tests fail before implementation and pass when the function is coded correctly. This validates that your tests accurately check for both incorrect and correct solutions. Remember to remove the solution code afterwards before sharing the kata.

If it's useful to see an example (continuing the `checkLength` example from earlier):

```js
export function checkLength(string) {
  // Temporarily added the line below to check if tests pass, but will remove it before committing and pushing.
  return string.length % 2 === 0 ? 1 : -1;
}
```

### 🎫 Ticket 5 - Share your kata

Before pushing your final kata repository, be sure to remove any solution code you added for test validation. You want to provide only the kata description, skeleton function, and test cases - no actual solutions. Once ready, share your repo link in the [learn.schoolofcode.co.uk Hackathon Channel](https://learn.schoolofcode.co.uk/path-player?courseid=bc17-qe&unit=66acf966524bf23f05018063Unit) so other bootcampers can find it, clone it, implement solutions, and run your tests to check their progress. This allows them to solve the programming challenge you've created!

Share it with following format:

```
Room: REPLACE_ME_WITH_YOUR_ROOM_NUMBER
Name: REPLACE_ME_WITH_YOUR_NAME
Link: REPLACE_ME_WITH_A_LINK_TO_YOUR_PUBLIC_GITHUB_REPO_CONTAINING_THE_KATA
Overview: REPLACE_ME_WITH_A_BRIEF_DESCRIPTION_OF_WHAT_YOUR_KATA_IS_ABOUT
```

If it's not public already, remember to change the visibility of your repository to public.

### 🎫 Ticket 6 - Present you kata

Make sure you present your project in the markdown file - this will be assessed alongside your actual kata. Treat this as an asynchronous presentation - anything you would want to talk through (plans, brainstorming, final results, user feedback, etc) should go in here.

### 🎫 Ticket 7 - Complete katas from others

To solve katas created by other bootcampers, first clone their repository using the shared link. `cd` into the folder, run `npm install` to get the dependencies, then implement a solution in main.js. Execute their test cases to validate your code against their requirements. Provide feedback on the clarity of their instructions, difficulty level, and effectiveness of the tests. Engaging with each other's challenges allows everyone to learn. Make sure to critique respectfully - creating a programming challenge is difficult!

