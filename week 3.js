// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
{
    let ages = [3,9,23,64,2,8,28,93];
let difference = ages[ages.length - 1] - ages [0];
console.log (difference);
}
// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)
let ages = [3,6,23,64,2,8,28,93];
ages.push(100)
let difference = ages [ages.length - 1] - ages [0];
console.log (difference);

//1c Use a loop to iterate through the array and calculate the average age
{
    let totalAge = 0;
for (let i = 0; i < ages.length; i++)
totalAge += ages [i]
let averageAge = totalAge / ages.length;
console.log (averageAge);

}

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a. Use a loop to iterate through the array and calculate the average number of letters per name
{
    let totalLetters = 0
    for (let i = 0; i < names.length; i++)
    totalLetters += names[i].length;
 let averageLetter = totalLetters / names.length;
    console.log (totalLetters) 
    console.log (averageLetter)
} 
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    
{
 let totalLetters = ''
 for (let i = 0; i < names.length; i++)
 
totalLetters += names [i] +", "

 let averageLetter = totalLetters / names.length;
 console.log (totalLetters) 

}

//3.How do you access the last element of any array?
let studentPromineo = ['Dowsaa', 'Hamda', 'Kamal', 'Abdi', 'Hidaayah'];
console.log (studentPromineo[4]);

//4. How do you access the first element of any array?
console.log (studentPromineo [0])

 //5. Create a new array called nameLengths
 
 let nameLengths = []
{
 //5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array;
for (let i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length
}
console.log(nameLengths)
}
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array

let sumNames = 0
for (let i = 0; i < names.length; i++){
    sumNames += names[i].length;
    
}
console.log (sumNames)

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function helloDowsaa (word, n){
    myResult = ""

for (let i = 0; i <= n; i++)
    myResult += word;
    console.log (myResult);
}
helloDowsaa ("Hello", 3);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

   function printFullName (firstName, lastName){

  console.log(firstName + " " + lastName)

   }
printFullName ('Dowsaa','Ahmed');

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
flag = false
function arrayNumbers(numbers){
  sum = 0
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i]  //calculate sum of array
  }

  if(sum > 100){
    flag = true
    return flag

  }
  }

arrayNumbers([1, 2, 4, 6, 204]);
console.log(flag)

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array

function totalNumber (numbers){
    totalAll = 0;
    for (let i = 0; i < numbers.length; i++){ 
        totalAll += numbers[i]
    }
    totalAll = totalAll / numbers.length;
    
}
totalNumber ([6,2,3,8,9]);
console.log (totalAll)

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


//13. Create a function of your own that solves a problem