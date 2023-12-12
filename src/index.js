"use strict";

const { app } = require(`./app`);
require(`./controllers`);

require("dotenv").config();

const exit = (err) => {
  console.error({
    message: "AN UNCAUGHT ERROR OCCURRED",
    err: {
      message: err.message,
      stack: err.stack,
    },
  });
  process.exit(1);
};

//Graceful Shutdown
const shutdownOnSIGINT = () => {
  console.log("SIGINT signal received.");
  app.stop(async () => {
    console.log("Shutting down");
    logger.info("Shutting down");
    process.exit(0);
  });
};

const shutdownOnSIGTERM = () => {
  console.log("SIGTERM signal received.");
  app.stop(async () => {
    console.log("Shutting down");
    logger.info("Shutting down");
    process.exit(0);
  });
};

/*
// uncaughtExceptions should ALWAYS `process.exit(1)`. This is just a
// placeholder for making sure we capture and/or log information about
// the error that occurred. There is no guarantee that logging systems
// are available, so we log to the console, and rely on devops to write
// console logs somewhere.
*/
process.on("uncaughtException", exit);
process.on("unhandledRejection", exit);

process.on("SIGINT", shutdownOnSIGINT);
process.on("SIGTERM", shutdownOnSIGTERM);

(async () => {
  //const appDataSource = await DataSourceSingleton.getInstance();
  //await app.start(config.SLACK.SLACK_APP_TOKEN ? "" : config.APP.PORT || 3000);
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ \t Bot is running on port ${process.env.PORT}!`);
})();
