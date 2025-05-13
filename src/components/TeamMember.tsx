
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
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
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
