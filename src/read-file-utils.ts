import { load } from "csv-load-sync";
import { DateTime } from "luxon";
import { Transaction } from "./Transaction";
import { Bank } from "./Bank";

export const processTransactionFile = (bank: Bank, filePath: string)=> {
  const data = load(filePath);
  const transactions = data.map((row: any) =>
    new Transaction(DateTime.fromFormat(row.Date, "dd/MM/yyyy"), row.From, row.To, row.Narrative, parseTransactionAmount(row.Amount))
  );
  transactions.forEach((transaction: Transaction) => {
    bank.processTransaction(transaction);
  });
}

const parseTransactionAmount = (amount: string): number => {
  return parseFloat(amount) * 100;
}
