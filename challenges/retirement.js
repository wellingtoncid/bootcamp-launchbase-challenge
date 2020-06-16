// Retirement Calculation

const nome = "Michely";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoContribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >=95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >=85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log (`${nome}, você pode se aposentar!`)
} else {
    console.log (`${nome}, você ainda precisa trabalhar mais!`)
}

