"use strict";
const { updateIntroView } = require("../utils/views");

module.exports = {
  usersConfig: (body) => {
    return {
      type: "home",
      callback_id: "home_view",

      /* body of the view */
      blocks: [
        ...updateIntroView,
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "Past Updates:",
            emoji: true,
          },
        },
      ],
    };
  },
};
