"use strict";

const homeView = require(`../../views/homeView`);

const homeOpen = async ({ event, client, context, body }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({
      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: homeView.usersConfig(body),
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  homeOpen,
};
