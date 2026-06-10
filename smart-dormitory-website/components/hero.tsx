import { ArrowRight, Sparkles, Wrench, Bell, WashingMachine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ActionDialog } from "@/components/action-dialog"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            Цифровое общежитие нового поколения
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Умное управление общежитием в&nbsp;одном приложении
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Smart Dormitory объединяет заявки на ремонт, учёт заселения, уведомления и бронирование
            прачечной и кухни. Меньше бумаг — больше комфорта для студентов.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionDialog
              variant="demo"
              size="lg"
              triggerClassName="group rounded-full px-7 text-base font-medium"
              triggerLabel={
                <>
                  Попробовать демо
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7 text-base"
              nativeButton={false}
              render={<a href="#features">Узнать больше</a>}
            />
          </div>
        </div>

        {/* floating stat / preview cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          <PreviewCard
            icon={<Wrench className="size-5" />}
            title="Заявка на ремонт"
            desc="Сломался кран в 312"
            tag="В работе"
          />
          <PreviewCard
            icon={<WashingMachine className="size-5" />}
            title="Прачечная"
            desc="Слот 18:00 — 19:00"
            tag="Забронировано"
          />
          <PreviewCard
            icon={<Bell className="size-5" />}
            title="Уведомление"
            desc="Отключение воды завтра"
            tag="Новое"
          />
        </div>
      </div>
    </section>
  )
}

function PreviewCard({
  icon,
  title,
  desc,
  tag,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  tag: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/50">
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          {icon}
        </span>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>
      </div>
      <h3 className="mt-4 text-sm font-medium">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}
