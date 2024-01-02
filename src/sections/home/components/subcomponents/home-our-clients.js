import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

import SvgColor from "src/components/svg-color";
import Carousel, { useCarousel } from "src/components/carousel";

// ----------------------------------------------------------------------

export default function HomeOurClients({ brands }) {
  const theme = useTheme();

  const carousel = useCarousel({
    speed: 4000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Carousel {...carousel.carouselSettings}>
        {brands.map((brand) => (
          <SvgColor
            key={brand.id}
            src={brand.image}
            sx={{
              width: 106,
              height: 32,
              color: "text.disabled",
            }}
          />
        ))}
      </Carousel>
    </Container>
  );
}

HomeOurClients.propTypes = {
  brands: PropTypes.array,
};
