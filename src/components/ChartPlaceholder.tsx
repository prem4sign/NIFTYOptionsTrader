import React from 'react'

interface Props {
  title?: string
}

export default function ChartPlaceholder({ title }: Props) {
  return (
    <div className="w-full h-64 md:h-72 lg:h-80 rounded-lg panel flex items-center justify-center">
      <div className="text-center text-slate-400">
        <div className="text-sm">{title ?? 'Chart'}</div>
        <div className="mt-3 text-xs">Chart placeholder — integrate charting library later</div>
      </div>
    </div>
  )
}
