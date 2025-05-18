
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const DepartmentContacts = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-8 text-center">Contacts par département</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DepartmentCard
            title="Admissions"
            description="Pour toute question concernant le processus d'inscription et les conditions d'admission."
            email="admissions@iuheg.education"
            phone="+224 12 345 6789"
          />

          <DepartmentCard
            title="Relations Internationales"
            description="Pour les étudiants internationaux et les programmes d'échange."
            email="international@iuheg.education"
            phone="+224 12 345 6790"
          />

          <DepartmentCard
            title="Service Financier"
            description="Pour les questions relatives aux frais de scolarité, bourses et aides financières."
            email="finance@iuheg.education"
            phone="+224 12 345 6791"
          />

          <DepartmentCard
            title="Service Pédagogique"
            description="Pour les questions relatives aux cours, aux programmes et à l'organisation des études."
            email="pedagogie@iuheg.education"
            phone="+224 12 345 6792"
          />

          <DepartmentCard
            title="Vie Étudiante"
            description="Pour tout ce qui concerne les activités extrascolaires, les clubs et la vie sur le campus."
            email="vietudiante@iuheg.education"
            phone="+224 12 345 6793"
          />

          <DepartmentCard
            title="Support Technique"
            description="Pour l'assistance technique concernant la plateforme e-learning et les outils numériques."
            email="support@iuheg.education"
            phone="+224 12 345 6794"
          />
        </div>
      </Container>
    </section>
  );
};

interface DepartmentCardProps {
  title: string;
  description: string;
  email: string;
  phone: string;
}

const DepartmentCard = ({ title, description, email, phone }: DepartmentCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-university-blue mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <p><span className="font-medium">Email:</span> {email}</p>
          <p><span className="font-medium">Téléphone:</span> {phone}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentContacts;
