//Create your function below this line.
function bmiCalculator(weight, height){
    return weight / (height**2);
}

var bmi = bmiCalculator(65, 1.8);

if (bmi < 18.5){
    console.log(`Your BMI is ${bmi}, so you are underweight.`);
}

if (bmi <= 24.9){
    console.log(`Your BMI is ${bmi}, so you have a normal weight.`);
}

if (bmi > 24.9){
    console.log(`Your BMI is ${bmi}, so you are overweight.`);
}


//The first parameter should be the weight and the second should be the height.


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
