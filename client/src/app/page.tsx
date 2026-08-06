import { ProductList } from "@/components/Product/ProductList";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="">
      <div className="relative aspect-3/1 mb-12">
        <Image
          src="/featured.png"
          alt="Featured Product"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px)"
        />
      </div>
      <ProductList />
    </div>
  );
}
