import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";

import { _socials } from "src/_mock";
import Image from "src/components/image";
import { bgGradient } from "src/theme/css";
import Iconify from "src/components/iconify";
import { varHover, varTranHover } from "src/components/animate";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  "&:hover": { opacity: 1 },
}));

// ----------------------------------------------------------------------

export default function MarketingTeamItem({ member, ...other }) {
  const { name, role, photo } = member;

  return (
    <Stack {...other} sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component={m.div}
        whileHover="hover"
        variants={varHover(0.95)}
        transition={varTranHover()}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          width: 100,
          height: 100,
        }}
      >
        <Image src={photo} ratio="1/1" />
      </Box>

      <Stack spacing={0.5} sx={{ mt: 2.5, textAlign: "center" }}>
        <Typography variant="subtitle1">{name}</Typography>

        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}

MarketingTeamItem.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
  }),
};
