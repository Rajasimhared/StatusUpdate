"use strict";

const startFlow = async ({ say, ack }) => {
  try {
    await ack();

    await say({
      text: `What have you done yesterday?`,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  startFlow,
};
