import React, { useEffect, useState } from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import CustomButton from "../CustomButton/CustomButton";
import "./Sidebar.css";
import logo from "../../Images/logo.jpeg";

export default function Sidebar({
  border,
  title,
  location,
  months,
  price,
  hiring1,
  hiring2,
}) {
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const textContainer = document.querySelector(".text-container");
    const textSpan = textContainer.querySelector(".text");

    if (textSpan.scrollHeight > textContainer.clientHeight) {
      setIsTruncated(true);
    }
  }, []);

  return (
    <div
      className="flex-col SmCards-main"
      style={{
        border: border,
      }}
    >
      <div className="profile-div">
        <div className="profile-container">
          <img src={logo} alt="profile" className="image" />
        </div>

        <div className="flex-col">
          <span
            style={{
              fontSize: "25px",
            }}
          >
            {title}
          </span>
          <span className="color-grey">{location}</span>
        </div>
      </div>
      <div className="flex-row g-15 responsive-flex">
        <span>
          <MdOutlineSettingsRemote /> Remote
        </span>
        <span>
          <TfiAlarmClock /> {months}
        </span>
        <span>
          <FaSackDollar /> ${price}/hr
        </span>
      </div>
      <div>
        <span
          style={{
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Hiring
        </span>
      </div>
      <div className="hire-btns responsive-flex">
        <span className="span green">{hiring1}</span>
        <span className="span sigreen">{hiring2}</span>
      </div>
      <div className="d-f d-col">
        <span
          style={{
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Company Info:
        </span>
        <div className={`text-container ${isTruncated ? "truncated" : ""}`}>
          <span className="text">
            Sortitt is an HR services company HOed in the U, within offices
            located in different parts of the world. They
            {isTruncated && <span className="color-grey"> ... learn more</span>}
          </span>
        </div>
      </div>

      <div className="hire-btns responsive-flex">
        <span className="yellow">Learn More</span>
        <span className="span white">46 minutes ago</span>
      </div>
    </div>
  );
}
