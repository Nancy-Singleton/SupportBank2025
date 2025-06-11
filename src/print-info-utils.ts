import { Bank } from "./Bank";

export const listAll = (bank: Bank) => {
  bank.accounts.forEach(account => {
    console.log(`${account.name}: ${formatAmount(account.balance)}`);
  })
}

export const listAccount = (bank: Bank, accountName: string) => {
  const account = bank.getExistingAccount(accountName);

  if (!account) {
    console.log(`Account ${accountName} does not exist.`);
    return;
  }

  account.transactions.forEach(transaction => {
    console.log(`Date: ${transaction.date.toFormat("dd/MM/yyyy")}, From: ${transaction.from}, To: ${transaction.to}, Narrative: ${transaction.narrative}, Amount: ${formatAmount(transaction.amount)}`);
  });
}

const formatAmount = (amount: number): string => {
  const isNegative = amount < 0;
  const absoluteAmount = Math.abs(amount);
  return `${isNegative ? "-" : ""}£${(absoluteAmount / 100).toFixed(2)}`;
}
