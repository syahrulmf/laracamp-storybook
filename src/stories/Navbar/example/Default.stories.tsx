/* eslint-disable jsx-a11y/anchor-is-valid */
// FeaturedSection.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Button from "../../../components/Button";
import Link from "../../../components/Link";
import Navbar from "../../../components/Navbar";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Navbar/Example",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default = (args: any) => (
  <Navbar {...args}>
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
Default.args = {
  cta: (
    <>
      <Button state="secondary" className="relative px-8">
        <a>Sign In</a>
      </Button>
      <Button state="primary" className="relative px-8">
        <a>Sign Up</a>
      </Button>
    </>
  ),
  pathname: "/program",
  className: {
    active: "text-purple",
    idle: "text-navy",
  },
};
