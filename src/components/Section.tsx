import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  altBg?: boolean
}

export function Section({ id, children, className = '', altBg = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${altBg ? 'section-alt' : ''} ${className}`}
    >
      <div className="container-narrow">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  align?: 'center' | 'left'
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  as: Tag = 'h2',
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`divider-gradient mt-8 ${align === 'center' ? 'mx-auto w-24' : 'w-24'}`} />
    </div>
  )
}
