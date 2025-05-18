
import Hero from "@/components/Hero";
import { Container } from "@/components/ui/container";

const ConfidentialityPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Politique de Confidentialité"
        subtitle="Vos données sont importantes"
        description="Découvrez comment l'IUHEG protège vos informations personnelles et respecte votre vie privée."
        imageUrl="https://images.unsplash.com/photo-1508726096737-5ac7ca26345f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <Container className="py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-university-blue mb-6">Protection de vos données personnelles</h2>
          
          <p className="mb-4">
            L'IUHEG accorde une importance particulière à la protection de vos données personnelles. 
            Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations 
            lorsque vous utilisez notre site web ou nos services.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Collecte des données</h3>
          <p className="mb-4">
            Nous collectons des informations lorsque vous vous inscrivez sur notre site, remplissez un formulaire, 
            ou vous inscrivez à l'un de nos programmes. Les informations collectées incluent votre nom, adresse e-mail, 
            numéro de téléphone, et dans le cadre des inscriptions académiques, votre parcours éducatif et vos documents administratifs.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Utilisation des données</h3>
          <p className="mb-4">
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personnaliser votre expérience sur notre site</li>
            <li>Améliorer notre site web</li>
            <li>Traiter vos demandes d'inscription</li>
            <li>Vous contacter concernant votre candidature ou votre parcours académique</li>
            <li>Vous envoyer des informations pertinentes sur nos programmes et événements</li>
          </ul>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Protection des données</h3>
          <p className="mb-4">
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. 
            Nous utilisons des technologies de cryptage avancées pour protéger les données sensibles transmises en ligne. 
            Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique 
            ont accès aux informations personnelles identifiables.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Cookies</h3>
          <p className="mb-4">
            Notre site web utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers qu'un site ou son 
            prestataire de services transfère sur le disque dur de votre ordinateur par l'intermédiaire de votre navigateur Web. 
            Ils permettent aux sites ou aux systèmes des prestataires de services de reconnaître votre navigateur et de capturer et de 
            mémoriser certaines informations.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Divulgation à des tiers</h3>
          <p className="mb-4">
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. 
            Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site web ou à mener nos activités, tant que ces parties 
            conviennent de garder ces informations confidentielles.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Consentement</h3>
          <p className="mb-4">
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Modifications de notre politique de confidentialité</h3>
          <p className="mb-4">
            Si nous décidons de changer notre politique de confidentialité, nous publierons ces changements sur cette page pour que vous 
            soyez toujours au courant des informations que nous recueillons, comment nous les utilisons et dans quelles circonstances 
            nous les divulguons.
          </p>

          <h3 className="text-2xl font-semibold text-university-blue mt-8 mb-4">Nous contacter</h3>
          <p className="mb-4">
            Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à :<br />
            <strong>Email:</strong> info@iuheg.education<br />
            <strong>Téléphone:</strong> +224 626 859 387
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Dernière mise à jour: Mai 2025
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ConfidentialityPolicy;
