"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * Designed by ncdai on Figma with [Fast Isometric Plugin](https://www.figma.com/community/plugin/1249759048471403961).
 * Inspired by tailwindcss.com.
 *
 * soundSrc: kalau diisi, klik memutar file audio itu (mis. di page profil);
 * kalau kosong, klik memakai bunyi metal-click bawaan seperti di homepage.
 */
export function ChanhDaiMarkIsometric({ soundSrc }: { soundSrc?: string }) {
  const id = useId()
  const ids = {
    facePattern: `ncdai-face-pattern-${id}`,
    faceFill: `ncdai-face-fill-${id}`,
    stroke: `ncdai-stroke-${id}`,
    radialGradient: `ncdai-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  // Pemutar file audio khusus (mis. MP3 meme) — dibuat sekali, dipakai ulang.
  const fileAudioRef = useRef<HTMLAudioElement | null>(null)
  const playFileSound = () => {
    if (!soundSrc) return
    if (!fileAudioRef.current) {
      fileAudioRef.current = new Audio(soundSrc)
    }
    fileAudioRef.current.currentTime = 0
    void fileAudioRef.current.play().catch(() => {})
  }

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => {
        if (soundSrc) {
          playFileSound()
        } else {
          play()
        }
      }}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        {/* y, not a transform string: Motion runs those on WAAPI, which the
            <use> copies don't follow, so the hatch drifts off the outline. */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              y: 0,
            },
            pressed: {
              y: 16,
            },
          }}
          transition={transition}
        >
          <path d="M278 30 L500 160 L278 290 L56 160 Z" />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: "M278 30 L500 160 L278 290 L56 160 Z M56 160 L278 290 L278 330 L56 200 Z M278 290 L500 160 L500 200 L278 330 Z M278 130 L348 170 L278 210 L208 170 Z",
            },
            pressed: {
              d: "M278 46 L500 176 L278 306 L56 176 Z M56 176 L278 306 L278 346 L56 216 Z M278 306 L500 176 L500 216 L278 346 Z M278 146 L348 186 L278 226 L208 186 Z",
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        {/* <path d="M-782.39 676.57L949.67 -323.41" /> */}
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
        {/* <path d="M1337.65 612.57L-394.41 -387.41" /> */}
      </g>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M56 160 L278 290 L278 330 L56 200 Z",
            },
            pressed: {
              d: "M56 176 L278 306 L278 346 L56 216 Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M278 290 L500 160 L500 200 L278 330 Z",
            },
            pressed: {
              d: "M278 306 L500 176 L500 216 L278 346 Z",
            },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />
      <motion.path
        variants={{
          normal: {
            y: 0,
          },
          pressed: {
            y: 16,
          },
        }}
        transition={transition}
        d="M278 130 L348 170 L278 210 L208 170 Z"
        fill="currentColor"
      />


      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
    </motion.svg>
  )
}
