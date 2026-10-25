import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://zeronotch.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "GNU General Public License v3.0",
  url: "https://github.com/fadilismee/zeronotch/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

/* Nav one-page dulu: semua href adalah anchor ke section yang ada di
   homepage, bukan halaman terpisah. Craft & Blog dihapus dari nav karena
   tidak ada section-nya di homepage (Blog sudah dinonaktifkan, Craft
   hanya halaman terpisah). Kembalikan href halaman (/components,
   /blocks, /craft, /blog, /sponsors) kalau situs multi-page diaktifkan
   lagi. */
export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Components",
    href: "#components",
  },
  {
    title: "Blocks",
    href: "#blocks",
  },
  {
    title: "Thanks",
    href: "#sponsors",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "fadilismee/zeronotch"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/fadilismee/zeronotch"

export const SPONSORSHIP_URL = "https://cebanmatters.com/zeronotch"

export const UTM_PARAMS = {
  utm_source: "zero-notch",
}
