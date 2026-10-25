import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "mahasiswa-ut",
    school: "UT students",
    fieldOfStudy: "Calendar, Modules, Focus, and Kuma",
    period: {
      start: "10.2026",
    },
    description: `- See your UT schedule in the Calendar after signing in.
- Search modules by code or title, then download the file (requires Python 3).
- Track study sessions, streaks, and Kuma in Focus; keep notes and references in Notes and Clipboard.`,
    skills: ["UT calendar", "Modules", "Focus", "Streak", "Notes", "Kuma"],
  },
  {
    id: "pekerja",
    school: "Workers",
    fieldOfStudy: "Home, Focus, Utilities, and Music",
    period: {
      start: "10.2026",
    },
    description: `- Home for a quick workspace overview.
- Focus for Pomodoro sessions and streaks.
- Utilities: File Shelf, Clipboard, Calculator, Mirror, and app shortcuts.
- Music with compact controls and lyrics when available.`,
    skills: ["Home", "Focus", "File Shelf", "Clipboard", "Calculator", "Mirror", "Music"],
  },
  {
    id: "pengguna-windows",
    school: "Windows 10 & 11 users",
    fieldOfStudy: "64-bit, local data",
    period: {
      start: "10.2026",
    },
    description: `- Windows 10 or Windows 11, 64-bit.
- Workspace data stays on your device; the camera is local-only for Mirror.
- Internet is only used for features you connect: UT, module downloads, lyrics, or an AI endpoint.`,
    skills: ["Windows 10", "Windows 11", "64-bit", "Local data"],
  },
]
