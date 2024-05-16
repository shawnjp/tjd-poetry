import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectToDatabase(db: string) {
  const connectionString = process.env.ATLAS_CONNECTION_STRING;
  if (!connectionString) {
    console.error('ATLAS_CONNECTION_STRING environment variable is not set.');
    throw new Error('ATLAS_CONNECTION_STRING environment variable is not set.');
  }

  if (!client) {
    try {
      client = new MongoClient(connectionString);
      await client.connect();
      console.log('Successfully connected to MongoDB.');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      throw error;
    }
  }

  return client.db(db);
}