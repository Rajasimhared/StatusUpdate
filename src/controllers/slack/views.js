"use strict";
const { DEFAULT_CHANNEL_ID } = require("../../utils/constants");
const { crud } = require("../mongodb");

const handlSubmit = async ({ ack, body, view, client }) => {
  await ack();

  const submittedValues = Object.values(view.state.values).reduce(
    (result, item) => {
      const [key] = Object.keys(item);
      result[key] = item[key];
      return result;
    },
    {}
  );

  const result = await client.chat.postMessage({
    channel: DEFAULT_CHANNEL_ID,
    text: `Test`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Update by <@${body.user.id}>`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Yesterday* \n${submittedValues["update_yesterday"].value}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Today* \n${submittedValues["update_today"].value}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Blockers* \n${submittedValues["update_blockers"].value}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Kudos to* \n<@${submittedValues["multi_users_select-action"].selected_users}>`,
        },
      },
    ],
  });

  await crud.addUpdate({
    update_yesterday: submittedValues["update_today"].value,
    update_today: submittedValues["update_today"].value,
    update_blockers: submittedValues["update_blockers"].value,
    update_kudos: submittedValues["multi_users_select-action"].selected_users,
    update_date: new Date(),
    userId: body.user.id,
  });

  console.log("Submitted Values:", submittedValues);
};

module.exports = {
  handlSubmit,
};
