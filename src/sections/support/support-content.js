import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useResponsive } from "src/hooks/use-responsive";

import ElearningPostItem from "../blog/elearning/elearning-post-item";
import HomeEventItem from "src/sections/home/components/subcomponents/home-tour-item";
import Image from "src/components/image/image";
import { Typography } from "@mui/material";
import TeamItem from "../About/team/team-item";

// ----------------------------------------------------------------------

export default function SupportContent({ data }) {
  return (
    <Stack
      sx={{
        py: { xs: 10, md: 0 },
        px: { xs: 10, md: 5 },
        width: "70vw",
      }}
    >
      <TeamItem data={data} />
    </Stack>
  );
}
