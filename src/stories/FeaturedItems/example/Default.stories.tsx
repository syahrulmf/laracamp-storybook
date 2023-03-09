// FeaturedItems.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import FeaturedItems from "../../../components/FeaturedItems";

const Users: string = require("../../../assets/images/fi-users.svg").default;
const Briefcase: string =
  require("../../../assets/images/fi-briefcase.svg").default;
const Globe: string = require("../../../assets/images/fi-globe.svg").default;
const Codesandbox: string =
  require("../../../assets/images/fi-codesandbox.svg").default;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedItems/Example",
  component: FeaturedItems,
} as ComponentMeta<typeof FeaturedItems>;

export const Default = (args: any) => <FeaturedItems {...args} />;
Default.args = {
  features: [
    {
      key: "diversity",
      title: "Diversity",
      paragraph: "Learn from anyone around the world and get a new skills",
      icon: Globe,
    },
    {
      key: "guideline",
      title: "A.I Guideline",
      paragraph:
        "Lara will help you to choose which path that suitable for you",
      icon: Codesandbox,
    },
    {
      key: "mentoring",
      title: "1-1 Mentoring",
      paragraph: "We will ensure that you will get what you really do need",
      icon: Users,
    },
    {
      key: "futurejob",
      title: "Future Job",
      paragraph: "Get your dream job in your dream company together with us",
      icon: Briefcase,
    },
  ],
};
