import { MongoClient } from 'mongodb';

const { MONGODB_URI, NODE_ENV, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_USERNAME } = process.env;

const client = new MongoClient(NODE_ENV === 'development'
  ? MONGODB_URI:
  `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongodb-sts-vol-0`
);

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
