import { Context, Next } from 'koa';
import { getAttendance, getStudentInfo } from './repository';

export async function studentInformation(ctx:Context, next: Next) {
  const studentInfo = await getStudentInfo();
  ctx.status = 200;
  ctx.response.body = {
    data: studentInfo,
  }
  await next();
}

export async function attendanceInformation(ctx:Context, next: Next) {
  const attendance = await getAttendance();
  ctx.status = 200;
  ctx.response.body = {
    data: attendance,
  }
}
