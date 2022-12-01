import express from 'express';
import { Students } from '../../db/models';

const router = express.Router();

router.post('/word', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
router.post('/students/del/:id', async (req, res) => {
  await Students.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

router.post('/students/new', async (req, res) => {
  const newStudent = await Students.create(req.body);
  res.json(newStudent);
});

export default router;
