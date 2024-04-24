"use client";
import PropTypes from "prop-types";
import "src/global.css";
// ------------------------------------------------------------------
import ThemeProvider from "src/theme";
import { primaryFont } from "src/theme/typography";
import { LocalizationProvider } from "src/locales";
import ProgressBar from "src/components/progress-bar";
import MotionLazy from "src/components/animate/motion-lazy";
import { SettingsDrawer, SettingsProvider } from "src/components/settings";
import { ProductContext } from "src/context/product/productContext";
import { Product } from "src/context/product/product";
import { metadata } from "./metadata";
// ----------------------------------------------------------------------

export default function RootLayout({ children }) {
  const { func, state } = Product();
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "ltr", //  'rtl' | 'ltr'
              themeColorPresets: "default", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            }}
          >
            <ProductContext.Provider
              value={{
                func,
                state,
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                  <ProgressBar />
                  <SettingsDrawer />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </ProductContext.Provider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
