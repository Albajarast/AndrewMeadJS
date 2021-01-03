let myAccount = {
    name: 'David López',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount;
}

// addIncome
let addIncome = function (account, amount) {
    account.income += amount;
}

// resetAccount
let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary
// "Account for Andrew has $900. $1000 in income. $100 in expenses"

let getAccountSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses`;
}

addExpense(myAccount, 100);
addIncome(myAccount, 1000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
