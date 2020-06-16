// Contruction and print objetcs

const usuario = {
    nome : 'Diego',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco: {
            logradouro: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}


console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.logradouro}, ${usuario.empresa.endereco.numero}`)
