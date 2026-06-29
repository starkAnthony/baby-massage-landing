import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { trackCTA } from '../utils/analytics'

type Variant = 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
  trackLabel?: string
  size?: 'default' | 'sm'
}

const variants: Record<Variant, string> = {
  primary: 'bg-cta text-white hover:bg-cta-hover btn-glow',
  secondary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
  outline:
    'border border-primary/30 bg-white text-primary hover:border-primary hover:bg-primary-light',
  gold: 'bg-gradient-to-r from-gold to-[#dbb84a] text-white shadow-md hover:shadow-lg',
  ghost: 'text-primary hover:bg-primary-light',
}

const sizes = {
  default: 'px-7 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base',
  sm: 'px-5 py-2.5 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  trackLabel,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
      data-cta={trackLabel}
      onClick={(e) => {
        if (trackLabel) trackCTA('cta_click', trackLabel)
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </button>
  )
}
