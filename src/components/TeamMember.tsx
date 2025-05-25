
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

const TeamMember = ({ name, role, imageUrl, bio }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none">
      <div className="w-full overflow-hidden bg-gray-100 flex items-center justify-center h-48">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
          <img 
            src="https://i.imgur.com/eIx2JbG.jpeg" 
            alt="IUHEG Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
      <CardContent className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-university-blue">{name}</h3>
        <p className="text-sm text-gray-500 font-medium">{role}</p>
        {bio && <p className="mt-2 text-gray-600 text-sm">{bio}</p>}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
