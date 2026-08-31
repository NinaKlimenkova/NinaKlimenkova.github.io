export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const media = {
  headshot: {
    src: "images/nina-klimenkova-headshot.jpg",
    width: 768,
    height: 1024,
    alt: "Professional headshot of the site owner.",
  },
  research: [
    {
      src: "images/nina-grie-poster.webp",
      width: 1800,
      height: 1350,
      alt: "Nina Klimenkova standing beside a poster at WPI’s Graduate Research Innovation Exchange.",
      caption: "Poster presentation at WPI’s Graduate Research Innovation Exchange.",
    },
    {
      src: "images/nina-wids-presentation.webp",
      width: 1800,
      height: 1740,
      alt: "Nina Klimenkova speaking to an audience at the Women in Data Science Conference.",
      caption: "Presentation at the Women in Data Science Conference.",
    },
    {
      src: "images/nina-wids-poster-session.webp",
      width: 1350,
      height: 1800,
      alt: "Nina Klimenkova speaking with an attendee beside a poster at the Women in Data Science Conference.",
      caption: "Poster session at the Women in Data Science Conference.",
    },
    {
      src: "images/nina-phd-qualifying-exam.webp",
      width: 1800,
      height: 1350,
      alt: "Nina Klimenkova presenting during her PhD qualifying exam.",
      caption: "PhD qualifying exam presentation at Worcester Polytechnic Institute.",
    },
  ] satisfies ImageAsset[],
} as const satisfies { headshot: ImageAsset; research: ImageAsset[] };
