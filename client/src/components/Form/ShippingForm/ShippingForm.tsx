import {
  ShippingFormInputs,
  shippingFormSchema,
} from "@/types/form/shippingFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { ShippingFormProps } from "./types";
import { useRouter } from "next/navigation";

const ShippingForm: FC<ShippingFormProps> = ({ setShippingForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-medium text-gray-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="john.doe@example.com"
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs font-medium text-gray-500">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="123456789"
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs font-medium text-gray-500">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="123 Main St, Anytown, USA"
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs font-medium text-gray-500">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Anytown"
          className="border-b border-gray-200 py-2 text-sm outline-none"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all hover:bg-gray-900"
      >
        Continue
        <ArrowRight className="size-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
