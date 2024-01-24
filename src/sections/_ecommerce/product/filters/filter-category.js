import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";

import Iconify from "src/components/iconify";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import { BASE_URL } from "src/config-global";
import axios from "axios";

// ----------------------------------------------------------------------

export default function FilterCategory({
  options,
  filterCategories,
  onChangeCategories,
  ...other
}) {
  return (
    <Stack spacing={1} alignItems="flex-start" {...other}>
      {options.map((option) => (
        <>
          <Stack
            key={option.id}
            direction="row"
            alignItems="center"
            onClick={() => onChangeCategories(option.id)}
            sx={{
              typography: "body2",
              cursor: "pointer",
              ...(filterCategories === option.id && {
                fontWeight: "fontWeightBold",
              }),
            }}
          >
            <Iconify icon="carbon:chevron-right" width={12} sx={{ mr: 1 }} />

            {option.name}
          </Stack>
        </>
      ))}
    </Stack>
  );
}

FilterCategory.propTypes = {
  filterCategories: PropTypes.string,
  onChangeCategories: PropTypes.func,
  options: PropTypes.array,
};
