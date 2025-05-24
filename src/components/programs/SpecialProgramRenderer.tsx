
import { 
  GenieInformatiqueRenderer,
  AdministrationFiscaleRenderer,
  AuditControleGestionRenderer
} from './programRenderers';

interface SpecialProgramRendererProps {
  programId: string;
}

const SpecialProgramRenderer = ({ programId }: SpecialProgramRendererProps) => {
  switch (programId) {
    case "genie-informatique":
      return <GenieInformatiqueRenderer />;
    case "administration-fiscale":
      return <AdministrationFiscaleRenderer />;
    case "audit-controle-gestion":
      return <AuditControleGestionRenderer />;
    default:
      return null;
  }
};

export default SpecialProgramRenderer;
