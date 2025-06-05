// src/pages/History.jsx
export default function History() {
  const mockPayments = [
    { id: 1, transaction_id: 'TXN001', amount: 5000, currency: 'USD', status: 'completed', created_at: new Date() },
    { id: 2, transaction_id: 'TXN002', amount: 2000, currency: 'USD', status: 'pending', created_at: new Date() },
    { id: 3, transaction_id: 'TXN003', amount: 1500, currency: 'USD', status: 'failed', created_at: new Date() },
  ];

  return (
    <section className="bg-white rounded-2xl shadow p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">📄 Payment History</h2>
      <ul className="divide-y divide-gray-200">
        {mockPayments.map((p) => (
          <li key={p.id} className="py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
            <div className="text-sm text-gray-700 font-medium">{p.transaction_id}</div>
            <div className="text-gray-600">{p.amount} {p.currency}</div>
            <div className={`text-sm font-bold ${
              p.status === 'completed' ? 'text-green-600' :
              p.status === 'pending' ? 'text-yellow-500' :
              p.status === 'failed' ? 'text-red-500' : 'text-gray-500'
            }`}>
              {p.status}
            </div>
            <div className="text-xs text-gray-400">{new Date(p.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}