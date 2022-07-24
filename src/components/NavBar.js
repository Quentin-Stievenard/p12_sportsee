import React from "react";

// icones
import yogaIcon from "../assets/images/yoga.svg";
import swimIcon from "../assets/images/swim.svg";
import bikingIcon from "../assets/images/biking.svg";
import bodyBuildingIcon from "../assets/images/bodybuilding.svg";
import Button from "./Button";

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
    <div className="bg-black flex flex-col w-fit px-6.5 h-full justify-between ">
      <div className="flex justify-around flex-col">
        {navigtionButtons.map((button, i) => {
          return <Button key={i} img={button.icon} onClick={button.action} />;
        })}
      </div>
      <p className="text-white rotate-90 w-fit">Copiryght, SportSee 2020</p>
    </div>
  );
}
