// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

type Data = Record<string, unknown>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const db = await connectToDatabase('dev');

  switch (req.method) {
    case 'GET': {
      if (!req.query.id) {
        res.status(400).json({ message: 'User ID is required' });
        return;
      }
      // Assuming id is a string and not an ObjectId.
      const user = await db.collection('users').findOne({ _id: new ObjectId(req.query.id as string) });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    }
    case 'POST': {
      // Handle POST request
      const newUser = {
        ...req.body,
        createdAt: new Date(),
      }
      const result = await db.collection('users').insertOne(newUser);
      console.log('result: ', result);
      
      res.status(201).json({insertedId: result.insertedId});
      break;
    }
    case 'PUT':{
      // Handle PUT request
      const updateResult = await db.collection('users').updateOne(
        { _id: new ObjectId(req.query.id as string) },
        { $set: req.body }
      );
      res.status(200).json({ matchedCount: updateResult.matchedCount, modifiedCount: updateResult.modifiedCount });
      break;}

      case 'DELETE': {
        // Handle DELETE request
        const deleteResult = await db.collection('users').deleteOne({ _id: new ObjectId(req.query.id as string) });
        res.status(200).json({ deletedCount: deleteResult.deletedCount });
        break;
      }
      default:
        res.status(405).end(); // Method Not Allowed
        break;
    }
  }