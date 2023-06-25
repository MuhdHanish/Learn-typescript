class Account {
  nickName?: string;
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    // Record a transaction
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) {
      throw new Error('invalid value');
    }
    this._balance = value;
  }
}

let account = new Account(1, "Hanish", 10);
account.balance = 1;
console.log(account.balance);
