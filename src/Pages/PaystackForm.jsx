import { useState } from 'react'
import { Nav } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export default function PaystackForm() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('http://127.0.0.1:8000/api/paystack/initialize', {
        method: 'POST',
        headers: { 
            Authorization: 'Bearer ${token}',
            'Content-Type': 'application/json' },
        body: JSON.stringify({ email, amount }),
      })

      const data = await response.json()

      if (data.status && data.data.authorization_url) {
        window.location.href = data.data.authorization_url
      } else {
        setError(data.message || 'Failed to initialize payment')
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
      console.log(err.response.data );
    //   alert(err.response.message)
    }
  }

  return (
    <>
    <Nav/>
    <div className="max-w-md mx-auto mb-10 mt-40 bg-white shadow-lg rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          required
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl w-full"
        >
          Pay Now
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
    <Footer/>
    </>
  )
}
