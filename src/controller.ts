import { Context, Next } from 'koa';
import {
  getAllMbtiInfo,
  getAttendance, getBadgeInfo,
  getMagnitude,
  getMbtiInfo,
  getQuizData, getRankInfo,
  getStudentInfo,
  getTotalVideoCount, getVideoData,
} from './repository';
import { BadgeInfoData, MagnitudeInfoData, MainPageInfoData } from './types';

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
  await next();
}

export async function mainPageInfo(ctx:Context, next: Next) {
  const attendanceData = await getAttendance();
  const studentInfoData = await getStudentInfo();
  const magnitudeData = await getMagnitude();
  const mbtiData = await getMbtiInfo(studentInfoData.mbti.type_id);
  const totalVideo = await getTotalVideoCount();
  const videoData = await getVideoData(magnitudeData.video.progress[magnitudeData.video.progress.length - 1]);
  const quizData = await getQuizData(magnitudeData.quiz.complete[magnitudeData.quiz.complete.length-1]);

  ctx.status = 200;
  ctx.response.body = {
    attendance: attendanceData.attendance,
    magnitude: {
      totalVideoCount: totalVideo,
      completeVideoCount: magnitudeData.video.complete.length,
      progressVideoTitle: videoData.title,
      lastQuizTitle: quizData.title,
      lastQuizLevel: quizData.level,
    },
    mbtiPoint: studentInfoData.mbti,
    mbtiTitle: mbtiData.title,
    badgeCount: studentInfoData.badge.length,
  } as MainPageInfoData
  await next();
}

export async function magnitudePageInfo(ctx: Context, next:Next) {
  const magnitudeData = await getMagnitude();

  ctx.status = 200;
  ctx.response.body = {
    quiz: magnitudeData.quiz,
    video: magnitudeData.video,
  };
  await next();
}

export async function badgePageInfo(ctx: Context, next:Next) {
  const badgeData = await getBadgeInfo();

  ctx.status = 200;
  ctx.response.body = {
    badge: badgeData,
  };
  await next();
}

export async function rankingPageInfo(ctx: Context, next:Next) {
  const rankData = await getRankInfo();

  ctx.status = 200;
  ctx.response.body = {
    rank: rankData,
  };
  await next();
}

export async function mbtiPageInfo(ctx: Context, next:Next) {
  const studentInfoData = await getStudentInfo();
  const mbtiData = await getMbtiInfo(studentInfoData.mbti.type_id);
  const allMbtiData = await getAllMbtiInfo();

  ctx.status = 200;
  ctx.response.body = {
    myMbti: {
      type: mbtiData.type,
      typeName: mbtiData.title,
      desc: mbtiData.desc,
      job: mbtiData.job,
      point: studentInfoData.mbti,
    },
    allMbti: allMbtiData,
  };
  await next();
}

// export async function createMock(ctx:Context, next: Next) {
//   await insertData();
//   ctx.status = 201;
// }
