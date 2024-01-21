import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

import SvgColor from "src/components/svg-color";
import Carousel, { useCarousel } from "src/components/carousel";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function HomeOurClients({ clients }) {
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
        {clients.map((client) => (
          <SvgColor
            key={client.id}
            src={`${IMAGE_URL}/${client?.picture}`}
            sx={{
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
