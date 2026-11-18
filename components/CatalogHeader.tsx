interface CatalogHeaderProps {
  totalResults: number;
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
}

export const CatalogHeader = ({
  totalResults,
  sortOrder,
  onSortChange,
}: CatalogHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-zinc-500">Más de {totalResults} alojamientos disponibles</p>
        <h1 className="text-xl font-bold text-zinc-900">Alojamientos en esta zona del mapa</h1>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="text-sm font-medium text-zinc-700">
          Ordenar por precio:
        </label>
        <select
          id="sort-select"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 shadow-sm outline-none focus:border-rose-500"
        >
          <option value="asc">Menor a mayor ($)</option>
          <option value="desc">Mayor a menor ($)</option>
        </select>
      </div>
    </div>
  );
};