
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full">
      {name}
    </span>
  );
};
