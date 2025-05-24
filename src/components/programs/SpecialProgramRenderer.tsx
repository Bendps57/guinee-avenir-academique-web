
import { 
  BusinessAdministrationRenderer,
  MarketingInternationalRenderer,
  EconomieAppliqueeRenderer,
  EconomieInternationaleRenderer,
  LogistiqueTransportsRenderer,
  BanqueFinancesRenderer,
  ComptabiliteGestionRenderer,
  AdministrationFiscaleRenderer,
  AuditControleGestionRenderer
} from './programRenderers';

interface SpecialProgramRendererProps {
  programId: string;
}

const SpecialProgramRenderer = ({ programId }: SpecialProgramRendererProps) => {
  switch (programId) {
    case "business-administration":
      return <BusinessAdministrationRenderer />;
    case "marketing-commerce-international":
      return <MarketingInternationalRenderer />;
    case "economie-appliquee":
      return <EconomieAppliqueeRenderer />;
    case "economie-internationale":
      return <EconomieInternationaleRenderer />;
    case "logistique-transports":
      return <LogistiqueTransportsRenderer />;
    case "banque-finances-assurances":
      return <BanqueFinancesRenderer />;
    case "comptabilite-gestion":
      return <ComptabiliteGestionRenderer />;
    case "administration-fiscale":
      return <AdministrationFiscaleRenderer />;
    case "audit-controle-gestion":
      return <AuditControleGestionRenderer />;
    default:
      return null;
  }
};

export default SpecialProgramRenderer;
