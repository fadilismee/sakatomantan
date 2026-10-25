import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@zero-notch",
    href: "https://x.com/zero-notch",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "fadilismee",
    href: "https://github.com/fadilismee",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "zero-notch",
    href: "https://linkedin.com/company/zero-notch",
    sameAs: true,
  },
  // dailydotdev: {
  //   sameAs: true,
  // },
  // discord: {
  //   title: "Discord",
  // },
  // youtube: {
  //   title: "YouTube",
  //   sameAs: true,
  // },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
