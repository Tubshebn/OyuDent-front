import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Pagination, { paginationClasses } from "@mui/material/Pagination";
import ClientListItem from "./client-item";

// ----------------------------------------------------------------------

export default function ClientList({ client }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: "grid",
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {client?.map((i, index) => {
          return <ClientListItem key={i.id} i={i} />;
        })}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}

ClientList.propTypes = {
  jobs: PropTypes.array,
  loading: PropTypes.bool,
};
