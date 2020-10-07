const massMark = prompt("Mark's mass");
const massJohn = prompt("John's mass");
const heightMark =prompt("Mark's height");
const heightJohn = prompt("John's height");
let BMIJohn = Math.round(massJohn / (heightJohn*heightJohn));
let BMIMark = Math.round(massMark / (heightMark*heightMark));
// BMI based on m/h2 formula
console.log(BMIMark, BMIJohn);
const higherBMI  = ( BMIMark>BMIJohn ) ;
console.log(`Is Mark's BMI higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${BMIMark}. and John's BMI is ${BMIJohn}`)
alert ( `Is Mark's BMI higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`)

if (BMIMark > BMIJohn) { 
  console.log('BMI of Mark is higher than BMI of John'); 
  } else { 
       console.log('BMI of John is higher than BMI of Mark');
   }





