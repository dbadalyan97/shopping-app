import { CART_STEPS } from "@/constants";
import clsx from "clsx";
import { FC } from "react";
import { CartStepsProps } from "./types";

const CartSteps: FC<CartStepsProps> = ({ activeStep }) => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
      {CART_STEPS.map((step) => (
        <div
          className={clsx(
            "flex items-center gap-2 border-b-2 border-gray-200 pb-4",
            { "border-gray-800": step.id === activeStep },
          )}
          key={step.id}
        >
          <div
            className={clsx(
              "flex size-6 items-center justify-center rounded-full bg-gray-200 p-4 text-white",
              { "bg-gray-800": step.id === activeStep },
            )}
          >
            {step.id}
          </div>
          <p
            className={clsx("text-sm font-medium text-gray-400", {
              "text-gray-800": step.id === activeStep,
            })}
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartSteps;
