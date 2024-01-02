"use client";

import { useEffect } from "react";

import Container from "@mui/material/Container";

import { _jobs } from "src/_mock";
import { useBoolean } from "src/hooks/use-boolean";

import ClientFilters from "./client-filters";
import ClientList from "./client-list";
import ClientNewsletter from "./client-newsletter";
import Footer from "src/layouts/main/footer";

// ----------------------------------------------------------------------

export default function Clients() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  return (
    <>
      <Container>
        <ClientFilters />

        <ClientList jobs={_jobs} loading={loading.value} />
      </Container>

      <Footer />
    </>
  );
}
