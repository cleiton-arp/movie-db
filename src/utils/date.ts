// src/utils/date.ts

/**
 * Formata uma data para o formato dd/mm/aaaa
 * @param dateString Data em string ou objeto Date
 * @returns Data formatada em dd/mm/aaaa
 */
export function formatDateBR(dateString: string | Date): string {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;

  if (isNaN(date.getTime())) {
    return "";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
