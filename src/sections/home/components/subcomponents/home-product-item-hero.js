import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { alpha, useTheme } from "@mui/material/styles";

import Image from "src/components/image";
import { paths } from "src/routes/paths";
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function HomeProductItemHero({ product }) {
  const theme = useTheme();

  const { image, title, description, button, buttonUrl } = product;

  return (
    <Grid
      container
      rowSpacing={{
        xs: 5,
        md: 0,
      }}
      sx={{
        py: 10,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid xs={12} md={6}>
        <Box
          sx={{
            maxWidth: { md: 440 },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <TextMaxLine variant="h3" sx={{ mb: 2 }}>
            {title}
          </TextMaxLine>

          <TextMaxLine variant="body2" sx={{ mb: 5, color: "text.secondary" }}>
            {description}
          </TextMaxLine>

          <Button
            component={RouterLink}
            href={`${buttonUrl}`}
            size="large"
            color="inherit"
            variant="contained"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            {button}
          </Button>
        </Box>
      </Grid>

      <Grid
        xs={12}
        md={6}
        sx={{ objectFit: "contain", objectPosition: "cover" }}
      >
        {product?.image2 && (
          <Image
            src={`${IMAGE_URL}/${product?.image2}`}
            sx={{
              filter: `drop-shadow(20px 20px 24px ${alpha(
                theme.palette.common.black,
                0.16
              )})`,

              maxWidth: 400,
              height: 200,
              ml: "auto",

              mr: { xs: "auto", md: "unset" },
            }}
          />
        )}
      </Grid>
    </Grid>
  );
}

HomeProductItemHero.propTypes = {
  product: PropTypes.shape({
    caption: PropTypes.string,
    coverUrl: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
  }),
};
