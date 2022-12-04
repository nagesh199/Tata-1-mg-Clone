import React from "react";
import Button from "../Button";
import { LoginButton } from "./Login1";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { userotp } from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
export const LoginOTP = () => {
  const location = useLocation();
  console.log(location, "location");
  const [otp, setopt] = React.useState();
  const ref1 = React.useRef();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state, "chevk intial valie");
  const navigate = useNavigate();

  const verfiyData = () => {
    console.log(otp);
    console.log(state.otp, "hereagain");
    console.log(state.username);
    console.log(otp == state.otp);
    if (otp != state.otp) {
      alert("incorrect otp please enter otp carefully");
    } else {
      axios
        .post(`${process.env.REACT_APP_API}/signupverfied`, {
          username: state.username,
        })
        .then(({ data }) => {
          console.log(data, "getting the token");
          console.log(data.data);
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
          console.log(location.state, "check nooo");
          navigate("/", { replace: true });
        });
    }
  };
  return (
    <div style={{ marginTop: "5%" }}>
      <h2 style={{ marginLeft: "10%" }}>Verify OTP</h2>
      <p>Get access to your orders, lab tests & doctor consultations</p>

      <div>
        <input
          placeholder="one time password"
          type="text"
          maxLength={5}
          ref={ref1}
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            width: "80%",
            margin: "10%",
          }}
          onChange={(e) => setopt(e.target.value)}
        />
      </div>

      <LoginButton onClick={verfiyData}>Done</LoginButton>

      <LoginButton
        style={{ width: "30%", marginTop: "5%" }}
        onClick={() => {
          dispatch(userotp(""));
        }}
      >
        resend otp
      </LoginButton>
    </div>
  );
};
