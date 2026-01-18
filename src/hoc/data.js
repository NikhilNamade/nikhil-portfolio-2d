import {
  _3dWebsite,
  alumconnect,
  ecoomerce,
  imageeditor,
  railwayconcession,
} from "../assets/index.js";

import dog1 from "../assets/projects/3ddog1.png";
import dog2 from "../assets/projects/3ddog2.png";
import dog3 from "../assets/projects/3ddog3.png";
import dog4 from "../assets/projects/3ddog4.png";
import dog5 from "../assets/projects/3ddog5.png";
import dog6 from "../assets/projects/3ddog6.png";

import railway1 from "../assets/projects/railway1.png"
import railway2 from "../assets/projects/railway2.png"
import railway3 from "../assets/projects/railway3.png"
import railway4 from "../assets/projects/railway4.png"


import portfolio1 from "../assets/projects/portfolio1.png"
import portfolio2 from "../assets/projects/portfolio2.png"
import portfolio3 from "../assets/projects/portfolio3.png"
import portfolio4 from "../assets/projects/portfolio4.png"
import portfolio5 from "../assets/projects/portfolio5.png"

import event1 from "../assets/projects/event1.jpeg"
import event2 from "../assets/projects/event2.jpeg"
import event3 from "../assets/projects/event3.png"
import event4 from "../assets/projects/event4.png"
import event5 from "../assets/projects/event5.png"
import event6 from "../assets/projects/event6.png"
import event7 from "../assets/projects/event7.png"
import event8 from "../assets/projects/event8.png"
import event9 from "../assets/projects/event9.jpeg"

import e1 from "../assets/projects/e1.png"
import e2 from "../assets/projects/e2.png"
import e3 from "../assets/projects/e3.png"
import e4 from "../assets/projects/e4.png"
import e5 from "../assets/projects/e5.png"
import e6 from "../assets/projects/e6.png"
import e7 from "../assets/projects/e7.png"
import e8 from "../assets/projects/e8.png"
import e9 from "../assets/projects/e9.png"
import e10 from "../assets/projects/e10.png"
import e11 from "../assets/projects/e11.png"
import e12 from "../assets/projects/e12.png"
import e13 from "../assets/projects/e13.png"
import e14 from "../assets/projects/e14.png"
import e15 from "../assets/projects/e15.png"
export const  projects = [
    {
      title: "AlumConnect",
      description:
        "AlumConnect is a MERN-stack based alumni networking platform that facilitates seamless interaction between alumni and students. It features user authentication, profile management, real-time messaging, and cloud-based media handling, ensuring a scalable and engaging community experience.",
      image: alumconnect,
      tech: ["MERN", "Socket.io", "Cloudinary"],
      gallery:[],
      github: "",
      demo: "",
      status: false,
    },
    {
      title: "3D Website",
      description:
        "A Dogstudio-inspired 3D web experience developed with React, Three.js, React Three Fiber, and GSAP ScrollTrigger. Implements scroll-linked animations, camera transitions, and interactive 3D elements while maintaining responsiveness and performance.",
      image: _3dWebsite,
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      github: "https://github.com/NikhilNamade/threejsdog.git",
      demo: "https://threejsdog.vercel.app/",
      status: true,
      gallery:[_3dWebsite,dog1,dog2,dog3,dog4,dog5,dog6]
    },
    {
      title: "Railway Concession System",
      description:
        "The Railway Concession System is a web-based application that digitizes the student railway concession process by enabling online applications, verification, and approval, reducing paperwork and improving efficiency.",
      image: railwayconcession,
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
      github: "https://github.com/NikhilNamade/railway.git",
      demo: "https://railway-concession-system.onrender.com/",
      status: true,
      gallery:[railwayconcession,railway1,railway2,railway3,railway4]
    },
    {
      title: "Portfolio Geng.",
      description:
        "A dynamic portfolio generator built with modern web technologies that transforms user input into a responsive, template-based portfolio. Features include real-time preview, reusable components, and customizable sections for projects, skills, and experience.",
      image: portfolio4,
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
      github: "https://github.com/NikhilNamade/portfolio-generator.git",
      demo: "https://portfolio-generator-lemon-three.vercel.app/",
      status: true,
      gallery:[portfolio1,portfolio2,portfolio3,portfolio4,portfolio5]
    },
    {
      title: "VisualFix",
      description:
        "A modern color grading web application developed using HTML5 Canvas API. The project focuses on real-time color manipulation, smooth UI interactions, and accurate image rendering to deliver professional-grade color adjustment tools in the browser.",
      image: imageeditor,
      tech: ["HTML5", "TailwindCss", "JavaScript", "Canvas-API"],
      github: "https://github.com/NikhilNamade/imageEditor.git",
      demo: "https://image-editor-roan-psi.vercel.app/",
      status: true,
    },
    {
      title: "Sort My Events",
      description:
        "A cross-platform Flutter application with a Go backend implementing RESTful APIs for event CRUD operations, user registration, and organizer interaction.",
      image: event9,
      tech: ["Flutter", "Go", "REST API", "Maps SDK"],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: true,
      gallery:[event1,event2,event3,event4,event5,event6,event7,event8]
    },
    {
      title: "Shop Your Choice",
      description:
        "A full-stack e-commerce platform with a responsive website and Flutter mobile app supporting product browsing, checkout, and admin management.",
      image: ecoomerce,
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Cloudinary",
        "Flutter",
      ],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: false,
      gallery:[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15]
    },
  ];