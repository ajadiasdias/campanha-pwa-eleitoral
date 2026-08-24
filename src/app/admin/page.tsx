const stats = [
  { label: 'Lideranças ativas', value: '128', change: '+12% este mês' },
  { label: 'Apoiadores cadastrados', value: '4.892', change: '+328 na semana' },
  { label: 'Missões concluídas', value: '1.274', change: '84% de taxa de conclusão' },
  { label: 'Demandas registradas', value: '316', change: '47 em análise prioritária' },
];

const leaders = [
  { name: 'Maria Souza', region: 'Zona Norte', supporters: 182, points: 1240 },
  { name: 'Carlos Lima', region: 'Zona Leste', supporters: 166, points: 1175 },
  { name: 'Ana Oliveira', region: 'Centro', supporters: 149, points: 1090 },
  { name: 'João Ferreira', region: 'Zona Sul', supporters: 131, points: 980 },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Painel administrativo</p>
            <h1 className="text-3xl font-bold text-slate-900">Visão geral da campanha</h1>
            <p className="mt-2 text-slate-600">Monitore a mobilização de base, o desempenho das lideranças e a capilaridade regional.</p>
          </div>
          <button className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-800">
            Criar nova missão
          </button>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-emerald-600">{item.change}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr,0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Ranking de lideranças</h2>
                <p className="mt-1 text-sm text-slate-500">Top desempenho por apoiadores e pontuação.</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Atualizado hoje</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50 text-sm text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Liderança</th>
                    <th className="px-4 py-3 font-medium">Região</th>
                    <th className="px-4 py-3 font-medium">Apoiadores</th>
                    <th className="px-4 py-3 font-medium">Pontos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {leaders.map((leader, index) => (
                    <tr key={leader.name}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                            {index + 1}
                          </div>
                          <span className="font-medium text-slate-900">{leader.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">{leader.region}</td>
                      <td className="px-4 py-4 text-slate-900">{leader.supporters}</td>
                      <td className="px-4 py-4 font-semibold text-slate-900">{leader.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Regiões estratégicas</h2>
              <div className="mt-5 space-y-4">
                {[
                  { name: 'Zona Norte', progress: 82 },
                  { name: 'Zona Leste', progress: 74 },
                  { name: 'Centro', progress: 67 },
                  { name: 'Zona Sul', progress: 59 },
                ].map((region) => (
                  <div key={region.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{region.name}</span>
                      <span className="text-slate-500">{region.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-brand-700" style={{ width: `${region.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Alertas rápidos</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-xl bg-amber-50 p-4 text-amber-800">12 missões aguardando aprovação de comprovante.</div>
                <div className="rounded-xl bg-rose-50 p-4 text-rose-800">8 demandas críticas relacionadas a infraestrutura urbana.</div>
                <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">Nova arte de WhatsApp liberada para todas as lideranças.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
