"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('invalid value');
        }
        this._balance = value;
    }
}
let account = new Account(1, "Hanish", 10);
account.balance = 1;
console.log(account.balance);
//# sourceMappingURL=index.js.map