const items = [
  { label: 'Inicio', active: true },
  { label: 'Missoes', active: false },
  { label: 'Ranking', active: false },
  { label: 'Materiais', active: false },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between">
        {items.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium ${{
              true: 'text-blue-700',
              false: 'text-slate-500',
            }[String(item.active) as 'true' | 'false']}`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
