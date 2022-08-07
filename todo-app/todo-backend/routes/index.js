const redis = require("../redis")
redis.getAsync("added_todos").then(
  result => {
      if (!result) redis.setAsync("added_todos", 0)
    }
)
const express = require('express');
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  res.json({
    added_todos : await redis.getAsync("added_todos")
  })
})

module.exports = router;
