#!/usr/bin/env node

const meow = require("meow");
const fgh = require("./app");

const cli = meow(
  `
    Usage
      $ git-cheater [options]
 
    Options
      --weekdaysOnly, -w Use this option if you don't want to commit on weekends.
      --commitsPerDay, -c Customize how many commits a day to make.
      --startDate, -s Start date in yyyy/MM/dd format.
      --endDate, -e End date yyyy/MM/dd format.
      --resume, -r End date yyyy/MM/dd format.
      
    Examples
      $ git-cheater --weekdaysOnly
      $ git-cheater --commitsPerDay "0,3"
      $ git-cheater --startDate yyyy/MM/dd --endDate yyyy/MM/dd
      $ git-cheater --resume
`,
  {
    flags: {
      startDate: {
        type: "string",
        alias: "s",
      },
      endDate: {
        type: "string",
        alias: "e",
      },
      weekdaysOnly: {
        type: "boolean",
        alias: "w",
        default: "false",
      },
      commitsPerDay: {
        type: "string",
        alias: "c",
        default: "0,3",
      },
      resume: {
        type: "boolean",
        alias: "r",
        default: "false",
      },
    },
  }
);

fgh(cli.flags);
