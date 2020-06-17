//IMC calculation

const nome = 'Carlos'
const peso = 90
const altura = 1.88

const imc = peso / (altura * altura)

let message = ""

if (imc > 30) {
    message = `${nome}, seu imc é ${imc}, você está acima do peso`
} else {
    message = `${nome}, seu imc é ${imc}, seu peso está controlado`
}

console.log(message)

