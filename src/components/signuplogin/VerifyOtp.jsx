

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:3001/verifyotp";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const showMessage = (text, isError = false) => {
    toast.info(text, {
      autoClose: 6000,
      className: isError ? "toast-error" : "toast-success",
    });
    console.log(text);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 5) {
      showMessage("Please enter a valid 5-digit OTP.", true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      if (response.status === 200) {
        showMessage("Verification successful! You can login to your account");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        showMessage(
          "OTP verification failed. Please check your OTP and try again.",
          true
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="otpverify">
      <h2 className="otpheading">Verify Email</h2>
      <form onSubmit={handleVerifyOTP}>
        <div className="form-group">
          <input
            type="text"
            autoFocus
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{ outline: "none" }}
            maxLength="6"
          />
        </div>
        <center>
          <button
            className="button1"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </center>
        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}

export default VerifyOtp;
