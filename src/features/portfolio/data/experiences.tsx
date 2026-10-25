import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "zero-notch",
    companyName: "zeronotch",
    companyLogo: "/zero-notch-app-icon.svg",
    companyWebsite: "https://github.com/fadilismee/zeronotch",
    location: "Windows 10 & 11, 64-bit",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Pengembangan",
        employmentPeriod: {
          start: "10.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- zeronotch: workspace notch yang fokus untuk Windows. Ganti mode Kerja dan Kuliah, jadi antarmuka hanya menampilkan tools yang relevan.
- Mode Kuliah: tugas, kalender UT, timer fokus, streak belajar, catatan, cari/unduh modul, dan pendamping interaktif Kuma.
- Mode Kerja: Beranda, Fokus Pomodoro + streak, Utilitas (File Shelf, Clipboard, Kalkulator, Cermin, shortcut), Musik + lirik, dan AI opsional lewat endpoint OpenAI-compatible.
- Data workspace tetap lokal. Kamera hanya untuk Cermin dan tidak direkam. Installer saat ini belum ditandatangani (SmartScreen bisa muncul, cek SHA-256 di catatan rilis).`,
        skills: [
          "Electron",
          "Windows 10",
          "Windows 11",
          "Python 3",
          "OpenAI-compatible AI",
          "UT Calendar",
          "Module download",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
