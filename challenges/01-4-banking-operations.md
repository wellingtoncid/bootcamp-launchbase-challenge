<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Challenges 1-4: Application: Banking operations
</h3>

<blockquote align="center">“Completion of the challenges proposed in the Bootcamp LaunchBase”</blockquote>

<p align="center">

  <a href="https://linkedin.com/in/wellingtoncid">
    <img alt="Made by Wellington Cid" src="https://img.shields.io/badge/made%20by-Wellington%20Cid-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-about-the-challenge">Challenges</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the Challenge

Challenges to strengthen some concepts, among them:

- **Booleans**;
- **Organization**;
- **Standardization**;
- **Writing**;

### Project Banking Operations

Create a program to perform banking transactions on a user's account.

```js
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
```

<p>
  <img alt="Challenge1-4" src="./images/challenge1-4-banking-operations.png"></img>
</p>

<p>
  <img alt="Challenge1-4" src="./images/challenge1-4-banking-operations2.png"></img>
</p>


## :memo: License

This project is under the MIT license. See the archive [LICENSE](/LICENSE) for more details.

---

Made by [Wellington Cid](https://linkedin.com/in/wellingtoncid) with [Rocketseat](https://rocketseat.com.br) support
