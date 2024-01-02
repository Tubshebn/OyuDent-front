import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Label from "src/components/label";
import { paths } from "src/routes/paths";
import Image from "src/components/image";
import Iconify from "src/components/iconify";
import { fDate } from "src/utils/format-time";
import { RouterLink } from "src/routes/components";
import { fCurrency } from "src/utils/format-number";
import TextMaxLine from "src/components/text-max-line";

// ----------------------------------------------------------------------

export default function ClientListItem({ job }) {
  const {
    slug,
    type,
    level,
    salary,
    location,
    urgent,
    createdAt,
    favorited,
    experience,
    company,
  } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

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
            alt={company.name}
            src={company.logo}
            sx={{ width: 48, height: 48, borderRadius: 1 }}
          />

          {urgent && <Label color="error">Urgent</Label>}
        </Stack>

        <Stack spacing={0.5} sx={{ mt: 3, mb: 2 }}>
          <TextMaxLine variant="h6" line={1}>
            {slug}
          </TextMaxLine>

          <Typography variant="body2" sx={{ color: "info.main" }}>
            {company.name}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: "dashed", my: 2 }} />
    </Card>
  );
}

ClientListItem.propTypes = {
  job: PropTypes.shape({
    slug: PropTypes.string,
    type: PropTypes.string,
    urgent: PropTypes.bool,
    level: PropTypes.string,
    favorited: PropTypes.bool,
    location: PropTypes.string,
    experience: PropTypes.number,
    createdAt: PropTypes.instanceOf(Date),
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    company: PropTypes.shape({
      logo: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
