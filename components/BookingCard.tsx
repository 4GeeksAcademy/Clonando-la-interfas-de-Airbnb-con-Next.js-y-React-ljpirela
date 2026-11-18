"use client";

import { useState } from "react";

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
  rating: number;
  reviewsCount: number;
}

export const BookingCard = ({
  pricePerNight,
  maxGuests,
  rating,
  reviewsCount,
}: BookingCardProps) => {
  const [guests, setGuests] = useState<number>(2);
  const nights = 2; // Simulación estándar de 2 noches como en tus capturas
  const totalPrice = pricePerNight * nights;

  const handleDecrease = () => {
    if (guests > 1) setGuests(guests - 1);
  };

  const handleIncrease = () => {
    if (guests < maxGuests) setGuests(guests + 1);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl sticky top-24">
      <div className="flex items-baseline justify-between mb-4">
        <div>
          <span className="text-2xl font-bold text-zinc-900">${pricePerNight} USD</span>
          <span className="text-sm text-zinc-500"> noche</span>
        </div>
        <div className="text-xs font-semibold text-zinc-700">
          ★ {rating} · <span className="underline">{reviewsCount} reseñas</span>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-zinc-300 p-3">
        <div className="flex items-center justify-between text-xs font-bold text-zinc-800 uppercase">
          <span>Huéspedes</span>
          <span>Máx. {maxGuests}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-zinc-600">{guests} huéspedes</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={guests <= 1}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 disabled:opacity-40"
            >
              -
            </button>
            <span className="text-sm font-semibold">{guests}</span>
            <button
              type="button"
              onClick={handleIncrease}
              disabled={guests >= maxGuests}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => alert(`¡Reserva solicitada con éxito para ${guests} huéspedes!`)}
        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:opacity-95"
      >
        Reservar
      </button>

      <p className="mt-3 text-center text-xs text-zinc-500">No se te cargará ningún monto por ahora</p>

      <div className="mt-4 space-y-2 border-t border-zinc-200 pt-4 text-sm text-zinc-600">
        <div className="flex justify-between">
          <span className="underline">${pricePerNight} USD x {nights} noches</span>
          <span>${totalPrice} USD</span>
        </div>
        <div className="flex justify-between font-bold text-zinc-900 pt-2 border-t border-zinc-100">
          <span>Total antes de impuestos</span>
          <span>${totalPrice} USD</span>
        </div>
      </div>
    </div>
  );
};