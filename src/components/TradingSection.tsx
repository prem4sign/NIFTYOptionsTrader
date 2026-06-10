import React, { useMemo, useState } from 'react'
import ChartPlaceholder from './ChartPlaceholder'

const TIMEFRAMES = ['1m', '3m', '5m', '15m', '30m', '1H'] as const

interface Props {
  title: string
  sectionIndex: number
}

export default function TradingSection({ title, sectionIndex }: Props) {
  const [timeframe, setTimeframe] = useState<string>('5m')

  const mockPosition = useMemo(() => ({
    status: sectionIndex % 2 === 0 ? 'Open' : 'Flat',
    entryPrice: sectionIndex % 2 === 0 ? 18300 + sectionIndex * 5 : null,
    quantity: sectionIndex % 2 === 0 ? 50 * sectionIndex : 0,
    currentPnl: (sectionIndex % 2 === 0 ? 150 * sectionIndex : 0) - 20
  }), [sectionIndex])

  return (
    <section className="panel rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="text-sm text-slate-500">Workspace {sectionIndex}</div>
          </div>
          <div className="mt-3 flex gap-2 flex-wrap">
            {TIMEFRAMES.map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 text-sm rounded-md border ${timeframe === tf ? 'bg-slate-100 border-slate-300' : 'bg-white border-transparent'} `}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm text-slate-500">Timeframe</div>
          <div className="text-sm font-medium">{timeframe}</div>
        </div>
      </div>

      <div className="mt-4">
        <ChartPlaceholder title={`${title} — ${timeframe}`} />

        {sectionIndex <= 2 && (
          <div className="mt-4 flex items-center gap-3">
            <button className="px-5 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--buy)' }}>BUY</button>
            <button className="px-5 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--sell)' }}>SELL</button>
          </div>
        )}
      </div>
    </section>
  )
}
