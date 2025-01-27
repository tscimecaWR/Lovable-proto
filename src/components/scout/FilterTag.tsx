import React from 'react';

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export const FilterTag = ({ label, onRemove }: FilterTagProps) => {
  return (
    <div className="text-xs text-[#55556a] flex items-center gap-1.5 bg-[#ededed] px-4 py-2 rounded-[15px]">
      <span>{label}</span>
      <button onClick={onRemove} aria-label={`Remove ${label} filter`}>
        <i className="ti ti-x" />
      </button>
    </div>
  );
};