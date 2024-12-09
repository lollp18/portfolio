export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "WorkExperience", link: "#workExperience" },
  { name: "Contact", link: "#contact" },
]

export const gridItems = [
  {
    id: 1,
    title: "Currently building a FullStack App Like Excel",
    description: "The Inside Scoop",
    className: "md:col-span-6 md:row-span-6",
    imgClassName:
      "absolute right-3 top-0 w-1/2 md:w-96 max-[437px]:object-left max-[437px]:-right-2/4	max-[437px]:w-full 	 ",
    titleClassName: "w-1/2 ",
    img: "/Csv3 -c.png",
    spareImg: "",
  },

  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-5 ",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
]

export const projects = [
  {
    id: 1,
    title: "CSV3",
    des: "For quick editing of Csv files ",
    img: "/Csv3.png",
    iconLists: [
      "/nuxt.svg",
      "/tail.svg",
      "/ts.svg",
      "/pina.svg",
      "/mongodb.svg",
      "/nodejs.svg",
      "/sass.svg",
      "/html.svg",
    ],
    link: "https://csv3.netlify.app",
    Device: {
      mobile: false,
      pc: true,
    },
  },
  {
    id: 2,
    title: "CSV2",
    des: "For quick editing of Csv files",
    img: "/Csv2.png",
    iconLists: [
      "/vue.svg",
      "/pina.svg",
      "/sass.svg",
      "/html.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://csv2.netlify.app/",
    Device: {
      mobile: false,
      pc: true,
    },
  },
  {
    id: 3,
    title: "Chimney sweep weeks Planner (SFWP)",
    des: "To save appointments for a 7-day week especially for chimney sweeps",
    img: "/SFWP.png",
    iconLists: ["/vue.svg", "/html.svg", "/css.svg"],
    link: "https://schornsteinfeger-wochenplaner.netlify.app/",
    Device: {
      mobile: true,
      pc: false,
    },
  },
  {
    id: 4,
    title: "Todolist",
    des: "Fast saving of small tasks",
    img: "/Todoliste.jpeg",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://todoliste-lorenzo-rodorigo.netlify.app/",
    Device: {
      mobile: true,
      pc: true,
    },
  },
  {
    id: 5,
    title: "Website of Sylvia Rodorigo",
    des: "Presents all the services of Sylvia Rodorigo",
    img: "/SiviWeb.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://clinquant-croissant-d8a253.netlify.app/",
    Device: {
      mobile: true,
      pc: true,
    },
  },
  {
    id: 6,
    title: "Omnifod",
    des: "Presentation page for the Omnifod app",
    img: "/Omnifod.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://omnifood-lorenzo-rodorigo.netlify.app/",
    Device: {
      mobile: true,
      pc: true,
    },
  },
  {
    id: 7,
    title: "OneForkify",
    des: "Search for the right recipe",
    img: "/OneForkify.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://forkify-rezepte-finder-lorenzo-rodorigo.netlify.app/",
    Device: {
      mobile: false,
      pc: true,
    },
  },
  {
    id: 8,
    title: "Mapty",
    des: "Save your training routines",
    img: "/Mapty.png",
    iconLists: ["/js.svg", "/html.svg", "/css.svg"],
    link: "https://mapty-lorenzo-rodorigo.netlify.app/",
    Device: {
      mobile: false,
      pc: true,
    },
  },
]

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
]

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
]

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Engineer Intern",
    desc: "Design of new Layouts for the dashboard and optimization of the existing Layouts for mobile, tablet and desktop with Next.js and Material Ui",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/lollp18",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/lorenzo-rodorig/",
  },
]
