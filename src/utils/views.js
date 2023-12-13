const updateIntroView = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*Time for status update!* :tada:",
    },
  },
  {
    type: "divider",
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "• What have you done yesterday?\n• Plan for today?\n• Any Blockers?\n• Give Kudos",
    },
  },
  {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Share Update",
          emoji: true,
        },
        value: "share_update",
        action_id: "share_update",
        // url: `slack://app?team=${body.team_id}&id=${body.api_app_id}&tab=messages`,
      },
    ],
  },
  {
    type: "divider",
  },
];

module.exports = {
  updateIntroView,
};
