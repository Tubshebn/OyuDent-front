import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ContactMap from "src/components/map/map";

import { _offices } from "src/_mock";
import Image from "src/components/image";
import Iconify from "src/components/iconify";
import { varHover, varTranHover } from "src/components/animate";

// ----------------------------------------------------------------------

export default function TravelContactInfo() {
  return (
    <>
      <Box
        sx={{
          py: { xs: 10, md: 4 },
          bgcolor: "background.neutral",
        }}
      >
        <Container>
          <Stack sx={{ textAlign: "center" }}>
            <Typography marginBottom={6} variant="h3">
              Бидэнтэй холбогдох
            </Typography>
          </Stack>
          <Box
            sx={{
              gap: 8,
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
            }}
          >
            {_offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
            <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function OfficeCard({ office }) {
  const { country, address, photo, email, phoneNumber } = office;

  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        "&:hover": {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={country} ratio="16/9" />
        </m.div>
      </Box>

      <Stack
        spacing={1}
        sx={{ p: 2 }}
        component={m.div}
        variants={{ hover: { opacity: 0.8 } }}
      >
        <Typography variant="h6">{country}</Typography>

        <Stack spacing={0.5}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: "subtitle2" }}
          >
            <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Хаяг
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {address}
          </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: "subtitle2" }}
          >
            <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Утас
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {phoneNumber}
          </Typography>
        </Stack>

        <Stack spacing={0.5}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ typography: "subtitle2" }}
          >
            <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> И-мэйл
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {email}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

OfficeCard.propTypes = {
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
};
