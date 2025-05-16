
import { useParams } from "react-router-dom";
import { licensePrograms, masterPrograms, btsPrograms, bachelorPlusFourPrograms } from "@/data/programsData";
import DefaultProgramDetail from "@/components/programs/DefaultProgramDetail";
import SpecialProgramRenderer from "@/components/programs/SpecialProgramRenderer";
import ProgramNotFound from "@/components/programs/ProgramNotFound";

const ProgramDetail = () => {
  const { id } = useParams();
  
  // Combine all programs for searching
  const allPrograms = [
    ...licensePrograms, 
    ...bachelorPlusFourPrograms, 
    ...masterPrograms, 
    ...btsPrograms
  ];
  
  const program = allPrograms.find(program => program.id === id);

  // Program not found
  if (!program) {
    return <ProgramNotFound />;
  }

  // Special renderings for specific programs
  const specialProgramIds = [
    "business-administration", 
    "marketing-commerce-international", 
    "economie-appliquee", 
    "economie-internationale",
    "logistique-transports",
    "banque-finances-assurances",
    "comptabilite-gestion"
  ];
  
  if (specialProgramIds.includes(program.id)) {
    return <SpecialProgramRenderer programId={program.id} />;
  }

  // Default render for other programs
  return <DefaultProgramDetail program={program} />;
};

export default ProgramDetail;
