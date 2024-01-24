import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";
import { useResponsive } from "src/hooks/use-responsive";

import FilterTag from "./filter-tag";
import FilterBrand from "./filter-brand";
import FilterPrice from "./filter-price";
import FilterStock from "./filter-stock";
import FilterRating from "./filter-rating";
import FilterCategory from "./filter-category";
import FilterShipping from "./filter-shipping";
import FilterCategories from "src/sections/About/_career/filters/filter-categories";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function EcommerceFilters({
  open,
  onClose,
  filter,
  setFilter,
  sub,
  manu,
}) {
  const mdUp = useResponsive("up", "md");

  const handleChangeCategories = useCallback(
    (id) => {
      setFilter({
        ...filter,
        sub: id,
      });
    },
    [filter]
  );

  const handleChangeManu = useCallback(
    (id) => {
      setFilter({
        ...filter,
        manufacturer: id,
      });
    },
    [filter]
  );

  //   const handleChangeBrand = useCallback(
  //     (name) => {
  //       setFilters({
  //         ...filters,
  //         filterBrand: getSelected(filters.filterBrand, name),
  //       });
  //     },
  //     [filters]
  //   );

  //   const handleChangeStock = useCallback(
  //     (event) => {
  //       setFilters({
  //         ...filters,
  //         filterStock: event.target.checked,
  //       });
  //     },
  //     [filters]
  //   );

  const handleClearAll = useCallback(() => {
    setFilter({ main: null, sub: null, manufacturer: null });
  }, []);

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
        flexGrow: 1,
      }}
    >
      <Block title="Ангилал">
        <FilterCategory
          filterCategories={filter?.sub}
          onChangeCategories={handleChangeCategories}
          options={sub}
          sx={{ mt: 2 }}
        />
      </Block>

      <Stack sx={{ width: "100%" }}>
        <Block title="Үйлдвэрлэгч">
          <FilterCategories
            filterManu={filter?.manufacturer}
            handleChangeManu={handleChangeManu}
            options={manu}
          />
        </Block>
      </Stack>

      {/* <Block title="Price">
        <FilterPrice
          filterPrice={filters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Ratings">
        <FilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          sx={{ mt: 2 }}
        />
      </Block> */}

      {/* <FilterStock
        filterStock={filters.filterStock}
        onChangeStock={handleChangeStock}
      /> */}

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Шүүлтүүр арилгах
      </Button>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceFilters.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Block({ title, children, ...other }) {
  const contentOpen = useBoolean(true);

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: "pointer" }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={contentOpen.value ? "carbon:subtract" : "carbon:add"}
          sx={{ color: "text.secondary" }}
        />
      </Stack>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5, width: 1 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
