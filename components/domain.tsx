import React from 'react';

export default function Domaine() {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Nous sommes différents</h2>
        <p className="text-lg mb-10">Principaux domaines d'expertise</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold">Droit Médical</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold">Droit des Affaires</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold">Droit des Assurances</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">👨‍👩‍👦</span>
            </div>
            <h3 className="text-xl font-semibold">Droit de la Famille</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
