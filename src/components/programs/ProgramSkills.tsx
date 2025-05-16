
import { CircleCheck } from "lucide-react";

interface ProgramSkillsProps {
  skills: string[];
}

const ProgramSkills = ({ skills }: ProgramSkillsProps) => {
  return (
    <div className="mb-12 bg-gradient-to-r from-university-blue/10 to-university-navy/10 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-university-blue">COMPÉTENCES DÉVELOPPÉES</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-start">
            <CircleCheck className="h-5 w-5 text-university-gold mr-2 mt-1 flex-shrink-0" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSkills;
