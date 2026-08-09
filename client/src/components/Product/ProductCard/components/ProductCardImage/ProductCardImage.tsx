import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCardImageProps } from "./types";

const ProductCardImage: FC<ProductCardImageProps> = ({
  productId,
  name,
  imageSrc,
}) => {
  return (
    <Link href={`/products/${productId}`}>
      <div className="relative aspect-2/3">
        <Image
          src={imageSrc}
          alt={name}
          fill
          loading="lazy"
          className="object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default ProductCardImage;
