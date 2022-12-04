import React from "react";
import Button from "../Button";
import { GmailButton, LoginButton, InputDiv } from "./Login1";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { userotp, username } from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Google from "../../assets/app/google.png";
export const LoginInput = () => {
  const [number, setNumber] = React.useState();
  let navigate = useNavigate();
  const ref1 = React.useRef();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state, "chevk intial valie");

  const sendData = () => {
    console.log(number);
    axios
      .post(`${process.env.REACT_APP_API}/signup`, {
        mobile: Number(number),
      })
      .then((data) => {
        console.log(data, "recieved");
        console.log(data.data);
        console.log(data.data.message);

        if (data.data.message == "invalid number") {
          alert("using twilio in free trial so not all mobile number gets otp");
          alert("currently your otp is 12345");
          dispatch(userotp("12345"));
          dispatch(username(number));
        } else {
          dispatch(userotp(data.data.otp));
          dispatch(username(number));
        }
      });
    // dispatch(userotp("12345"))
    // dispatch(username(number))
    // navigate("/otp",{replace:true})
  };

  const gmailData = () => {
    window.location.href = `${process.env.REACT_APP_API}/google`;
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <h2 style={{ marginLeft: "10%" }}>Login</h2>
      <p>Get access to your orders, lab tests & doctor consultations</p>

      <InputDiv>
        <input
          placeholder="Enter Mobile Number"
          type="text"
          pattern="\d*"
          maxlength="10"
          ref={ref1}
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            width: "80%",
            margin: "10%",
          }}
          onChange={(e) => setNumber(e.target.value)}
        />
      </InputDiv>

      <LoginButton onClick={sendData}>Continue</LoginButton>

      <GmailButton
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={gmailData}
      >
        <img width="25px" src={Google} />
        <p>signup with gmail</p>
      </GmailButton>
    </div>
  );
};
{
  /* <GoogleIcon style={{marginTop:"5px",marginLeft:"-80px"}}/> */
}
