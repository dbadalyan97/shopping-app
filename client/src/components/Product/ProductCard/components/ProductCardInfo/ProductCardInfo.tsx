import { FC } from "react";
import { ProductCardInfoProps } from "./types";

const ProductCardInfo: FC<ProductCardInfoProps> = ({
  name,
  shortDescription,
}) => {
  return (
    <>
      <h1 className="font-medium">{name}</h1>
      <p className="text-sm text-gray-500">{shortDescription}</p>
    </>
  );
};

export default ProductCardInfo;
