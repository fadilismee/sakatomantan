import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { HandwrittenArrow, HandwrittenNote } from "../handwritten-note"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"

const ID = "blocks"

// Screenshot fitur zeronotch asli kiriman user (13 file di
// public/zeronotch; kartu memakai 12, music.png lama tidak lagi dipakai
// tapi filenya tetap ada). Blok bawaan chanhdai TIDAK dipakai di homepage
// ini dan TIDAK dihapus: kode BlockItem/getBlocks tetap ada di repo.
const FEATURE_SCREENSHOTS = [
  {
    title: "Work overview",
    description:
      "Home for work: shortcuts, Pomodoro, today's progress, tasks, and notes.",
    image: "/zeronotch/beranda.png",
    width: 1094,
    height: 455,
  },
  {
    title: "Study overview",
    description:
      "Tasks, UT calendar, focus timer, learning streak, and Kuma.",
    image: "/zeronotch/overview-study.png",
    width: 840,
    height: 364,
  },
  {
    title: "Focus, streak & Kuma",
    description:
      "A 25-minute focus timer, learning streak, and your interactive companion.",
    image: "/zeronotch/fokus-belajar.png",
    width: 925,
    height: 456,
  },
  {
    title: "Music",
    description:
      "Control playback, volume, and skip tracks without leaving your flow.",
    image: "/zeronotch/music-player.png",
    width: 800,
    height: 458,
  },
  {
    title: "Lyrics",
    description: "Lyrics with translation, synced to the current track.",
    image: "/zeronotch/lyrics.png",
    width: 1060,
    height: 461,
  },
  {
    title: "Clipboard",
    description: "Scroll through copied text, links, code, and images.",
    image: "/zeronotch/clipboard.png",
    width: 840,
    height: 364,
  },
  {
    title: "File Shelf",
    description: "Frequently used files and references within quick reach.",
    image: "/zeronotch/file-shelf.png",
    width: 1046,
    height: 448,
  },
  {
    title: "Calculator",
    description: "Quick calculations without opening another application.",
    image: "/zeronotch/calculator.png",
    width: 1050,
    height: 448,
  },
  {
    title: "Mirror",
    description:
      "A local camera preview with a simple, distraction-free layout.",
    image: "/zeronotch/mirror.png",
    width: 596,
    height: 488,
  },
  {
    title: "Module downloader",
    description:
      "Search modules by code or title, then download the matching material.",
    image: "/zeronotch/module-downloader.png",
    width: 1062,
    height: 452,
  },
  {
    title: "UT calendar",
    description:
      "UT calendar with discussion forums and study notes per date.",
    image: "/zeronotch/kalender-ut.png",
    width: 990,
    height: 457,
  },
  {
    title: "Ask AI",
    description:
      "Ask anything — AI reads your full screen when you attach a capture.",
    image: "/zeronotch/ask-ai.png",
    width: 966,
    height: 454,
  },
]

export function Blocks() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blocks</a>
          <PanelTitleSup>({FEATURE_SCREENSHOTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <HandwrittenNote
        className="top-16 right-full mr-4 hidden w-36 flex-col items-end xl:flex"
        aria-hidden
      >
        <span className="-rotate-3 text-right">
          real screenshots,
          <span className="block" />
          from the app
        </span>
        <HandwrittenArrow className="-scale-x-100 -rotate-6" />
      </HandwrittenNote>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURE_SCREENSHOTS.map((item) => (
            <li
              key={item.title}
              className={cn(
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <div className="group/block relative flex h-full flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted">
                <div className="relative flex h-40 items-center justify-center overflow-hidden select-none [--image-radius:var(--radius-xl)]">
                  <Image
                    className="h-full w-auto rounded-(--image-radius) object-contain"
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    quality={100}
                    loading="eager"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-(--image-radius) inset-ring-1 inset-ring-black/15 dark:inset-ring-white/15" />
                </div>

                <div className="flex flex-col gap-1 p-2">
                  <h3 className="text-lg/snug font-medium text-balance">
                    <a href="#blocks">
                      <span className="absolute inset-0" aria-hidden />
                      {item.title}
                    </a>
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="#blocks" />}
        >
          All blocks
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
