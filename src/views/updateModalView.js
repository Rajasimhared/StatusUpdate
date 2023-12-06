module.exports = (body) => {
  return {
    type: "modal",
    callback_id: "update_submit",
    title: {
      type: "plain_text",
      text: "My App",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "update_yesterday",
        },
        label: {
          type: "plain_text",
          text: "What did you do yesterday?",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "update_today",
        },
        label: {
          type: "plain_text",
          text: "Plan for today?",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "update_blockers",
        },
        label: {
          type: "plain_text",
          text: "Any Blockers?",
          emoji: true,
        },
        optional: true,
      },
      {
        type: "input",
        element: {
          type: "multi_users_select",
          placeholder: {
            type: "plain_text",
            text: "Select friends",
            emoji: true,
          },
          action_id: "multi_users_select-action",
        },
        label: {
          type: "plain_text",
          text: "Give Kudos to",
          emoji: true,
        },
        optional: true,
      },
    ],
  };
};
