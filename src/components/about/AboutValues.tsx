
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutValues = () => {
  const values = [
    {
      number: "1",
      title: "Excellence",
      description: "Nous visons l'excellence dans tous les aspects de notre travail, de l'enseignement à la recherche en passant par l'administration."
    },
    {
      number: "2",
      title: "Intégrité",
      description: "Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos interactions et décisions."
    },
    {
      number: "3",
      title: "Innovation",
      description: "Nous encourageons la créativité, l'adaptabilité et l'esprit d'initiative pour répondre aux défis actuels et futurs."
    },
    {
      number: "4",
      title: "Inclusion",
      description: "Nous valorisons la diversité et créons un environnement où chacun se sent respecté et peut s'épanouir."
    },
    {
      number: "5",
      title: "Engagement social",
      description: "Nous sommes déterminés à avoir un impact positif sur notre communauté et sur la société dans son ensemble."
    },
    {
      number: "6",
      title: "Collaboration",
      description: "Nous favorisons les partenariats et le travail d'équipe pour atteindre des objectifs communs."
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6 text-center">Nos valeurs fondamentales</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => (
          <Card key={value.number}>
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                <span className="text-university-blue font-bold text-xl">{value.number}</span>
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              {value.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutValues;
