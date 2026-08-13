import { ProductList } from "@/components/Product/ProductList";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="">
      <ProductList category={category} path="products" />
    </div>
  );
}
