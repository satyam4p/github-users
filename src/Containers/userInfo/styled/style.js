import { Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const UserInforContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    flexWrap: "wrap",
  },
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
  flexWrap: "wrap",
}));

export const ProfileInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const ProfileSection = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  display: "flex",
  width: "30%",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProfileLoader = styled(Skeleton)(({ theme }) => ({
  width: "15rem",
  height: "15rem",
  borderRadius: "1rem",
}));

export const TypographyLoader = styled(Skeleton)(({ theme }) => ({
  width: "100%",
}));

export const UserProflie = styled("img")(({ theme }) => ({
  width: "15rem",
  borderRadius: "1rem",
}));

export const FieldContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export const FieldLabel = styled("div")(({ theme }) => ({
  minWidth: "20%",
  marginRight: "1rem",
  padding: "0.5rem",
  wordWrap: "unset",
  fontWeight: "bold",
  textAlign: "left",
}));

export const FieldValue = styled(Typography)(({ theme }) => ({
  marginRight: "1rem",
  padding: "0.5rem",
}));

export const UserDetailsSection = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    padding: "0.5rem",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "60%",
  border: `1px solid ${grey[400]}`,
  borderRadius: "0.5rem",
  padding: "0.5rem",
}));
