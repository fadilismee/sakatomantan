"use client"

import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

// Bunyi klik button link — dipilih acak tiap klik. KHUSUS /profile saja.
// Daftar bunyi di ./sounds (dipakai bersama diamond).
import { PROFILE_SOUNDS } from "./sounds"

export function LinkButtons({
  links,
}: {
  links: { label: string; href: string }[]
}) {
  // Satu pemutar per file, dipakai ulang supaya klik beruntun tidak menumpuk.
  const audioRef = useRef<Record<string, HTMLAudioElement>>({})

  const playRandomSound = () => {
    // Hentikan bunyi lain dulu supaya tidak menumpuk (penting karena ada
    // klip panjang di daftar).
    for (const audio of Object.values(audioRef.current)) {
      audio.pause()
      audio.currentTime = 0
    }
    const src =
      PROFILE_SOUNDS[Math.floor(Math.random() * PROFILE_SOUNDS.length)]
    let audio = audioRef.current[src]
    if (!audio) {
      audio = new Audio(src)
      audioRef.current[src] = audio
    }
    audio.currentTime = 0
    void audio.play().catch(() => {})
  }

  return (
    <div className="divide-y divide-line">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener"
          onClick={playRandomSound}
          className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-foreground/5"
        >
          <span className="size-2.5 shrink-0 bg-muted-foreground/40 transition-colors group-hover:bg-foreground" />
          <span className="text-sm text-foreground">{link.label}</span>
          <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
        </a>
      ))}
    </div>
  )
}
