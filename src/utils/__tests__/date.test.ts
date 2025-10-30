import { formatDateBR } from "../date";

describe("formatDateBR", () => {
  it("formata datas válidas no padrão dd/mm/aaaa", () => {
    expect(formatDateBR("2025-07-29")).toBe("29/07/2025");
    expect(formatDateBR("2024-01-01")).toBe("01/01/2024");
  });

  it("trata datas inválidas ou vazias", () => {
    expect(formatDateBR("")).toBe("00/00/0000");
    expect(formatDateBR(undefined)).toBe("00/00/0000");
    expect(formatDateBR("invalid-date")).toBe("00/00/0000");
  });
});
