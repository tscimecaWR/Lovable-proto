import React from 'react';

interface StatRowProps {
  text: string;
  success?: boolean;
}

const StatRow = ({ text, success = true }: StatRowProps) => (
  <div className="flex items-center gap-2 text-xs text-[#55556a] mb-2">
    <img 
      src={success ? "/lovable-uploads/96b7f9cc-84ef-4662-90d7-b4f0c8115f84.png" : "/lovable-uploads/027e42bb-5876-426d-94b4-7bc52160f56d.png"} 
      alt={success ? "check" : "x"} 
      className="w-4 h-4"
    />
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
      <StatRow text="Batting Average .275 - .300" success={false} />
      <StatRow text="GPA 2.5" success={false} />
    </div>
  );
};