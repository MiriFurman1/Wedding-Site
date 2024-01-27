// components/Navbar.tsx

import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src="/logo.png" width={200} height={200} alt='logo' className=''/>
          </div>
          <div className="flex space-x-4">
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/rsvp">RSVP</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
