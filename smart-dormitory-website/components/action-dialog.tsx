"use client"

import { useState, type ReactNode } from "react"
import { toast } from "sonner"
import type { VariantProps } from "class-variance-authority"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Variant = "demo" | "login" | "contact"

const config: Record<
  Variant,
  {
    title: string
    description: string
    submit: string
    success: string
    withMessage?: boolean
    withName?: boolean
  }
> = {
  demo: {
    title: "Попробовать демо",
    description: "Оставьте контакты — откроем доступ к демоверсии Smart Dormitory.",
    submit: "Получить доступ",
    success: "Заявка отправлена! Мы откроем демо-доступ на указанную почту.",
    withName: true,
  },
  login: {
    title: "Вход в Smart Dormitory",
    description: "Войдите по студенческому профилю, чтобы управлять общежитием.",
    submit: "Войти",
    success: "Добро пожаловать! Это демо — вход имитирован для презентации.",
  },
  contact: {
    title: "Связаться с нами",
    description: "Напишите нам — расскажем, как подключить общежитие.",
    submit: "Отправить сообщение",
    success: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
    withName: true,
    withMessage: true,
  },
}

export function ActionDialog({
  variant,
  triggerLabel,
  triggerClassName,
  size,
  buttonVariant = "default",
}: {
  variant: Variant
  triggerLabel: ReactNode
  triggerClassName?: string
  size?: VariantProps<typeof buttonVariants>["size"]
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"]
}) {
  const [open, setOpen] = useState(false)
  const cfg = config[variant]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOpen(false)
    toast.success(cfg.success)
    e.currentTarget.reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={cn(buttonVariants({ variant: buttonVariant, size }), triggerClassName)}
      >
        {triggerLabel}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{cfg.title}</DialogTitle>
          <DialogDescription>{cfg.description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 px-1 pt-2">
          {cfg.withName && (
            <div className="grid gap-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" name="name" placeholder="Иван Иванов" required />
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="email">Эл. почта</Label>
            <Input id="email" name="email" type="email" placeholder="student@university.ru" required />
          </div>

          {variant === "login" && (
            <div className="grid gap-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" name="password" type="password" placeholder="••••••••" required />
            </div>
          )}

          {cfg.withMessage && (
            <div className="grid gap-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" name="message" placeholder="Расскажите о вашем общежитии..." rows={3} required />
            </div>
          )}

          <DialogFooter className="pt-2">
            <Button type="submit" className="w-full rounded-full">
              {cfg.submit}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
