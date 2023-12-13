const axios = require("axios");
const { updateIntroView } = require("../../utils/views");
require("dotenv").config();

const cronUpdates = async (users) => {
  for (let userId = 0; userId < users.length; userId++) {
    const response = await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: users[userId],
        blocks: updateIntroView,
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        },
      }
    );
  }
};

module.exports = {
  cronUpdates,
};
