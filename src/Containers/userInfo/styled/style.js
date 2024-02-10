import { Avatar, Skeleton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const UserInforContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "2rem",
  flexWrap: "wrap",
}));

export const ProfileInfo = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
}));

export const ProfileSection = styled("div")(() => ({
  display: "flex",
  width: "30%",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProfileLoader = styled(Skeleton)(() => ({
  width: "20rem",
  height: "20rem",
  borderRadius: "1rem",
}));

export const TypographyLoader = styled(Skeleton)(() => ({
  width: "100%",
}));

export const UserProflie = styled(Avatar)(() => ({
  width: "15rem",
  height: "15rem",
  borderRadius: "1rem",
}));

export const FieldContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}));

export const FieldLabel = styled("div")(() => ({
  minWidth: "10%",
  marginRight: "1rem",
  padding: "0.5rem",
  wordWrap: "unset",
  fontWeight: "bold",
}));

export const FieldValue = styled(Typography)(() => ({
  marginRight: "1rem",
  padding: "0.5rem",
}));

export const UserDetailsSection = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "60%",
  border: `1px solid ${grey[400]}`,
  padding: "1rem",
  borderRadius: "0.5rem",
}));
