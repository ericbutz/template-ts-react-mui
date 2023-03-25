// src/pages/Home.tsx

import React, {ReactElement, FC} from "react";
import {Box, Paper, Typography} from "@mui/material";

const Products: FC<any> = (): ReactElement => {
    return (
      <Box sx={{
        flexGrow: 1,
        color: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "black",}}
        >
          <Typography variant="h1">
            Products
          </Typography>
        </Paper>
      </Box>
    );
};

export default Products;