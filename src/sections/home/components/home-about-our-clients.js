import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import { _testimonials } from "src/_mock";
import Iconify from "src/components/iconify/iconify";
import { Button } from "@mui/material";
import HomeOurClients from "./subcomponents/home-our-clients";
import { paths } from "src/routes/paths";

// ----------------------------------------------------------------------

export default function HomeAboutOurClients({ brands }) {
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
          <HomeOurClients brands={brands} />
          {brands?.slice(0, 8).map((brand) => (
            <Box key={brand.id}>
              <Image
                alt={brand.name}
                src={brand.image}
                sx={{
                  height: 32,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
          ))}
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
