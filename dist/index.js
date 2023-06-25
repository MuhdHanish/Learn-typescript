"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('invalid amount');
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'Hanish', 0);
account.nickName = 'muhdhanish';
account.deposit(100);
console.log(account.nickName);
//# sourceMappingURL=index.js.map