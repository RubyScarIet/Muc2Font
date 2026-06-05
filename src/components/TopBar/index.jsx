import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

const TopBar = () => {
  const [contextName, setContextName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchContext = async () => {
      const matchPhotos = location.pathname.match(/\/photos\/(.*)/);
      const matchUsers = location.pathname.match(/\/users\/(.*)/);

      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8081";
      if (matchPhotos && matchPhotos[1]) {
        const { data: user } = await fetchModel(`${API_URL}/user/${matchPhotos[1]}`);
        setContextName(`Photos of ${user.first_name} ${user.last_name}`);
      } else if (matchUsers && matchUsers[1]) {
        const { data: user } = await fetchModel(`${API_URL}/user/${matchUsers[1]}`);
        setContextName(`${user.first_name} ${user.last_name}`);
      } else {
        setContextName("");
      }
    };
    fetchContext();
  }, [location.pathname]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          Hi Tin
        </Typography>
        {/* Checkbox for Advanced Features removed as per request */}
        <Typography variant="h5" color="inherit">
          {contextName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;