import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`card overflow-hidden transition-all ${
        open ? 'border-primary/30 card-shadow-lg' : ''
      }`}
    >
      <button
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className="font-display text-base font-bold text-text sm:text-lg">{title}</h3>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
            open ? 'bg-primary text-white' : 'bg-primary-light text-primary'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
