import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Component from "./Component";

const URL = "https://api.github.com/users";

const Container = () => {
  const { userid } = useParams();
  const [user, setuser] = useState();
  const [isLoading, setLoading] = useState(false);
  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}/${userid}`);
      const res = await response.json();
      setuser(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [userid]);

  return <Component isLoading={isLoading} userInfo={user} />;
};

export default Container;
