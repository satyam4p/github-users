import React from "react";
import {
  UserInforContainer,
  UserProflie,
  ProfileSection,
  UserDetailsSection,
  ProfileLoader,
  FieldContainer,
  FieldLabel,
  FieldValue,
  ProfileInfo,
} from "./styled/style";
import { Typography } from "@mui/material";

const Component = ({ isLoading, userInfo }) => {
  console.log("userInfo:: ", userInfo);
  return (
    <UserInforContainer>
      <ProfileSection>
        {isLoading ? (
          <ProfileLoader animation="wave" />
        ) : (
          <ProfileInfo>
            <UserProflie src={userInfo?.avatar_url} />
            <Typography variant="h5">{userInfo?.login}</Typography>
          </ProfileInfo>
        )}
      </ProfileSection>
      <UserDetailsSection>
        <FieldContainer>
          <FieldLabel>Username</FieldLabel>
          <FieldValue>{userInfo?.name}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Followers</FieldLabel>
          <FieldValue>{userInfo?.followers}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Following</FieldLabel>
          <FieldValue>{userInfo?.following}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Public Repos</FieldLabel>
          <FieldValue>{userInfo?.public_repos}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Twitte Username</FieldLabel>
          <FieldValue>{userInfo?.twitter_username || "Not present"}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Company</FieldLabel>
          <FieldValue>{userInfo?.company}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Blog</FieldLabel>
          <FieldValue>
            <a target="_blank" href={userInfo?.blog} rel="noreferrer">
              {userInfo?.blog || " "}
            </a>
          </FieldValue>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>Location</FieldLabel>
          <FieldValue>{userInfo?.location}</FieldValue>
        </FieldContainer>
      </UserDetailsSection>
    </UserInforContainer>
  );
};

export default Component;
