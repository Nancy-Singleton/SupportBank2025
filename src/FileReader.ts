import { load } from "csv-load-sync";
import { Transaction } from "./Transaction";

export const readTransactionListFromFile = (filePath: string): Transaction[] => {
  const data = load(filePath);
  return data.map((row: any) =>
    new Transaction(row.Date, row.From, row.To, row.Narrative, parseFloat(row.Amount))
  );
}
