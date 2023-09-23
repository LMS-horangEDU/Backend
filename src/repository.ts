import { db } from '../config/mongo_conf';
import { ObjectId } from 'bson';
import { BadgeInfoData, RankInfoData } from './types';

const { USER_ID } = process.env;

export async function getStudentInfo () {
  return await db.collection('student').findOne({ _id : new ObjectId(USER_ID) });
}

export async function getAttendance () {
  return await db.collection('attendance').findOne({ student_id : USER_ID });
}

export async function getMagnitude () {
  return await db.collection('magnitude').findOne({ student_id : USER_ID });
}

export async function getMbtiInfo (mbti_id: string) {
  return await db.collection('mbti').findOne({ _id : new ObjectId(mbti_id) });
}

export async function getTotalVideoCount () {
  return await db.collection('video').countDocuments();
}

export async function getQuizData (quiz_id: string) {
  return await db.collection('quiz').findOne({ _id : new ObjectId(quiz_id) });
}

export async function getVideoData (video_id: string) {
  return await db.collection('video').findOne({ _id : new ObjectId(video_id) });
}

export async function getBadgeInfo() {
  const allBadge = await db.collection('badge').find().toArray();
  const userInfo = await getStudentInfo();
  const hasBadgeList = userInfo.badge;

  return allBadge.map((badge) => {
    return {
      badge: badge.badge,
      desc: badge.desc,
      isHas: hasBadgeList.includes(badge._id.toString()),
    } as BadgeInfoData;
  })
}

export async function getRankInfo() {
  return db.collection('rank').find().toArray();
}

// export async function insertData () {
//   for (const doc of data) {
//     await db.collection('badge').insertOne(doc)
//   }
//
// }

