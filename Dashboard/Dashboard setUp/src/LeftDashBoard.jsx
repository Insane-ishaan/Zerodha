import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));
function LeftDashBoard() {
  return (
    <Grid
      size={6}
      sx={{
        marginRight: "auto",
      }}
    >
      <Item
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "1.5rem",
          padding: "1rem",
          boxShadow: "none",
          borderRadius: 0,
          borderBottom: "2px solid #a4a7a5ff",
          color: "#4f4e4eff",
        }}
      >
        Hi , User
      </Item>
    </Grid>
  );
}

export default LeftDashBoard;
