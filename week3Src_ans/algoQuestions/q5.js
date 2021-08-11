/*
How do you determine if a word is a palindrome (i.e. racecar)?

1. check that the word is a string (datatype) -> validation
2. check that the word doesn't contain a number (numbers are not palindromes)
3. convert the word to all lowercase (or uppercase) -> case insensitive
4. check each character of the word to see if it matches with its corresponding
    item from the end (i.e. first with last)
    a. loop over the word
    b. compare the character with its opposite character (i.e. first with last)
        i. if it doesn't match, exit the loop (not a palindrome)
        ii. if all characters match, it is a palindrome
*/
// Code for the function
"use strict";
// TODO: Define a function "isPalindrome" with one parameter, "word".

function isPalindrome(word)
{
    // validation (two steps)
    // check if parameter is a string
    // returns false if it is a number
    if (typeof word !== "string" || !isNaN(word))
    {
        return false;
    }

    // convert to lowercase
    word = word.toLowerCase();
    // check each character
    for (let i = 0; i < Math.floor(word.length / 2); i++)
    {
        let j = word.length - 1 - i;
        if (word[i] !== word[j])
        {
            return false;
        }
    }
    return true;
}

// Code for testing
// Define and initialise variables for testing

let testArray = ["racecar","RACEcar","madam","acrobat", "636", 636];
// TODO: Define a for loop to loop over the values in the "testArray"
// Note: the next three indented TODOs are to be inside the for loop
for (let i in testArray)
{
    // TODO: Define and initialise the variable "result" to hold the 
    //       output from the function call
    let result = "";

    // TODO: Inside the loop, make a call to the isPalindrome function and 
    //       pass as an argument, the item at the current index.
    result = isPalindrome(testArray[i]);

    // TODO: Print the "result" to the console following the output format:
    //       inputWord: [ result ]
    //       i.e. racecar: [ true ]
    console.log(`${testArray[i]}: [ ${result} ]`);

}


/*
output:
racecar: [ true ]
RACEcar: [ true ]
madam: [ true ]
acrobat: [ false ]
636: [ false ]
636: [ false ]
*/