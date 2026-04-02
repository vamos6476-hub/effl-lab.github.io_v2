import type { HomeHero } from "./_types.mts";

const homeHero: HomeHero = {
  greeting: "👋 Hi, we are EffL!",
  description:
    'Efficient Learning Lab, or simply <span class="font-bold text-emerald-900">EffL</span>, is a research group led by <a href="https://jaeho-lee.github.io/" target="_blank" rel="noreferrer" class="font-medium text-emerald-900 underline decoration-emerald-900/40">Jaeho Lee</a>.',
  cards: [
    {
      icon: "mdi:school-outline",
      label: "Affiliated with",
      value: "POSTECH EE & AI",
    },
    {
      icon: "mdi:flask-outline",
      label: "Focusing on",
      value: "theories and algorithms to make ML more efficient",
    },
  ],
};

export default homeHero;
