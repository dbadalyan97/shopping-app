import { SingleProduct } from "@/components/Product/SingleProduct";
import { PRODUCTS } from "@/constants";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = PRODUCTS.find((product) => product.id.toString() === id);
  if (!product) {
    notFound();
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((product) => product.id.toString() === id);

  if (!product) {
    notFound();
  }

  return <SingleProduct product={product} />;
}
