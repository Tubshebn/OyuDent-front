import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { _socials, _careerPosts } from "src/_mock";
import Iconify from "src/components/iconify";
import Footer from "src/layouts/main/footer";

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 0 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="h3" sx={{ mb: 8, textAlign: "center" }}>
        Бидэнтэй холбогдох
      </Typography>

      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: "column", md: "row" }}>
        <Stack spacing={2} sx={{ width: "20%" }}>
          <Typography variant="h6">И-мэйл</Typography>

          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            info@oyudent.com
          </Link>
        </Stack>

        <Stack spacing={2} sx={{ width: "20%" }}>
          <Typography variant="h6">Утас</Typography>

          <Typography variant="body2">9990-8582</Typography>
        </Stack>

        <Stack spacing={2} sx={{ width: "40%" }}>
          <Typography variant="h6">Хаяг</Typography>

          <Typography variant="body2">
            Баянгол дүүрэг, Дилавхутагт Жамсранжавын гудамж, 19 дүгээр хороо,
            Оймон оффис, Ulaanbaatar, Mongolia, 16070
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          alignItems={{ xs: "center", md: "flex-start", width: "20%" }}
        >
          <Typography variant="h6">Social хаяг</Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="inherit">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </Container>
  );
}
