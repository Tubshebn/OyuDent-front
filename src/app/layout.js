import PropTypes from "prop-types";

import "src/global.css";

// ----------------------------------------------------------------------

import ThemeProvider from "src/theme";
import { primaryFont } from "src/theme/typography";
import { LocalizationProvider } from "src/locales";
import ProgressBar from "src/components/progress-bar";
import MotionLazy from "src/components/animate/motion-lazy";
import { SettingsDrawer, SettingsProvider } from "src/components/settings";
import { Api } from "src/service/Api";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        {/* <AuthContext.Provider
          value={{
            handlers,
            state,
          }}
        > */}
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "ltr", //  'rtl' | 'ltr'
              themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
        {/* </AuthContext.Provider> */}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
