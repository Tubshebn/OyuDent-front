import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination, { paginationClasses } from "@mui/material/Pagination";

import EcommerceProductViewListItem from "../item/ecommerce-product-view-list-item";
import EcommerceProductViewGridItem from "../item/ecommerce-product-view-grid-item";
import EcommerceProductViewListItemSkeleton from "../item/ecommerce-product-view-list-item-skeleton";
import EcommerceProductViewGridItemSkeleton from "../item/ecommerce-product-view-grid-item-skeleton";

// ----------------------------------------------------------------------

export default function EcommerceProductList({ viewMode, products }) {
  return (
    <>
      {viewMode === "grid" ? (
        <Box
          rowGap={4}
          columnGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          {products?.map((product, index) => {
            return (
              <EcommerceProductViewGridItem
                key={product.id}
                product={product}
              />
            );
          })}
        </Box>
      ) : (
        <Stack spacing={4}>
          {products?.map((product, index) => {
            return (
              <EcommerceProductViewListItem
                key={product.id}
                product={product}
              />
            );
          })}
        </Stack>
      )}

      <Pagination
        count={10}
        color="primary"
        sx={{
          mt: 10,
          mb: 5,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}

EcommerceProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  viewMode: PropTypes.string,
};
