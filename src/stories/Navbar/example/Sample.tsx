import React from "react";

import Button from "../../../components/Button";
import Link from "../../../components/Link";
import Navbar from "../../../components/Navbar";

type Props = {};

function Sample({}: Props) {
  return (
    <Navbar
      cta={
        <>
          <Button state="secondary" className="relative px-8">
            <a>Sign In</a>
          </Button>
          <Button state="primary" className="relative px-8">
            <a>Sign Up</a>
          </Button>
        </>
      }
      pathname="/program"
      className={{ active: "text-purple", idle: "text-navy" }}
    >
      <Link href="/program">
        <a>Program</a>
      </Link>
      <Link href="/mentor">
        <a>Mentor</a>
      </Link>
      <Link href="/pricing">
        <a>Pricing</a>
      </Link>
      <Link href="/bussiness">
        <a>Bussiness</a>
      </Link>
    </Navbar>
  );
}

export default Sample;
