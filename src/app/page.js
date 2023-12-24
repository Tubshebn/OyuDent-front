import MainLayout from "src/layouts/main";
import EcommerceLandingView from "src/sections/_ecommerce/view/ecommerce-landing-view";

// ----------------------------------------------------------------------

export const metadata = {
  title:
    "OYUDENT.COM | Шүдний эмнэлэгийн материал, тоног төхөөрөмж, багаж хэрэгсэл",
};

export default function HomePage() {
  return (
    <MainLayout>
      <EcommerceLandingView />
    </MainLayout>
  );
}
