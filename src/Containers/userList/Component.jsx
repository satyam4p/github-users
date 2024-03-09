import React, { useRef } from "react";
import {
  UserAvatar,
  UserContainer,
  UserListContainer,
  UserList,
} from "./styled/style";
import { Typography, Button, Input } from "@mui/material";
import { Link } from "react-router-dom";

const SearchUrls = {
  name: "https://api.github.com/search/users",
  location: "https://api.github.com/search/users",
};

const Component = ({
  page,
  usersList,
  paginatePrevous,
  paginateNext,
  setUsers,
  fetchUsers,
}) => {
  const locationRef = useRef(null);
  const nameRef = useRef(null);

  const handleSearch = async () => {
    const name = nameRef.current.value;
    const location = locationRef.current.value;

    if (name.length > 0 && location.length > 0) {
      try {
        let result = await fetch(
          `${SearchUrls.name}?q=${name}+location:${location}`
        );
        if (result.status == 200) {
          let resJson = await result.json();
          if (resJson && resJson.total_count > 0) {
            setUsers(resJson?.items);
          }
        }
      } catch (error) {
        console.error("error occured while fetching filtered response");
      }
    } else {
      await fetchUsers();
    }
  };

  return (
    <UserList>
      <Typography align="center" variant="h4">
        Github Users
      </Typography>
      <div style={{ paddingLeft: "2rem" }}>
        <Button
          sx={{ padding: "0.2rem", marginRight: "1rem", background: "" }}
          onClick={paginatePrevous}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          sx={{ padding: "0.2rem", marginRight: "1rem" }}
          onClick={paginateNext}
        >
          Next
        </Button>
        <Input type="text" inputRef={nameRef} placeholder="enter name" />
        <Input
          type="text"
          inputRef={locationRef}
          placeholder="enter location"
        />
        <Button onClick={handleSearch}>Search</Button>
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
