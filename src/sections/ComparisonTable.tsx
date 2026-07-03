import { Check, X } from 'lucide-react'
import { COMPARISON_FEATURES } from '../data/content'
import { Section, SectionHeader } from '../components/Section'

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm font-semibold text-text">{value}</span>
  }
  return value ? (
    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-cta-light">
      <Check className="h-4 w-4 text-cta" />
    </div>
  ) : (
    <X className="mx-auto h-4 w-4 text-text-muted/30" />
  )
}

export function ComparisonTable() {
  return (
    <Section id="comparison">
      <SectionHeader
        eyebrow="Taqqoslash"
        title="Tariflarni taqqoslash"
      />

      <div className="card overflow-hidden card-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="p-4 text-left text-sm font-bold text-text">Funksiya</th>
                <th className="p-4 text-center text-sm font-bold text-text-muted">Standart</th>
                <th className="bg-primary-light/60 p-4 text-center">
                  <span className="text-sm font-bold text-primary">Expert</span>
                  <span className="mt-0.5 block text-[10px] font-semibold text-cta uppercase">
                    Eng mashhur
                  </span>
                </th>
                <th className="p-4 text-center text-sm font-bold text-gold">VIP</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, i) => (
                <tr
                  key={row.name}
                  className={`border-b border-border/60 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-surface/50'
                  }`}
                >
                  <td className="p-4 text-sm font-medium text-text">{row.name}</td>
                  <td className="p-4 text-center">
                    <CellValue value={row.standart} />
                  </td>
                  <td className="bg-primary-light/30 p-4 text-center">
                    <CellValue value={row.expert} />
                  </td>
                  <td className="p-4 text-center">
                    <CellValue value={row.vip} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}
