import { getDictionary } from "@/dictionary/get-dictionary";
import { FOOTER_SECTIONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const dictionary = await getDictionary();
  const { footer } = dictionary;

  return (
    <div className="mt-16 flex flex-col items-center gap-8 rounded-lg bg-gray-800 p-8 md:flex-row md:items-start md:justify-between md:gap-0">
      <div className="flex flex-col items-center gap-4 md:items-start">
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
          <p className="hidden text-base font-medium tracking-wider text-white md:block">
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
          className="flex flex-col items-center gap-4 text-sm text-gray-400 md:items-start"
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
