"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { HostInfo } from "@/components/HostInfo";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BookingCard } from "@/components/BookingCard";
import { PROPERTIES } from "@/data/properties";
import { Property } from "@/types/property";

function RoomDetailContent() {
  const params = useParams();
  const roomId = params?.id as string;

  const [property, setProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = PROPERTIES.find((p) => p.id === roomId) || PROPERTIES[0];
      setProperty(found);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [roomId]);

  if (isLoading) {
    return (
      <main className="mx-auto max-w-5xl flex-1 px-4 py-12 w-full animate-pulse space-y-6">
        <div className="h-8 w-1/3 rounded bg-zinc-200" />
        <div className="aspect-[21/9] w-full rounded-2xl bg-zinc-200" />
        <div className="h-6 w-1/2 rounded bg-zinc-200" />
      </main>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <p className="text-lg font-semibold text-zinc-800">Alojamiento no encontrado.</p>
        <Link href="/catalog" className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl flex-1 px-4 py-6 md:px-8 w-full space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-700 hover:text-zinc-900"
        >
          ← Volver a resultados
        </Link>
      </div>

      <PhotoGallery images={property.images} title={property.title} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start pt-2">
        <div className="lg:col-span-7 space-y-6">
          <RoomHeader
            location={property.location}
            rating={property.rating}
            reviewsCount={property.reviewsCount}
          />
          <HostInfo
            hostName={property.hostName}
            hostYears={property.hostYears}
            hostAvatar={property.hostAvatar}
            description={property.description}
          />
          <AmenitiesGrid amenities={property.amenities} />
        </div>

        <div className="lg:col-span-5">
          <BookingCard
            pricePerNight={property.pricePerNight}
            maxGuests={property.maxGuests}
            rating={property.rating}
            reviewsCount={property.reviewsCount}
          />
        </div>
      </div>
    </main>
  );
}

const RoomDetailPage = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="p-12 text-center">Cargando detalles...</div>}>
        <RoomDetailContent />
      </Suspense>
    </div>
  );
};
export default RoomDetailPage;