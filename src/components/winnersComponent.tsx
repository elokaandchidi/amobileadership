// WinnersComponent.tsx
import React from 'react';

interface Winner {
  name: string;
  school: string;
  year: string;
  award: string;
}

interface WinnersComponentProps {
  winners: Winner[];
  participantsText: string;
}

export const WinnersComponent: React.FC<WinnersComponentProps> = ({ winners, participantsText }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-8">
        {winners.map((winner, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{winner.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{winner.school}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">{winner.year}</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {winner.award}
              </span>
            </div>
          </div>
        ))}
        
        <div className="pt-6 text-center">
          <p className="text-gray-500 uppercase tracking-wide text-sm">
            {participantsText}
          </p>
        </div>
      </div>
    </div>
  );
};