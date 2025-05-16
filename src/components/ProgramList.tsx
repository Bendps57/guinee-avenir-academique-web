
import ProgramCard from "@/components/ProgramCard";
import ProgramRow from "@/components/ProgramRow";
import { ProgramType } from "@/data/programsData";

interface ProgramListProps {
  programs: ProgramType[];
  viewMode: "grid" | "list";
}

const ProgramList = ({ programs, viewMode }: ProgramListProps) => {
  const emptyMessage = (
    <div className="w-full text-center py-12">
      <p className="text-gray-500 text-lg">Aucune formation trouvée.</p>
    </div>
  );

  if (programs.length === 0) {
    return emptyMessage;
  }

  return (
    <>
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.title}
              level={program.level}
              duration={program.duration}
              description={program.description}
              iconName={program.iconName}
              modules={program.modules}
              objectives={program.objectives}
              careers={program.careers}
              admissionRequirements={program.admissionRequirements}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {programs.map((program) => (
            <ProgramRow
              key={program.id}
              id={program.id}
              title={program.title}
              level={program.level}
              duration={program.duration}
              description={program.description}
              iconName={program.iconName}
              modules={program.modules}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProgramList;
