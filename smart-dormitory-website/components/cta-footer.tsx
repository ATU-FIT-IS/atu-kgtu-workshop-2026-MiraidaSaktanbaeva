import { ArrowRight, Building2 } from "lucide-react"
import { ActionDialog } from "@/components/action-dialog"

export function CtaFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Сделайте своё общежитие умным
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Подключите Smart Dormitory и подарите студентам комфорт, а администрации — порядок.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ActionDialog
                variant="demo"
                size="lg"
                triggerClassName="group rounded-full px-7"
                triggerLabel={
                  <>
                    Начать бесплатно
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                }
              />
              <ActionDialog
                variant="contact"
                size="lg"
                buttonVariant="outline"
                triggerClassName="rounded-full px-7"
                triggerLabel="Связаться с нами"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building2 className="size-4" />
            </span>
            <span className="font-semibold">
              Smart<span className="text-primary">Dormitory</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Smart Dormitory. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
