const demands = [
  {
    title: 'Falta de asfalto na Rua das Palmeiras',
    region: 'Zona Norte',
    category: 'Infraestrutura',
    priority: 'Alta',
  },
  {
    title: 'Posto de saude sem atendimento noturno',
    region: 'Centro',
    category: 'Saude',
    priority: 'Media',
  },
  {
    title: 'Iluminacao precaria na praca principal',
    region: 'Zona Leste',
    category: 'Seguranca',
    priority: 'Alta',
  },
];

export function RecentDemands() {
  return (
    <div className="space-y-3">
      {demands.map((demand) => (
        <div
          key={demand.title}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-900">{demand.title}</p>
              <p className="mt-1 text-sm text-slate-500">
                {demand.region} - {demand.category}
              </p>
            </div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              {demand.priority}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
