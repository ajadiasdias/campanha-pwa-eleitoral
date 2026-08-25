export function AdminHeader() {
  return (
    <header className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Painel central</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard da campanha</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Acompanhe mobilizacao, desempenho das liderancas, missoes em andamento e sinais do territorio em um unico lugar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-slate-300">Regioes ativas</p>
            <p className="mt-1 text-2xl font-semibold">12</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4">
            <p className="text-slate-300">Alertas urgentes</p>
            <p className="mt-1 text-2xl font-semibold">4</p>
          </div>
        </div>
      </div>
    </header>
  );
}
