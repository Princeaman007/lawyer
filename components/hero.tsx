'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import { useEffect, useState } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return width
}

const Hero = () => {
  const width = useWidth();
  console.log(width);
  return (
    <div className="relative md:w-full md:h-screen md:mt-42 mb-4">
      {width > 799 ?
        <Image
          src="/assets/hero.jpg"
          alt="Hero Image"
          fill
          object-fill
          className="inset-0 w-full h-full"

        />
        :
        <Image
          src="/assets/hero.jpg"
          alt="Hero Image"
          width={800}
          height={800}
          objectFit="cover"

        />
      }

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
        BIENVENUE CHEZ JURISLEX
        </h1>
        <p className="text-center text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp">
        Avocats de Clermont.
        </p>
        <button className="bg-amber-400 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded">
          <Link href="/about">QUI NOUS SOMMES</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
