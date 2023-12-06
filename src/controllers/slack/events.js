"use strict";
const { crud } = require("../mongodb");

const homeView = require(`../../views/homeView`);

const homeOpen = async ({ event, client, context, body }) => {
  try {
    let updates = await crud.getUpdates(event.user);
    let blocks = [];
    for (let update of updates) {
      let block = [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Date* \n${update.update_date}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Yesterday* \n${update.update_yesterday}`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Today* \n${update.update_today}`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Blockers* \n${update.update_blockers}`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Kudos to* \n <@${update.update_kudos}>`,
          },
        },
      ];
      blocks = [...blocks, ...block];
    }
    let fullView = homeView.usersConfig(body);
    fullView.blocks = [...fullView.blocks, ...blocks];
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: fullView,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  homeOpen,
};
