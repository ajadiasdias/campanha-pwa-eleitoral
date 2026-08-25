const missions = [
  {
    title: 'Compartilhar video oficial no WhatsApp',
    points: 120,
    status: 'Pra hoje',
  },
  {
    title: 'Confirmar presenca no encontro regional',
    points: 90,
    status: 'Ate amanha',
  },
  {
    title: 'Cadastrar 5 novos apoiadores do bairro',
    points: 180,
    status: 'Em andamento',
  },
];

export function MissionList() {
  return (
    <div className="space-y-3">
      {missions.map((mission) => (
        <div key={mission.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-900">{mission.title}</p>
              <p className="mt-2 text-sm text-slate-500">{mission.status}</p>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              +{mission.points} pts
            </span>
          </div>
          <button className="mt-4 w-full rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white">
            Marcar como concluida
          </button>
        </div>
      ))}
    </div>
  );
}
