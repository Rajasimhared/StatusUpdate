After cloning this repo you need to do the following:

1. `npm install`
2. Create an .env file that would hold the variables SLACK_BOT_TOKEN and SLACK_SIGNING_SECRET

Run this project using

```
npm start
```

Create a proxy for this server using ngrok

```
ngrok http 80
```

Pickup the forwarding domain URL from the ngrok and update in the slack configuration Request URL

You should see the events coming to your local server whenever there is an user interaction.
