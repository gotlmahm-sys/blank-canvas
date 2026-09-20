import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starter" },
      {
        name: "description",
        content:
          "A clean, minimal starting point — empty and ready for whatever you build next.",
      },
      { property: "og:title", content: "Starter" },
      {
        property: "og:description",
        content:
          "A clean, minimal starting point — empty and ready for whatever you build next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="px-6 py-5 sm:px-10">
        <span className="text-sm font-semibold tracking-tight">Starter</span>
      </header>

      <section className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <span
            className="mx-auto block h-px w-10 bg-border"
            aria-hidden="true"
          />
          <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
            A blank slate
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
            Nothing here yet — just a clean starting point, ready for whatever
            you'd like to build next.
          </p>
          <span
            className="mx-auto mt-8 block h-px w-10 bg-border"
            aria-hidden="true"
          />
        </div>
      </section>

      <footer className="px-6 py-5 text-center sm:px-10">
        <p className="text-xs text-muted-foreground">Ready when you are.</p>
      </footer>
    </main>
  );
}
