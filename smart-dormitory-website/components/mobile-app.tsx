"use client"

import Image from "next/image"
import { toast } from "sonner"
import { Apple, Play, Smartphone, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const appPoints = [
  { icon: Zap, title: "Быстрый отклик", desc: "Заявки и бронь обрабатываются мгновенно." },
  { icon: Smartphone, title: "Удобно с телефона", desc: "Всё под рукой — без визита к коменданту." },
  { icon: ShieldCheck, title: "Безопасный вход", desc: "Авторизация по студенческому профилю." },
]

export function MobileApp() {
  return (
    <section id="app" className="relative overflow-hidden border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <span className="text-sm font-medium text-primary">Мобильное приложение</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Общежитие в кармане каждого студента
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Установите приложение Smart Dormitory и управляйте всеми бытовыми вопросами со смартфона:
            подавайте заявки, бронируйте прачечную и получайте важные уведомления вовремя.
          </p>

          <div className="mt-8 space-y-5">
            {appPoints.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full px-6"
              onClick={() => toast.info("App Store: приложение скоро появится. Это демо для презентации.")}
            >
              <Apple className="size-5" />
              App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6"
              onClick={() => toast.info("Google Play: приложение скоро появится. Это демо для презентации.")}
            >
              <Play className="size-5" />
              Google Play
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <Image
              src="/app-mockup.png"
              alt="Интерфейс мобильного приложения Smart Dormitory"
              width={520}
              height={520}
              className="h-auto w-full max-w-md object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
