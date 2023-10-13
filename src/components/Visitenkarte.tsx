import { ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import JjLogo from "../../public/JJ.svg"
import Image from 'next/image';
import KontaktButton from './KontaktButton';
import Footer from './Footer';

export default function Visitenkarte() {

 return (
    <div className="max-w-sm mx-auto p-4 bg-zinc-900 text-zinc-50 rounded-lg shadow-lg min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
            <Image src={JjLogo} alt='logo jj' className='animate-spin-slow' />
        </div>
        <div className="text-xl font-bold mb-2">Jan Jansen</div>
        <div className="text-sm mb-4 text-lime-100">Webdevelopment & E-Commerce</div>
        <p className="text-sm mb-6 text-center">Willkommen in der Zukunft des Webs! 🚀 <br />
Seit dem Jahr 2022 entwickeln wir Projekte, um digitale Träume Wirklichkeit werden zu lassen. Hier setzen wir keine Grenzen für Kreativität und Innovation.</p>
        <div className="flex flex-col justify-center space-y-12">
          <Link href="tel:+123456789" className="text-lime-100">
            <EnvelopeIcon className='h-12 w-12' />
            </Link>
          <Link href="mailto:jan@example.com" className="text-lime-100">
            <DevicePhoneMobileIcon className='h-12 w-12' />
          </Link>
          <Link href="https://www.example.com" className="text-lime-100" target="_blank" rel="noopener noreferrer">
            <ArrowTopRightOnSquareIcon className='h-12 w-12' />
          </Link>
          </div>
          <KontaktButton />
      </div>
      <Footer />
    </div>
  );
};

