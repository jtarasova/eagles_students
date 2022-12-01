import express from 'express';
import { Students } from '../../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  const students = await Students.findAll();
  res.render('Layout', { students });
});

route.post('/del/:id', async (req, res) => {
  await Students.destroy({ where: { id: req.params.id } });
  res.redirect('/students');
});

route.get('/:id', (req, res) => {
  res.send(`Student ${req.params.id}`);
});

export default route;
