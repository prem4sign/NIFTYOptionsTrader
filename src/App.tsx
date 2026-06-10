import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TradingSection from './components/TradingSection'
import AccountOrderHistory from './pages/AccountOrderHistory'

const charts = ['NIFTY CE', 'NIFTY PE', 'Nifty Spot smaller TF', 'Nifty Spot higher TF']

function Dashboard() {
  return (
    <div className="min-h-screen smooth-scroll text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Header />

        <main className="space-y-6 mt-8">
          {charts.map((c, i) => (
            <TradingSection key={c} title={c} sectionIndex={i + 1} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<AccountOrderHistory />} />
      </Routes>
    </BrowserRouter>
  )
}
