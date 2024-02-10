import { Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

export const UserList = styled("div")(() => ({
  padding: "1rem",
}));

export const UserAvatar = styled(Avatar)(() => ({
  width: "5rem",
  height: "5rem",
}));

export const UserContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${grey[400]}`,
  padding: "0.5rem",
  borderRadius: "0.5rem",
  width: "15rem",
  margin: "0.2rem",
  alignItems: "center",
  textAlign: "center",
  minHeight: "8rem",
  textDecoration: "none",
  justifyContent: "space-between",
}));

export const UserListContainer = styled("a")(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "0.5rem",
  alignItems: "center",
  justifyContent: "space-around",
}));
