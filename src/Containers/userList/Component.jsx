import React from "react";
import {
  UserAvatar,
  UserContainer,
  UserListContainer,
  UserList,
} from "./styled/style";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Component = ({ page, usersList, paginatePrevous, paginateNext }) => {
  return (
    <UserList>
      <Typography align="center" variant="h4">
        Github Users
      </Typography>
      <div style={{ paddingLeft: "2rem" }}>
        <Button
          sx={{ padding: "0.2rem", marginRight: "1rem", background: "" }}
          onClick={paginatePrevous}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          sx={{ padding: "0.2rem", marginRight: "1rem" }}
          onClick={paginateNext}
        >
          Next
        </Button>
      </div>

      <UserListContainer>
        {usersList &&
          usersList.map((user, index) => {
            return (
              <Link
                style={{
                  padding: "0px",
                  margin: "0px",
                  textDecoration: "none",
                }}
                to={`/user/${user?.login}`}
                key={index}
              >
                <UserContainer key={index}>
                  <UserAvatar src={user?.avatar_url} />
                  <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                    {user.login}
                  </Typography>
                </UserContainer>
              </Link>
            );
          })}
      </UserListContainer>
    </UserList>
  );
};

export default Component;
