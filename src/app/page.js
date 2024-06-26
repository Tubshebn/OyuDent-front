import MainLayout from "src/layouts/main";
import HomeView from "./home/page";
import AboutUs from "./about/page";

// ----------------------------------------------------------------------
export const metadata = {
  title:
    "OYUDENT.COM | Шүдний эмнэлэгийн материал, тоног төхөөрөмж, багаж хэрэгсэл",
  description:
    "OYUDENT.COM | Шүдний эмнэлэгийн материал, тоног төхөөрөмж, багаж хэрэгсэл",
  keywords: "react,material,kit,application,dashboard,admin,template",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
  ],
};

export default function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
