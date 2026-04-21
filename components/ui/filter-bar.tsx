interface FilterBarProps {
  filters: string[];
}

export function FilterBar({ filters }: FilterBarProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className="rounded-full border border-line bg-white px-4 py-2 text-sm text-slate"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
