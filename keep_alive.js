// this will create a website and use that website for UptimeRobot (uptimerobot.com) to be 24/7

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot is alive!'));

app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
