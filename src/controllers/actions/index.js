"use strict";

const shareUpdate = async ({ client, body, ack }) => {
  try {
    await ack();

    const result = await client.chat.postMessage({
      channel: body.user.id,
      text: `What have you done yesterday?`,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  shareUpdate,
};
