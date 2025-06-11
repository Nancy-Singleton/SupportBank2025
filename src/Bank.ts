import { Account } from "./Account";
import { Transaction } from "./Transaction";
import log4js from "log4js";

const logger = log4js.getLogger('<filename>');

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
    logger.log(`Processing transaction: ${transaction.date.toFormat("dd/MM/yyyy")} - From: ${transaction.from}, To: ${transaction.to}, Amount: £${(transaction.amount / 100).toFixed(2)}`);

    if (isNaN(transaction.amount)) {
      return;
    }

    const fromAccount = this.getAccount(transaction.from);
    const toAccount = this.getAccount(transaction.to);

    fromAccount.debit(transaction);
    toAccount.credit(transaction);
  }
}
