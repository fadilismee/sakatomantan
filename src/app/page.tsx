import type { Metadata } from "next"

import ProfilePage from "./profile/page"

export const metadata: Metadata = {
  title: "Zero Notch",
  alternates: {
    canonical: "/",
  },
}

// Halaman utama sakatomantan = halaman /profile saja (bukan homepage
// template): root me-render komponen halaman profil yang sama persis,
// jadi / dan /profile selalu identik.
export default ProfilePage
