import type { Sponsor } from "./types"

// Donatur Zero Notch — ganti nama-nama di bawah dengan nama donatur asli.
// Sengaja hanya 3 placeholder (bukan 8) sesuai permintaan user: jangan
// kebanyakan yang kosong. Semua URL sudah ke cebanmatters.com/zeronotch.
// Logo di sini hanya teks nama, bukan logo sponsor Chanh Dai.
export const SPONSORS: Sponsor[] = [
  {
    name: "Nama Donatur 1",
    url: "https://cebanmatters.com/zeronotch",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" {...props}>
          <text x="160" y="58" textAnchor="middle" fontSize="34" fontFamily="sans-serif" fontWeight="700" fill="currentColor">Nama Donatur 1</text>
        </svg>
      )
    },
    tier: "platinum",
  },
  {
    name: "Nama Donatur 2",
    url: "https://cebanmatters.com/zeronotch",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" {...props}>
          <text x="160" y="58" textAnchor="middle" fontSize="34" fontFamily="sans-serif" fontWeight="700" fill="currentColor">Nama Donatur 2</text>
        </svg>
      )
    },
    tier: "platinum",
  },
  {
    name: "Nama Donatur 3",
    url: "https://cebanmatters.com/zeronotch",
    logo: function (props: React.ComponentProps<"svg">) {
      return (
        <svg viewBox="0 0 320 96" {...props}>
          <text x="160" y="58" textAnchor="middle" fontSize="34" fontFamily="sans-serif" fontWeight="700" fill="currentColor">Nama Donatur 3</text>
        </svg>
      )
    },
    tier: "platinum",
  },
]
