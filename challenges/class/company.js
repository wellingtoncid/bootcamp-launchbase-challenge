// Contruction and print objetcs

const user = {
    name: 'Diego',
    company: {
        name: 'Rocketseat',
        color: 'Purple',
        focus: 'Programming',
        address: {
            publicplace: 'Rua Guilherme Gembala',
            number: 260
        }
    }
}


console.log(`The company ${user.company.name} is located in ${user.company.address.publicplace}, ${user.company.address.number}`)
