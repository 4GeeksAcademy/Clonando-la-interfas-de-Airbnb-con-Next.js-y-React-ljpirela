import Link from "next/link";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link href={`/rooms/${property.id}`} className="group block">
      <article className="flex flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-200">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
            Favorito entre huéspedes
          </span>
        </div>

        <div className="flex items-start justify-between gap-2 pt-1">
          <h3 className="line-clamp-1 text-sm font-semibold text-zinc-900">
            {property.location}
          </h3>
          <span className="shrink-0 text-sm font-medium text-zinc-900">
            ★ {property.rating.toFixed(2)}
          </span>
        </div>

        <p className="line-clamp-1 text-sm text-zinc-500">{property.title}</p>
        <p className="text-xs text-zinc-400">{property.category}</p>

        <p className="pt-0.5 text-sm text-zinc-900">
          <span className="font-semibold">${property.pricePerNight} USD</span>{" "}
          <span className="text-zinc-600">noche</span>
        </p>
      </article>
    </Link>
  );
};