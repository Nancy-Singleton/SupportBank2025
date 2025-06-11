import readlineSync from "readline-sync";
import { processTransactionFile } from "./read-file-utils";
import { Bank } from "./Bank";
import { listAccount, listAll } from "./print-info-utils";

const main = () => {
  const bank = new Bank();
  processTransactionFile(bank, "data/Transactions2014.csv");

  while (true) {
    const userCommand = readlineSync.question("Enter a command (List All or List <name>): ");
    if (userCommand.toLowerCase() === "list all") {
      listAll(bank);
    } else if (userCommand.toLowerCase().startsWith("list ")) {
      listAccount(bank, userCommand.slice(5));
    }
  }
}

main();
