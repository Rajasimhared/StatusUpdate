"use strict";

// Require the Bolt for JavaScript package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const { events, actions, commands, shortcuts } = require("./controllers");

require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET || "",
});

// Events
app.event("app_home_opened", events.homeOpen);

// Actions
app.action("share_update", actions.shareUpdate);
app.action("default_action", async ({ ack }) => await ack());

// Commands
app.command("/update", commands.startFlow);

// Messages
app.message("update", commands.startFlow);

module.exports = { app };
