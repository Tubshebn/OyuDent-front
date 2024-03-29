import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Label from "src/components/label";
import { paths } from "src/routes/paths";
import Image from "src/components/image";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";

import ProductPrice from "../../common/product-price";
import ProductRating from "../../common/product-rating";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function EcommerceProductViewGridItem({
  product,
  sx,
  ...other
}) {
  return (
    <Stack
      sx={{
        position: "relative",
        "&:hover": {
          opacity: 0.7,
          cursor: "pointer",
        },
        ...sx,
      }}
      {...other}
    >
      {product.label === "new" && (
        <Label
          color="info"
          sx={{ position: "absolute", m: 1, top: 0, right: 0, zIndex: 9 }}
        >
          NEW
        </Label>
      )}

      {product.label === "sale" && (
        <Label
          color="error"
          sx={{ position: "absolute", m: 1, top: 0, right: 0, zIndex: 9 }}
        >
          SALE
        </Label>
      )}

      <Box sx={{ position: "relative", mb: 2 }}>
        <Fab
          component={RouterLink}
          href={paths.eCommerce.product}
          className="add-to-cart"
          color="primary"
          size="small"
          sx={{
            right: 8,
            zIndex: 9,
            bottom: 8,
            opacity: 0,
            position: "absolute",
            transition: (theme) =>
              theme.transitions.create("opacity", {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.shortest,
              }),
          }}
        >
          <Iconify icon="carbon:shopping-cart-plus" />
        </Fab>

        <Image
          src={`${IMAGE_URL}/${product?.picture}`}
          sx={{
            width: 200,
            height: 200,
            flexShrink: 1,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
          }}
        />
      </Box>

      <Stack spacing={0.5}>
        <TextMaxLine variant="caption" line={1} sx={{ color: "text.disabled" }}>
          {product.category.name}
        </TextMaxLine>

        <Link
          component={RouterLink}
          href={`${paths.oyudent.product}/${product?.id}`}
          color="inherit"
        >
          <TextMaxLine
            variant="body2"
            line={1}
            sx={{ fontWeight: "fontWeightMedium" }}
          >
            {product.name}
          </TextMaxLine>
        </Link>

        <TextMaxLine variant="body2" line={1} sx={{ color: "text.secondary" }}>
          {product.size}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}

EcommerceProductViewGridItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    sold: PropTypes.number,
    label: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    priceSale: PropTypes.number,
    ratingNumber: PropTypes.number,
  }),
  sx: PropTypes.object,
};
