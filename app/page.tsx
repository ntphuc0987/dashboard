import styles from '@/app/home.module.css';

import AcmeLogo from './ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 ">
        <AcmeLogo />
      </div>
      <div className='flex justify-center items-center p-4 flex-col md:flex-row'>
        <p className="md:w-2/5 ">
          Welcome to Acme. This is the example for the{' '}
          <Link href="https://nextjs.org/learn" className="text-blue-500">
            Next.js Learn Course
          </Link>
          , brought to you by Vercel.
          <button type="button" className='flex gap-1 py-1 px-2 rounded bg-sky-500 items-center justify-center text-white text-lg my-4'>
            Login <ArrowRightIcon className={styles.svg}/>
          </button>
        </p>
        <div className="flex items-center justify-center p-6 md:w-3/5 ">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshoots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden object-cover"
            alt="Screenshoots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
