
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { LogIn } from "lucide-react";

const Connexion = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Show toast with demo message
    toast({
      title: "Fonctionnalité de démonstration",
      description: "La connexion à l'espace étudiant n'est pas encore implémentée dans cette démo.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="w-full max-w-md">
        <Card className="border-t-4 border-t-university-gold shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl text-university-blue">Connexion étudiant</CardTitle>
            <CardDescription>
              Accédez à votre espace personnel et à la plateforme e-learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="prenom.nom@etudiant.iuheg.edu"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Button variant="link" className="text-sm text-university-blue h-auto p-0">
                    Mot de passe oublié ?
                  </Button>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-university-blue hover:bg-university-navy"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Connexion en cours..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Se connecter
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-gray-600">
              <p>Pour tout problème technique, veuillez contacter le</p>
              <p>service informatique au support@iuheg.education</p>
            </div>
            <div className="w-full pt-2 border-t">
              <Button 
                variant="ghost" 
                className="w-full text-university-blue hover:text-university-navy hover:bg-blue-50"
              >
                Première connexion ? Activer mon compte
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Connexion;
