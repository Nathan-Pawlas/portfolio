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
        "Fullstack Website developed utilizing React.js, Express.js, and MySQL allowing for easy post creation and email listings.",
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
      source_code_link: "https://github.com/Nathan-Pawlas/NewBlog",
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
        "W.I.P. | An extension to my study of 3D graphics, utilizing OpenGL and GLFW to create a context in which rays are fired from the camera to immitate the traversal of light in rendering a 3D image",
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
      source_code_link: "https://github.com/Nathan-Pawlas/RayTracer",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects, games };