import { Account } from "./Account";
import { Transaction } from "./Transaction";

export class Bank {
  accounts: Account[] = []

  getExistingAccount = (name: string): Account | undefined => {
    return this.accounts.find(account => account.name === name);
  }

  getAccount = (name: string): Account => {
    const existingAccount = this.getExistingAccount(name);
    if (existingAccount) {
      return existingAccount;
    }
    const newAccount = new Account(name);
    this.accounts.push(newAccount);
    return newAccount;
  }

  processTransaction = (transaction: Transaction): void => {
    const fromAccount = this.getAccount(transaction.from);
    const toAccount = this.getAccount(transaction.to);

    fromAccount.debit(transaction);
    toAccount.credit(transaction);
  }
}
