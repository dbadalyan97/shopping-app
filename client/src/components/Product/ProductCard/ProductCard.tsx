import Link from "next/link";
import { ProductCardProps } from "./types";
import { getDictionary } from "@/dictionary/get-dictionary";
import Image from "next/image";

const ProductCard = async ({ product }: ProductCardProps) => {
  const dictionary = await getDictionary();
  const { name } = dictionary.products[product.key];

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[product.colors[0]] || ""}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
