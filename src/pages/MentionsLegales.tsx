
import Hero from "@/components/Hero";
import { Container } from "@/components/ui/container";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Mentions Légales"
        subtitle="Informations juridiques"
        description="Informations légales concernant l'Institut Universitaire des Hautes Études de Guinée."
        imageUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <Container className="py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-university-blue mb-6">Mentions Légales</h2>
          
          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Éditeur du site</h3>
          <p className="mb-4">
            <strong>Institut Universitaire des Hautes Études de Guinée (IUHEG)</strong><br />
            Boulbinet, Commune de Kaloum<br />
            BP: 4979 Conakry<br />
            République de Guinée<br />
            Tél: +224 626 859 387<br />
            Email: info@iuheg.education<br />
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Direction de l'établissement</h3>
          <p className="mb-4">
            L'IUHEG est dirigé par son Recteur et son équipe de direction académique et administrative.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Hébergement</h3>
          <p className="mb-4">
            Ce site est hébergé par :<br />
            SAS OVH<br />
            2 rue Kellermann - 59100 Roubaix - France<br />
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Propriété intellectuelle</h3>
          <p className="mb-4">
            L'ensemble de ce site relève de la législation guinéenne et internationale sur le droit d'auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés, y compris pour les représentations iconographiques et photographiques.
          </p>
          <p className="mb-4">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
            sauf autorisation expresse de l'IUHEG.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Protection des données personnelles</h3>
          <p className="mb-4">
            Conformément à la réglementation en vigueur en Guinée, l'IUHEG s'engage à respecter la vie privée des utilisateurs 
            et à protéger les données à caractère personnel recueillies et traitées à l'occasion de l'utilisation du site.
          </p>
          <p className="mb-4">
            Pour plus d'information, consultez notre <a href="/confidentialite" className="text-university-gold hover:underline">politique de confidentialité</a>.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Limitation de responsabilité</h3>
          <p className="mb-4">
            L'IUHEG s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. 
            L'IUHEG se réserve le droit de corriger, à tout moment et sans préavis, le contenu de ce site.
          </p>
          <p className="mb-4">
            Toutefois, l'IUHEG ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. 
            Les informations présentes sur le site sont non-contractuelles et sujettes à modification sans préavis.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Liens hypertextes</h3>
          <p className="mb-4">
            Ce site peut contenir des liens vers d'autres sites Internet ou d'autres ressources disponibles sur Internet. 
            L'IUHEG n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune 
            responsabilité quant aux contenus de ces sites.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Droit applicable et juridiction compétente</h3>
          <p className="mb-4">
            Les présentes mentions légales sont régies par le droit guinéen. En cas de litige, les tribunaux guinéens seront seuls compétents.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Dernière mise à jour: Mai 2025
          </p>
        </div>
      </Container>
    </div>
  );
};

export default MentionsLegales;
