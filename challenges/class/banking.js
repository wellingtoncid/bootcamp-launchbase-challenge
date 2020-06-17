// Application: Banking operations

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

// Add transactions
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Reports

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction

}

function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length

}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count

}

createTransaction({ type: 'credit', value: 60 })
createTransaction({ type: 'credit', value: 100 })
createTransaction({ type: 'credit', value: 300 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 90 })

console.log(user.balance) //290

console.log(getHigherTransactionByType('credit')) //300
console.log(getHigherTransactionByType('debit'))  //90

console.log(getAverageTransactionValue()) //126

console.log(getTransactionsCount()) // c3, d2

let message = ''

message = console.log(`${ user.name } your current balance is ${ user.balance }`)
message = console.log(`Your made ${user.transactions.length} transactions`)

console.table(user.transactions)
