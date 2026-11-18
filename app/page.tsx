"use client";

import { useEffect, useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { CATEGORIES, PROPERTIES } from "@/data/properties";
import { Property } from "@/types/property";

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("Todo");

  useEffect(() => {
    const timer = setTimeout(() => {
      setProperties(PROPERTIES);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = properties.filter((item) => {
    const matchesCategory =
      activeCategory === "Todo" || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showSearchInput
      />

      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map((skeleton) => (
              <div key={skeleton} className="animate-pulse space-y-3">
                <div className="aspect-square w-full rounded-xl bg-zinc-200" />
                <div className="h-4 w-3/4 rounded bg-zinc-200" />
                <div className="h-4 w-1/2 rounded bg-zinc-200" />
              </div>
            ))}
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-base font-medium text-zinc-700">
              No encontramos alojamientos con esos filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Todo");
              }}
              className="mt-3 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
export default HomePage;