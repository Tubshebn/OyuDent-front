import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";
import { useResponsive } from "src/hooks/use-responsive";

import FilterKeyword from "../About/_career/filters/filter-keyword";

// ----------------------------------------------------------------------

const defaultValues = {
  filterKeyword: null,
  filterCategories: null,
  filterLocation: null,
  filterType: [],
  filterLevel: [],
  filterBenefits: [],
  filterSalary: [0, 20000],
};

export default function ClientFilters() {
  const mdUp = useResponsive("up", "md");

  const mobileOpen = useBoolean();

  const [filters, setFilters] = useState(defaultValues);

  const handleChangeKeyword = useCallback(
    (newValue) => {
      setFilters({
        ...filters,
        filterKeyword: newValue,
      });
    },
    [filters]
  );

  const onReset = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    onReset();
  };

  const renderFilters = (
    <>
      <Stack
        spacing={2.5}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        sx={{ mt: { md: 10 } }}
      >
        <FilterKeyword
          filterKeyword={filters.filterKeyword}
          onChangeKeyword={handleChangeKeyword}
        />

        {mdUp && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={onSubmit}
            sx={{ px: 0, minWidth: { md: 48 } }}
          >
            <Iconify icon="carbon:search" width={24} />
          </Button>
        )}
      </Stack>

      {!mdUp && (
        <Button
          size="large"
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="carbon:search" />}
          sx={{ mt: 2.5 }}
        >
          Search
        </Button>
      )}
    </>
  );

  if (mdUp) {
    return <Box sx={{ py: 5 }}>{renderFilters}</Box>;
  }

  return (
    <>
      <Stack alignItems="flex-end" sx={{ py: 3 }}>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
        >
          Filters
        </Button>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: { pt: 5, px: 3, width: 280 },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
