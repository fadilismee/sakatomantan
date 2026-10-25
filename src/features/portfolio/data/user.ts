import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Zero",
  lastName: "Notch",
  displayName: "Zero Notch",
  username: "fadilismee",
  gender: "male",
  pronouns: "he/him",
  bio: "Your focused workspace inside one notch.",
  flipSentences: [
    "Your focused workspace inside one notch.",
    "Work and Study modes — only the tools you need.",
    "UT calendar, modules, focus timer, and Kuma.",
    "Your workspace data stays on your device.",
  ],
  address: "Windows 10 & 11, 64-bit",
  phoneNumberB64: "LS0t", // placeholder: ganti dengan nomor asli, base64
  emailB64: "aGFsb0B6ZXJvLW5vdGNoLmFwcA==", // halo@zero-notch.app (placeholder, repo tidak mencantumkan email)
  website: "https://github.com/fadilismee/zeronotch",
  jobTitle: "Notch workspace for Windows",
  jobs: [
    {
      title: "Notch workspace for Windows",
      company: "zeronotch",
      website: "https://github.com/fadilismee/zeronotch",
      experienceId: "zero-notch",
    },
  ],
  about: `One notch. Two focused spaces. zeronotch brings your work and study tools into one compact Windows workspace, designed to keep you focused without breaking your flow.`,
  avatar: "/zero-notch-cat-avatar.jpg",
  avatarSketch: "/zero-notch-cat-avatar.jpg",
  avatarVariants: {
    lightOff: "/zero-notch-cat-avatar.jpg",
    lightOn: "/zero-notch-cat-avatar.jpg",
    darkOff: "/zero-notch-cat-avatar.jpg",
    darkOn: "/zero-notch-cat-avatar.jpg",
  },
  ogImage: "/zero-notch-og.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Jakarta",
  keywords: [
    "zeronotch",
    "zero notch",
    "fadilismee",
    "notch windows",
    "kuma",
    "kerja",
    "kuliah",
    "kalender ut",
    "modul ut",
  ],
  dateCreated: "2026-10-25",
}
