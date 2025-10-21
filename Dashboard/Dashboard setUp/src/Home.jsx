import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LeftDashBoard from "./LeftDashBoard";
import { Typography, Box, Stack } from "@mui/material";

import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));
function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid>
          <Stack spacing={2}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ color: "#acaaaa" }}>
                Search eg: infy,bse,nifty,fut weekly,gold mcx{" "}
                <Box
                  component="span"
                  fontWeight={600}
                  sx={{
                    marginLeft: 15,
                  }}
                >
                  9/50
                </Box>
              </Typography>
            </Item>
          </Stack>
        </Grid>
        <Item
          sx={{
            boxShadow: "none",
            borderRadius: 0,
            borderLeft: "1px solid rgb(99, 99, 99)",
            height: "100vh",
            marginTop: -2,
          }}
        ></Item>
        <LeftDashBoard />
      </Grid>
    </Box>
  );
}

export default Home;
