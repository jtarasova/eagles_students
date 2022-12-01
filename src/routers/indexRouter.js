import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('Layout', {});
});

export default route;
