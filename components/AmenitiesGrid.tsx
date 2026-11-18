import { Amenity } from "@/types/property";

interface AmenitiesGridProps {
  amenities: Amenity[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <div className="border-b border-zinc-200 py-6">
      <h3 className="mb-4 text-lg font-semibold text-zinc-900">Lo que este lugar ofrece</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm text-zinc-700">
            <span className="text-xl">{amenity.icon}</span>
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};