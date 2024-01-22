"use client";

import PropTypes from "prop-types";

import Header from "/src/layouts/main/header";

// ----------------------------------------------------------------------

export default function ProductDetailLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

ProductDetailLayout.propTypes = {
  children: PropTypes.node,
};
