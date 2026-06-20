"use client"

import { ChevronLeft, Video, Phone } from "lucide-react"

export function ChatHeader() {
  return (
    <header className="flex items-center gap-2 bg-[#1d1f1f] px-2 py-2 text-foreground">
      <button
        type="button"
        aria-label="Volver"
        className="flex items-center gap-1 rounded-full px-1 py-1 text-[#3797f0] transition-colors active:bg-white/5"
      >
        <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
        <span className="text-base font-medium text-foreground">128</span>
      </button>

      <button type="button" aria-label="Ver perfil de Yeimy" className="flex min-w-0 flex-1 items-center gap-3">
        <img
          src="/peli.jpeg"
          alt="Foto de perfil de Yeimy"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="truncate text-[17px] font-semibold">Yeimy</span>
      </button>

      <div className="flex items-center rounded-full bg-[#2a2c2c]">
        <button
          type="button"
          aria-label="Videollamada"
          className="flex h-9 w-12 items-center justify-center rounded-l-full transition-colors active:bg-white/10"
        >
          <Video className="h-6 w-6" strokeWidth={1.8} />
        </button>
        <div className="h-5 w-px bg-white/10" aria-hidden="true" />
        <button
          type="button"
          aria-label="Llamar"
          className="flex h-9 w-12 items-center justify-center rounded-r-full transition-colors active:bg-white/10"
        >
          <Phone className="h-[22px] w-[22px]" strokeWidth={1.8} />
        </button>
      </div>
    </header>
  )
}
