

export type NavbarData = {
  title: string,
  link: string,
  subLinks?: {
    title: string,
    link: string
  }[]
}

export const navbarData: NavbarData[] = [
  {
    title: "Enterprise",
    link: "#",
    subLinks: [
      {
        title: "Home V2",
        link: "#"
      },
      {
        title: "About us",
        link: "#"
      },
      {
        title: "Team",
        link: "#"
      },
      {
        title: "Team members",
        link: "#"
      },
      {
        title: "Cateers",
        link: "#"
      },
      {
        title: "Prices",
        link: "#"
      },
      {
        title: "FAQ",
        link: "#"
      },
      {
        title: "Event",
        link: "#"
      },
    ]
  },
  {
    title: "Case Studies",
    link: "#"
  },
  {
    title: "Services",
    link: "#",
    subLinks: [
      {
        title: "Service 1",
        link: "#"
      },
      {
        title: "Service 2",
        link: "#"
      },
      {
        title: "Service 3",
        link: "#"
      },
      {
        title: "Service 4",
        link: "#"
      },
    ]
  },
  {
    title: "Solutions",
    link: "#",
    subLinks: [
      {
        title: "Solution 1",
        link: "#"
      },
      {
        title: "Solution 2",
        link: "#"
      },
      {
        title: "Solution 3",
        link: "#"
      },
    ]
  },
  {
    title: "Blog",
    link: "#"
  },
  {
    title: "Contact Us",
    link: "#"
  },
  {
    title: "Other",
    link: "#",
    subLinks: [
      {
        title: "Coming Soon",
        link: "#"
      },
      {
        title: "404",
        link: "#"
      },
    ]
  }
]