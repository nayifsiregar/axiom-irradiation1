/**
 * Semua rumus di bawah dapat ditelusuri ke sumber ilmiah publik:
 * - Inverse Square Law: hukum fisika radiasi standar.
 * - Radioactive Decay: hukum peluruhan eksponensial.
 * - Waktu iradiasi: praktik standar industri.
 * - DUR: hanya rentang indikatif, bukan nilai presisi (lihat disclaimer).
 */

export const HALF_LIFE_YEARS = {
  "Co-60": 5.27,
  "Cs-137": 30.17,
  "E-Beam": Infinity, // tidak meluruh
} as const;

export type SourceType = keyof typeof HALF_LIFE_YEARS;

/** Inverse Square Law: I₂ = I₁ × (r₁/r₂)² */
export function inverseSquare(I1: number, r1: number, r2: number): number {
  if (r2 <= 0) return NaN;
  return I1 * Math.pow(r1 / r2, 2);
}

/** Peluruhan aktivitas: A(t) = A₀ × e^(−λt), λ = ln(2)/T½ */
export function decayActivity(
  A0: number,
  halfLifeYears: number,
  elapsedYears: number
): number {
  if (!isFinite(halfLifeYears)) return A0;
  if (elapsedYears < 0) return A0;
  const lambda = Math.LN2 / halfLifeYears;
  return A0 * Math.exp(-lambda * elapsedYears);
}

/** Waktu iradiasi dasar: t = Dosis target / Laju dosis efektif */
export function irradiationTimeHours(
  targetDoseKGy: number,
  effectiveDoseRateKGyPerHour: number
): number {
  if (effectiveDoseRateKGyPerHour <= 0) return NaN;
  return targetDoseKGy / effectiveDoseRateKGyPerHour;
}

/** Rentang indikatif DUR berdasarkan kategori densitas produk */
export function indicativeDUR(density: "low" | "medium" | "high") {
  switch (density) {
    case "low":    return { min: 1.1, max: 1.4 };
    case "medium": return { min: 1.3, max: 1.8 };
    case "high":   return { min: 1.6, max: 2.5 };
  }
}

/** Throughput estimasi (kg/jam) */
export function throughputKgPerHour(
  massPerCycleKg: number,
  irradiationTimeHours: number
): number {
  if (irradiationTimeHours <= 0) return 0;
  return massPerCycleKg / irradiationTimeHours;
}

/** Deret laju dosis vs jarak untuk chart */
export function doseRateVsDistance(
  I1: number,
  r1: number,
  distances: number[]
): { distance: number; rate: number }[] {
  return distances.map((d) => ({
    distance: d,
    rate: Number(inverseSquare(I1, r1, d).toFixed(3)),
  }));
}