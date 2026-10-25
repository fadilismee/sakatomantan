import { unstable_cache } from "next/cache"

import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL
    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_GITHUB_CONTRIBUTIONS_API_URL is not set")
    }

    // Fetch ke API contributions bisa gagal dari mesin build (timeout /
    // jaringan), dan kegagalan itu tidak boleh menggagalkan seluruh build:
    // kalau gagal, kembalikan daftar kosong seperti saat respons tidak OK.
    try {
      const res = await fetch(`${apiUrl}/${username}?y=last`)
      if (!res.ok) {
        return []
      }
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
