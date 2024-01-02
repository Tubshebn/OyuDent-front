import ProductLayout from "src/layouts/products";
import EcommerceProductsView from "src/sections/_ecommerce/view/ecommerce-products-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Бүтээгдэхүүн",
};

export default function EcommerceProductsPage() {
  return (
    <ProductLayout>
      <EcommerceProductsView />
    </ProductLayout>
  );
}
