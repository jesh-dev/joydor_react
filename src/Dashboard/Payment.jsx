// src/pages/Payment.jsx
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

export default function Payment() {
  const { user } = useOutletContext();
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    alert(`Simulating Paystack payment of ${amount} USD for ${user.email}`);
  };

  return (
    <section className="bg-white rounded-2xl shadow p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">💳 Make a Payment</h2>
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount (USD)"
          className="p-2 border border-gray-300 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePayment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition"
        >
          Pay Now
        </button>
      </div>
    </section>
  );
}