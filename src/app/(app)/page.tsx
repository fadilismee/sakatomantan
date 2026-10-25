import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { CARBON_ADS } from "@/config/ads"
import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { FloatingCarbonAds } from "@/components/floating-carbon-ads"
import { Blocks } from "@/features/portfolio/components/blocks"
import { Blog } from "@/features/portfolio/components/blog"
import { Components } from "@/features/portfolio/components/components"
import { Education } from "@/features/portfolio/components/education"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import { Numbers } from "@/features/portfolio/components/numbers"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { Recognition } from "@/features/portfolio/components/recognition"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { Sponsors } from "@/features/portfolio/components/sponsors"
import { SponsorsCarousel } from "@/features/portfolio/components/sponsors-carousel"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { Testimonials } from "@/features/portfolio/components/testimonials"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />
      {CARBON_ADS && <FloatingCarbonAds />}

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <Separator />

          {/* Panel Overview disembunyikan sesuai permintaan — isinya
              (job, alamat, email, waktu lokal, telepon) tetap ada di
              features/portfolio/components/overview, tidak dihapus. */}
          {/* <Overview /> */}
          <SocialLinks />
          <GitHubContributions />
          <Separator />

          <Hello />
          <SponsorsCarousel />
          {/* Zero Notch dalam angka dinonaktifkan sementara — kode komponen
              tetap ada di features/portfolio/components/numbers, tidak dihapus. */}
          {/* <Numbers /> */}
          {/* Section Review dinonaktifkan sementara — belum ada review
              asli, jadi tidak ditampilkan dulu daripada placeholder.
              Komponen & datanya tetap ada di
              features/portfolio/components/testimonials dan
              features/portfolio/data/testimonials.tsx, bisa dikembalikan
              dengan menambah satu baris <Testimonials /> di sini saat
              review asli sudah masuk. */}
          {/* <Testimonials /> */}
          <Separator />

          <Components />
          <Separator />

          <Blocks />
          <Separator />

          {/* Section Blog tidak ditampilkan di homepage sesuai permintaan.
              Komponen & halaman /blog-nya tetap ada, tidak dihapus. */}
          {/* <Blog /> */}

          <TechStack />
          <Separator />

          {/* Section Perjalanan dihapus dari homepage sesuai permintaan.
              Komponen & data-nya tetap ada di
              features/portfolio/components/experiences dan
              features/portfolio/data/experiences.tsx, jadi bisa
              dikembalikan dengan menambah satu baris <Experiences /> di sini. */}
          <Education />
          <Separator />

          {/* Section Modul unggulan dihapus dulu dari homepage.
              Komponen & data-nya tetap ada, bisa dikembalikan dengan
              menambah satu baris <Projects /> di sini. */}
          {/* <Projects /> */}

          {/* Section Milestone dihapus dulu dari homepage.
              Komponen & data-nya tetap ada, bisa dikembalikan dengan
              menambah satu baris <Recognition /> di sini. */}
          {/* <Recognition /> */}

          <Sponsors />
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-x-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
