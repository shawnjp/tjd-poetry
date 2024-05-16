import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="profile-header bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl">User Profile</h1>
      </div>
      <div className="profile-details mt-4 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl mb-2">Details</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
      </div>
    </div>
  );
};

export default UserProfile;