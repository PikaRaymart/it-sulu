

export type ProjectData = {
  image: string,
  title: string,
  author: {
    name: string,
    link : string
  },
  description: string
}

export const projectsData: ProjectData[] = [
  {
    image: "/images/projects-1.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Jane Meldrum",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/projects-2.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/projects-3.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Roy Bricks",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/projects-4.jpg",
    title: "Easy & Most Powerful Server Platform.",
    author: {
      name: "Nguta Ithya",
      link: "#"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]