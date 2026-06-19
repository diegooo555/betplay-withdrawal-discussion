"use client"

import { Check, CheckCheck } from "lucide-react"
import type { Message } from "@/lib/messages"

export function MessageBubble({ message }: { message: Message }) {
  const isMe = message.sender === "me"

  return (
    <div className={`flex w-full ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[80%] rounded-xl px-2.5 py-1.5 text-[16px] leading-snug shadow-sm ${
          isMe ? "bg-[#005c4b] text-white" : "bg-[#262d31] text-white"
        }`}
      >
        {message.reply && (
          <div className="mb-1 overflow-hidden rounded-md border-l-[3px] border-[#a78bfa] bg-black/20 px-2 py-1">
            <p className="text-[13px] font-semibold text-[#a78bfa]">{message.reply.author}</p>
            <p className="truncate text-[14px] text-white/70">{message.reply.text}</p>
          </div>
        )}

        <div className="flex flex-wrap items-end justify-end gap-x-2">
          <span className="whitespace-pre-wrap break-words text-left">{message.text}</span>
          <span className="flex shrink-0 items-center gap-1 self-end pb-[1px]">
            <span className="text-[11px] text-white/50">{message.time}</span>
            {isMe &&
              (message.status === "read" ? (
                <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb]" strokeWidth={2.5} />
              ) : message.status === "delivered" ? (
                <CheckCheck className="h-3.5 w-3.5 text-white/50" strokeWidth={2.5} />
              ) : (
                <Check className="h-3.5 w-3.5 text-white/50" strokeWidth={2.5} />
              ))}
          </span>
        </div>
      </div>
    </div>
  )
}
