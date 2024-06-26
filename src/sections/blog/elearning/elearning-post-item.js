import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import Image from "src/components/image";
import { fDate } from "src/utils/format-time";
import { RouterLink } from "src/routes/components";
import TextMaxLine from "src/components/text-max-line";
import { Link } from "@mui/material";
import { BASE_URL } from "src/config-global";

// ----------------------------------------------------------------------

export default function ElearningPostItem({ post }) {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: "hidden" }}>
      <Image
        src={`${BASE_URL}/${post?.picture}`}
        alt={post?.title}
        ratio="6/4"
      />
      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: "center" }}>
          <Typography variant="subtitle2">
            {fDate(post?.createdAt, "MMM")}
          </Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(post?.createdAt, "dd")}</Typography>
        </Stack>

        <Stack spacing={1}>
          <Link
            component={RouterLink}
            href={`${paths.oyudent.post}/${post?.id}`}
            color="inherit"
          >
            <TextMaxLine variant="h6" persistent>
              {post.content}
            </TextMaxLine>
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
}

ElearningPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
