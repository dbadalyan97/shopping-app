import clsx from "clsx";
import { FC } from "react";
import { CartDetailsRowProps } from "./types";

const CartDetailsRow: FC<CartDetailsRowProps> = ({
  label,
  value,
  emphasized = false,
}) => {
  return (
    <div className={clsx("flex justify-between", { "text-sm": !emphasized })}>
      <p className={emphasized ? "font-semibold text-gray-800" : "text-gray-500"}>
        {label}
      </p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default CartDetailsRow;
