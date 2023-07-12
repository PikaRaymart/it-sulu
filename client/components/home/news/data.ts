

export type ThinkingData = {
  image: string,
  title: string,
  author: {
    name: string,
    link : string
  },
  description: string,
  isVertical?: boolean,
  isReversed?: boolean
}

export const projectsData: ThinkingData[] = [
  {
    image: "/images/news-1.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Jane Meldrum",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/news-2.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isVertical: true,
    isReversed: true
  },
  {
    image: "/images/news-3.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Roy Bricks",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isVertical: true
  },
  {
    image: "/images/news-4.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/news-5.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isVertical: true,
    isReversed: true
  },
  {
    image: "/images/news-6.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isVertical: true
  }

]