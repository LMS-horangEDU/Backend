import { db } from '../config/mongo_conf';
import { ObjectId } from 'bson';

export async function getStudentInfo () {
  return await db.collection('student').findOne({ _id : new ObjectId(process.env.USER_ID) });
}

export async function getAttendance() {
  return await db.collection('attendance').findOne({ student_id: process.env.USER_ID});
}

export async function getMagnitude() {
  return await db.collection('magnitude').findOne({ student_id: process.env.USER_ID});
}

export async function getMbtiInfo(mbti_id: string) {
  return await db.collection('mbti').findOne({ _id: new ObjectId(mbti_id) });
}

export async function getTotalVideoCount() {
  return await db.collection('video').countDocuments();
}

export async function getQuizData(quiz_id: string) {
  return await db.collection('quiz').findOne({ _id: new ObjectId(quiz_id) });
}
export async function getVideoData(video_id: string) {
  return await db.collection('video').findOne({ _id: new ObjectId(video_id) });
}
export async function insertData() {
  // const data = await db.collection('quiz').find();
  // await data.forEach((doc) => {
  //   console.log(doc._id.toString());
  // })
}

