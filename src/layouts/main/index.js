"use client";

import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import { usePathname } from "src/routes/hooks";

import { HEADER } from "../config-layout";

import Header from "./header";
import Footer from "./footer";
import CareerContactInfo from "src/sections/contact/career-contact-info";

// ----------------------------------------------------------------------

const pathsOnDark = ["", "about", "/e-commerce", "/e-commerce/"];

const spacingLayout = [
  ...pathsOnDark,
  "/",
  "/about/",
  "/e-commerce/",
  "/e-commerce",
  "/e-commerce/",
];

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const actionPage = (arr) => arr.some((path) => pathname === path);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Header headerOnDark={actionPage(pathsOnDark)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {!actionPage(spacingLayout) && <Spacing />}

        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
      }}
    />
  );
}
