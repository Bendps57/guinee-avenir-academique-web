
import { 
  GenieInformatiqueRenderer,
  AdministrationFiscaleRenderer,
  AuditControleGestionRenderer,
  BusinessAdministrationRenderer,
  BanqueFinancesRenderer,
  ComptabiliteGestionRenderer,
  CommerceInternationalRenderer,
  RessourcesHumainesRenderer,
  LogistiqueTransportsRenderer
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
    case "business-administration":
      return <BusinessAdministrationRenderer />;
    case "banque-finances-assurances":
      return <BanqueFinancesRenderer />;
    case "comptabilite-gestion":
      return <ComptabiliteGestionRenderer />;
    case "commerce-international":
      return <CommerceInternationalRenderer />;
    case "ressources-humaines":
      return <RessourcesHumainesRenderer />;
    case "logistique-transports":
      return <LogistiqueTransportsRenderer />;
    default:
      return null;
  }
};

export default SpecialProgramRenderer;
