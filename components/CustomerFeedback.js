// components/CustomerFeedback.js
import React from 'react';

const CustomerFeedback = ({ rating }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Customer Feedback</h2>
      <p>Rating: <span className="font-semibold">{rating}</span>/5</p>
      <p>Customers love your creativity! Keep cooking!</p>
    </div>
  );
};

export default CustomerFeedback;
