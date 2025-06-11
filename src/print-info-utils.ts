import { Bank } from "./Bank";

export const listAll = (bank: Bank) => {
  bank.accounts.forEach(account => {
    console.log(`${account.name}: ${account.balance}`);
  })
}

export const listAccount = (bank: Bank, accountName: string) => {
  const account = bank.getExistingAccount(accountName);

  if (!account) {
    console.log(`Account ${accountName} does not exist.`);
    return;
  }

  account.transactions.forEach(transaction => {
    console.log(`Date: ${transaction.date}, From: ${transaction.from}, To: ${transaction.to}, Narrative: ${transaction.narrative}, Amount: ${transaction.amount}`);
  });
}
