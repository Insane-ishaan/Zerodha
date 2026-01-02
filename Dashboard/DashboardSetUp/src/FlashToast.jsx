import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { FlashContext } from "./FlashContext";

export default function FlashToast() {
  const { flash } = useContext(FlashContext);
  if (!flash) return null;
  return (
    <Stack
      sx={{ width: "90%" }}
      spacing={1}
      className={`ms-auto mt-1 ${flash.type}`}
    >
      <Alert severity={`${flash.type}`}>
        <AlertTitle>
          {flash.type} : {flash.message}
        </AlertTitle>
      </Alert>
    </Stack>
  );
}
