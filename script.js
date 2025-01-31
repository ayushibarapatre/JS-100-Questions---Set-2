// Here is a collection of 100 JavaScript questions, divided into 
// groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)

// 1.	Log your name and favorite hobby to the console.
// console.log("Ayushi Barapatre")
// console.log("gardening")

// 2.	Perform and log the result of 45 * 2 - 10.
// console.log((45*2)-10)

// 3.	Use console.log() to display the current year.
// console.log(2025)

// 4.	Create two variables for first and last name. Concatenate and log them.
// let firstName = "Ayushi"
// let lastName = "Barapatre"
// console.log(firstName + " " + lastName)

// 	5.	Track the value of a variable by logging it before and after updating.
// let a = 5;
// console.log(a)
// a = 3+5
// console.log(a)

// 	6.	Use console.error() to simulate an error message.
// console.error("hlw")

// 	7.	Log the square of the number 12 to the console.
// let a = 2
// console.log(a**2)

// 	8.	Print the type of a variable holding the value true.
// let a = true
// console.log(typeof a)

// 	9.	Create a variable holding your age and log whether it’s greater than 18.
// let age = 13
// if(age>=18){
//     console.log("its greater than 18")
// }

// 10.	Log the result of 100 / 0 and observe the output.
// console.log(100/0)

// 2. Variables and Data Types (10 Questions)
// 11.	Declare a variable using let and log its value.
//  let a = 5
//  console.log(a)

// 12.	Create a constant to store the value of PI and log it.
// const pi = 3.14
// console.log(pi)

// 13.	Reassign a value to a variable declared with let and log the result.
// let a =5
// a = 10
// console.log(a)

// 14.	Check the type of null and log it.
// let a = null
// console.log(typeof a)

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
// let a = "25"
// console.log(typeof a)

// 16.	Use typeof to check the type of a boolean variable.
// let bool = false
// console.log(typeof bool)

// 	17.	Create three variables of types string, number, and boolean, and log their values.
// let string = "Ayushi"
// let number = 12
// let bool = true
// console.log(string , number , bool)

// 18.	Declare a variable without assigning a value. Log its type.
// let a ;
// console.log(typeof a)

// 	19.	Create a variable with undefined and log its type.
// let a = undefined
// console.log( typeof a)

// 20.	Use const to create an array. Try reassigning the array and observe the error.
// const arr = [2,3,4,5]
// arr = [2,39,6]
// console.log(arr)

// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
// for(let i =0;i<51; i++){
//     console.log(i)
// }

// 22.	Use a while loop to sum the numbers from 1 to 10.
// let i =0
// while(true){

//     console.log(i)
//     if(i === 10)
//         break;
//     i++
// }

// 23.	Create a for...of loop to log each character of the string "JavaScript".
// 24.	Write a for loop that skips even numbers between 1 and 20.
//  for(let i = 0; i< 21 ; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i)
//  }

// 25.	Use a do...while loop to log numbers from 5 to 1.
// let i =5
// while(true){

//     console.log(i)
//     if(i === 0)
//         break;
//     i--
// }

// 26.	Create a for loop that calculates the factorial of 5.
// let n = 5
// let res = 1
//  if(n==0 && n==1){
//     console.log("factorial is not defined for 1zero and one")
//  }
//  else{
//     for(let i = 2; i<= n ; i++){
//         res = res*i
//     }
//     console.log(res)
//  }

// 27.	Write a nested loop to print a 3x3 grid of numbers.

// 28.	Use a for loop to reverse an array [1, 2, 3, 4].
// let arr = [1,2,3,4]
// console.log(arr.reverse())

// 29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let n = 1
// while(true){
//     if(n  == 100){
//         break;
//     }
// else if(n % 5 ==0){
//     console.log(n)
// }

// n++;
// }

// 30.	Use a for...in loop to iterate over an object and log its keys.
// 4. Arrays (10 Questions)

// 31.	Create an array of your top 5 favorite movies and log it.
//  let arr = ["bazigae","vivah ", "threeidiot", "love" , "janvar"]
//  for(let i =0; i<arr.length;i++)
//  console.log(arr[i])

// 32.	Find and log the second element of an array.
// let arr = [1,2,3,4,5]
//   console.log(arr[1])

// 33.	Add two new elements to the start of an array using .unshift().
// let arr = [1,2,3,4,5]
// arr.unshift(0)
// for(let i = 0; i< arr.length ; i++){
//     console.log(arr[i])

// }

// 	34.	Remove the last element of an array and log the updated array.
// let arr = [1,2,3,4,5]
// arr.pop()
// for(let i =0; i<arr.length;i++){
//     console.log(arr[i])
// }

// 35.	Use .slice() to extract the first three elements of an array.
// let arr = [1,2,3,4,5,]
// let arrslice = arr.slice(0,3)
// console.log(arrslice)

// 36.	Find the index of a specific element in an array using .indexOf().
// let arr = ["apple","banana","orange","grapes","cherry"]
// console.log(arr.indexOf("cherry"))


// 	37.	Check if a value exists in an array using .includes().
// let arr =[1,3,4,2,4]
// if(arr.includes(3)){
//     console.log("3 is present in arr ")
// }
// else{
//     console.log("3 is not present in arr")
// }

// 38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2))

// alternate solution
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log([...arr1 , ...arr2])

// 39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// let arr = [5,2,9,1]
// console.log(arr.sort())


// 40.	Write a program that creates a copy of an array without mutating the original.
// let arr = [1,2,3,4,5]
// let copy = arr.slice()
// copy.unshift(0)
// console.log(copy)

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.
// function abcd(a){
//    if(a%2 == 0){
//     console.log(a ,"is even")
//    }
//    else{
//     console.log(a ,"is odd")
//    }

// }
// abcd(2)

// 	42.	Create a function to calculate the area of a circle with a given radius.
// function abcd(r){
//     const area = Math.PI + Math.pow(r ,2)
//     return area.toFixed(2);

// }
// console.log(abcd(3))
// 	43.	Write a function that accepts an array and returns the sum of its elements.
// function abcd (arr){
//    let sum = 0;
//    for(let i = 0; i<arr.length ; i++){
//     sum = sum +arr[i]
//    }
//    return sum ;
// }
// console.log(abcd([2,3,4,5]))
// 	44.	Create a function that checks if a string starts with a specific character.
// function string( str , char){
//      return str[0] === char
// }
// console.log(string("hello" , "i"))
// 	45.	Write a function to find the maximum of two numbers.
// function max(a,b){
//    return (a>b)?a:b
// }
// console.log(max(3 , 4))
// 	46.	Create a function that takes a number and returns its factorial.
// function fact (num){
//    let factorial =  1;
//    for(let i = 1; i<= num ; i++){
//  factorial = factorial* i
//    }
//    return factorial
// }
// console.log(fact(5))
// 	47.	Write a function that accepts a string and returns its reverse.
// function string(str){
//      return str.split("").reverse().join("")
// }
// console.log(string("hello"))
// 	48.	Create a function to find the largest number in an array.
// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }
//     let largest = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]; 
//         }
//     }
//     return largest;
// }
// console.log(findLargestNumber([3, 7, 1, 8, 4])); 


// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").
// function toKebabCase(str){
//     return str.toLowerCase()
// }
// console.log(toKebabCase("Hello World"))
// 	50.	Create a function that logs "Hello, World!" every time it is called.
// function abcd (){
//     console.log("hello world")
// }
// abcd()
// abcd()
// abcd()
// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.
//  function check (num){
//     if(num > 0){
//         console.log("positive")
//     }
//     else if(num <0){
//         console.log("negative")
//     }
//     else{
//         console.log("zero")
//     }
//  }
//  check(0)
// 	52.	Create a program to check if a year is a leap year.
// function leap (yr){
//     if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
//         console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }
// }
// leap(2024)
// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// function vote(age){
//     if(age>18){
//         console.log(" can vote")
//     }
//     else{
//         console.log("can't vote")
//     }
// }
// vote(34)
// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// function getDayName(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             console.log("monday")
//             break;
//         case 2:
//             console.log("tuesday")
//             break;
//         case 3:
//             console.log("wednesday")
//             break;
//         case 4:
//             console.log("thursday")
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Invalid day number");

//     }
// }
// getDayName(3)


// 	55.	Write a program to check if a number is divisible by 3 and 5.
// function cheak(num){
//     if(num % 3 == 0 && num % 5 ==0){
//         console.log("divisible by 3 and 5")
//     }
//     else{
//         console.log("not divisible by 3 and 5")
//     }
// }
// cheak(5)
// 	56.	Create a program to check the grade of a student based on marks.
// function grade(mark){
//     if(mark >= 90){
//         console.log("grade A")
//     }
//     else if(mark >= 70){
//         console.log("grade B")
//     }
//     else if(mark >= 50){
//         console.log("grade C")
//     }
//     else if(mark >= 30){
//         console.log("grade D")
//     }
//     else{
//         console.log("FAIL")
//     }
// }
// grade(70)
// 	57.	Write an if condition to compare two strings and log if they are equal.
// function string (str1 , str2){
//     if(str1 === str2 ){
//         console.log("equal")
//     }
//     else{
//         console.log("not equal")
//     }
// }
// string("manda" , "manda")
// 	58.	Use a ternary operator to check if a number is even or odd.
// function ternary (a,b){
//     (a% 2 ==0 && b%2==0) ?console.log("even") :console.log("odd")
// }
// ternary(3,2)
// 	59.	Write a program to find the largest of three numbers using if...else.
// function findLargest(a,b,c){
//     if(a >= b && b>= c){
//         console.log(a + "is the largest")
//     }
//     else if(b >= a && b>= c){
//         console.log(b + "is the largest")
//     }
//    else{
//         console.log(c + "is the largest")
//     }
// }
// findLargest(3,6,8)
// 	60.	Create a program to calculate the discount based on the price of an item.
// function discount(price){
// *********************************************************************************
// }


// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// let person = {
//     name : "Ayushi" ,
//     age : "20",
//     city : "Nagpur"
// }
// console.log(person)
// 	62.	Add a new property isStudent to the object above and set it to true.
// let person = {
//     name : "Ayushi" ,
//     age : "20",
//     city : "Nagpur"
// }
// person.isStudent = true ;
// console.log(person)
// 	63.	Access and log the value of the city property using bracket notation.
    // let person = {
    //     name : "Ayushi" ,
    //     age : "20",
    //     city : "Nagpur"
    // }
    // person.isStudent = true ;
    // console.log(person["city"])
// 	64.	Delete the age property from an object and log the updated object.
    // let person = {
    //     name : "Ayushi" ,
    //     age : "20",
    //     city : "Nagpur",
    //     isStudent : true
    // }
    // delete person.age
    // console.log(person)
// 	65.	Write a function that accepts an object and logs all its keys.
// function object(obj){
//     console.log(Object.keys(obj))
// }
// object({
//     name : "Ayushi" ,
//         age : "20",
//         city : "Nagpur",
//         isStudent : true
// })
// 	66.	Create an array of objects representing books with title and author properties.
// let books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" },
//     { title: "Moby Dick", author: "Herman Melville" }
//   ];
//     console.log(books);
	// 67.	Access and log the author of the second book in the array.
// let books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { title: "1984", author: "George Orwell" },
//     { title: "Moby Dick", author: "Herman Melville" }
//   ];
//   console.log(books[1].author)
// 	68.	Write a program to check if a specific key exists in an object.
// **************************************************************************************8
// 	69.	Create a function to count the number of keys in an object.
//  function countKey(obj){
//     return Object.keys(obj).length
//  }
//  console.log(countKey({
//     name : "Ayushi",
//     age : "20",
//     city : "nagpur"
//  }))
// 	70.	Use Object.assign() to merge two objects.
// let person = {
//     name : "ayushi",
//     age : "20"
// }
// let address =  {
//     city : "nagpur",
//     state : "maharastra"

// }
// let mergeObject = Object.assign({},person,address)
// console.log(mergeObject)

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
//   let str = "ayushi"
//   console.log(str.length)
// 	72.	Extract the last 4 characters of a string.
// let str = "ayushi"
// console.log(str.slice(-4))
// 	73.	Convert a string to lowercase and log it.
// let str = "AYUSHI"
// console.log(str.toLowerCase())
// 	74.	Split a sentence into words using .split() and log the result.
// let str = "hyy!HereAyushiBarapatre"
// console.log(str.split(" "))
// *********************************************************************************8
// 	75.	Find the position of the first occurrence of "a" in a string.
//  let str = "klfmkmvaumau"
//  console.log(str.indexOf("a"))

// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// let str = " I Love Javascript"
// console.log(str.replace("Javascript" , "JS"))

// 	77.	Repeat a string 3 times using .repeat().
// let str = "heyy "
// console.log(str.repeat(3))

// 	78.	Create a function that checks if a string contains a specific word.
// function abcd(str , word){
//     return str.includes(word)
// }
// ***************************************************************
// 	79.	Write a program to remove whitespace from both ends of a string.
// let str = "       hello world    "
// console.log(str.trim())
// 	80.	Create a function to count the number of vowels in a string.


// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// function abcd(arr){
//    for(let i = 0; i< arr.length ; i++){
//      if(arr[i] % 2 === 0){
//         console.log(arr[i])
//      }
//    }
   
// }
// abcd([1,2,3,4,5,6])
// 	82.	Create a program to count the occurrences of a specific value in an array.
// let arr = [2,3,4,3,,5,3,5,4,4,3,5,4,3,5]
// let count = 0;
// for(let i = 0; i <arr.length; i++){
//     if(arr[i] == 5){
//         count++;
//     }
// }
// console.log(count)
// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// function checkPalindrome(str){
//    if( str === str.split("").reverse().join("")) {
//     console.log(`${str} is a palindrome`)
//    }
//    else {
//     console.log(`${str} is not a palindrome`);
//    }
// }
// checkPalindrome("madam")
// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// 	85.	Write a function that returns the square of each number in an array.
// function square(arr){
//   for(let i = 0; i<arr.length ; i++){
//     console.log(Math.pow(arr[i],2))
//   }
// }
// square([2,3,4,5,6])
// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// let sum = 0
// for(let i = 0; i <51 ;i++){
//     if(i % 2 != 0){
//         sum = sum + i;
//     }
// }
// console.log(sum)

// 	87.	Create an object representing a person and log their full name.
// let person = {
//     firstname : "Ayushi ",
//     lastname : " Barapatre",
//     fullname : function (){
//         return `${this.firstname}${this.lastname}`
//     }
// }
// console.log(person.fullname())
// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// function convert(str){
//      let num = Number(str)
//      console.log(num+5)
// }
// convert("10")
// 	89.	Write a program to reverse an array without using .reverse().
// let arr = [1,2,3,4,5]
// for(let i = arr.length-1 ; i >= 0 ;i--){
//    console.log(arr[i])
// }

// or

// let arr = [1,2,3,4,5]
// let reverseArr = []
// for(let i = arr.length-1 ; i >= 0 ;i--){
//     reverseArr.push(arr[i])
// }
// console.log(reverseArr)

// 	90.	Create a program to check if an array is empty.
// let arr = [0]
// if (arr.length === 0) {
//     console.log("The array is empty.");
// } else {
//     console.log("The array is not empty.");
// }


// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// 	92.	Write a program to find the smallest number in an array.
// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// 	94.	Use a try...catch block to handle division by zero.
// 	95.	Write a program to find the index of the first vowel in a string.
// 	96.	Create a function that accepts an array and returns only unique values.
// 	97.	Write a program to merge two sorted arrays into one sorted array.
// 	98.	Create a function to count the number of words in a string.
// 	99.	Write a program to toggle a button’s background color when clicked.
// 	100.	Write a function to check if all elements in an array are greater than a specific value.

