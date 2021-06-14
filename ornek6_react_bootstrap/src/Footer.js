import React from 'react';
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

/*
hocanin yaptigi

import React from "react";
import { Navbar } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid
        className="justify-content-center bg-dark p-3"
      >
        <p className="text-light">Copyright 2021</p>
      </Navbar>
    </div>
  );
}
export default Footer;
*/
