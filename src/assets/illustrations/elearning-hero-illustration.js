import { memo } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import Image from "src/components/image";

import Icon from "./pattern/icon";
import Label from "./pattern/label";
import Shape from "./pattern/shape";
import Pattern01 from "./pattern/pattern-01";
import Pattern02 from "./pattern/pattern-02";

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const BLUE = "#355EC9";

  const PURPLE = "#9B3AB1";

  const styleIconContent = {
    fontSize: 22,
    color: "common.black",
    fontWeight: "fontWeightBold",
  };

  return (
    <Box
      sx={{
        width: 670,
        height: 670,
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: "absolute", right: 18, bottom: 28, zIndex: 8 }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="teacher"
          src="/assets/2.png"
          sx={{ width: 546, height: 650 }}
        />
      </Box>

      {/* Icon */}

      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02
        sx={{ top: 0, left: 0, opacity: 0.24, transform: "scale(1.2)" }}
      />
      <Shape sx={{ position: "absolute", right: 32, bottom: 32 }} />
    </Box>
  );
}

ElearningHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(ElearningHeroIllustration);
