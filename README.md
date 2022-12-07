# Functional Idea Conversion

The purpose of this very small repo is to provide the opprotunity to refactor a
minimal class into a pure function, using pre-written tests.

## Setup Instructions

1) Clone the repo: `git clone git@github.com:wvmitchell/idea.git`
2) Navigate in & install dependecies: `cd idea && npm i`
3) Run the existing tests: `npm test`
4) They should all be passing

## Your Goals

### Level 1

Take a look at the idea.js file. Your goal is to rewrite this file such that the
`idea` you are exporting is declared as a `function` rather than a class. For
this level, do not use arrow functions. When you're finished, the tests should
all still pass. You will not need to modify any tests.

### Level 2

Your goal for level 2 is the same as above, except you should also not use the
`function` keyword. You will need to use an arrow function instead. When you are
finished, the tests should all pass. Again, you will not need to modify any
tests.
