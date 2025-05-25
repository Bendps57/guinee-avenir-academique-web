
const ContactFormFallback = () => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-600">
        <strong>Problème avec le formulaire ?</strong><br />
        Contactez-nous directement : 
        <a href="mailto:secretariat@iuheg.education" className="text-university-blue hover:underline ml-1">
          secretariat@iuheg.education
        </a>
      </p>
    </div>
  );
};

export default ContactFormFallback;
