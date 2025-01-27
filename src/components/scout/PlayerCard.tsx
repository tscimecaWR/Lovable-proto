import React from 'react';
import { PlayerStats } from './PlayerStats';

export const PlayerCard = () => {
  return (
    <div className="shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden bg-white mx-3 my-0 rounded-xl max-sm:mx-2 max-sm:my-0">
      <img
        src="https://placehold.co/600x400/333333/333333"
        alt="Player"
        className="w-full h-[200px] object-cover bg-[#eee]"
        loading="lazy"
      />
      <div className="p-4">
        <div className="text-lg font-bold text-[#18181e] mb-1">
          Player Name
        </div>
        <div className="text-xs text-[#55556a] mb-5">
          School and graduation year
        </div>
        <PlayerStats />
      </div>
    </div>
  );
};