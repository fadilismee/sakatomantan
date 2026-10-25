import type { Metadata } from "next"

import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"

import { LinkButtons } from "./link-buttons"

export const metadata: Metadata = {
  title: "Zero Notch",
  alternates: {
    canonical: "/profile",
  },
}

// Tombol link profil — tema pixel kotak persis grafik contributions:
// kotak persegi tanpa lengkungan, latar gelap, border garis tipis, satu
// kotak kecil di kiri yang menyala saat hover.
// CARA NAMBAH TOMBOL: hapus // di baris yang dikomen, lalu isi href-nya.
const PROFILE_LINKS = [
  { label: "Zero Notch", href: "https://zeronotch.secretex.my.id/" },
  { label: "Instagram", href: "https://www.instagram.com/sakatomantan_/" },
  { label: "TikTok", href: "https://www.tiktok.com/@sakatomantan_" },
  // { label: "YouTube", href: "#" },
  // { label: "X", href: "#" },
  // { label: "Donasi", href: "#" },
]

// Halaman profil ala screenshot: hero diamond + profil + tombol link,
// TANPA navbar atas (route ini di luar grup (app), jadi SiteHeader dan
// SiteBottomNav tidak ikut dirender). Yang diubah dari tampilan asli hanya:
// 1. tidak ada navbar,
// 2. ikon sosial diganti teks ex,
// 3. panel grafik contributions diganti tombol link pixel di bawah ini,
// 4. klik diamond memutar bunyi fahhh (MP3 myinstants, file lokal di
//    public/sounds/fahhh-pump.mp3), bukan metal-click bawaan.
// Sisanya memakai komponen yang sama persis dengan homepage.
export default function ProfilePage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <ProfileHeader clickSoundSrc="/sounds/fahhh-pump.mp3" />

      <Panel className="screen-line-bottom-none screen-line-top-none">
        <PanelContent>
          <p className="text-base text-foreground">
            Nothing going on here, bang. I just love and miss my ex.
          </p>
        </PanelContent>

        <HandwrittenNote className="-top-7 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
          <span className="-rotate-6">follow me</span>
          <HandwrittenArrow className="size-7 translate-x-3 -scale-x-100 -rotate-6" />
        </HandwrittenNote>
      </Panel>

      <Panel>
        <h2 className="sr-only">Links</h2>

        <LinkButtons links={PROFILE_LINKS} />
      </Panel>
    </div>
  )
}
