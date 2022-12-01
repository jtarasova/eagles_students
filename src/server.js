import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { pathMiddleware } from './middlewares/myMiddlewares';

import indexRouter from './routers/indexRouter';
import studentRouter from './routers/studentRouter';
import apiRouter from './routers/apiRouter';
import customRender from './utils/customRender';

require('dotenv').config();

const { PORT } = process.env;
console.log(process.env);

const app = express();
app.engine('js', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'js');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(pathMiddleware);

app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
