interface HostInfoProps {
  hostName: string;
  hostYears: number;
  hostAvatar: string;
  description: string;
}

export const HostInfo = ({ hostName, hostYears, hostAvatar, description }: HostInfoProps) => {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 py-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-500 text-lg font-bold text-white shadow-sm">
          {hostAvatar}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Anfitrión: {hostName}</h2>
          <p className="text-sm text-zinc-500">{hostYears} años como anfitrión en Airbnb</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
};