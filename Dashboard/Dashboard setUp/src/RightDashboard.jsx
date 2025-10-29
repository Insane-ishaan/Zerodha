import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));
function RightDashboard() {
  return (
    <Grid
      size={7}
      sx={{
        marginRight: "auto",
      }}
    >
      <Item
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "1.5rem",
          padding: "2rem 1rem",
          boxShadow: "none",
          borderRadius: 0,
          borderBottom: "2px solid #a4a7a5ff",
          color: "#4f4e4eff",
        }}
      >
        Hi , User
      </Item>
      <Item
        sx={{
          marginTop: "1rem",
          padding: "2rem 1rem",
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "1.3rem",
          boxShadow: "none",
          borderRadius: 0,
          borderBottom: "2px solid #a4a7a5ff",
          color: "#4f4e4eff",
        }}
      >
        Equity
        <Item
          sx={{
            margin: "2.5rem 2.5rem",
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            fontSize: "2.5rem",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          3.74K
        </Item>
        <Item
          sx={{
            boxShadow: "none",
            borderLeft: "1px solid #a4a7a5ff",
            borderRadius: 0,
          }}
        ></Item>
        <Item
          sx={{
            marginTop: "1.2rem",
            boxShadow: "none",
            borderRadius: 0,
            textAlign: "end",
            marginRight: "15rem",
          }}
        >
          <p style={{ color: "#acaaaa" }}>Balance used 0</p>
          <p style={{ color: "#acaaaa", marginTop: "-1rem" }}>
            Open Balance 3.74K
          </p>
        </Item>
      </Item>
      <Item
        sx={{
          marginTop: "1rem",
          padding: "2rem 1rem",
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "1.3rem",
          boxShadow: "none",
          borderRadius: 0,
          borderBottom: "2px solid #a4a7a5ff",
          color: "#4f4e4eff",
        }}
      >
        Holdings(13)
        <Item
          sx={{
            margin: "1rem",
            boxShadow: "none",
            borderRadius: 0,
            display: "flex",
            fontSize: "2.5rem",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          3.74K
        </Item>
        <Item
          sx={{
            boxShadow: "none",
            borderLeft: "1px solid #a4a7a5ff",
            borderRadius: 0,
          }}
        ></Item>
        <Item
          sx={{
            marginTop: "1.2rem",
            boxShadow: "none",
            borderRadius: 0,
            textAlign: "end",
            marginRight: "15rem",
          }}
        >
          <p style={{ color: "#acaaaa" }}>Current Value 31.43K</p>
          <p style={{ color: "#acaaaa", marginTop: "-1rem" }}>
            Investment 29.88K
          </p>
        </Item>
      </Item>
    </Grid>
  );
}

export default RightDashboard;
