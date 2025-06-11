import { DateTime } from 'luxon';

export class Transaction {
  date: DateTime;
  from: string;
  to: string;
  narrative: string;
  amount: number;

  constructor(date: DateTime, from: string, to: string, narrative: string, amount: number) {
    this.date = date;
    this.from = from;
    this.to = to;
    this.narrative = narrative;
    this.amount = amount;
  }
}
