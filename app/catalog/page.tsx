"use client";

import { useState } from "react";
import { CatalogHeader } from "@/components/CatalogHeader";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { PROPERTIES } from "@/data/properties";

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedProperties = [...PROPERTIES].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.pricePerNight - b.pricePerNight;
    } else {
      return b.pricePerNight - a.pricePerNight;
    }
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <Navbar />

      <main className="mx-auto max-w-7xl flex-1 px-4 py-6 md:px-8 w-full">
        <CatalogHeader
          totalResults={sortedProperties.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Listado de tarjetas de alojamiento */}
          <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Área de mapa (debajo en móvil, derecha fija en escritorio) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <MapPlaceholder properties={sortedProperties} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default CatalogPage;