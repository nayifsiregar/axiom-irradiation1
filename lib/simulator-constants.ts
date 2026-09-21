import { SourceType } from "./physics";

export interface SourcePreset {
  label: string;
  description: string;
  nominalDoseRateAt1m: number; // kGy/jam (asumsi awal, hanya untuk edukasi)
  supportsDecay: boolean;
}

export const SOURCE_PRESETS: Record<SourceType, SourcePreset> = {
  "Co-60": {
    label: "Gamma Co-60",
    description:
      "Sumber gamma umum untuk sterilisasi industri. Aktivitas meluruh ~12%/tahun.",
    nominalDoseRateAt1m: 5,
    supportsDecay: true,
  },
  "Cs-137": {
    label: "Gamma Cs-137",
    description:
      "Sumber gamma dengan waktu paruh panjang, cocok untuk riset dan kalibrasi.",
    nominalDoseRateAt1m: 0.5,
    supportsDecay: true,
  },
  "E-Beam": {
    label: "Electron Beam",
    description:
      "Akselerator elektron, tidak meluruh. Penetrasi lebih rendah dari gamma.",
    nominalDoseRateAt1m: 100,
    supportsDecay: false,
  },
};

export const USE_CASE_DOSE = [
  { label: "Sterilisasi alkes (ISO 11137-2)", value: 25, note: "Dosis aktual melalui dose establishment." },
  { label: "Dekontaminasi rempah", value: 10, note: "Rujuk regulasi BPOM untuk pangan iradiasi." },
  { label: "Disinfestasi buah", value: 0.4, note: "Bergantung jenis produk." },
  { label: "Radiasi kosmetik", value: 5, note: "Verifikasi dengan standar terkait." },
];