class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.error("Withdrawal amount must be positive.");
    } else if (amount > this.balance) {
      console.error("Insufficient funds.");
    } else {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(`Balance: ${account.getBalance()}`); // Balance: 1300