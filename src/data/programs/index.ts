
// Export all program types and collections
export { ProgramType } from '../types/programTypes';
export { licensePrograms } from './licensePrograms';
export { bachelorPlusFourPrograms } from './bachelorPlusFourPrograms';
export { masterPrograms } from './masterPrograms';
export { btsPrograms } from './btsPrograms';
export { doctoratPrograms } from './doctoratPrograms';

// Export combined collections
import { licensePrograms } from './licensePrograms';
import { bachelorPlusFourPrograms } from './bachelorPlusFourPrograms';
import { masterPrograms } from './masterPrograms';
import { btsPrograms } from './btsPrograms';
import { doctoratPrograms } from './doctoratPrograms';

export const allPrograms = [
  ...licensePrograms,
  ...bachelorPlusFourPrograms,
  ...masterPrograms,
  ...btsPrograms,
  ...doctoratPrograms
];
