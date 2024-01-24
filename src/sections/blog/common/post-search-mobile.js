import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import Iconify from "src/components/iconify";
import { useResponsive } from "src/hooks/use-responsive";

// ----------------------------------------------------------------------

export default function PostSearchMobile() {
  return (
    <>
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="center">
              <Iconify
                icon="carbon:search"
                width={24}
                sx={{ color: "text.disabled" }}
              />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
