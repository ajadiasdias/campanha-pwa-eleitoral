import { AdminHeader } from '@/components/admin/admin-header';
import { RecentDemands } from '@/components/admin/recent-demands';
import { TopLeadersTable } from '@/components/admin/top-leaders-table';
import { SectionCard } from '@/components/ui/section-card';
import { StatCard } from '@/components/ui/stat-card';

const stats = [
  { label: 'Liderancas ativas', value: '128', hint: '+12 na ultima semana' },
  { label: 'Apoiadores cadastrados', value: '4.892', hint: '+386 novos cadastros' },
  { label: 'Missoes concluidas', value: '1.274', hint: '83% de taxa de conclusao' },
  { label: 'Demandas abertas', value: '96', hint: '31 em bairros prioritarios' },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        <AdminHeader />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} hint={stat.hint} />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <SectionCard
            title="Ranking de liderancas"
            subtitle="Desempenho consolidado por apoiadores mobilizados e pontos de missoes"
          >
            <TopLeadersTable />
          </SectionCard>

          <SectionCard
            title="Radar de demandas"
            subtitle="Ocorrencias recentes registradas no territorio"
          >
            <RecentDemands />
          </SectionCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <SectionCard title="Missoes em destaque" subtitle="Acoes com maior adesao nesta semana">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Compartilhar agenda de eventos no WhatsApp</p>
                <p className="mt-1">312 liderancas engajadas</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Captar novos apoiadores no bairro</p>
                <p className="mt-1">248 liderancas em execucao</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Central da verdade" subtitle="Alertas e conteudos prioritarios">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                Novo alerta de fake news em circulacao na Zona Leste.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                18 materiais novos publicados nas ultimas 24 horas.
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Coordenacao regional" subtitle="Visao rapida de cobertura territorial">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Zona Norte</span>
                <span className="font-semibold text-emerald-600">Cobertura alta</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Centro</span>
                <span className="font-semibold text-amber-600">Atencao</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                <span>Zona Sul</span>
                <span className="font-semibold text-emerald-600">Cobertura alta</span>
              </div>
            </div>
          </SectionCard>
        </section>
      </div>
    </main>
  );
}
