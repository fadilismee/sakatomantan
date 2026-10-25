export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <text x="1024" y="175" textAnchor="middle" fontSize="170" fontFamily="monospace" fontWeight="700" letterSpacing="20" fill="currentColor">ZERO NOTCH</text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="1024" y="175" text-anchor="middle" font-size="170" font-family="monospace" font-weight="700" letter-spacing="20" fill="currentColor">ZERO NOTCH</text></svg>`
}
