const ranking = [
  { position: 1, name: 'Ana Paula', points: 1480 },
  { position: 2, name: 'Voce', points: 1320 },
  { position: 3, name: 'Marina Souza', points: 1260 },
];

export function RankingCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Ranking da semana</h2>
          <p className="text-sm text-slate-500">Sua mobilizacao comparada com as liderancas da regiao.</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          2 lugar
        </span>
      </div>
      <div className="space-y-3">
        {ranking.map((item) => (
          <div key={item.position} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {item.position}
              </span>
              <p className="font-medium text-slate-900">{item.name}</p>
            </div>
            <p className="text-sm font-semibold text-blue-700">{item.points} pts</p>
          </div>
        ))}
      </div>
    </div>
  );
}
