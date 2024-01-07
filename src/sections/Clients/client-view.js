"use client";

import { useEffect, useState } from "react";

import Container from "@mui/material/Container";

import { _jobs } from "src/_mock";
import { useBoolean } from "src/hooks/use-boolean";

import Footer from "src/layouts/main/footer";
import ClientFilters from "./client-filters";
import ClientList from "./client-list";
import axios from "axios";
import { BASE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function Clients() {
  const loading = useBoolean(true);
  const [client, setclient] = useState([]);

  useEffect(() => {
    getClientList();
  }, []);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  const getClientList = () => {
    try {
      axios.get(`${BASE_URL}v1/content/partner`).then((res) => {
        setclient(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <Container>
        <ClientFilters />
        <ClientList client={client} loading={loading.value} />
      </Container>

      <Footer />
    </>
  );
}
