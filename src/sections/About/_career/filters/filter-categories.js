import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";

import { _tags } from "src/_mock";
import Iconify from "src/components/iconify";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

export default function FilterCategories({ handleChangeManu, options }) {
  const [option, setOption] = useState();

  useEffect(() => {
    const initialProduction = JSON.parse(localStorage.getItem("production"));
    if (initialProduction) {
      const selectedOption = options?.find(
        (opt) => opt.id === initialProduction.id
      );
      if (selectedOption) {
        setOption(selectedOption);
        localStorage.removeItem("production");
      }
    }
  }, [options]);

  useEffect(() => {
    handleChangeManu(option?.id);
  }, [option]);

  return (
    <Autocomplete
      sx={{ mt: 3 }}
      fullWidth
      options={options}
      getOptionLabel={(option) => option?.name}
      value={option}
      onChange={(event, value) => {
        return setOption(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          fullWidth
          placeholder="Үйлдвэрлэгч"
          InputProps={{
            ...params.InputProps,
            autoComplete: "search",
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  width={24}
                  icon="carbon:inventory-management"
                  sx={{ color: "text.disabled", mr: 1 }}
                />
              </InputAdornment>
            ),
            sx: { pb: 1 },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option.name}
        </li>
      )}
    />
  );
}
