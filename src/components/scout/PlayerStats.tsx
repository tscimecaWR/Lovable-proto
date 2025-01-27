import React from 'react';

interface StatRowProps {
  text: string;
  success?: boolean;
}

const StatRow = ({ text, success = true }: StatRowProps) => (
  <div className="flex items-center gap-2 text-xs text-[#55556a] mb-2">
    <i className={`ti ti-${success ? 'check text-[#00b37a]' : 'x text-[#ff4d4d]'}`} />
    <span>{text}</span>
  </div>
);

export const PlayerStats = () => {
  return (
    <div>
      <div className="text-xs font-medium text-[#55556a] mb-3">
        75% Match
      </div>
      <StatRow text="Strikeout Rate 20%" />
      <StatRow text="Throw/Pitch velocity 90 - 95 MPH" />
      <StatRow text="Batting Average .275 - .300" />
      <StatRow text="GPA 2.5" success={false} />
    </div>
  );
};