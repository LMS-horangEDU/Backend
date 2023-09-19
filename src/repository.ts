import { db } from '../config/mongo_conf';
import { ObjectId } from 'bson';

export async function getStudentInfo () {
  return await db.collection('student').findOne({ _id : new ObjectId('6509ae38d1d514fc1e19c2e2') });
}

export async function getAttendance() {
  return await db.collection('attendance').findOne({ student_id: '6509ae38d1d514fc1e19c2e2'});
}
