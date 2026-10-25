import synced from "./numbers.json"

/** Packages whose downloads `pnpm numbers:sync` adds up. */
export const NPM_PACKAGES: string[] = []

/**
 * Updated by hand: the X API is paid, and a follower count read every few
 * weeks does not justify it.
 */
const X_FOLLOWERS = 0 // placeholder: ganti dengan jumlah donatur asli

/** `numbers.json` is written by `pnpm numbers:sync`; edit it only through that. */
export const NUMBERS = {
  ...synced,
  xFollowers: X_FOLLOWERS,
}
