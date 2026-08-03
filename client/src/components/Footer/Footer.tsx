import { getDictionary } from "@/dictionary/get-dictionary";
import { FOOTER_SECTIONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const dictionary = await getDictionary();
  const { footer } = dictionary;

  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:justify-between md:gap-0 md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={dictionary.brandName}
            width={36}
            height={36}
            loading="eager"
            unoptimized
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            {dictionary.brandName}
          </p>
        </Link>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {dictionary.brandName}
        </p>
        <p className="text-sm text-gray-400">{footer.allRightsReserved}</p>
      </div>
      {FOOTER_SECTIONS.map(({ key, links }) => (
        <div
          key={key}
          className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start"
        >
          <p className="text-sm text-amber-50">{footer.sections[key]}</p>
          {links.map(({ href, key: labelKey }) => (
            <Link key={labelKey} href={href}>
              {footer.links[labelKey]}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
