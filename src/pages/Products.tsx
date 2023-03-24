// src/pages/Home.tsx

import React, {ReactElement, FC} from "react";
import {Box, Paper, Typography} from "@mui/material";

const Products: FC<any> = (): ReactElement => {
    return (
        <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Products
          </Typography>
        </Paper>
      </Box>
    );
};

export default Products;