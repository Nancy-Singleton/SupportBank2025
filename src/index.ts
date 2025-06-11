import { processTransactionFile } from "./FileReader";
import { Bank } from "./Bank";

const main = () => {
  const bank = new Bank();
  processTransactionFile(bank, "data/Transactions2014.csv");

  bank.accounts.forEach(account => {
    console.log(`Account: ${account.name}`);
    console.log(`Balance: ${account.balance}`);
    console.log("Transactions:");
    console.log(account.transactions.length)
    console.log("\n");
  })
}

main();
