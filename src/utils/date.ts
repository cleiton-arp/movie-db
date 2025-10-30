// src/utils/date.ts

/**
 * Formata uma data para o formato dd/mm/aaaa
 * @param dateString Data em string ou objeto Date
 * @returns Data formatada em dd/mm/aaaa
 */
export function formatDateBR(date?: string): string {
  if (!date) return "00/00/0000";

  const d = new Date(date + "T00:00:00");
  if (isNaN(d.getTime())) return "00/00/0000";

  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const year = d.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
