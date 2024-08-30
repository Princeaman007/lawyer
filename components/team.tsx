import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Polly Walter',
      title: 'Directeur de la Publicité',
      image: '/polly.jpg', // Remplace avec le chemin de l'image de Polly
    },
    {
      name: 'Adrian Gronder',
      title: 'Directeur Financier',
      image: '/adrian.jpg', // Remplace avec le chemin de l'image d'Adrian
    },
    {
      name: 'Nat Reynolds',
      title: 'Comptable-Auditeur',
      image: '/nat.jpg', // Remplace avec le chemin de l'image de Nat
    },
    {
      name: 'Jorge Greer',
      title: 'Responsable des Ressources Humaines',
      image: '/jorge.jpg', // Remplace avec le chemin de l'image de Jorge
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Notre Équipe</h2>
        <p className="text-gray-600 mb-12">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="font-bold text-xl mb-2">{member.name}</h4>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
