"use client";

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import { _products } from "src/_mock";
import { useBoolean } from "src/hooks/use-boolean";
import { SplashScreen } from "src/components/loading-screen";
import { useParams } from "next/navigation";
import EcommerceProductDetailsInfo from "../product/details/ecommerce-product-details-info";
import EcommerceProductDetailsCarousel from "../product/details/ecommerce-product-details-carousel";
import EcommerceProductDetailsDescription from "../product/details/ecommerce-product-details-description";
import { BASE_URL } from "src/config-global";
import axios from "axios";

// ----------------------------------------------------------------------

const _mockProduct = _products[0];

export default function EcommerceProductView() {
  const params = useParams();
  const [product, setproduct] = useState();
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    try {
      axios.get(`${BASE_URL}v1/content/product/${params.id}`).then((res) => {
        setproduct(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <Container sx={{ overflow: "hidden" }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsCarousel image={product?.picture} />
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <EcommerceProductDetailsInfo product={product} />
          </Grid>
        </Grid>
      </Container>

      {/* <ReviewEcommerce /> */}
    </>
  );
}
