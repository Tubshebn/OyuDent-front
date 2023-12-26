import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tab, { tabClasses } from "@mui/material/Tab";
import CardActionArea from "@mui/material/CardActionArea";

import Image from "src/components/image";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import { useResponsive } from "src/hooks/use-responsive";

// ----------------------------------------------------------------------

const StyledButton = styled((props) => (
  <CardActionArea sx={{ borderRadius: 1 }}>
    <Stack direction="row" alignItems="center" spacing={2} {...props} />
  </CardActionArea>
))(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------

export default function SupportNav({
  topic,
  data,
  onChangeTopic,
  open,
  onClose,
}) {
  const mdUp = useResponsive("up", "md");

  const renderContent = (
    <Scrollbar
      sx={{
        py: { xs: 3, md: 0 },
      }}
    >
      <Tabs
        value={topic}
        onChange={onChangeTopic}
        orientation="vertical"
        sx={{
          pl: { xs: 2.5, md: 0 },
        }}
      >
        {data.map((item) => (
          <Tab
            key={item.title}
            value={item.title}
            label={item.title}
            icon={
              <Image
                disabledEffect
                alt={item.icon}
                src={item.icon}
                sx={{ width: 28, height: 28, mr: `20px !important` }}
              />
            }
            sx={{
              height: 56,
              typography: "body2",
              justifyContent: "flex-start",
              [`& .${tabClasses.selected}`]: {
                typography: "subtitle2",
              },
            }}
          />
        ))}
      </Tabs>
    </Scrollbar>
  );

  return mdUp ? (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: 280,
          position: "unset",
          bgcolor: "background.default",
        },
      }}
    >
      {renderContent}
    </Drawer>
  ) : (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 280 },
      }}
    >
      {renderContent}
    </Drawer>
  );
}

SupportNav.propTypes = {
  data: PropTypes.array,
  onChangeTopic: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  topic: PropTypes.string,
};
