const ranking = [
  { position: 1, name: 'Maria Souza', points: 1240 },
  { position: 2, name: 'Você', points: 1180 },
  { position: 3, name: 'Carlos Lima', points: 1175 },
  { position: 4, name: 'Ana Oliveira', points: 1090 },
];

const missions = [
  { title: 'Compartilhar vídeo oficial', points: 50, status: 'Disponível' },
  { title: 'Registrar demanda do bairro', points: 80, status: 'Em andamento' },
  { title: 'Convidar 10 apoiadores', points: 120, status: 'Prioritária' },
];

const tabs = ['Início', 'Missões', 'Ranking', 'Materiais'];

export default function LiderancaPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50">
      <header className="bg-brand-700 px-5 pb-8 pt-6 text-white">
        <p className="text-sm opacity-80">Área da liderança</p>
        <h1 className="mt-2 text-2xl font-bold">Bom trabalho, Patrícia</h1>
        <p className="mt-1 text-sm opacity-90">Você está em 2º lugar no ranking da sua região.</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <p className="text-sm opacity-80">Pontuação</p>
            <p className="mt-1 text-2xl font-bold">1.180</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
            <p className="text-sm opacity-80">Apoiadores</p>
            <p className="mt-1 text-2xl font-bold">166</p>
          </div>
        </div>
      </header>

      <section className="-mt-4 flex-1 space-y-5 rounded-t-3xl bg-slate-50 px-4 pb-24 pt-5">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Missões do dia</h2>
            <span className="text-sm font-medium text-brand-700">3 ativas</span>
          </div>

          <div className="mt-4 space-y-3">
            {missions.map((mission) => (
              <div key={mission.title} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{mission.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">Ganhe {mission.points} pontos ao concluir esta missão.</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{mission.status}</span>
                </div>
                <button className="mt-4 w-full rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white">
                  Marcar como concluída
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Ranking regional</h2>
            <span className="text-sm text-slate-500">Atual agora</span>
          </div>

          <div className="mt-4 space-y-3">
            {ranking.map((person) => (
              <div key={person.position} className={`flex items-center justify-between rounded-2xl p-3 ${person.name === 'Você' ? 'bg-brand-50 border border-brand-200' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-slate-900 shadow-sm">
                    {person.position}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{person.name}</p>
                    <p className="text-sm text-slate-500">Pontuação acumulada</p>
                  </div>
                </div>
                <p className="font-semibold text-slate-900">{person.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 mx-auto flex max-w-md justify-around border-t border-slate-200 bg-white px-2 py-3">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`flex flex-col items-center rounded-xl px-3 py-2 text-xs font-medium ${index === 0 ? 'text-brand-700' : 'text-slate-500'}`}
          >
            <span>{tab}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}
