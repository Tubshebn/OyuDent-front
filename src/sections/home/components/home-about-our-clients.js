import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import { _testimonials } from "src/_mock";
import Iconify from "src/components/iconify/iconify";
import { Button } from "@mui/material";
import { paths } from "src/routes/paths";
import { IMAGE_URL } from "src/config-global";
import HomeOurClients from "./subcomponents/home-our-clients";

// ----------------------------------------------------------------------

export default function HomeAboutOurClients({ clients }) {
  const ImageToSvg = ({ imageUrl }) => {
    // Use the Trace by Sticker Mule API
    const traceUrl = `https://trace.moe/api/trace?url=${encodeURIComponent(
      imageUrl
    )}`;

    // Fetch the tracing result
    fetch(traceUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Error) {
          console.error("Error:", data.Error);
          return;
        }

        // The SVG path data is available in data.Polygon
        const svgPathData = data.Polygon;
        return svgPathData;
        // Now you can use the SVG path data as needed (e.g., render it on the page)
        console.log("SVG Path Data:", svgPathData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h3">Бидний харилцагчид</Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ maxWidth: 680, overflow: "hidden" }}
        >
          <HomeOurClients clients={clients} />
          {clients?.map((client) => {
            return (
              <Box key={client.id}>
                <Image
                  alt={client.name}
                  src={`${IMAGE_URL}/${client.picture}`}
                  sx={{
                    height: 50,
                    mx: { xs: 4, md: 4.5 },
                    my: { xs: 2.5, md: 4 },
                  }}
                />
              </Box>
            );
          })}
        </Stack>
        <Button
          variant="contained"
          rel="noopener"
          endIcon={<Iconify icon="carbon:chevron-right" />}
          href={paths.oyudent.client}
        >
          Дэлгэрэнгүй
        </Button>
      </Stack>
    </Container>
  );
}

HomeAboutOurClients.propTypes = {
  brands: PropTypes.array,
};
