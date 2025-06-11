import { readTransactionListFromFile } from "./FileReader";

const main = () => {
  const transactions = readTransactionListFromFile("data/Transactions2014.csv");
  console.log(transactions);
}

main();
