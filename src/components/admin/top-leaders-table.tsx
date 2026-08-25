const leaders = [
  { name: 'Ana Paula - Norte', supporters: 184, missions: 26, score: 1480 },
  { name: 'Carlos Henrique - Centro', supporters: 162, missions: 23, score: 1320 },
  { name: 'Marina Souza - Leste', supporters: 151, missions: 21, score: 1260 },
  { name: 'Joao Vitor - Sul', supporters: 143, missions: 19, score: 1180 },
];

export function TopLeadersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50 text-left text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Lideranca</th>
            <th className="px-4 py-3 font-medium">Apoiadores</th>
            <th className="px-4 py-3 font-medium">Missoes</th>
            <th className="px-4 py-3 font-medium">Pontos</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {leaders.map((leader) => (
            <tr key={leader.name}>
              <td className="px-4 py-3 font-medium text-slate-900">{leader.name}</td>
              <td className="px-4 py-3 text-slate-600">{leader.supporters}</td>
              <td className="px-4 py-3 text-slate-600">{leader.missions}</td>
              <td className="px-4 py-3 text-blue-700 font-semibold">{leader.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
