import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Order = {
  id: number
  type: 'BUY' | 'SELL'
  pnl: number
  date: string
  status: 'Open' | 'Closed'
}

const MOCK_ORDERS: Order[] = [
  { id: 1, type: 'BUY', pnl: 250, date: '10-Jun-2026', status: 'Closed' },
  { id: 2, type: 'SELL', pnl: -100, date: '09-Jun-2026', status: 'Closed' },
  { id: 3, type: 'BUY', pnl: 450, date: '08-Jun-2026', status: 'Open' }
]

export default function AccountOrderHistory() {
  const navigate = useNavigate()

  const [balance, setBalance] = useState<number>(1000000)
  const [targetPoints, setTargetPoints] = useState<number>(50)
  const [stopLossPoints, setStopLossPoints] = useState<number>(100)
  const [defaultLot, setDefaultLot] = useState<string>('1')

  return (
    <div className="min-h-screen text-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <div className="panel rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Account & Order History</h2>
            <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="panel rounded-lg p-4">
              <h3 className="font-medium">Account Settings</h3>
              <div className="mt-3 space-y-3">
                <label className="block text-sm text-slate-600">Account Balance</label>
                <input type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} className="w-full rounded-md border px-3 py-2" />

                <label className="block text-sm text-slate-600">Default Target Points</label>
                <input type="number" value={targetPoints} onChange={e => setTargetPoints(Number(e.target.value))} className="w-full rounded-md border px-3 py-2" />

                <label className="block text-sm text-slate-600">Default Stop Loss Points</label>
                <input type="number" value={stopLossPoints} onChange={e => setStopLossPoints(Number(e.target.value))} className="w-full rounded-md border px-3 py-2" />

                <label className="block text-sm text-slate-600">Default Lot</label>
                <input type="text" value={defaultLot} onChange={e => setDefaultLot(e.target.value)} className="w-full rounded-md border px-3 py-2" />

                <div className="mt-3 flex gap-3">
                  <button className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--buy)' }}>Save</button>
                  <button onClick={() => navigate('/')} className="px-4 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
                </div>
              </div>
            </div>

            <div className="panel rounded-lg p-4">
              <h3 className="font-medium">Order History</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-500">
                      <th className="py-2">Order Type</th>
                      <th className="py-2">Profit/Loss</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_ORDERS.map(o => (
                      <tr key={o.id} className="border-t">
                        <td className="py-2">{o.type}</td>
                        <td className={`py-2 ${o.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>{o.pnl >= 0 ? `+${o.pnl}` : o.pnl}</td>
                        <td className="py-2">{o.date}</td>
                        <td className="py-2">{o.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
