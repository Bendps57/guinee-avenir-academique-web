
import React from "react";

interface ProgramIntroductionProps {
  paragraphs: string[];
}

const ProgramIntroduction = ({ paragraphs }: ProgramIntroductionProps) => {
  return (
    <div className="mb-12 bg-white rounded-lg shadow-md p-6 border-l-4 border-university-gold">
      <h2 className="text-2xl font-bold mb-4">PRÉSENTATION</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`text-gray-700 ${index < paragraphs.length - 1 ? 'mb-4' : ''}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ProgramIntroduction;
