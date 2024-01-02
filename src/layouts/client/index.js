"use client";

import PropTypes from "prop-types";

import Header from "/src/layouts/main/header";

// ----------------------------------------------------------------------

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

ClientLayout.propTypes = {
  children: PropTypes.node,
};
