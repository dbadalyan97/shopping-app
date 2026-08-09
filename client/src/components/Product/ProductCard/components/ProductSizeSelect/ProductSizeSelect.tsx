import { FC } from "react";
import { ProductSizeSelectProps } from "./types";

const ProductSizeSelect: FC<ProductSizeSelectProps> = ({ sizes, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Size</span>
      <select
        name="size"
        id="size"
        className="rounded-md py-1 ring ring-gray-300"
        onChange={(e) => onChange({ type: "size", value: e.target.value })}
      >
        {sizes.map((size) => (
          <option key={size} value={size.toLowerCase()}>
            {size.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSizeSelect;
