import { Transaction } from "./Transaction";

export class Account {
  name: string;
  balance: number = 0;
  transactions: Transaction[] = [];

  constructor(name: string) {
    this.name = name;
  }

  debit(transaction: Transaction): void {
    this.balance -= transaction.amount;
    this.transactions.push(transaction);
  }

  credit(transaction: Transaction): void {
    this.balance += transaction.amount;
    this.transactions.push(transaction);
  }
}
