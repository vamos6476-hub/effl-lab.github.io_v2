import type { PersonEntry } from "./_types.mts";
import seunghyeonPhoto from "./photo/seunghyeon.jpg";

const seunghyeon: PersonEntry = {
  group: "ms",
  order: 2,
  name: "Seunghyun Kim",
  role: "Enable high-FPS video processing with low overhead",
  bio: "Interested in discovering overlooked problems from new perspectives",
  avatar: seunghyeonPhoto,
  status: "M.S.",
  tags: ["VLM", "Optimization"],
  links: [
    {
      label: "Mail",
      href: "mailto:shkim0418@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "Linkedin",
      href: "www.linkedin.com/in/seunghyun-kim-34b412244",
      icon: "mdi:linkedin",
    },
  ],
};

export default seunghyeon;
