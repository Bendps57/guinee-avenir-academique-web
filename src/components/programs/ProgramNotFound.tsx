
import React from "react";
import { Link } from "react-router-dom";

const ProgramNotFound = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Programme non trouvé</h1>
        <Link to="/formations" className="inline-block bg-university-blue text-white px-4 py-2 rounded hover:bg-university-navy">
          Retour aux formations
        </Link>
      </div>
    </div>
  );
};

export default ProgramNotFound;
