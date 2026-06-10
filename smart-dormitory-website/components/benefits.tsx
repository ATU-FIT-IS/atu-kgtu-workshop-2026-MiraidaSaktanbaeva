import { Clock, Smile, FileCheck, MessageSquareHeart } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Экономия времени",
    desc: "Никаких очередей к коменданту и бумажных заявлений — всё решается онлайн.",
  },
  {
    icon: FileCheck,
    title: "Прозрачность",
    desc: "Всегда видно статус заявки, расписание бронирований и историю обращений.",
  },
  {
    icon: Smile,
    title: "Комфорт быта",
    desc: "Прачечная и кухня без споров за время — каждый знает свой слот.",
  },
  {
    icon: MessageSquareHeart,
    title: "Связь с администрацией",
    desc: "Важные объявления и ответы приходят прямо в приложение.",
  },
]

const stats = [
  { value: "−70%", label: "времени на заявки" },
  { value: "24/7", label: "доступ онлайн" },
  { value: "0", label: "бумажных бланков" },
  { value: "100%", label: "прозрачность брони" },
]

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium text-primary">Преимущества для студентов</span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Почему студенты выбирают Smart Dormitory
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <b.icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-8 text-center">
            <div className="text-3xl font-semibold text-primary md:text-4xl">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
