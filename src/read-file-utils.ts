import { load } from "csv-load-sync";
import { Transaction } from "./Transaction";
import { Bank } from "./Bank";

export const processTransactionFile = (bank: Bank, filePath: string)=> {
  const data = load(filePath);
  const transactions = data.map((row: any) =>
    new Transaction(row.Date, row.From, row.To, row.Narrative, parseFloat(row.Amount))
  );
  transactions.forEach((transaction: Transaction) => {
    bank.processTransaction(transaction);
  });
}
