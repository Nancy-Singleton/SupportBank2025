import { load } from "csv-load-sync";
import { DateTime } from "luxon";
import fs from "fs";
import { Transaction } from "./Transaction";
import { Bank } from "./Bank";

export const processTransactionFile = (bank: Bank, filePath: string) => {
  if (filePath.endsWith(".csv")) {
    processCsvTransactionFile(bank, filePath);
  } else if (filePath.endsWith(".json")) {
    processJsonTransactionFile(bank, filePath);
  } else {
    throw new Error("Unsupported file format. Please provide a .csv or .json file.");
  }
}

export const processCsvTransactionFile = (bank: Bank, filePath: string) => {
  const data = load(filePath);
  const transactions = data.map((row: any) =>
    new Transaction(DateTime.fromFormat(row.Date, "dd/MM/yyyy"), row.From, row.To, row.Narrative, parseTransactionAmount(row.Amount))
  );
  processTransactions(bank, transactions)
}

export const processJsonTransactionFile = (bank: Bank, filePath: string) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const transactions = data.map((row: any) =>
    new Transaction(DateTime.fromFormat(row.Date, "yyyy-MM-dd'T'HH:mm:ss"), row.FromAccount, row.ToAccount, row.Narrative, parseTransactionAmount(row.Amount))
  );
  processTransactions(bank, transactions)
}

export const processTransactions = (bank: Bank, transactions: Transaction[])=> {
  transactions.forEach((transaction: Transaction) => {
    bank.processTransaction(transaction);
  });
}

const parseTransactionAmount = (amount: string): number => {
  return parseFloat(amount) * 100;
}
