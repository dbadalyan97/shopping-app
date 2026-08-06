import { Categories } from "../Categories";
import ProductCard from "../ProductCard/ProductCard";
import { PRODUCTS } from "@/constants";

const ProductList = () => {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
