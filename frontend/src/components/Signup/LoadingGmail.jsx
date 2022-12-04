import React from "react";
import { Mainbox, Slider1, ParentSlider, Slider2, LoginButton } from "./Login1";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userotp, username } from "../../Redux/action";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";

export const LoadingGmail = () => {
  const state = useSelector((state) => state);
  const { id } = useParams();
  console.log(id, "checkin loading");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  axios
    .get(`${process.env.REACT_APP_API}/gmailtoken/${id}`)
    .then(({ data }) => {
      console.log(data, "getting the token");
      console.log(data.data);

      dispatch(username(data.data.username));
      dispatch(userotp("12345"));
      console.log(data.data.token, "token");
      console.log(data.data.refreshToken, "refreshToken");

      let twoHour = new Date(new Date().getTime() + 120 * 60 * 1000);
      Cookies.set("token", data.data.token, {
        expires: twoHour,
      });
      let fiveHour = new Date(new Date().getTime() + 300 * 60 * 1000);
      Cookies.set("refreshToken", data.data.refreshToken, {
        expires: fiveHour,
      });
      // console.log(Cookies.get("token"))
      // console.log(Cookies.get("refreshToken"))
      navigate("/", { replace: true });
    })
    .catch((e) => console.log(e));

  return (
    <Mainbox>
      <Box sx={{ display: "flex" }} style={{ marginLeft: "30%" }}>
        <CircularProgress />
      </Box>
    </Mainbox>
  );
};
