import { Category } from "@/types/property";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-4 py-3 md:justify-center md:px-8 md:overflow-x-visible">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`flex shrink-0 flex-col items-center justify-center gap-1.5 border-b-2 pb-2 text-xs font-medium transition ${
                isActive
                  ? "border-zinc-900 text-zinc-950"
                  : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
              }`}
            >
              <span className="text-2xl flex items-center justify-center">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};