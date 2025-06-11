import readlineSync from "readline-sync";
import log4js from "log4js";
import { processTransactionFile } from "./read-file-utils";
import { Bank } from "./Bank";
import { listAccount, listAll } from "./print-info-utils";

log4js.configure({
  appenders: {
    file: { type: 'fileSync', filename: 'logs/debug.log' }
  },
  categories: {
    default: { appenders: ['file'], level: 'debug'}
  }
});

const main = () => {
  const bank = new Bank();
  processTransactionFile(bank, "data/DodgyTransactions2015.csv");

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
