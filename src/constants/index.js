import { image1, image2,image3, icon1,icon2,icon3 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "browse",
    title: "Browse",
  },
  {
    id: "updates",
    title: "Updates",
  },
  {
    id: "pricing",
    title: "Pricing"
  },
  {
    id: "signup",
    title: "Sign up"
  },

];

const service = [
  {
    name: "Using Discord",
    title: "Mastering the Art of Prompt Writing",
    description:
      "Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept.",
    image: image1,
    icon: icon1,
    source_code_link: "",
    buttonDesc: "Join Discord"
  },
  {
    name: "Getting Started",
    title: "Streamlining Collaborative Workflows",
    description:
      "Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot will respond with a prompt or image. The collaborative feature /blend allows you to blend two images together to create a unique design. It's a user-friendly and effective way to bring your ideas to life",
    image: image2,
    icon: icon2,
    source_code_link: "",
    buttonDesc: "Explore Now",
  },
  {
    name: "User Guide",
    title: "Unravelling the Mystery of Version",
    description:
      "Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot will respond with a prompt or image. The collaborative feature /blend allows you to blend two images together to create a unique design. It's a user-friendly and effective way to bring your ideas to life",
    image: image3,
    icon: icon3,
    source_code_link: "",
    buttonDesc: "View Documents"
  }
];

export { service };