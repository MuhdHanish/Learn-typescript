class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickName?: string;
  constructor(id:number,owner:string,balance:number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }
  deposit(amount: number): void{
    if (amount <= 0) {
      throw new Error('invalid amount');
    }
    // Record a transaction
    this._balance += amount; 
  }
  getBalance(): number{
    return this._balance;
  }
}

let account = new Account(1, 'Hanish', 10);
console.log(account.getBalance())