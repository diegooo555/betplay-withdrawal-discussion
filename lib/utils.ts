import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts an ISO date string (YYYY-MM-DD) into a human-readable Spanish label.
 * Returns "Hoy", "Ayer", or e.g. "15 de junio" / "15 de junio de 2025"
 */
export function getDateLabel(isoDate: string): string {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  // Parse the ISO date as local midnight to avoid timezone shifts
  const [year, month, day] = isoDate.split("-").map(Number)
  const date = new Date(year, month - 1, day)

  if (date.getTime() === today.getTime()) return "Hoy"
  if (date.getTime() === yesterday.getTime()) return "Ayer"

  const monthNames = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ]

  const labelDay = date.getDate()
  const labelMonth = monthNames[date.getMonth()]

  // Show the year only if it differs from the current year
  if (date.getFullYear() !== today.getFullYear()) {
    return `${labelDay} de ${labelMonth} de ${date.getFullYear()}`
  }

  return `${labelDay} de ${labelMonth}`
}
