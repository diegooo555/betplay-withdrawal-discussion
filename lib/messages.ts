export type Message = {
  id: string
  text: string
  sender: "me" | "them"
  time: string
  date: string // ISO date string: YYYY-MM-DD
  status?: "sent" | "delivered" | "read"
  reply?: {
    author: string
    text: string
  }
}

// Helper to get a date string N days ago from today (2026-06-20)
function daysAgo(n: number): string {
  const d = new Date("2026-06-20")
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

export const initialMessages: Message[] = [
  {
    id: "1",
    text: "Oye tengoo que hablar algo serio contigo sobre lo que paso el Domingo",
    sender: "me",
    time: "8:35 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "2",
    text: "Mis papas se enteraron y se pusieron bravos porque deje a mi hermano, y pues ellos se han percatado que gasto mucho dinero en nuestra relación, se enteraron como es tu mamá y la verdad no le veo futuro a esta relación.",
    sender: "me",
    time: "8:35 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "3",
    text: "Fue muy bonito lo que compartimos y queria decirte que tienes muchas cualidades valiosas y espero que te vaya muy bien en la vida",
    sender: "me",
    time: "8:36 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "4",
    text: "Si te entiendo 🥹, lo presentia desde que fui a tu cumpleaños no les cai muy bien no quiero dañar tu futuro y tus papas tienen toda la razon yo aun no e logrado nada solo me queda decirte gracias infinitas por todo",
    sender: "them",
    time: "8:36 p. m.",
    date: daysAgo(1),
  },
  {
    id: "5",
    text: "Gracias por comprenderme aun estamos jovenes nos quedan muchos sueños y metas por delante.",
    sender: "me",
    time: "8:36 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "6",
    text: "Quiero desearte lo mejor que sigas luchando cree en ti misma que lograras",
    sender: "me",
    time: "8:36 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "7",
    text: "Si tienes razon aprendi cosas muy importantes de ti, dejas una huella muy bonita en mi y seguire adelante hasta lograr mis objetivos",
    sender: "them",
    time: "8:36 p. m.",
    date: daysAgo(1),
    reply: {
      author: "Tú",
      text: "Gracias por comprenderme aun estamos jovenes nos quedan muchos sueños y metas por delante.",
    },
  },
  {
    id: "8",
    text: "Vale igualmente enfocate en ti como siempre te digo eres el mejor ojala algun día nos reencontremos quien quita el mundo es muy pequeño.",
    sender: "them",
    time: "8:37 p. m.",
    date: daysAgo(1),
    reply: {
      author: "Tú",
      text: "Quiero desearte lo mejor que sigas luchando cree en ti misma que lograras",
    },
  },
  {
    id: "9",
    text: "Oye y se que nos vamos a alejar pero quien quita que nos reencontremos en un futuro, Gracias por todo 🫶🏻",
    sender: "them",
    time: "8:37 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "10",
    text: "Aja tal vez no sabemos que nos depara el futuro, ten una linda noche me voy a descansar bye 💫",
    sender: "me",
    time: "8:37 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "11",
    text: "Igualmente ojala esto sea un hasta pronto y no un adiós",
    sender: "them",
    time: "8:37 p. m.",
    date: daysAgo(1),
    status: "read",
  },
  {
    id: "12",
    text: "Hola",
    sender: "them",
    time: "6:42 p. m.",
    date: daysAgo(0),
  },
  {
    id: "13",
    text: "Hola, ¿todo bien?",
    sender: "me",
    time: "7:15 p. m.",
    date: daysAgo(0),
    status: "read",
  },
  {
    id: "14",
    text: "Sí, gracias.",
    sender: "them",
    time: "7:20 p. m.",
    date: daysAgo(0),
  },
  {
    id: "15",
    text: "Me alegra.",
    sender: "me",
    time: "7:28 p. m.",
    date: daysAgo(0),
    status: "read",
  },
  {
    id: "16",
    text: "Bueno, que estés bien.",
    sender: "them",
    time: "7:29 p. m.",
    date: daysAgo(0),
  },
  {
    id: "17",
    text: "Igualmente.",
    sender: "me",
    time: "7:31 p. m.",
    date: daysAgo(0),
    status: "read",
  },
]
