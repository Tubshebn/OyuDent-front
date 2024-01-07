"use client";

import { useState, useEffect, useCallback } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { _products } from "src/_mock";
import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";

import EcommerceFilters from "../product/filters/ecommerce-filters";
import EcommerceProductList from "../product/list/ecommerce-product-list";
import EcommerceProductListBestSellers from "../product/list/ecommerce-product-list-best-sellers";
import axios from "axios";
import { BASE_URL } from "src/config-global";

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: "list", icon: <Iconify icon="carbon:list-boxes" /> },
  { value: "grid", icon: <Iconify icon="carbon:grid" /> },
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView() {
  const mobileOpen = useBoolean();

  const [sort, setSort] = useState("latest");
  const [products, setProducts] = useState([]);

  const [viewMode, setViewMode] = useState("grid");

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    try {
      axios.get(`${BASE_URL}v1/content/product`).then((res) => {
        setProducts(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          py: 5,
          pt: { md: 15 },
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", py: 7 }}>
          Бүтээгдэхүүний Каталог
        </Typography>
      </Stack>

      <Stack
        direction={{
          xs: "column-reverse",
          md: "row",
        }}
        sx={{ mb: { xs: 8, md: 10 } }}
      >
        <Stack spacing={5} divider={<Divider sx={{ borderStyle: "dashed" }} />}>
          <EcommerceFilters
            open={mobileOpen.value}
            onClose={mobileOpen.onFalse}
          />
        </Stack>

        <Box
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 5 }}
          >
            <ToggleButtonGroup
              exclusive
              size="small"
              value={viewMode}
              onChange={handleChangeViewMode}
              sx={{ borderColor: "transparent" }}
            >
              {VIEW_OPTIONS.map((option) => (
                <ToggleButton key={option.value} value={option.value}>
                  {option.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          <EcommerceProductList viewMode={viewMode} products={products} />
        </Box>
      </Stack>
    </Container>
  );
}
