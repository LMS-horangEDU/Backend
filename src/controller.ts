import { Context, Next } from 'koa';
import {
  getAttendance,
  getMagnitude,
  getMbtiInfo,
  getQuizData,
  getStudentInfo,
  getTotalVideoCount, getVideoData,
  insertData
} from './repository';
import { MainPageInfoData } from './types';

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
  } as MainPageInfoData
  await next();
}

// export async function createMock(ctx:Context, next: Next) {
//   await insertData();
//   ctx.status = 201;
// }
