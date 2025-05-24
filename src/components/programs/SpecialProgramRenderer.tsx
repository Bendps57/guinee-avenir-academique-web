
import { 
  GenieInformatiqueRenderer
} from './programRenderers';

interface SpecialProgramRendererProps {
  programId: string;
}

const SpecialProgramRenderer = ({ programId }: SpecialProgramRendererProps) => {
  switch (programId) {
    case "genie-informatique":
      return <GenieInformatiqueRenderer />;
    default:
      return null;
  }
};

export default SpecialProgramRenderer;
