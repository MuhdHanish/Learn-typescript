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
  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Hanish", 10);
console.log(account.getBalance());
