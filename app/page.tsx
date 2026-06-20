"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { StatusBar } from "@/components/status-bar"
import { ChatHeader } from "@/components/chat-header"
import { MessageBubble } from "@/components/message-bubble"
import { ChatInput } from "@/components/chat-input"
import { initialMessages, type Message } from "@/lib/messages"

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  function scrollToBottom(behavior: ScrollBehavior = "smooth") {
    bottomRef.current?.scrollIntoView({ behavior })
  }

  useEffect(() => {
    scrollToBottom("auto")
  }, [])

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
    setShowScrollButton(distanceFromBottom > 120)
  }

  function getTime() {
    const now = new Date()
    let h = now.getHours()
    const m = now.getMinutes().toString().padStart(2, "0")
    const period = h >= 12 ? "p. m." : "a. m."
    h = h % 12 || 12
    return `${h}:${m} ${period}`
  }

  function handleSend(text: string) {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      sender: "me",
      time: getTime(),
      status: "sent",
    }
    setMessages((prev) => [...prev, newMessage])
    requestAnimationFrame(() => scrollToBottom("smooth"))

    // Simula los estados de entregado + leído
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "delivered" } : msg)),
      )
    }, 800)
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: "read" } : msg)))
    }, 1800)
  }

  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-black">
      <div className="relative flex h-dvh w-full max-w-md flex-col overflow-hidden bg-[#0b141a] sm:h-[900px] sm:rounded-[2.5rem] sm:border sm:border-white/10 sm:shadow-2xl">
        <StatusBar />
        <ChatHeader />

        {/* Mensajes */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto"
          style={{
            backgroundColor: "#0b141a",
            backgroundImage: "url('/chat-doodle-bg.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="flex flex-col gap-2 px-3 py-3">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            <div ref={bottomRef} />
          </div>
        </div>

        {showScrollButton && (
          <button
            type="button"
            onClick={() => scrollToBottom("smooth")}
            aria-label="Ir al final"
            className="absolute bottom-20 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#262d31] text-white/70 shadow-lg transition-transform active:scale-95"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        )}

        <ChatInput onSend={handleSend} />
      </div>
    </main>
  )
}
