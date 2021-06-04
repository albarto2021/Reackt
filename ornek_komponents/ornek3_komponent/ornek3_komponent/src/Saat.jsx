import React from "react";

function Saat() {
  const tarih = new Date().toLocaleDateString();
  const saat = new Date().toLocaleTimeString();
  const clock = new Date();
  console.log(clock);
  return (
    <div>
      <h1>TARIH:{tarih}</h1>
      <h2>SAAT:{saat}</h2>
    </div>
  );
}

export default Saat;
