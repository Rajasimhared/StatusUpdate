"use strict";
const updateModalView = require(`../../views/updateModalView`);

const shareUpdate = async ({ client, body, ack }) => {
  console.log(body);
  try {
    await ack();

    // const result = await client.chat.postMessage({
    //   channel: body.user.id,
    //   text: `What have you done yesterday?`,
    // });

    const result = await client.views.open({
      /* the user that opened your app's app home */
      trigger_id: body.trigger_id,

      /* the view object that appears in the app home*/
      view: updateModalView(body),
    });
  } catch (error) {
    console.error(error);
  }
};

const acknowledge = async ({ ack }) => await ack();

module.exports = {
  shareUpdate,
  acknowledge,
};
