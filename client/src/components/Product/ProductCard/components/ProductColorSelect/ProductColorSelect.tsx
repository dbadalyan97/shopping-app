import { FC } from "react";
import { clsx } from "clsx";
import { ProductColorSelectProps } from "./types";

const ProductColorSelect: FC<ProductColorSelectProps> = ({
  colors,
  selectedColor,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Color</span>
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            className={`cursor-pointer border ${selectedColor === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`}
            key={color}
            onClick={() => onChange({ type: "color", value: color })}
          >
            <div
              className={clsx(`size-4 rounded-full`, {
                "ring-2 ring-gray-300": color === colors[0],
              })}
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColorSelect;
