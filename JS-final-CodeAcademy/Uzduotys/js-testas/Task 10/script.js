/* ------------------------------ TASK 10 ----------------------------------------------------------------
Sukurkite klasę "BankAccount" ir jos išvestines klases "SavingsAccount" ir "CheckingAccount" (naudokite ES6).

Klasė "BankAccount":
Savybės: accountNumber, ownerName, balance
Metodai: deposit(amount), withdraw(amount), getBalance()

Klasė "SavingsAccount" (išplėčia "BankAccount"):
Papildoma savybė: interestRate
Metodai: addInterest() - prideda palūkanas prie balanso pagal interestRate

Klasė "CheckingAccount" (išplėčia "BankAccount"):
Papildoma savybė: overdraftLimit
Metodai: withdraw(amount) - leidžia neigiamą balansą iki nurodyto overdraftLimit

------------------------------------------------------------------------------------ */

class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount) {
    let tempBalance = this.balance - amount;
    if (tempBalance > 0 || tempBalance > this.overdraftLimit * -1) {
      this.balance -= amount;
      return this.balance;
    } else console.log("Cant do that :///");
  }

  getBalance() {
    console.log(this.overdraftLimit);
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    this.balance = this.balance + (this.balance * this.interestRate) / 100;
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, overdraftLimit) {
    super(accountNumber, ownerName, balance);
    this.overdraftLimit = overdraftLimit;
  }
}

// Test
const savings = new SavingsAccount("12345", "John Doe", 1000, 5);
const checking = new CheckingAccount("67890", "Jane Doe", 500, 200);

savings.addInterest();
console.log(savings.getBalance()); // Rezultatas: 1050

checking.withdraw(600);
console.log(checking.getBalance()); // Rezultatas: -100
