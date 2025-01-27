import React from 'react';
import { FilterTag } from './FilterTag';

export const SearchBox = () => {
  const filters = ['GPA', 'Batting AVG', 'Strikeout Rate', 'Year', 'Throw Velocity'];

  return (
    <div className="relative z-[2] -mt-20 px-3 py-0 max-sm:px-2 max-sm:py-0">
      <div className="text-[#55556a] text-sm leading-normal bg-[#f2f2f4] mb-5 p-5 rounded-[20px]">
        I'm looking for a right handed pitcher that has a velocity of 90-95 mph, strikeout rate of 20% or higher, batting average of .275 to .300, graduating high school in 2025, with a 3.0 GPA or higher
      </div>
      <div className="flex flex-wrap gap-2.5 mb-2.5">
        {filters.map((filter) => (
          <FilterTag 
            key={filter}
            label={filter}
            onRemove={() => console.log(`Remove ${filter}`)}
          />
        ))}
      </div>
    </div>
  );
};