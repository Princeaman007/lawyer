

import Image from 'next/image';

const About= () => {
  return (
    <div className="flex flex-col  items-center justify-center py-4 shadow-md">
      <div className="mx-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-amber-400 mb-4">QUI NOUS SOMMES</h2>
        <p>
        Fondé à Clermont, JurisLex est un cabinet d avocats spécialisé dans plusieurs domaines clés du droit, offrant une expertise pointue et des services de haute qualité à ses clients. Notre équipe dévouée d avocats allie compétence juridique et compréhension approfondie des besoins spécifiques de chaque client, assurant ainsi des solutions juridiques adaptées et efficaces.
        </p>
      </div>
    </div>
  );
};

export default About;
