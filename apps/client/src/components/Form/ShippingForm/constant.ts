import { FormFieldConfig } from "../CheckoutForm/types";
import { ShippingFormInputs } from "@/types/form/shippingFormSchema";
import { Dictionary } from "@/dictionary/types";

export const shippingFormFields = (
  shippingForm: Dictionary["shippingForm"],
): FormFieldConfig<ShippingFormInputs>[] => [
  {
    name: "name",
    label: shippingForm.name,
    placeholder: shippingForm.namePlaceholder,
  },
  {
    name: "email",
    label: shippingForm.email,
    placeholder: shippingForm.emailPlaceholder,
    type: "email",
  },
  {
    name: "phone",
    label: shippingForm.phone,
    placeholder: shippingForm.phonePlaceholder,
  },
  {
    name: "address",
    label: shippingForm.address,
    placeholder: shippingForm.addressPlaceholder,
  },
  {
    name: "city",
    label: shippingForm.city,
    placeholder: shippingForm.cityPlaceholder,
  },
];
