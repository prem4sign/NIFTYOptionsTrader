
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="panel rounded-lg p-5 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">NIFTY Options Paper Trader</h1>
        <p className="text-sm text-slate-500 mt-1">Light demo dashboard • mock data only</p>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <Link to="/account" className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">Account &amp; Order History</Link>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-500">NIFTY Spot</div>
          <div className="text-lg font-medium">--,---.--</div>
        </div>

        <div className="text-center">
          <div className="text-xs text-slate-500">Paper Trading</div>
          <div className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 block" />
            <span className="text-sm">Active</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-500">Account Balance</div>
          <div className="text-lg font-medium">₹ 1,000,000</div>
        </div>
      </div>
    </header>
  )
}
