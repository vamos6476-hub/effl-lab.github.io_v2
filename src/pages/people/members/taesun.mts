import type { PersonEntry } from "./_types.mts";
import taesunPhoto from "./photo/taesun.jpeg";

const taesun: PersonEntry = {
  group: "phd",
  order: 5,
  name: "Taesun Yeom",
  role: "Improving generalization through implicit bias",
  bio: "Bridging theory and practice in deep learning",
  avatar: taesunPhoto,
  status: "M.S.+Ph.D.",
  tags: ["Implicit Bias", "Learning Dynamics", "Learning Theory"],
  links: [
    {
      label: "Webpage",
      href: "https://taesunyeom.github.io/",
      icon: "mdi:web",
    },
    {
      label: "Mail",
      href: "mailto:tsyeom@postech.ac.kr",
      icon: "mdi:email-outline",
    },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=JobmaFQAAAAJ&hl=en",
      icon: "mdi:school-outline",
    },
  ],
};

export default taesun;
