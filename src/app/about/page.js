// ----------------------------------------------------------------------

import AboutLayout from "src/layouts/about";
import AboutUs from "src/sections/About/about-view";

export const metadata = {
  title: "Бидний тухай",
};

export default function MarketingAboutPage() {
  return (
    <AboutLayout>
      <AboutUs />
    </AboutLayout>
  );
}
