import React from "react";
import yogaIcon from "../../assets/images/yoga.svg";
import swimIcon from "../../assets/images/swim.svg";
import bikingIcon from "../../assets/images/biking.svg";
import bodyBuildingIcon from "../../assets/images/bodybuilding.svg";

import "./NavBar.scss";
import Button from "../Button";

export default function NavBar() {
  const navigtionButtons = [
    {
      icon: yogaIcon,
      action: () => {
        console.log("yoga Button");
      },
    },
    {
      icon: swimIcon,
      action: () => {
        console.log("swim Button");
      },
    },
    {
      icon: bikingIcon,
      action: () => {
        console.log("biking Button");
      },
    },
    {
      icon: bodyBuildingIcon,
      action: () => {
        console.log("bodyBuilding Button");
      },
    },
  ];
  return (
    <div className="navbar-container px-6.5 bg-black">
      <nav>
        <ul className="navbar-item">
          {navigtionButtons.map((button, i) => {
            return (
              <Button
                className="w-16 h-16 mb-5"
                key={i}
                img={button.icon}
                onClick={button.action}
              />
            );
          })}
        </ul>
      </nav>

      <p className="navbar-bottom-text">Copyright SportSee 2021</p>
    </div>
  );
}
