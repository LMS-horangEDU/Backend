import { MongoClient } from 'mongodb';

const {
  MONGODB_URI,
  NODE_ENV,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INTERNALIP,
} = process.env;

const MONGO_CONFIG = NODE_ENV === 'development'
  ? MONGODB_URI:
  `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INTERNALIP}`;

const client = new MongoClient(MONGO_CONFIG);

export default async function run () {
  try {
    console.log('trying to connect uri : ' + MONGO_CONFIG);
    await client.connect();
    console.log('Connected correctly MongoDB to server');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.stack);
    }
  }
}

export const db = client.db('horang');
