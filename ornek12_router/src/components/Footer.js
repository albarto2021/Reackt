import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const yil = new Date().getFullYear();
  return (
    <Container className="bg-dark p-3 ">
      <p className="text-light text-center"> Copyright ⓒ {yil}</p>
    </Container>
  );
}
export default Footer;
