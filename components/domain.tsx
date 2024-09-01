import React from 'react';

export default function Domaine() {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-amber-400 font-bold mb-6">Nous sommes différents</h2>
        <p className="text-lg mb-10">{`Principaux domaines d'expertise`}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl font-semibold">Droit Médical</h3>
            <p className="mt-2">Grâce à notre expertise approfondie en responsabilité médicale, consentement éclairé et déontologie, nous sommes en mesure de fournir des conseils juridiques précis tout en défendant les intérêts de nos clients dans un secteur en constante évolution.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold">Droit des Affaires</h3>
            <p className="mt-2">Notre expertise en droit des affaires nous permet de proposer des solutions juridiques personnalisées pour soutenir et protéger les intérêts de votre entreprise. Que ce soit pour rédiger des contrats, négocier des accords commerciaux ou gérer des litiges. Nous vous soutenons à chaque étape pour assurer la sécurité de vos transactions et optimiser votre croissance. Nous mettons l accent sur la prévention des risques et l efficacité juridique, afin que vous puissiez vous concentrer sur le développement de vos activités en toute tranquillité.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold">Droit des Assurances</h3>
            <p className="mt-2">Notre expertise en droit des assurances nous permet d accompagner nos clients dans la gestion et la résolution de leurs litiges en matière d assurance. Que ce soit pour des assurances pour la maison, l automobile ou la responsabilité civile, nous nous engageons à protéger vos intérêts et à vous offrir des conseils juridiques adaptés à vos besoins. Nous nous engageons à vous garantir une compréhension claire de vos droits et à vous assister dans la recherche des meilleures solutions face aux assureurs.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <div className="mb-4">
              {/* Replace with an icon */}
              <span className="text-4xl">👨‍👩‍👦</span>
            </div>
            <h3 className="text-xl font-semibold">Droit de la Famille</h3>
            <p className="mt-2">Nous soutenons nos clients avec empathie et rigueur dans des moments souvent délicats. Que ce soit pour gérer les divorces, prendre soin des enfants, rédiger des testaments ou régler les successions. Nous mettons notre savoir-faire à votre disposition pour protéger vos intérêts et ceux de vos proches, en veillant à ce que chaque étape soit traitée de manière transparente et efficace.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
