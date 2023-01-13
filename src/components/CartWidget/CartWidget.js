import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
  const navigate = useNavigate();
  const handleWidgetClick = () => {
    navigate("/cart");
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform ease-in-out duration-75"
      onClick={handleWidgetClick}
    >
      <path
        d="M6 6H30L27 19H9M27 23H10L5 2H2"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 29C26.1046 29 27 28.1046 27 27C27 25.8954 26.1046 25 25 25C23.8954 25 23 25.8954 23 27C23 28.1046 23.8954 29 25 29Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 29C13.1046 29 14 28.1046 14 27C14 25.8954 13.1046 25 12 25C10.8954 25 10 25.8954 10 27C10 28.1046 10.8954 29 12 29Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
