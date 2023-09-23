import Router from '@koa/router';
import {
  attendanceInformation,
  badgePageInfo,
  magnitudePageInfo,
  mainPageInfo, mbtiPageInfo, rankingPageInfo,
  studentInformation
} from './controller';

const router = new Router();

export const infoRouter = router
  .get('학생 정보 가져오기', '/student', studentInformation)
  .get('학생 출석 정보 가져오기', '/attendance', attendanceInformation)
  .get('메인 페이지 데이터 불러오기', '/main', mainPageInfo)
  .get('나의 학습 현황', '/magnitude', magnitudePageInfo)
  .get('뱃지 데이터 불러오기', '/badge', badgePageInfo)
  .get('랭킹 데이터 불러오기', '/rank', rankingPageInfo)
  .get('mbti 데이터 불러오기', '/mbti', mbtiPageInfo);
  // .get('목데이터 입력', '/test', createMock);
