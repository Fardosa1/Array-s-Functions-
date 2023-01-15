// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
{
    let ages = [3,9,23,64,2,8,28,93]; // declares an array called ages
let difference = ages[ages.length - 1] - ages [0]; // declares variable called difference, resulting in the first element minus last ellement

console.log (difference); // prints the differents!! 
}

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)
let ages = [3,6,23,64,2,8,28,93];
ages.push(100) // pushes a new number to end of the array!
let difference = ages [ages.length - 1] - ages [0];
console.log (difference); // prints the diffrence of the new number minus the firsts 

//1c Use a loop to iterate through the array and calculate the average age
{
    let totalAge = 0; // declares variable called ages. initial value = 0
for (let i = 0; i < ages.length; i++) // i is initilized to 0, go on until i is not less than the length of ages variable.
totalAge += ages [i] // adds number of the array to the totalAge variable! 
let averageAge = totalAge / ages.length;// takes sum of totalAge and divides by the length of the ages array which is now called averageAge
console.log (averageAge); //  prints value on averageAge 

}

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // names variable! 
//2a. Use a loop to iterate through the array and calculate the average number of letters per name
{
    let totalLetters = 0 // variable totalLetters with starting value of 0!!! :)
    for (let i = 0; i < names.length; i++) // i starts at 0, goes on until i isn't less names.length array.
    totalLetters += names[i].length; // adds length of the elements in the array to totalLetters. So now totalletters has sum of all!!! :)
 let averageLetter = totalLetters / names.length; // calculates average now! divies the sum by length!
    console.log (totalLetters) //prints value of totalLetter!
    console.log (averageLetter) // prints value of averageLetter! :)
} 
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    
{
 let totalLetters = ''// totalLetter = empty string :(
 for (let i = 0; i < names.length; i++) // i starts at ZERO, loop goes till i isn't less then names.length, increment by 1
 
totalLetters += names [i] +", " //adds eleent of array at i to totaLetters, "" now totalLetter contains all names in array by space and comma

 let averageLetter = totalLetters / names.length; // now av. number of letters per name / by number of elements in array
 console.log (totalLetters) // print the value of totalLetters

}

//3.How do you access the last element of any array?
let studentPromineo = ['Dowsaa', 'Hamda', 'Kamal', 'Abdi', 'Hidaayah'];
console.log (studentPromineo[4]); // last element of the array print

//4. How do you access the first element of any array?
console.log (studentPromineo [0]) // first element of array print!

 //5. Create a new array called nameLengths
 
 let nameLengths = [] // creates array that empty :( 
{
 //5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array;
for (let i = 0; i < names.length; i++){ // iterates over array, i starts at 0, goes onn till i isn't less than names array!
    nameLengths[i] = names[i].length // takes index of current names array. 
}
console.log(nameLengths) // prints length of array
}
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array

let sumNames = 0 // variabled called sum with value of 0
for (let i = 0; i < names.length; i++){ // i starts as 0 and continues to add until i isnt less than names array
    sumNames += names[i].length; // takes length of variable and adds to sumNames variable
    
}
console.log (sumNames) // prints total sum of the length of all the names added together :)

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function helloDowsaa (word, n){ // funtion called helloDowsaaa! with paramaters word and n
    myResult = "" // empty string called myResult

for (let i = 0; i <= n; i++) // i starts at 0 and goes on till i isn't less than or equal to n
    myResult += word;// whenever it iteriates through it takes word parameter and addds to variable myResult
    console.log (myResult); // prints the new value of myResult
}
helloDowsaa ("Hello", 3); // function is now called with the 2 arguments Hello and 3!

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

   function printFullName (firstName, lastName){ // function called printFullName with 2 paramaters

  console.log(firstName + " " + lastName) // concatenation of 2 paramters with space 

   }
printFullName ('Dowsaa','Ahmed'); // prints arguments! 

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
flag = false // variable called flag with value of false :(
function arrayNumbers(numbers){ // paramters called number
  sum = 0 // sum variable with value of zerooooo!
  for (let i=0; i<numbers.length; i++){ // for loop with i equal to 0 but continues to iterate till it isnt zero and not less than array numbers length
    sum += numbers[i]  //calculate sum of array
  }

  if(sum > 100){ // checks value of sum!! when its greater? 
    flag = true // flag = true!
    return flag // so retyrn flag!

  }
  }

arrayNumbers([1, 2, 4, 6, 204]); // functions is called using this argument !
console.log(flag) // because sum is greater than 100 it returns true!!

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array

function totalNumber (numbers){ // function called totalNumber with a paramater called number
    totalAll = 0; // totalAll variable is set to 0
    for (let i = 0; i < numbers.length; i++){  // i starts at 0! as long as i is less than numbers length it continies to iterate through
        totalAll += numbers[i] // the takes amount of numbers and adds to totalAll variable
    }
    totalAll = totalAll / numbers.length; // divies totalAll variable by length of all # in the array and calculates average
    
}
totalNumber ([6,2,3,8,9]); // calls functions with arguments
console.log (totalAll)  // prints totalAll! averge of all # in array

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function trueOrFalse (Hamdaah, Hinda){ // function called trueorfalse with 2 paramaters
    let add = 0 // variable called add, value of 0
    let add1 = 0 // varaible called add1 = 0
    for (let i = 0; i < Hamdaah .length; i++){// this loop iterates over Hamdaah array and i = 0! continues to iterate until i is not less than Hamdaah. Takes number of index and adds to add variabke.
        add += Hamdaah[i]; // adds to add variable!
    }
    for (let i = 0; i < Hinda.length; i++){ // same process but through second array ^
        add1 += Hinda[i];
    }

    const average = add / Hamdaah.length;// decalres average variable for average of Hamdah 
    const average1 = add1 / Hinda.length; // decalres average1 varaible for average of Hinda array divided by length
    
}

let Hamdaah = [8,8,8,8,8]
let Hinda = [2,2,2,2,]
console.log (trueOrFalse(Hamdaah, Hinda)); 



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50){
        return true;

    }
    else {
        return false;
    }

}

console.log (willBuyDrink(true, 18));
console.log (willBuyDrink(false, 11));

//13. Create a function of your own that solves a problem
function trueOrFalse (Kamal, Kadar){
    let sum= 0
    let sum1 = 0
    for (let i = 0; i < Kamal .length; i++){
        sum += Kamal[i];
    }
    for (let i = 0; i < Kadar.length; i++){
        sum1 += Hinda[i];
    }

    const average = sum / Kadar.length;
    const average1 = sum1 / Kadar.length;
    return Hamdaah > Hinda;
}

let Kamal = [1,3,5,7,9]
let Kadar = [2,4,6,8,10]
console.log (trueOrFalse(Hamdaah, Hinda)); 
