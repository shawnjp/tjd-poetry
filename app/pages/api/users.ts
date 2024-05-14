import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import connectDB from '../../lib/db'; // Ensure this path is correct

// Initialize the database connection
connectDB();

// Define the User model schema if not already defined elsewhere
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  clerkUserId: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Create the model if it doesn't already exist
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Handler for creating a new user
const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newUser = new User({
      name: req.body.name,
      clerkUserId: req.body.clerkUserId,
      isAdmin: req.body.isAdmin || false
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Handler for fetching all users
const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

// Main handler function to route requests based on the method
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUsers(req, res);
    case 'POST':
      return createUser(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
