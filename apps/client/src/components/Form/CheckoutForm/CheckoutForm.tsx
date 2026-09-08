"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { FormField } from "./components";
import { CheckoutFormProps } from "./types";

const CheckoutForm = <T extends FieldValues>({
  schema,
  fields,
  onSubmit,
  submitLabel,
  submitIcon,
  children,
}: CheckoutFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        const error = errors[field.name];
        const errorMessage =
          error && "message" in error && typeof error.message === "string"
            ? error.message
            : undefined;

        return (
          <FormField
            key={field.name}
            id={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            error={errorMessage}
            {...register(field.name)}
          />
        );
      })}
      {children}
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all hover:bg-gray-900"
      >
        {submitLabel}
        {submitIcon}
      </button>
    </form>
  );
};

export default CheckoutForm;
