interface RoomHeaderProps {
  location: string;
  rating: number;
  reviewsCount: number;
}

export const RoomHeader = ({ location, rating, reviewsCount }: RoomHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-4">
      <p className="text-base font-semibold text-zinc-900 underline">{location}</p>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold text-zinc-900">★ {rating.toFixed(2)}</span>
        <span className="text-zinc-400">·</span>
        <span className="font-semibold text-zinc-900 underline">{reviewsCount} reseñas</span>
      </div>
    </div>
  );
};