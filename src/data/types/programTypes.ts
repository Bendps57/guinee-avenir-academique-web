
export interface ProgramType {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName?: string;
  modules?: string[];
  objectives?: string[];
  careers?: string[];
  admissionRequirements?: string;
}
