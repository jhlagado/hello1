import { Button } from '@/components/ui/button'

export function HelloScreen() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-4 py-16">
      <section className="w-full max-w-xl rounded-2xl border bg-card p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              Vite + React + TypeScript
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hello
            </h1>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              A lean starter with Tailwind, shadcn/ui, Vitest, and Playwright is
              ready for your next instructions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto">Get started</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
