import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mary Hudson',
      text: 'J ai récemment eu besoin d assistance pour régler la succession de mes parents, et je ne savais pas par où commencer. Heureusement, j ai fait appel à JurisLex. Leur équipe a été d un professionnalisme exemplaire, m accompagnant à chaque étape du processus. Ils ont su m expliquer clairement les démarches juridiques complexes et ont toujours été disponibles pour répondre à mes questions. Grâce à eux, j ai pu régler cette succession sans stress et en toute sérénité. Je recommande vivement leurs services à toute personne confrontée à une situation similaire.',
      image: "/assets/temoin3.jpg", // Remplace avec le chemin de l'image de Mary
    },
    {
      name: 'John Doe',
      text: 'Nous avons eu le plaisir de travailler avec l équipe de JurisLex pour un projet complexe de restructuration de notre entreprise. Leur expertise en droit des affaires a été inestimable tout au long du processus. Ils ont su naviguer avec aisance à travers les défis juridiques et nous ont fourni des conseils stratégiques clairs et précis, adaptés à nos besoins spécifiques. Grâce à leur engagement et à leur professionnalisme, nous avons pu mener à bien notre projet en toute sérénité. Nous recommandons vivement leurs services à toute entreprise cherchant des solutions juridiques solides et un accompagnement personnalisé.',
      image: "/assets/temoin4.jpg", // Remplace avec le chemin de l'image de John
    },
    {
      name: 'Marc Moyar',
      text: 'J ai récemment eu besoin de conseils juridiques pour une réclamation d assurance compliquée. L équipe de JurisLex a été d un professionnalisme exemplaire du début à la fin. Non seulement ils ont pris le temps d écouter attentivement mon problème, mais ils m ont aussi fourni des explications claires et détaillées sur mes droits et les démarches à suivre. Grâce à leur expertise, j ai pu obtenir une indemnisation juste et rapide. Je recommande vivement leurs services à quiconque se trouve dans une situation similaire.',
      image: "/assets/temoi1.jpg", // Remplace avec le chemin de l'image de Jane
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl  text-amber-400 font-bold mb-8">Ce que disent nos clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={72}
                  height={72}
                  className="rounded object-cover"
                />
              </div>
              <p className="text-lg italic mb-4">{testimonial.text}</p>
              <h4 className="font-bold text-xl">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
