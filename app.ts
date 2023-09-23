import dotenv from 'dotenv';
import path from 'path';

// NODE_ENV 에 맞게 env 파일 설정.
if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  dotenv.config({ path : path.join(__dirname, '/.env') });
} else if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  dotenv.config({ path : path.join(__dirname, '/.env.local') });
} else {
  console.error('Not defined process.env.NODE_ENV');
  throw new Error('Not defined process.env.NODE_ENV');
}

import Koa, { Context } from 'koa';
import { koaBody } from 'koa-body';
import cors from '@koa/cors';
import mongodbConnect from './config/mongo_conf';
import session from 'koa-session';
import errorHandler from './src/util/error_handler';
import { infoRouter } from './src/routes';
import { healthChcekRouter } from './src/util/healthchecker';

const app = new Koa();

app.use(cors({
  origin : '*',
  credentials : true,
}));

app.use(session(app));
app.use(koaBody());
app.use(errorHandler);

app.use(healthChcekRouter.routes()).use(healthChcekRouter.prefix('/health-check').allowedMethods());
app.use(infoRouter.routes()).use(infoRouter.allowedMethods());

app.on('error', (err: any, ctx: Context) => {
  console.log(ctx.request.path);
  console.error(err);
});

app.listen(9000, async () => {
  // mongoDB connection.
  await mongodbConnect();
  console.log(`Server is running on port ${process.env.PORT}`);
});
