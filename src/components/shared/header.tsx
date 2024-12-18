import Link from "next/link";
import Image from "next/image";

const siteName = "Hubi Forever25";

export default function Header() {
  return (
    <header>
      <Image
        src={`/images/logo.png`}
        alt={siteName}
        width="48"
        height="48"
        className="mr-2 bg-white rounded-full p-1"
      />
      <h2>
        <Link href="/" className="text-white no-underline">
          {siteName}
        </Link>
      </h2>
    </header>
  );
}
