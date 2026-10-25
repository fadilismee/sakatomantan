import { addQueryParams } from "@/utils/url"
import { ArrowRightIcon } from "lucide-react"

import { SPONSORSHIP_URL, UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@/components/animated-icons/plus-icon"
import { SponsorItem } from "@/features/sponsor/components/sponsor-item"
import { SPONSORS } from "@/features/sponsor/data"
import type { SponsorTier } from "@/features/sponsor/types"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { Panel, PanelDescription, PanelHeader, PanelTitle } from "./panel"

const FEATURED_TIERS = new Set<SponsorTier>([
  "osp",
  "platinum",
  "gold",
  "silver",
])

const FEATURED_SPONSORS = SPONSORS.filter((sponsor) =>
  FEATURED_TIERS.has(sponsor.tier)
)

const ID = "sponsors"

export function Sponsors() {
  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <PanelHeader>
        <PanelTitle>
          Terima kasih,
          <span className="block sm:hidden" /> donatur
        </PanelTitle>

        <PanelDescription>
          Terima kasih kepada donatur yang membuat Zero Notch terus jalan.
        </PanelDescription>
      </PanelHeader>

      {/* Coretan/doodle di panel donasi (bebas, sesuai permintaan user):
          squiggle + bintang di pojok kanan atas panel. pointer-events-none
          supaya tidak menghalangi klik ke cebanmatters. */}
      <svg
        className="pointer-events-none absolute top-3 right-4 size-16 -rotate-6 text-muted-foreground"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 44c6-8 12 8 18 0s12 8 18 0 12 8 18 0" />
        <path d="M48 6l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        <path d="M10 8l1.5 4 4 1.5-4 1.5L10 19l-1.5-4-4-1.5 4-1.5z" />
      </svg>

      <HandwrittenNote
        className="top-4 left-full ml-3 hidden w-36 flex-col items-start xl:flex"
        aria-hidden
      >
        <span className="-rotate-3">
          donate,
          <span className="block" />
          put your name here
        </span>
        <HandwrittenArrow className="mt-2 -rotate-3" />
      </HandwrittenNote>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURED_SPONSORS.map((item) => (
            <ListItem key={item.name}>
              <SponsorItem
                className="min-h-22.5 [&_svg]:w-full [&_svg]:max-w-75 [&_svg]:shrink-0"
                href={addQueryParams(item.url, UTM_PARAMS)}
                aria-label={`${item.name} logo`}
              >
                <item.logo aria-hidden />
              </SponsorItem>
            </ListItem>
          ))}

          <ListItem>
            <SponsorItem
              className="relative h-full min-h-22.5"
              href={SPONSORSHIP_URL}
              aria-label="Sponsor my work"
            >
              <PlusIcon
                className="flex size-full items-center justify-center text-muted-foreground"
                size={24}
                aria-hidden
              />
              {/* Lingkaran coretan tangan di sekeliling tombol + donasi. */}
              <svg
                className="pointer-events-none absolute inset-0 m-auto size-16 -rotate-6 text-muted-foreground"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M32 4C48 4 60 16 60 32 60 48 48 60 32 60 16 60 4 48 4 32 4 16 16 4 32 4" />
              </svg>
            </SponsorItem>
          </ListItem>
        </ul>
      </div>

      <div className="screen-line-top -mb-px flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<a href={SPONSORSHIP_URL} target="_blank" rel="noopener" />}
        >
          Jadi donatur
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}

function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom",
        className
      )}
      {...props}
    />
  )
}
