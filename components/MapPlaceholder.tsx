import Link from "next/link";
import { Property } from "@/types/property";

interface MapPlaceholderProps {
  properties: Property[];
}

const PIN_POSITIONS = [
  "top-[18%] left-[15%]",
  "top-[32%] left-[52%]",
  "top-[48%] left-[24%]",
  "top-[62%] left-[60%]",
  "top-[22%] left-[68%]",
  "top-[70%] left-[20%]",
];

export const MapPlaceholder = ({ properties }: MapPlaceholderProps) => {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-zinc-300 bg-zinc-200 md:sticky md:top-24 md:h-[calc(100vh-140px)]">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

      <div className="pointer-events-none absolute inset-0 p-6">
        {properties.map((property, idx) => (
          <Link
            key={property.id}
            href={`/rooms/${property.id}`}
            className={`pointer-events-auto absolute flex cursor-pointer items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-lg transition hover:scale-110 hover:border-rose-500 ${
              PIN_POSITIONS[idx % PIN_POSITIONS.length]
            }`}
          >
            <span>📍</span>
            <span>${property.pricePerNight} USD</span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2 shadow-md backdrop-blur">
        <p className="text-xs font-bold text-zinc-900">Mapa interactivo de la zona</p>
        <p className="text-[11px] text-zinc-500">
          Haz clic en cualquier precio para ver el alojamiento
        </p>
      </div>
    </div>
  );
};