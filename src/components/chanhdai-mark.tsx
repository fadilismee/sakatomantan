export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M64 32H448A32 32 0 0 1 480 64V192A32 32 0 0 1 448 224H64A32 32 0 0 1 32 192V64A32 32 0 0 1 64 32ZM128 96H384A32 32 0 0 1 416 128A32 32 0 0 1 384 160H128A32 32 0 0 1 96 128A32 32 0 0 1 128 96Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`
}
