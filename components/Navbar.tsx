import Link from "next/link";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  showSearchInput?: boolean;
}

export const Navbar = ({
  searchQuery = "",
  onSearchChange,
  showSearchInput = false,
}: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-rose-500">
            <span className="text-3xl flex items-center">⌂</span>
            <span>airbnb</span>
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            <Link href="/catalog" className="text-xs font-semibold text-zinc-700 hover:underline">
              Explorar catálogo
            </Link>
          </div>
        </div>

        {showSearchInput && onSearchChange && (
          <div className="w-full md:max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar destino o alojamiento..."
              className="w-full rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-rose-500 focus:bg-white"
            />
          </div>
        )}

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/catalog"
            className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            Ver catálogo completo
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 shadow-sm">
            <span>☰</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">
              U
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};