import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home() {
  const dictionary = await getDictionary();

  return (
    <div>
      <h1 className="text-2xl font-semibold">{dictionary.home.title}</h1>
      <p className="mt-2 text-neutral-600">{dictionary.home.subtitle}</p>
    </div>
  );
}
