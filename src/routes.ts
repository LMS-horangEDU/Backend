import Router from '@koa/router';
import { attendanceInformation, magnitudePageInfo, mainPageInfo, studentInformation } from './controller';

const router = new Router();

export const infoRouter = router
  .get('학생 정보 가져오기', '/student', studentInformation)
  .get('학생 출석 정보 가져오기', '/attendance', attendanceInformation)
  .get('메인 페이지 데이터 불러오기', '/main', mainPageInfo)
  .get('나의 학습 현황', '/magnitude', magnitudePageInfo)
  // .get('목데이터 입력', '/test', createMock);
