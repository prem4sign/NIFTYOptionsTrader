import React, { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FyersCallbackPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const params = useMemo(() => {
    const sp = new URLSearchParams(location.search)
    const out: Record<string, string> = {}
    for (const [k, v] of sp.entries()) out[k] = v
    return out
  }, [location.search])

  useEffect(() => {
    console.log('Fyers callback received params:', params)
  }, [params])

  const entries = Object.entries(params)

  return (
    <div className="min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="panel rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Fyers Authentication Successful</h2>
              <p className="text-sm text-slate-500 mt-1">Authentication callback received — details below for debugging.</p>
            </div>
            <div>
              <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50">Back to Dashboard</button>
            </div>
          </div>

          <div className="mt-6">
            <div className="panel rounded-lg p-4">
              <h3 className="font-medium">Received Parameters</h3>
              {entries.length === 0 ? (
                <div className="mt-3 text-sm text-slate-500">No query parameters were found in the callback URL.</div>
              ) : (
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500">
                        <th className="py-2">Parameter</th>
                        <th className="py-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map(([k, v]) => (
                        <tr key={k} className="border-t">
                          <td className={`py-2 ${k === 'code' || k === 'auth_code' ? 'font-medium' : ''}`}>{k}</td>
                          <td className={`py-2 ${k === 'code' || k === 'auth_code' ? 'text-green-700' : 'text-slate-700'}`}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
