import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { Bell, Home } from "lucide-react";
import { getDictionary } from "@/dictionary/get-dictionary";
import { ShoppingCart } from "../ShoppingCart";

const Navbar = async () => {
  const dictionary = await getDictionary();

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 px-2 py-1 shadow-md">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt={dictionary.brandName}
          width={36}
          height={36}
          loading="eager"
          unoptimized
          className="size-6 md:size-9"
        />
        <p className="hidden text-base font-medium tracking-wider md:block">
          {dictionary.brandName}
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="size-4 text-gray-600" />
        </Link>
        <Bell className="size-4 text-gray-600" />
        <ShoppingCart />
        <Link href="/">{dictionary.navbar.signIn}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
