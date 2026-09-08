import { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldValues, Path, SubmitHandler } from "react-hook-form";
import { z } from "zod";

export interface FormFieldConfig<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

export interface CheckoutFormProps<T extends FieldValues> {
  schema: z.ZodType<T, T>;
  fields: FormFieldConfig<T>[];
  onSubmit: SubmitHandler<T>;
  submitLabel: string;
  submitIcon: ReactNode;
  children?: ReactNode;
}
