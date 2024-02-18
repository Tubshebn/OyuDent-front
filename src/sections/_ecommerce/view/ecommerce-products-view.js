"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import { useEffect, useState, useCallback } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { tabsClasses } from "@mui/material/Tabs";
import { m } from "framer-motion";
import { varBounce, MotionContainer } from "src/components/animate";

import { _categories, _products } from "src/_mock";
import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";

import EcommerceFilters from "../product/filters/ecommerce-filters";
import EcommerceProductList from "../product/list/ecommerce-product-list";
import axios from "axios";
import { BASE_URL } from "src/config-global";
import { Tab, Tabs, Grid } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HealingIcon from "@mui/icons-material/Healing";
import BuildIcon from "@mui/icons-material/Build";
import Image from "src/components/image/image";

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: "list", icon: <Iconify icon="carbon:list-boxes" /> },
  { value: "grid", icon: <Iconify icon="carbon:grid" /> },
];
const ICONS = [
  <ConstructionIcon />,
  <AddModeratorIcon />,
  <VaccinesIcon />,
  <MoreHorizIcon />,
  <BloodtypeIcon />,
  <HealingIcon />,
  <BuildIcon />,
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView() {
  const mobileOpen = useBoolean();
  const [tab, setTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [category, setcategory] = useState([]);
  const [sub, setSub] = useState([]);
  const [manu, setManu] = useState([]);
  const [filter, setFilter] = useState({
    main: null,
    sub: [null],
    manufacturer: null,
  });

  useEffect(() => {
    getProductList();
  }, [currentPage, tab, filter?.sub, filter?.manufacturer]);

  useEffect(() => {
    getCategoryList();
    getManufacturer();
  }, []);

  useEffect(() => {
    getSubCategoryList();
  }, [tab]);

  let body = {
    size: itemsPerPage,
    page: currentPage,
    main: tab,
    sub: filter?.sub,
    manufacturer: filter?.manufacturer,
  };

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

  const getCategoryList = () => {
    try {
      axios
        .get(`${BASE_URL}v1/category`, { params: { main: 1 } })
        .then((res) => {
          const filteredCategories = res?.data?.filter(
            (data) => data?.parent === null
          );
          filteredCategories.pop();
          setcategory(filteredCategories);
        });
    } catch (error) {
      return;
    }
  };

  const getSubCategoryList = () => {
    try {
      axios.get(`${BASE_URL}v1/category/sub/${tab}`).then((res) => {
        setSub(res?.data);
      });
    } catch (error) {
      return;
    }
  };
  const getManufacturer = () => {
    try {
      axios.get(`${BASE_URL}v1/manufacturer`).then((res) => {
        setManu(res?.data);
      });
    } catch (error) {
      return;
    }
  };

  const handleChangeViewMode = useCallback((event, newAlignment) => {
    if (newAlignment !== null) {
      setViewMode(newAlignment);
    }
  }, []);

  const handleChangeTab = useCallback((event, newValue) => {
    setTab(newValue);
    setFilter({
      ...filter,
      sub: null,
    });
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <Stack
        direction="column"
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
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            flexShrink: 1,
            maxWidth: "100%",
          }}
        >
          <Tabs
            value={tab}
            onChange={handleChangeTab}
            variant="scrollable"
            scrollButtons
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            {category.map((category, i) => {
              const icon = ICONS.find((ic, index) => i === index);
              return (
                <Tab
                  icon={
                    <Grid
                      container
                      direction="column"
                      alignItems="center"
                      spacing={1}
                      sx={{ marginBottom: 1.5 }}
                    >
                      <Grid item>{icon}</Grid>
                      <Grid item>
                        <Typography variant="caption">
                          {category.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                  key={category.id}
                  value={category.id}
                />
              );
            })}
          </Tabs>
        </Box>
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
            sub={sub}
            setFilter={setFilter}
            filter={filter}
            manu={manu}
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

          {products?.result?.length > 0 ? (
            <EcommerceProductList
              viewMode={viewMode}
              products={products}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          ) : (
            <Stack sx={{ textAlign: "center" }}>
              <MotionContainer>
                <m.div variants={varBounce().in}>
                  <Image
                    alt="404"
                    src="/assets/illustrations/illustration_404.svg"
                    sx={{
                      mx: "auto",
                      maxWidth: 150,
                    }}
                  />
                </m.div>
                <m.div variants={varBounce().in}>
                  <Typography variant="h4" paragraph>
                    Өгөгдөл олдсонгүй!
                  </Typography>
                </m.div>
              </MotionContainer>
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
}
