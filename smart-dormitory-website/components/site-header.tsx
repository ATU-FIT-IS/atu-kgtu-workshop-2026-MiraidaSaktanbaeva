"use client"

import { useState } from "react"
import { Building2, Menu, X } from "lucide-react"
import { ActionDialog } from "@/components/action-dialog"

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Приложение", href: "#app" },
  { label: "Студентам", href: "#benefits" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Building2 className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Smart<span className="text-primary">Dormitory</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ActionDialog variant="login" buttonVariant="ghost" triggerLabel="Войти" triggerClassName="text-sm" />
          <ActionDialog
            variant="demo"
            triggerLabel="Начать бесплатно"
            triggerClassName="rounded-full text-sm font-medium"
          />
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <ActionDialog
              variant="demo"
              triggerLabel="Начать бесплатно"
              triggerClassName="mt-2 w-full rounded-full"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
