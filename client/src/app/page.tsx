import { ProductList } from "@/components/Product/ProductList";
import { Path } from "@/enums";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="">
      <div className="relative mb-12 aspect-3/1">
        <Image
          src="/featured.png"
          alt="Featured Product"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px)"
        />
      </div>
      <ProductList category={category} path={Path.Homepage} />
    </div>
  );
}
