import { Wrench, ClipboardCheck, Bell, CalendarClock } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Заявки на ремонт",
    desc: "Сфотографируйте проблему и отправьте заявку за секунды. Отслеживайте статус — от «принято» до «выполнено».",
    points: ["Фото и описание", "Статус в реальном времени", "История обращений"],
  },
  {
    icon: ClipboardCheck,
    title: "Учёт заселения",
    desc: "Вся информация о комнатах, жильцах и договорах в одном месте. Заселение и выселение без бумажной волокиты.",
    points: ["Цифровые договоры", "Карта свободных мест", "Электронный пропуск"],
  },
  {
    icon: Bell,
    title: "Уведомления",
    desc: "Мгновенные оповещения об отключениях, событиях и важных объявлениях администрации общежития.",
    points: ["Push-уведомления", "Объявления коменданта", "Напоминания"],
  },
  {
    icon: CalendarClock,
    title: "Бронирование",
    desc: "Бронируйте прачечную или кухню в пару кликов. Никаких очередей и споров за свободное время.",
    points: ["Расписание по слотам", "Прачечная и кухня", "Отмена в один тап"],
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium text-primary">Возможности</span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Всё для жизни в общежитии — в одном месте
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Четыре ключевых модуля, которые решают повседневные задачи студентов и администрации.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:scale-105">
              <f.icon className="size-6" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{f.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {f.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
