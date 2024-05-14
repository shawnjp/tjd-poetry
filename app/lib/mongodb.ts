import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectToDatabase(db: string) {
  // Ensure the ATLAS_CONNECTION_STRING environment variable is set
  const connectionString = process.env.ATLAS_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error('ATLAS_CONNECTION_STRING environment variable is not set.');
  }

  if (!client) {
    client = new MongoClient(connectionString);
    await client.connect();
  }

  return client.db(db);
}