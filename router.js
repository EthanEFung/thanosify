const express = require('express');
const routes = require('./routes/index.js') || [];

const router = express.Router();
routes.forEach(route => {
  const {Controller, path} = route;
  const controller = new Controller();
  if (controller.get) router.get(path, controller.get);
  if (controller.post) router.post(path, controller.post);
  if (controller.put) router.put(path, controller.put);
  if (controller.delete) router.delete(path, controller.delete);
});

module.exports = router;
