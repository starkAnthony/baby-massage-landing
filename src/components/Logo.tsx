import { useId } from 'react'

type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  const gradId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="6"
          y1="4"
          x2="42"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a5fb4" />
          <stop offset="1" stopColor="#1247a0" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="12" fill={`url(#${gradId})`} />

      <circle cx="24" cy="16.5" r="4.75" fill="white" />
      <path
        d="M19.2 22.2C20.4 21.1 22 20.5 24 20.5C26 20.5 27.6 21.1 28.8 22.2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11.5 31.5C11.5 24.5 15.8 20 20.8 21.5C22.4 22 23.6 23.2 24 24.2C24.4 23.2 25.6 22 27.2 21.5C32.2 20 36.5 24.5 36.5 31.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13.5 30.5C17.2 34.5 21.5 36 24 36C26.5 36 30.8 34.5 34.5 30.5"
        stroke="#4fd4a5"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx="24" cy="28.5" r="1.6" fill="#1a9d6c" />
    </svg>
  )
}

type LogoProps = {
  showText?: boolean
  size?: number
  className?: string
}

export function Logo({ showText = true, size = 40, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <LogoMark size={size} className="shrink-0 shadow-md" />
      {showText && (
        <div>
          <p className="font-display text-sm font-bold leading-tight text-text">
            Bolalar Massaji
          </p>
          <p className="text-[11px] text-text-muted">Onlayn Akademiya</p>
        </div>
      )}
    </div>
  )
}
