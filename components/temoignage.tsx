import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mary Hudson',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
      image: "/assets/temoin3.jpg", // Remplace avec le chemin de l'image de Mary
    },
    {
      name: 'John Doe',
      text: 'Suspendisse ultricies leo a magna ultrices, non vulputate mauris consectetur.',
      image: "/assets/temoin4.jpg", // Remplace avec le chemin de l'image de John
    },
    {
      name: 'Jane Smith',
      text: 'Curabitur ac quam eget felis faucibus feugiat nec et velit.',
      image: "/assets/temoi1.jpg", // Remplace avec le chemin de l'image de Jane
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ce que disent nos clients</h2>
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
