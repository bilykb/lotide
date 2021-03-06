
# Lotide 
###### version 1.0.1
---
###### A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Brett Bilyk](https://github.com/bilykb)
###### <span style="color:red">**Beware:  These functions were created while studying Web Development at Lighthouse Labs and is _not_ intended for use in production-grade software. Use at your own risk.**</span>

---
## What is Lotide?
---

>Lotide is  a clone of the [Lodash](https://lodash.com) JavaScript library to practice creating various types of functions using JavaScript.

---
## Summary
---

>This repository contains all the functions created over the course of the Lotide project while studying at [Lighthouse Labs](https://www.lighthouselabs.ca/). Functions will be organized by the week of learning in which they were created, and referred to in order of creation.

---
## Usage
---

**Install it:** `npm install @bilykb/lotide`

**Require it:** `const _ = require('@bilykb/lotide');`

**Call it:** `const results = _.tail([1, 2, 3]) // => [2, 3]`

---
## Table of Contents
---

| [Week 1 Functions](#week1) | [Week 2 Functions](#week2) |
|--- | --- |
| assertEqual.js | middle.js |
| head.js | countOnly.js
| tail.js | countLetters.js |
| eqArrays.js | findKeyByValue.js |
| assertArraysEqual.js | eqObjects.js |
| without.js | assertObjectsEqual.js |
| flatten.js | map.js |
| | takeUntil.js
| | findKey.js |

---
## Contents
---

### <a name="week1">Week 1 Functions:</a>
 [assertEqual.js](https://github.com/bilykb/lotide/blob/master/assertEqual.js)
* A function which accepts two primitive data types as arguments: actual outcome and expected result. The function then prints to console whether the outcome matches the expected result with an assertion statement

[head.js](https://github.com/bilykb/lotide/blob/master/head.js)
* a function which accepts an array as an argument, and returns the head of the array
  
[tail.js](https://github.com/bilykb/lotide/blob/master/tail.js)
* a function which accepts an array as an argument, and returns the tail of the array

[eqArrays.js](https://github.com/bilykb/lotide/blob/master/eqArrays.js)
* a function which compares two arrays to determine if they are similar in elements and length
  
[assertArraysEqual.js](https://github.com/bilykb/lotide/blob/master/assertArraysEqual.js)
* a function which utilizes aqArrays.js to compare two arrays for an exact match, then prints to console a pass or fail assertion
  
[without.js](https://github.com/bilykb/lotide/blob/master/without.js)
* a function that accepts two arrays: the source array, and an "itemsToRemove" array.  It returns a new array with the items removed.

[flatten.js](https://github.com/bilykb/lotide/blob/master/flatten.js)
* a function that accepts a nested array with one level of nesting as an argument, and returns a single "flattened" array

### <a name="week2">Week 2 Functions:</a>

[middle.js](https://github.com/bilykb/lotide/blob/master/middle.js)
 * A function that accepts an array, and returns the middle index value(s) in a new array

[countOnly.js](https://github.com/bilykb/lotide/blob/master/countOnly.js)
* a function that accepts an array of names, and an object of names you wish to make a tally of.  Returns a new object with a name count

[countLetters.js](https://github.com/bilykb/lotide/blob/master/countLetters.js)
* a function that accepts a string of characters.  It then returns an object with a tally of characters

[letterPositions.js](https://github.com/bilykb/lotide/blob/master/letterPositions.js)
* a function that accepts a string of characters.  It then returns an object with an array for the index of each character present

[findByKeyValue.js](https://github.com/bilykb/lotide/blob/master/findKeyByValue.js)
 * a function that searches for a key in an object

[eqObjects.js](https://github.com/bilykb/lotide/blob/master/eqObjects.js)
* a function which compares two objects to see if they are similar

[assertObjectsEqual.js](https://github.com/bilykb/lotide/blob/master/assertObjectsEqual.js)
 * function which takes two parameters, the actual object, and the expected object, and returns an assertion passed or failed

[map.js](https://github.com/bilykb/lotide/blob/master/map.js)
 * this function is a copy of the higher order map() method. map() creates a new array populated with results of a callback function on every element in a specified array

 [takeUntil.js](https://github.com/bilykb/lotide/blob/master/takeUntil.js)
  * the function takeUntil() will collect items from a provided array until the callback function provided returns a truthy value

[findKey.js](https://github.com/bilykb/lotide/blob/master/findKey.js)
 * this function accepts an object and callback function. It iterates through the object and returns the first key for which the callback returns a truthy value. If not, returns undefined.
