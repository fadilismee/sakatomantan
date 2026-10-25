import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "components"

// Komponen workspace asli zeronotch (bukan komponen registry template).
// Jumlah di judul panel dihitung otomatis dari daftar ini, jadi kalau fitur
// ditambah/dihapus, angkanya ikut berubah sendiri.
// Status: blue = tersedia, green = terhubung/aktif, grey = opsional,
// yellow = butuh konfigurasi.
const WORKSPACE_COMPONENTS = [
  { name: "Dynamic Notch", status: "Available", dot: "bg-blue-500" },
  { name: "Overview Dashboard", status: "Available", dot: "bg-blue-500" },
  { name: "Kerja / Kuliah Switcher", status: "Available", dot: "bg-blue-500" },
  { name: "Focus Timer", status: "Available", dot: "bg-blue-500" },
  { name: "Task Manager", status: "Available", dot: "bg-blue-500" },
  { name: "UT Calendar", status: "Connected", dot: "bg-green-500" },
  { name: "Module Downloader", status: "Python required", dot: "bg-yellow-500" },
  { name: "Study Streak", status: "Available", dot: "bg-blue-500" },
  { name: "Kuma Pet", status: "Available", dot: "bg-blue-500" },
  { name: "Music Player", status: "Available", dot: "bg-blue-500" },
  { name: "Lyrics View", status: "Available", dot: "bg-blue-500" },
  { name: "File Shelf", status: "Available", dot: "bg-blue-500" },
  { name: "Clipboard History", status: "Available", dot: "bg-blue-500" },
  { name: "Calculator", status: "Available", dot: "bg-blue-500" },
  { name: "Mirror", status: "Local", dot: "bg-blue-500" },
  { name: "App Shortcuts", status: "Available", dot: "bg-blue-500" },
  { name: "AI Assistant", status: "Optional", dot: "bg-zinc-400" },
  { name: "Quick Controls", status: "Available", dot: "bg-blue-500" },
]

export function Components() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Workspace components</a>
          <PanelTitleSup>({WORKSPACE_COMPONENTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <HandwrittenNote
        className="top-4 left-full ml-3 hidden w-36 flex-col items-start xl:flex"
        aria-hidden
      >
        <span className="-rotate-3">
          built in,
          <span className="block" />
          always nearby
        </span>
        <HandwrittenArrow className="mt-2 -rotate-3" />
      </HandwrittenNote>

      <p className="px-4 pt-4 text-sm text-muted-foreground">
        Built-in workspace components. Every component is designed to keep
        your most-used tools close, without interrupting your workflow.
      </p>

      <div className="relative pt-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 max-sm:hidden sm:grid-cols-2 md:grid-cols-3">
          <div className="border-r border-line" />
          <div className="border-r border-line max-md:hidden" />
        </div>

        <div className="screen-line-bottom h-px" />

        <ul className="grid grid-cols-1 overflow-x-clip sm:grid-cols-2 md:grid-cols-3">
          {WORKSPACE_COMPONENTS.map((c) => (
            <li
              key={c.name}
              className={cn(
                "max-sm:screen-line-bottom",
                "sm:max-md:nth-[2n+1]:screen-line-bottom",
                "md:nth-[3n+1]:screen-line-bottom"
              )}
            >
              <div className="flex flex-col gap-1 p-4">
                <h3 className="leading-snug font-medium text-balance">
                  {c.name}
                </h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <span
                    className={cn("size-1.5 shrink-0 rounded-full", c.dot)}
                    aria-hidden
                  />
                  {c.status}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="screen-line-top h-4 before:-top-px" />
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="#blocks" />}
        >
          Explore all features
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
