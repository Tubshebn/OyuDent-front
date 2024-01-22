import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import { useResponsive } from "src/hooks/use-responsive";

import ProductPrice from "../../common/product-price";
import ProductColorPicker from "../../../home/components/subcomponents/product-color-picker";
import ProductOptionPicker from "../../../home/components/subcomponents/product-option-picker";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: "#FA541C", value: "red" },
  { label: "#754FFE", value: "violet" },
  { label: "#00B8D9", value: "cyan" },
  { label: "#36B37E", value: "green" },
];

const MEMORY_OPTIONS = [
  { label: "128GB", value: "128gb" },
  { label: "256GB", value: "256gb" },
  { label: "512GB", value: "512gb" },
  { label: "1TB", value: "1tb" },
];

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsInfo({ product }) {
  const mdUp = useResponsive("up", "md");

  const [color, setColor] = useState("red");

  const [memory, setMemory] = useState("128gb");

  const handleChangeColor = useCallback((event) => {
    setColor(event.target.value);
  }, []);

  const handleChangeMemory = useCallback((event) => {
    setMemory(event.target.value);
  }, []);

  return (
    <>
      <Stack spacing={1} sx={{ mb: 2, mt: 20 }}>
        <Typography variant="h4"> {product?.name} </Typography>
      </Stack>
      <Stack spacing={2}>
        <ProductPrice price={product?.price} sx={{ typography: "h5" }} />

        <Stack spacing={2}>
          <Stack
            spacing={0.5}
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ sm: "center" }}
            sx={{ typography: "body2" }}
          >
            <Box
              component="span"
              sx={{ width: 160, color: "text.secondary", mt: 1 }}
            >
              {"Ангилал:"}
            </Box>
            <Box component="span">{product?.category.name}</Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Stack
          spacing={0.5}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center" }}
          sx={{ typography: "body2" }}
        >
          <Box
            component="span"
            sx={{ width: 160, color: "text.secondary", mt: 1 }}
          >
            {"Үйлдвэрлэгч:"}
          </Box>
          <Box component="span">{product?.manufacturer.name}</Box>
        </Stack>
      </Stack>
    </>
  );
}

EcommerceProductDetailsInfo.propTypes = {
  caption: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceSale: PropTypes.number,
  ratingNumber: PropTypes.number,
  totalReviews: PropTypes.number,
};
