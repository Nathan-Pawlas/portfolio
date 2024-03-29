import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    uvacc,
    sl,
    uva,
    jobit,
    tripguide,
    c,
    cpp,
    java,
    unity,
    sea,
    rt,
    ge,
    wip,
    cs,
    hell,
    gnr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Graphics Programmer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Game Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "University of Virginia",
      icon: uva,
      iconBg: "#383E56",
      date: "August 2021 - May 2025",
      points: [
        "GPA: 3.87",
        "Relevant Coursework: Data Structures and Algorithms, Software Development, OS and Architecture",
      ],
    },
    {
      title: "Technology Assistant",
      company_name: "UVA Career Center",
      icon: uvacc,
      iconBg: "#383E56",
      date: "Febuary 2022 - May 2023",
      points: [
        "Automated business intelligence dashboard updates and other processes with Python and related technologies.",
        "Built large portions of the new Career Center website, including various components such as a breadcrumb page tracking, utilizing Javascript and HTML.",
        "Maintained University's technical infastructure including servers, computers, and more."
      ],
    },
    {
      title: "Web Developer",
      company_name: "ScienceLogic",
      icon: sl,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Developed and maintained a suite of software using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented dynamic theme switching and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
        "Onboarded other Interns, helping to set up their development environments and adjust to a fast-paced Agile environment."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "UVA Computer Science",
      icon: cs,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Leading teaching initiatives to increase understanding of computing fundamentals including binary, assembly, and C",
        "Directing Lab for students and TA's to ensure a smooth, interactive, and fruitful experience for all",
        "Offering indepth one-on-one reviews of various topics in the fundamentals of Computer Architecture and Operating Systems",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Blog Site",
      description:
        "Full Stack blog site, developed utilizing react-js and nodejs. Utilized front end and css skills developed during my summer 2023 internship.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Nathan-Pawlas/Blog-Website",
    },
    {
      name: "3D Graphics Engine",
      description:
        "3D Graphics Engine created to study the fundamentals of graphics programming. Utilizes GLFW, DirectX 11, and ObjLoader to create a 3D environment with camera controls, 3D model generation, and an implementation of Phong Illumination Model. ",
      tags: [
        {
          name: "c++",
          color: "orange-text-gradient",
        },
        {
          name: "DirectX",
          color: "pink-text-gradient",
        },
        {
          name: "HLSL",
          color: "blue-text-gradient",
        },
      ],
      image: ge,
      source_code_link: "https://github.com/Nathan-Pawlas/3DRenderingEngineCpp-Test/tree/main",
    },
    {
      name: "3D Ray Tracer",
      description:
        "An extension to my 3D graphics studies, implemented realistic lighting simulation including reflections, refractions, diffusions, fog, texture and uv mapping, and more. Written c++ to load the color of the image pixel by pixel into a .ppm format.",
      tags: [
        {
          name: "c++",
          color: "orange-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
      ],
      image: rt,
      source_code_link: "https://github.com/Nathan-Pawlas/RTW",
    },
  ];
  const games = [
    {
      name: "Across The Sea of Dusk And Rot",
      description:
        "Worked as lead programmer for an 'inscryption-esque' card game as part of a semester long project with Student Game Developers.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "green-text-gradient",
        },
        {
          name: "C-sharp",
          color: "pink-text-gradient",
        },
      ],
      image: sea,
      source_code_link: "https://github.com/UVASGD/spring-2023-across-the-sea-of-dusk-and-rot",
      site_link: "https://buzjr.itch.io/across-the-sea-of-dust-and-rot",
      linkBool: true,
    },
    {
      name: "QuickSilver",
      description:
        "Directing a semester long project, leading a team of 15+ peers in the creation and refinment of a fast-paced first-person platformer. Created the fundamental base mechanics the rest of the game is being built off of.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Leadership",
          color: "green-text-gradient",
        },
        {
          name: "C-sharp",
          color: "pink-text-gradient",
        },
      ],
      image: wip,
      source_code_link: "https://github.com/UVASGD/fall-2023-quicksilver/tree/main",
      site_link: "https://buzjr.itch.io/quicksilver"
    },
    {
      name: "Hell Climbers",
      description:
        "Created in 48 hours, this was a submission to a locally run Halloween Game Jam with the theme of 'Resurection'.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C-sharp",
          color: "pink-text-gradient",
        },
      ],
      image: hell,
      source_code_link: "https://github.com/Nathan-Pawlas/spooky_game_jam",
      site_link: "https://buzjr.itch.io/hell-climber",
    },
    {
      name: "Gold and Rot",
      description:
        "Current semester long project I am directing with a team of 12+ members. This is a metroidvania with an emphasis on exploration and atmosphere. Designed to have tight controls and satisfying movement. Created in Godot using GDScript.",
      tags: [
        {
          name: "Godot",
          color: "green-text-gradient",
        },
        {
          name: "Leadership",
          color: "red-text-gradient",
        },
      ],
      image: gnr,
      source_code_link: "https://github.com/Nathan-Pawlas/spring-2024-metroidvania",
    },
  ];
  
  export { services, technologies, experiences, projects, games };