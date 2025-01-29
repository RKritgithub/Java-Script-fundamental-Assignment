// answer6
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi.toFixed(2); // Rounds to 2 decimal places
}
let weight = 70; 
let height = 1.75; 

let bmi = calculateBMI(weight, height);
console.log(`Your BMI is: ${bmi}`);
