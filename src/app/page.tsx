export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <span className="w-fit rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200">
          PWA de mobilizacao politica
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Gestao de campanha com foco em liderancas, territorio e execucao em campo.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
          Uma base digital para organizar coordenadores, liderancas, apoiadores, missoes, materiais e demandas locais em uma experiencia mobile-first.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/admin"
            className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
          >
            Ver dashboard do admin
          </a>
          <a
            href="/lideranca"
            className="rounded-2xl border border-slate-700 px-6 py-4 text-center text-sm font-semibold text-slate-100"
          >
            Ver experiencia mobile da lideranca
          </a>
        </div>
      </section>
    </main>
  );
}
