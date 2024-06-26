const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/telegrambot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/user/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/api/update-coins', async (req, res) => {
  const { username, coins } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username, coins });
    } else {
      user.coins = coins;
    }
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
