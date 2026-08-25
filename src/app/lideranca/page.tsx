import { MissionList } from '@/components/lideranca/mission-list';
import { MobileBottomNav } from '@/components/lideranca/mobile-bottom-nav';
import { RankingCard } from '@/components/lideranca/ranking-card';

export default function LiderancaPage() {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-100 px-4 pb-28 pt-6">
      <header className="rounded-3xl bg-blue-700 p-5 text-white shadow-lg shadow-blue-900/20">
        <p className="text-sm text-blue-100">Ola, lideranca</p>
        <h1 className="mt-2 text-2xl font-bold">Sua base em movimento</h1>
        <p className="mt-2 text-sm text-blue-100">
          Acompanhe missoes, ranking, materiais e o desempenho da sua mobilizacao pelo celular.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <p className="text-xs text-blue-100">Pontos</p>
            <p className="mt-1 text-lg font-semibold">1320</p>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <p className="text-xs text-blue-100">Apoiadores</p>
            <p className="mt-1 text-lg font-semibold">162</p>
          </div>
          <div className="rounded-2xl bg-white/15 p-3 text-center">
            <p className="text-xs text-blue-100">Missao hoje</p>
            <p className="mt-1 text-lg font-semibold">3</p>
          </div>
        </div>
      </header>

      <section className="mt-5">
        <RankingCard />
      </section>

      <section className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Missoes ativas</h2>
          <span className="text-sm font-medium text-blue-700">Ver todas</span>
        </div>
        <MissionList />
      </section>

      <MobileBottomNav />
    </main>
  );
}
