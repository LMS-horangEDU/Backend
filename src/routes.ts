import Router from '@koa/router';
import { attendanceInformation, studentInformation } from './controller';

const router = new Router();

export const infoRouter = router
  .get('학생 정보 가져오기', '/student', studentInformation)
  .get('학생 출석 정보 가져오기', '/attendance', attendanceInformation);
