import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _testimonials } from "src/_mock";
import Iconify from "src/components/iconify/iconify";
import { Button } from "@mui/material";
import { paths } from "src/routes/paths";
import CareerLandingTopCompanies from "src/sections/About/_career/landing/career-landing-top-companies";

// ----------------------------------------------------------------------

export default function HomeAboutOurClients({ clients }) {
  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h3">Бидний харилцагчид</Typography>

        <CareerLandingTopCompanies clients={clients} />

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
