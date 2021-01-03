const account = {
    name: "David López Albajara",
    expenses: [],
    incomes: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },

    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        });
    },

    getAccountSummary: function () {
        let totalExpenses = 0;
        let accountBalance = 0;
        let totalIncome = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        });

        this.incomes.forEach(function (income) {
            totalIncome += income.amount;
        });

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a current acount balance of ${accountBalance} €. A total of ${totalExpenses} € in expenses and a total income of ${totalIncome} €`;
    }
};

// Expenses -> Description, Amount
// getAccountSummary -> total up all expenses -> E.G. 'David López Albajara has 1250.00 € in expenses'

account.addExpense('Rent', 350);
account.addExpense('Food', 120);
console.log(account.getAccountSummary());
account.addIncome('Salary', 1400);
console.log(account.getAccountSummary());
