
interface AdmissionRequirementsProps {
  licence1Requirements: string[];
  licence2Text: string;
  licence3Text: string;
}

const AdmissionRequirements = ({ 
  licence1Requirements, 
  licence2Text, 
  licence3Text 
}: AdmissionRequirementsProps) => {
  return (
    <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">CONDITIONS D'ACCÈS</h2>
      
      <div className="space-y-6">
        {/* Licence 1 */}
        <div>
          <h3 className="text-lg font-semibold text-university-blue mb-2">Licence 1</h3>
          <ul className="pl-6 list-disc space-y-1">
            {licence1Requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        {/* Licence 2 */}
        <div>
          <h3 className="text-lg font-semibold text-university-blue mb-2">Licence 2</h3>
          <p className="text-gray-700">
            {licence2Text}
          </p>
        </div>
        
        {/* Licence 3 */}
        <div>
          <h3 className="text-lg font-semibold text-university-blue mb-2">Licence 3</h3>
          <p className="text-gray-700">
            {licence3Text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionRequirements;
