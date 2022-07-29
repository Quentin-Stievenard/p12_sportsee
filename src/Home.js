import React from "react";

export default function Home() {
  return (
    <main>
      <h2 className="pt-8 mx-4 text-5xl font-bold w-full leading-relaxed">
        Bienvenue sur
        <span className="sportsee-red">Sportsee</span>
      </h2>
      <div className="py-8 mx-4 w-2/3">
        <ul>
          <li>
            <a href="/user/12">User 12</a>
          </li>
          <li>
            <a href="/user/18">User 18</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
