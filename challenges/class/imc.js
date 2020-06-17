// BMI calculation

const name = 'Michely'
const weight = 73
const height = 1.63

const bmi = weight / (height * height)

let message = ''

if (bmi > 25) {
    message = `${name}, your BMI is ${bmi}, are you overweight. Pay attention!`
} else {
    message = `${name}, your BMI is ${bmi}, your weight is controlled. Very good!`
}

console.log(message)

