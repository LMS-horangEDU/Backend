import { Context, Next } from 'koa';

async function errorHandler (ctx: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    console.log('Error handler');
    ctx.status = err.message.includes('HORANG') ? 400: 500;
    ctx.response.body = {
      result : {
        success : false,
        message : err.message,
      },
      data : {},
    };
    ctx.app.emit('error', err, ctx);
  }
}

export default errorHandler;
