import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "mode-kuliah",
    title: "Mode Kuliah",
    period: {
      start: "10.2026",
    },
    link: "https://github.com/fadilismee/zeronotch",
    skills: ["Kalender UT", "Modul", "Fokus", "Streak", "Kuma", "Catatan"],
    description: `Workspace kuliah: tugas, kalender UT, timer fokus, streak belajar, catatan, cari/unduh modul, dan pendamping interaktif Kuma.`,
    isExpanded: true,
  },
  {
    id: "mode-kerja",
    title: "Mode Kerja",
    period: {
      start: "10.2026",
    },
    link: "https://github.com/fadilismee/zeronotch",
    skills: ["Beranda", "Fokus", "Utilitas", "Musik", "AI opsional"],
    description: "Workspace kerja: Beranda, Fokus Pomodoro + streak, Utilitas (File Shelf, Clipboard, Kalkulator, Cermin, shortcut), dan Musik dengan lirik.",
  },
  {
    id: "kuma",
    title: "Kuma",
    period: {
      start: "10.2026",
    },
    link: "https://github.com/fadilismee/zeronotch",
    skills: ["Pendamping interaktif", "Kuliah", "Streak"],
    description: "Pendamping interaktif di mode Kuliah, menemani sesi fokus dan streak belajar.",
  },
  {
    id: "zeronotch",
    title: "zeronotch",
    period: {
      start: "10.2026",
    },
    link: "https://github.com/fadilismee/zeronotch",
    skills: ["Windows", "Electron", "GPL-3.0"],
    description: "A focused notch workspace for Windows. Download di Releases, dukungan di cebanmatters.com/zeronotch.",
  },
]
