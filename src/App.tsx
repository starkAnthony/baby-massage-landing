import { BRAND } from './data/content'
import { Logo, LogoMark } from './components/Logo'
import { Hero } from './sections/Hero'
import { WhyMassage } from './sections/WhyMassage'
import { Problems } from './sections/Problems'
import { AboutAuthor } from './sections/AboutAuthor'
import { Audience } from './sections/Audience'
import { Modules } from './sections/Modules'
import { LearningFormat } from './sections/LearningFormat'
import { Pricing } from './sections/Pricing'
import { ComparisonTable } from './sections/ComparisonTable'
import { Bonuses } from './sections/Bonuses'
import { Certificate } from './sections/Certificate'
import { FAQ } from './sections/FAQ'
import { MediaShowcase } from './sections/MediaShowcase'
import { LeadForm } from './sections/LeadForm'
import { StickyCTA } from './components/StickyCTA'
import { Button } from './components/Button'
import { scrollToForm } from './utils/analytics'

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <div className="container-narrow flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" aria-label={BRAND.name} className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: '#why', label: 'Afzalliklar' },
            { href: '#modules', label: 'Dastur' },
            { href: '#pricing', label: 'Tariflar' },
            { href: '#faq', label: 'FAQ' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          trackLabel="header_enroll"
          onClick={() => scrollToForm()}
          className="hidden sm:inline-flex"
        >
          Kursga yozilish
        </Button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10 pb-28 sm:pb-10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <LogoMark size={40} className="shadow-md" />
          <p className="font-display text-sm font-bold text-text">
            {BRAND.name}
          </p>
          <p className="text-xs text-text-muted">
            © 2026 Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyMassage />
        <Problems />
        <AboutAuthor />
        <MediaShowcase />
        <Audience />
        <Modules />
        <LearningFormat />
        <Pricing />
        <ComparisonTable />
        <Bonuses />
        <Certificate />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
