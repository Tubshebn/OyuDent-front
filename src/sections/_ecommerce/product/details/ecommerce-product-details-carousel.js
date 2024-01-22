import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import Image from "src/components/image";

import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsCarousel({ image }) {
  const theme = useTheme();

  const renderLargeImg = (
    <Box
      sx={{
        mb: 3,
        mt: 20,
        width: 500,
        height: 450,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        bgcolor: "background.neutral",
      }}
    >
      <Image
        alt="product"
        src={`${IMAGE_URL}/${image}`}
        ratio="1/1"
        sx={{ cursor: "zoom-in" }}
      />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          "& .slick-slide": {
            float: theme.direction === "rtl" ? "right" : "left",
          },
        }}
      >
        {renderLargeImg}
      </Box>
    </>
  );
}

EcommerceProductDetailsCarousel.propTypes = {
  images: PropTypes.array,
};
