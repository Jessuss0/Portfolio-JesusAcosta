import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent h-20">
      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex items-center space-x-10 text-lg text-white">

      <Link className="cursor-pointer hover:underline hover:scale-125 " href="#Home">Home</Link>
      <Link className="cursor-pointer hover:underline hover:scale-125 " href="#About">About</Link>
      <Link className="cursor-pointer hover:underline hover:scale-125 " href="#Experience">Experience</Link>
      <Link className="cursor-pointer hover:underline hover:scale-125 " href="#Proyects">Proyects</Link>
      <Link className="cursor-pointer hover:underline hover:scale-125 " href="#Contact">Contact</Link>
      </div>
    </div>
  );
}
