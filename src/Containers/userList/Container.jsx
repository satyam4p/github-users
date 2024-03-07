import React, { useEffect, useState } from "react";
import Component from "./Component";

const URL = "https://api.github.com/users";
const SearchUrl = "https://api.github.com/search/users";
const PERPAGE = 20;

const Container = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handlePaginatePrevious = () => {
    setPage(page - PERPAGE);
  };

  const handlePaginateNext = () => {
    setPage(page + PERPAGE);
  };

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const handleSearch = async () => {
    if (name.length > 0 || location.length > 0) {
      try {
        let result = await fetch(`${SearchUrl}?q=${name}+location:${location}`);
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

  const fetchUsers = async () => {
    let response = await fetch(`${URL}?per_page=${PERPAGE}&since=${page}`);
    let result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <Component
      paginatePrevous={handlePaginatePrevious}
      paginateNext={handlePaginateNext}
      usersList={users}
      page={page}
      setName={setName}
      setLocation={setLocation}
      name={name}
      location={location}
      handleSearch={handleSearch}
    />
  );
};

export default Container;
