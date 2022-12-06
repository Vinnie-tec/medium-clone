/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <Image
            src="https://ik.imagekit.io/vinnie/Portfolio/medium_GeCnzv-pO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669906270454"
            alt="medium"
            width={70}
            height={70}
          />
        </Link>
        <div className="hidden md:inline-flex item-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
