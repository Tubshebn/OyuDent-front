import PropTypes from "prop-types";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { paths } from "src/routes/paths";
import Image from "src/components/image";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";

import ProductPrice from "../../../_ecommerce/common/product-price";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function HomeProductItemHot({
  product,
  hotProduct = false,
  sx,
}) {
  return (
    <Link
      component={RouterLink}
      href={`${paths.oyudent.product}/${product?.id}`}
      color="inherit"
      underline="none"
    >
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: "background.default",
          transition: (theme) =>
            theme.transitions.create("background-color", {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),
          "&:hover": {
            bgcolor: "background.neutral",
          },
          ...sx,
        }}
      >
        <Image
          src={`${IMAGE_URL}/${product?.picture}`}
          sx={{
            mb: 2,
            width: "100%",
            height: 200,
            borderRadius: 1.5,
            bgcolor: "background.neutral",
          }}
        />

        <Stack spacing={0.5}>
          <TextMaxLine
            variant="body2"
            line={1}
            sx={{ fontWeight: "fontWeightMedium" }}
          >
            {product.name}
          </TextMaxLine>
        </Stack>
      </Paper>
    </Link>
  );
}

HomeProductItemHot.propTypes = {
  hotProduct: PropTypes.bool,
  product: PropTypes.shape({
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sold: PropTypes.number,
    stock: PropTypes.number,
  }),
  sx: PropTypes.object,
};
