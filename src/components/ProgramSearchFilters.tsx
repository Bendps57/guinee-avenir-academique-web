
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutGrid, List, Search } from "lucide-react";

interface ProgramSearchFiltersProps {
  onViewChange: (view: "grid" | "list") => void;
  activeView: "grid" | "list";
}

const ProgramSearchFilters = ({ onViewChange, activeView }: ProgramSearchFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div className="relative w-full md:w-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Rechercher une formation..."
          className="pl-10 w-full md:w-[300px]"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Vue :</span>
        <div className="flex border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className={`px-2 ${activeView === 'grid' ? 'bg-muted' : ''}`}
            onClick={() => onViewChange('grid')}
          >
            <LayoutGrid size={18} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`px-2 ${activeView === 'list' ? 'bg-muted' : ''}`}
            onClick={() => onViewChange('list')}
          >
            <List size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramSearchFilters;
