import PropTypes from "prop-types";

import Card from "@mui/material/Card";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";

import Image from "src/components/image";
import TextMaxLine from "src/components/text-max-line";
import { IMAGE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function ClientListItem({ i }) {
  const { name, picture, country } = i;

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Stack sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Image
            alt={name}
            src={`${IMAGE_URL}/${picture}`}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <TextMaxLine variant="h6" line={1}>
            {name}
          </TextMaxLine>

          <Typography variant="body2" sx={{ color: "info.main" }}>
            {country?.name}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: "dashed", my: 2 }} />
    </Card>
  );
}
