import React, { useEffect, useState } from "react";
import Component from "./Component";

const URL = "https://api.github.com/users";
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
    />
  );
};

export default Container;
