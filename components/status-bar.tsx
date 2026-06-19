"use client"

export function StatusBar() {
  return (
    <div className="flex items-center justify-between bg-[#1d1f1f] px-7 pt-3 pb-1 text-foreground">
      <span className="text-[17px] font-semibold tracking-tight">5:56</span>
      <div className="flex items-center gap-1.5">
        {/* Signal bars */}
        <div className="flex items-end gap-[2px]" aria-label="Señal">
          <span className="h-1.5 w-1 rounded-[1px] bg-foreground" />
          <span className="h-2 w-1 rounded-[1px] bg-foreground" />
          <span className="h-2.5 w-1 rounded-[1px] bg-foreground/30" />
          <span className="h-3 w-1 rounded-[1px] bg-foreground/30" />
        </div>
        <span className="text-[15px] font-semibold">4G</span>
        {/* Battery */}
        <div className="flex items-center" aria-label="Batería 30%">
          <div className="relative flex h-[13px] w-[24px] items-center rounded-[4px] border border-foreground/40 px-[1.5px]">
            <div className="h-[8px] w-[40%] rounded-[1.5px] bg-[#f5c518]" />
          </div>
          <div className="h-[5px] w-[1.5px] rounded-r bg-foreground/40" />
        </div>
      </div>
    </div>
  )
}
