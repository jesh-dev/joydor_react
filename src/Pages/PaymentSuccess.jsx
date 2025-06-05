// import { useEffect, useState } from 'react'

// export default function PaymentSuccess() {
//   const [loading, setLoading] = useState(true)
//   const [verified, setVerified] = useState(false)

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search)
//     const reference = params.get('reference')

//     if (reference) {
//       fetch(`/api/paystack/verify/${reference}`)
//         .then(res => res.json())
//         .then(data => {
//           setVerified(!!data.payment)
//           setLoading(false)
//         })
//         .catch(() => setLoading(false))
//     } else {
//       setLoading(false)
//     }
//   }, [])

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md text-center">
//       <h2 className="text-lg font-bold mb-4">Payment Status</h2>
//       {loading ? (
//         <p>🔄 Verifying payment...</p>
//       ) : verified ? (
//         <p className="text-green-600">✅ Payment verified successfully!</p>
//       ) : (
//         <p className="text-red-500">❌ Verification failed</p>
//       )}
//     </div>
//   )
// }
