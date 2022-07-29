import React from "react";

// images
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="bg-black flex items-center justify-between pl-7 pr-19 shadow-md z-10 py-4.5">
      <a href="/">
        <img src={logo} alt="logo SportSee" />
      </a>
      <p className="text-white text-2xl cursor-pointer">Accueil</p>
      <p className="text-white text-2xl cursor-pointer">Profil</p>
      <p className="text-white text-2xl cursor-pointer">Réglage</p>
      <p className="text-white text-2xl cursor-pointer">Communauté</p>
    </div>
  );
}
