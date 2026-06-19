"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Sticker, Camera, Mic, Send } from "lucide-react"

export function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState("")
  const hasText = text.trim().length > 0

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!hasText) return
    onSend(text.trim())
    setText("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-[#1d1f1f] px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <button
        type="button"
        aria-label="Adjuntar"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground transition-colors active:bg-white/10"
      >
        <Plus className="h-7 w-7" strokeWidth={2} />
      </button>

      <div className="flex flex-1 items-center gap-2 rounded-full bg-[#2a2c2c] px-4 py-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          aria-label="Escribe un mensaje"
          className="min-w-0 flex-1 bg-transparent text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="button"
          aria-label="Sticker"
          className="flex h-7 w-7 shrink-0 items-center justify-center text-muted-foreground transition-colors active:text-foreground"
        >
          <Sticker className="h-6 w-6" strokeWidth={1.8} />
        </button>
      </div>

      {hasText ? (
        <button
          type="submit"
          aria-label="Enviar"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#21c063] text-black transition-transform active:scale-95"
        >
          <Send className="h-5 w-5" strokeWidth={2.2} />
        </button>
      ) : (
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label="Cámara"
            className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors active:bg-white/10"
          >
            <Camera className="h-[26px] w-[26px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Mensaje de voz"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21c063] text-black transition-transform active:scale-95"
          >
            <Mic className="h-[22px] w-[22px]" strokeWidth={2} />
          </button>
        </div>
      )}
    </form>
  )
}
