import MainLayout from "src/layouts/main";
import HomeView from "./home/page";
import AboutUs from "./about/page";

// ----------------------------------------------------------------------

export const metadata = {
  title:
    "OYUDENT.COM | Шүдний эмнэлэгийн материал, тоног төхөөрөмж, багаж хэрэгсэл",
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
