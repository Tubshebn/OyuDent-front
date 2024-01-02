"use client";

import PropTypes from "prop-types";

import Header from "/src/layouts/main/header";

// ----------------------------------------------------------------------

export default function ProductLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

ProductLayout.propTypes = {
  children: PropTypes.node,
};
