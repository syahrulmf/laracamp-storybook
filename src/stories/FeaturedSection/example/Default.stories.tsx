// FeaturedSection.stories.ts|tsx

import React from "react";

import { ComponentMeta } from "@storybook/react";

import Button from "../../../components/Button";
import FeaturedSection from "../../../components/FeaturedSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/FeaturedSection/Example",
  component: FeaturedSection,
} as ComponentMeta<typeof FeaturedSection>;

export const Default = (args: any) => <FeaturedSection {...args} />;
Default.args = {
  badge: {
    title: "Interview",
    content: "Before taking any program it is good to choose the path",
  },
  button: (
    <Button state="secondary">
      <a href="">LearnMore</a>
    </Button>
  ),
  content: {
    preheading: "better carrier",
    heading: "Prepare The Journey",
    paragraph:
      "We do really care to our students’ future career so it would be good if you are taking a quick interview",
  },
  image: "/images/image-1.jpg",
  number: { text: "1.", className: "bg-yellow" },
};
