import Link from "next/link"

import { LICENSE, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import type { BuildInfo } from "@/lib/build-info"
import { getBuildInfo } from "@/lib/build-info"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { DmcaIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"

// Imported here rather than through `@/config/site`, which client components
// pull in, to keep the manifest out of client bundles.
import packageJson from "../../package.json"
import { ChanhDaiMark } from "./chanhdai-mark"

const INSPIRED_BY = [
  "Tailwind CSS",
  "shadcn/ui",
  "Vercel",
  "Evil Charts",
  "Devouring Details",
  "Skiper UI",
  "Making Software",
  "shadcncraft",
]

const SITE_TITLE = "zeronotch"

const SITE_SUBTITLE = packageJson.description

const GITHUB_RELEASES_URL =
  "https://github.com/fadilismee/zeronotch/releases"

// Data rilis aplikasi dari GitHub Releases API: total event unduhan per aset
// (bukan jumlah orang unik) + tanggal publikasi rilis terbaru. Diambil saat
// build, jadi angka & tanggal ikut update tiap situs di-build ulang; kalau
// API gagal, footer menampilkan tanda "—", bukan angka/tanggal palsu.
type ReleaseInfo = {
  downloads: number | null
  publishedAt: string | null
}

async function getReleaseInfo(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/fadilismee/zeronotch/releases",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return { downloads: null, publishedAt: null }
    const releases = (await res.json()) as {
      assets?: { download_count?: number }[]
      published_at?: string
    }[]
    const downloads = releases.reduce(
      (total, release) =>
        total +
        (release.assets ?? []).reduce(
          (sum, asset) => sum + (asset.download_count ?? 0),
          0
        ),
      0
    )
    return { downloads, publishedAt: releases[0]?.published_at ?? null }
  } catch {
    return { downloads: null, publishedAt: null }
  }
}

function formatReleaseDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso))
}

// Stack aplikasi zeronotch (data dari pemilik repo, bukan stack landing page
// ini yang berbasis Next.js). Dependencies yang terkonfirmasi: node-forge.
const APP_STACK = [
  "Electron 44",
  "Node.js 18+",
  "JavaScript",
  "HTML",
  "CSS",
]

/** Footer laid out as the title block of a technical drawing. */
export async function SiteFooterCad() {
  const xLink = SOCIAL.x
  const githubLink = SOCIAL.github
  const linkedinLink = SOCIAL.linkedin

  const build = getBuildInfo()
  const release = await getReleaseInfo()
  const downloads = release.downloads

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-x-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom before:z-1">
          <div className="stripe-divider h-12" />
        </div>

        <div className="relative">
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium">{SITE_TITLE}</span>
            <span className="font-sans text-muted-foreground">
              {SITE_SUBTITLE}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
            <Field label="Crafted by">
              <a
                className="link-underline"
                href="https://github.com/fadilismee"
                target="_blank"
                rel="noopener"
              >
                fadilismee
              </a>
            </Field>

            <Field label="Build">
              <BuildValue build={build} />
            </Field>

            <Field label="Date">
              {release.publishedAt ? (
                <time dateTime={release.publishedAt.slice(0, 10)}>
                  {formatReleaseDate(release.publishedAt)}
                </time>
              ) : (
                "—"
              )}
            </Field>

            <Field label="Downloads">
              <a
                className="link-underline"
                href={GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener"
              >
                {downloads === null ? "—" : `${downloads} downloads`}
              </a>
            </Field>

            <Field label="Deployed on">
              <span className="font-sans" aria-hidden>
                ▲
              </span>
              <span className="sr-only">Vercel</span>
            </Field>

            <Field label="Source code">
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </Field>

            <Field label="License">
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </Field>

            <Field label="Typeface">Geist</Field>

            <Field className="col-span-2" label="Stack">
              <ul className="flex flex-col gap-0.5">
                {APP_STACK.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </Field>

            <Field label="Dependencies">node-forge</Field>

            <Field label="Analytics">
              <ul className="flex flex-col gap-0.5">
                <li>Privacy-first</li>
                <li>No tracking configured</li>
              </ul>
            </Field>

            <Field label="Release notes">
              <a
                className="link-underline"
                href={GITHUB_RELEASES_URL}
                target="_blank"
                rel="noopener"
              >
                v1.0.9
              </a>
            </Field>

            {/* Inspired by disembunyikan dulu sesuai permintaan —
                dibungkus false && supaya tidak dirender, kode & daftar
                INSPIRED_BY tetap ada, tidak dihapus. Hapus pembungkus
                false && untuk menampilkan lagi. */}
            {false && (
              <Field className="col-span-2 md:col-span-4" label="Inspired by">
              <ol className="-mx-4 grid grid-cols-2 gap-x-px gap-y-0.5 font-sans md:grid-cols-4">
                {INSPIRED_BY.map((name, index) => (
                  <li className="flex gap-2 px-4" key={name}>
                    {/* Hidden: the list element already conveys the position. */}
                    <span
                      className="font-mono text-muted-foreground/80"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {name}
                  </li>
                ))}
              </ol>
              </Field>
            )}
          </dl>
        </div>

        <div className="screen-line-top h-4" />

        <div className="screen-line-top screen-line-bottom flex items-center gap-3 px-4 py-3 text-muted-foreground">
          <Link
            href="/"
            className="mr-auto text-muted-foreground transition-[color] hover:text-foreground"
            aria-label="Home"
          >
            <ChanhDaiMark className="h-4" />
          </Link>

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={xLink.href}
            target="_blank"
            rel="noopener"
            aria-label="X Profile"
          >
            <XIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={githubLink.href}
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={linkedinLink.href}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="size-4" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={
              process.env.NEXT_PUBLIC_DMCA_URL ||
              "https://www.dmca.com/ProtectionPro.aspx"
            }
            target="_blank"
            rel="noopener"
            aria-label="DMCA.com Protection Status"
          >
            <DmcaIcon className="h-4 w-auto" />
          </a>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function BuildValue({ build }: { build: BuildInfo }) {
  // Versi aplikasi (v1.0.9) + hash commit landing page saat build. Kalau
  // hash tidak tersedia (mis. build lokal tanpa Vercel env), tampilkan
  // versinya saja, bukan hash palsu.
  if (!build.commitShortSha) {
    return <span>v1.0.9</span>
  }

  return (
    <>
      v1.0.9 ·{" "}
      {build.commitUrl ? (
        <a
          className="link-underline"
          href={build.commitUrl}
          target="_blank"
          rel="noopener"
        >
          {build.commitShortSha}
        </a>
      ) : (
        build.commitShortSha
      )}

      {build.environment !== "production" && (
        <span className="text-muted-foreground">
          {" "}
          ({build.environment === "development" ? "local" : build.environment})
        </span>
      )}
    </>
  )
}

function Field({
  className,
  label,
  children,
}: {
  className?: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}
