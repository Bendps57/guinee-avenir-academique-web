
import React from "react";
import {
  BusinessAdministrationRenderer,
  MarketingInternationalRenderer,
  EconomieAppliqueeRenderer,
  EconomieInternationaleRenderer,
  LogistiqueTransportsRenderer,
  BanqueFinancesRenderer,
  ComptabiliteGestionRenderer
} from "./programRenderers";

interface SpecialProgramRendererProps {
  programId: string;
}

const SpecialProgramRenderer = ({ programId }: SpecialProgramRendererProps) => {
  // Map program IDs to their respective renderer components
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
      
    default:
      // This shouldn't happen since the parent component already checks for valid program IDs
      return null;
  }
};

export default SpecialProgramRenderer;
