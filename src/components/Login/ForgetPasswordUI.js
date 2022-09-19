import React, { useState } from "react";
import pic from "./logo1.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ApiServices } from "../../Config/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function ForgotPassword() {
  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");

  var emailRegrex = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const validateStep1 = (event) => {
    if (email.length === 0) {
     return setemailError("Please enter an email address.");
    } else if (!emailRegrex.test(email)) {
      return Swal.fire({
        title: "Oops...",
        text: '"email" must be a valid email',
        confirmButtonText: "Ok",
      });
    }
    // else if {
    //   Swal.fire({
    //     title: 'Oops...',
    //     text: 'Invalid Credential',
    //     confirmButtonText: 'Ok'
    //   })
    // }
    else {
      let params = {
        email: email,
      };
      ApiServices.fogetpassword(params)
        .then((response) => {
         
           toast.success("Email is sended successfully");

          window.location.href = "/";
        })
        .catch((error) => {
           toast.error("Invalid Login Credentials");
        });
    }
  };

  // function onEmailChanged(event) {
  //   setemailError("");
  //   setEmail(event.target.value);
  // }

  return (
    <div className="container">
      <div className="logo-container">
        <img src={pic} alt="logo1" className="logo" />
        <h2 className="title">We love creative Business Ideas</h2>
      </div>
      <div className="form-container">
        <form>
          <div>
            <div className="form-element">
              <div className="pass-msg">
                <p className="content">
                  Please enter your email address. You will receive a link to
                  create a new password via email.
                </p>
              </div>
            </div>
            <div className="form-element">
              <div>
                <label className="content">Email</label>
              </div>
              <input
                type="text"
                placeholder="Enter Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {emailError.length > 0 && (
                <span style={{ color: "red" }}>{emailError}</span>
              )}
            </div>
            {/* className="form-element form-button get-pwd" */}
            <div>
              <button
                type="button"
                className="button1"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => validateStep1()}
              >
                Get New Password
              </button>
            </div>
          </div>
          <div className="back-to-login">
            <button onClick={backToLogin} className="link ">
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
