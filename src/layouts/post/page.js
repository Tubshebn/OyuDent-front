"use client";
import Header from "../main/header";

// ----------------------------------------------------------------------

export default function PostLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
