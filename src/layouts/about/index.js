"use client";

import PropTypes from "prop-types";

import Header from "/src/layouts/main/header";

// ----------------------------------------------------------------------

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

AboutLayout.propTypes = {
  children: PropTypes.node,
};
