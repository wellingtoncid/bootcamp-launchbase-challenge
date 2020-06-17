// Retirement Calculation

const name = "Stivenson";
const gender = "M";
const age = 53;
const contribution = 27;

const calculateContribution = age + contribution

const menCanRetire = age == 'M' && contribution >= 35 && calculateContribution >= 95
const womenCanRetire = age == 'F' && contribution >= 30 && calculateContribution >= 85

if (menCanRetire || womenCanRetire) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you can't retire. You still need to work harder!`)
}

