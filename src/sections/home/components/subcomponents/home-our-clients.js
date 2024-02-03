import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

import SvgColor from "src/components/svg-color";
import Carousel, { useCarousel } from "src/components/carousel";

import { IMAGE_URL } from "src/config-global";
import ClientListItem from "src/sections/clients/client-item";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

export default function HomeOurClients({ clients }) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {clients.map((client) => {
          return <p>"dsdsdsdsdsds"ds</p>;
        })}
      </Carousel>
    </Container>
  );
}

HomeOurClients.propTypes = {
  brands: PropTypes.array,
};
