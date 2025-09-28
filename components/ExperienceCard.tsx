
import React from 'react';
import type { Job } from '../types';

interface ExperienceCardProps {
  job: Job;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  return (
    <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-sky-500 before:rounded-full after:absolute after:left-[3px] after:top-2 after:h-full after:w-[2px] after:bg-slate-200">
      <div className="flex justify-between items-baseline">
        <h4 className="text-lg font-semibold text-slate-800">{job.title}</h4>
        <p className="text-sm text-slate-500 font-medium">{job.period}</p>
      </div>
      <p className="text-md text-sky-700 font-medium">{job.company}</p>
      <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1 text-sm">
        {job.responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};
