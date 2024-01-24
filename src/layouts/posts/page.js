"use client";
import Footer from "../main/footer";
import Header from "../main/header";

// ----------------------------------------------------------------------

export default function PostsLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
