import { MongoClient } from 'mongodb';

const { MONGODB_URI } = process.env;
const client = new MongoClient(MONGODB_URI);

export default async function run () {
  try {
    await client.connect();
    console.log('Connected correctly MongoDB to server');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.stack);
    }
  }
}

export const db = client.db('horang');
