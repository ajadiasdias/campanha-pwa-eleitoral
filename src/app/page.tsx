import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-white p-6">
      <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center gap-8">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            PWA de Gestão Eleitoral
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Mobilização política com foco em coordenação, liderança e inteligência territorial.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Estrutura inicial com painel administrativo, experiência mobile para lideranças e base pronta para autenticação, missões, CRM e demandas georreferenciadas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/admin" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold text-slate-900">Dashboard Admin</h2>
            <p className="mt-2 text-slate-600">Acompanhe lideranças, apoiadores, missões e indicadores estratégicos.</p>
          </Link>

          <Link href="/lideranca" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold text-slate-900">Área da Liderança</h2>
            <p className="mt-2 text-slate-600">Visual mobile com ranking, missões, materiais e navegação simplificada.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
