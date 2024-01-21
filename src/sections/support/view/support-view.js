"use client";

import { useState, useEffect, useCallback } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { _careerPosts, _faqsSupport } from "src/_mock";
import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";

import SupportNav from "../support-nav";
import SupportContent from "../support-content";

// ----------------------------------------------------------------------

const TOPICS = [
  {
    title: "ТОНОГ ТӨХӨӨРӨМЖ",
    icon: "/assets/icons/faq/ic_faq_account.svg",
    content: <SupportContent posts={_careerPosts.slice(0, 8)} />,
  },
  {
    title: "ЭМЧИЛГЭЭНИЙ МАТЕРИАЛ",
    icon: "/assets/icons/faq/ic_faq_payment.svg",
    content: <SupportContent posts={_careerPosts.slice(0, 8)} />,
  },
  {
    title: "БАГАЖ ХЭРЭГСЭЛ",
    icon: "/assets/icons/faq/ic_faq_delivery.svg",
    content: <SupportContent posts={_careerPosts.slice(0, 8)} />,
  },
];

// ----------------------------------------------------------------------

export default function SupportView() {
  const [topic, setTopic] = useState("ТОНОГ ТӨХӨӨРӨМЖ");

  const mobileOpen = useBoolean();

  const handleChangeTopic = useCallback((event, newValue) => {
    setTopic(newValue);
  }, []);

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  return (
    <>
      <Stack
        alignItems="flex-end"
        sx={{
          py: 1.5,
          px: 2.5,
          display: { md: "none" },
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <IconButton onClick={mobileOpen.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>
      </Stack>

      <Container sx={{ marginBottom: 15, textAlign: "center" }}>
        <Typography variant="h3" sx={{ py: { xs: 3, md: 10 } }}>
          Explore the solutions
        </Typography>

        <Stack direction="row" sx={{ pb: { xs: 10, md: 0 } }}>
          <SupportNav
            data={TOPICS}
            topic={topic}
            open={mobileOpen.value}
            onChangeTopic={handleChangeTopic}
            onClose={mobileOpen.onFalse}
          />

          {TOPICS.map(
            (item) =>
              item.title === topic && <div key={item.title}>{item.content}</div>
          )}
        </Stack>
      </Container>
    </>
  );
}
