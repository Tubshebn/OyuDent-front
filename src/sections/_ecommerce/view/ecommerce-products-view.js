"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import { useEffect, useState, useCallback } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { _categories, _products } from "src/_mock";
import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";

import EcommerceFilters from "../product/filters/ecommerce-filters";
import EcommerceProductList from "../product/list/ecommerce-product-list";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import { Tab, Tabs } from "@mui/material";

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: "list", icon: <Iconify icon="carbon:list-boxes" /> },
  { value: "grid", icon: <Iconify icon="carbon:grid" /> },
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView() {
  const mobileOpen = useBoolean();
  const [tab, setTab] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);
  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  useEffect(() => {
    getProductList();
  }, [currentPage]);

  let body = { size: itemsPerPage, page: currentPage };

  const getProductList = () => {
    try {
      axios
        .get(`${BASE_URL}v1/content/product`, { params: body })
        .then((res) => {
          setProducts(res?.data);
        });
    } catch (error) {
      return;
    }
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
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
            sx={{ mb: 5, width: "100%" }}
          >
            <Box
              sx={{ bgcolor: "background.neutral", px: 3, borderRadius: "3px" }}
            >
              <Tabs
                value={tab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={handleChangeTab}
              >
                <Tab key={0} value={""} label={"Бүгд"} />
                {_categories.map((category) => (
                  <>
                    <Tab
                      key={category.id}
                      value={category.label}
                      label={category.label}
                    />
                  </>
                ))}
              </Tabs>
            </Box>
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

          <EcommerceProductList
            viewMode={viewMode}
            products={products}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </Box>
      </Stack>
    </Container>
  );
}
