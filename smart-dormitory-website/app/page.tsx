import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MobileApp } from "@/components/mobile-app"
import { Benefits } from "@/components/benefits"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <MobileApp />
        <Benefits />
      </main>
      <CtaFooter />
    </div>
  )
}
