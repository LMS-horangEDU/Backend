import Router from '@koa/router';
import { Context, Next } from 'koa';

const router = new Router();

export const healthChcekRouter = router
  .get('서버 연결상태 확인', '/', async (ctx: Context, next: Next) => {
    ctx.status = 200;
    ctx.response.body = 'Ok.';
    await next();
  });

