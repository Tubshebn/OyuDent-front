import ProductDetailLayout from "src/layouts/product";
import ProductLayout from "src/layouts/products";
import EcommerceProductView from "src/sections/_ecommerce/view/ecommerce-product-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Бүтээгдэхүүн",
};

export default function EcommerceProductsPage() {
  return (
    <ProductDetailLayout>
      <EcommerceProductView />
    </ProductDetailLayout>
  );
}
