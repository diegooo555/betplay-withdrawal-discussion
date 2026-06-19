export type Message = {
  id: string
  text: string
  sender: "me" | "them"
  time: string
  status?: "sent" | "delivered" | "read"
  reply?: {
    author: string
    text: string
  }
}

export const initialMessages: Message[] = [
  {
    id: "1",
    text: "Tengo 60 mil en betplay",
    sender: "me",
    time: "8:35 p. m.",
    status: "read",
  },
  {
    id: "2",
    text: "Pero quiero retirarlos",
    sender: "me",
    time: "8:35 p. m.",
    status: "read",
  },
  {
    id: "3",
    text: "No quiero arriesgar jajaja",
    sender: "me",
    time: "8:36 p. m.",
    status: "read",
  },
  {
    id: "4",
    text: "Pq ?",
    sender: "them",
    time: "8:36 p. m.",
  },
  {
    id: "5",
    text: "O me arriesgo amor",
    sender: "me",
    time: "8:36 p. m.",
    status: "read",
  },
  {
    id: "6",
    text: "Le apuesto a la tricolor",
    sender: "me",
    time: "8:36 p. m.",
    status: "read",
  },
  {
    id: "7",
    text: "Jsjs",
    sender: "them",
    time: "8:36 p. m.",
    reply: {
      author: "Tú",
      text: "No quiero arriesgar jajaja",
    },
  },
  {
    id: "8",
    text: "No se amor jsjs no digo si o no pq pues sabes Q yo soy de mala suerte jajaja",
    sender: "them",
    time: "8:37 p. m.",
    reply: {
      author: "Tú",
      text: "O me arriesgo amor",
    },
  },
  {
    id: "9",
    text: "Tú eres la mejor de mis suertes",
    sender: "me",
    time: "8:37 p. m.",
    status: "read",
  },
  {
    id: "10",
    text: "Siempre contigo gano",
    sender: "me",
    time: "8:37 p. m.",
    status: "read",
  },
]
