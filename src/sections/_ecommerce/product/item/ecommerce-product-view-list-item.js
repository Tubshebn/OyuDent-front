import PropTypes from "prop-types";

import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import Image from "src/components/image";
import Label from "src/components/label";
import { paths } from "src/routes/paths";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";

import ProductPrice from "../../common/product-price";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function EcommerceProductViewListItem({ product, ...other }) {
  return (
    <Stack
      direction="row"
      sx={{
        position: "relative",
        "&:hover": {
          opacity: 0.7,
          cursor: "pointer",
        },
      }}
      {...other}
    >
      {product.label === "new" && (
        <Label
          color="info"
          sx={{ position: "absolute", m: 1, top: 0, left: 0, zIndex: 9 }}
        >
          NEW
        </Label>
      )}

      {product.label === "sale" && (
        <Label
          color="error"
          sx={{ position: "absolute", m: 1, top: 0, left: 0, zIndex: 9 }}
        >
          SALE
        </Label>
      )}

      <Fab
        component={RouterLink}
        href={paths.eCommerce.product}
        className="add-to-cart"
        color="primary"
        size="small"
        sx={{
          right: 8,
          zIndex: 9,
          top: 8,
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
        src={`${IMAGE_URL}/${product.picture}`}
        sx={{
          mr: 2,
          width: 160,
          flexShrink: 0,
          borderRadius: 1.5,
          bgcolor: "background.neutral",
        }}
      />

      <Stack spacing={1}>
        <Stack spacing={0.5}>
          <TextMaxLine
            variant="caption"
            line={1}
            sx={{ color: "text.disabled" }}
          >
            {product.category.name}
          </TextMaxLine>

          <Link
            component={RouterLink}
            href={`${paths.oyudent.product}/${product?.id}`}
            color="inherit"
          >
            <TextMaxLine variant="h6" line={1}>
              {product.name}
            </TextMaxLine>
          </Link>
        </Stack>

        <TextMaxLine variant="body2" line={1} sx={{ color: "text.secondary" }}>
          {product.size}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}

EcommerceProductViewListItem.propTypes = {
  product: PropTypes.shape({
    caption: PropTypes.string,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    sold: PropTypes.number,
    ratingNumber: PropTypes.number,
  }),
};
