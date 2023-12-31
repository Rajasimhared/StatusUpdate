"use strict";

// Require the Bolt for JavaScript package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const { slack } = require("./controllers");

require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET || "",
});

// Events
app.event("app_home_opened", slack.events.homeOpen);

// Actions
app.action("share_update", slack.actions.shareUpdate);
app.action("default_action", slack.actions.acknowledge);

// Commands
app.command("/update", slack.commands.startFlow);

// Messages
app.message("update", slack.commands.startFlow);

// Views
app.view("update_submit", slack.views.handlSubmit);

// A more generic, global error handler
app.error(async ({ error, logger, context, body }) => {
  // Check the details of the error to handle cases where you should retry sending a message or stop the app
  console.error(error);
});

module.exports = { app };
