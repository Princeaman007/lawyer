

import Image from 'next/image';

const About= () => {
  return (
    <div className="flex flex-col  items-center justify-center py-4 shadow-md">
      <div className="mx-4">
        <h2 className="text-center font-semibold text-amber-400 mb-4">QUI NOUS SOMMES.</h2>
        <p>
            {`Nous sommes maintenant devenus un cabinet d'avocats établi situé dans le quartier central des affaires de Jakarta, offrant une gamme complète de services juridiques couvrant entre autres les entreprises, les investissements, la finance et la banque, l'expédition, les litiges et les services juridiques spécialisés aux clients nationaux et internationaux. Nous guidons continuellement nos clients à travers le système réglementaire complexe et dynamique de l'Indonésie et fournissons des conseils juridiques judicieux sur tous les aspects de la conduite des affaires.`}
        <br/>
        </p>
        <p>
            {`Tout en maintenant notre indépendance, nous entretenons des relations étroites avec des cabinets d'avocats internationaux réputés afin de mieux fournir et des services clients internationaux pour nos clients.`}
        </p>
      </div>
    </div>
  );
};

export default About;
