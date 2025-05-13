
import ProgramCard from "@/components/ProgramCard";
import { ProgramType } from "@/data/programsData";

interface ProgramListProps {
  programs: ProgramType[];
}

const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program) => (
        <ProgramCard
          key={program.id}
          id={program.id}
          title={program.title}
          level={program.level}
          duration={program.duration}
          description={program.description}
          icon={program.icon}
        />
      ))}
    </div>
  );
};

export default ProgramList;
