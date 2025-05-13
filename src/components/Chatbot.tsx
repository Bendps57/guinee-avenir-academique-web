
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const defaultResponses: Record<string, string> = {
  default: "Bonjour ! Comment puis-je vous aider concernant l'IUHEG ?",
  greeting: "Bonjour ! Je suis l'assistant virtuel de l'IUHEG. Comment puis-je vous aider aujourd'hui ?",
  admission: "Pour les admissions, vous pouvez soumettre votre candidature en ligne sur notre site ou visiter notre campus. Les documents requis incluent vos relevés de notes, pièce d'identité et formulaire d'inscription complété. Pour plus d'informations, contactez le bureau des admissions au +224 12 345 6789.",
  programs: "L'IUHEG propose plusieurs programmes de niveau Licence et Master dans des domaines comme la gestion, l'informatique, le droit, et l'ingénierie. Chaque programme est conçu pour répondre aux besoins du marché du travail guinéen et international.",
  fees: "Les frais de scolarité varient selon le programme choisi. Pour une estimation précise, veuillez contacter notre service financier ou consulter notre brochure tarifaire sur le site web.",
  international: "L'IUHEG a des partenariats avec plusieurs universités en France, au Canada et aux États-Unis. Nous offrons des programmes d'échange et des opportunités de stages internationaux pour nos étudiants.",
  accommodation: "L'université propose un service d'aide au logement pour les étudiants. Nous avons des partenariats avec plusieurs résidences près du campus.",
  facilities: "Notre campus offre des salles de classe modernes, une bibliothèque, des laboratoires informatiques, des installations sportives et une cafétéria.",
  help: "Je peux vous renseigner sur les programmes, les admissions, les frais de scolarité, nos partenaires internationaux et la vie sur le campus. Comment puis-je vous aider ?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: defaultResponses.greeting, isUser: false },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const getResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (/bonjour|salut|hello|hi/i.test(lowerCaseMessage)) {
      return defaultResponses.greeting;
    } else if (/admission|inscrire|candidature|s'inscrire|comment s'inscrire/i.test(lowerCaseMessage)) {
      return defaultResponses.admission;
    } else if (/programme|formation|cours|étude|licence|master/i.test(lowerCaseMessage)) {
      return defaultResponses.programs;
    } else if (/frais|tarif|cout|prix|combien|scolarité/i.test(lowerCaseMessage)) {
      return defaultResponses.fees;
    } else if (/international|étranger|partenaire|échange|mobilité/i.test(lowerCaseMessage)) {
      return defaultResponses.international;
    } else if (/logement|hébergement|résidence|chambre/i.test(lowerCaseMessage)) {
      return defaultResponses.accommodation;
    } else if (/campus|installation|équipement|facilité|sport/i.test(lowerCaseMessage)) {
      return defaultResponses.facilities;
    } else if (/aide|help|assister|question/i.test(lowerCaseMessage)) {
      return defaultResponses.help;
    }
    
    return "Je n'ai pas toutes les informations à ce sujet. Pour des renseignements plus précis, veuillez contacter notre équipe au +224 12 345 6789 ou par email à contact@iuheg.education.";
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { id: messages.length + 1, text: inputMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate a delay for the bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInputMessage("");
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-university-blue text-white rounded-full p-4 shadow-lg hover:bg-university-navy transition-colors"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chatbot Dialog */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-96">
          <Card className="border-university-blue shadow-xl">
            <CardHeader className="bg-university-blue text-white py-3 px-4 flex flex-row justify-between items-center">
              <CardTitle className="text-lg font-medium">Assistant IUHEG</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-university-navy/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.isUser
                          ? "bg-university-blue text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-2 border-t">
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <Input
                  placeholder="Posez votre question ici..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-grow"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="bg-university-blue hover:bg-university-navy"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
