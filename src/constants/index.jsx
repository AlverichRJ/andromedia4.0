import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "Acerca", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Servicios", href: "#skills" },
  { label: "Andromedia", href: "#award" },
  { label: "Equipo", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export const PROFILE = {
  name: "",
  info: "Agencia de Marketing digital",
};

export const ABOUT = {
  text1:
    "🚀 Apasionados por el mkt y la publicidad. Transformamos ideas en estrategias 📈",
  text2:
    "En nuestra agencia de marketing y publicidad, llevamos la creatividad y la estrategia al siguiente nivel. Somos apasionados por conectar marcas con sus audiencias, entendiendo sus necesidades y superando sus expectativas. Transformamos ideas en estrategias innovadoras y efectivas que generan impacto y potencian el crecimiento de nuestros clientes. Con un enfoque integral, combinamos el análisis de mercado, la creatividad y las últimas tendencias digitales para ofrecer soluciones personalizadas y resultados medibles. Más que una agencia, somos el aliado que tu marca necesita para destacar en un mundo competitivo.",
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: " ¿Qué podemos hacer?",
  award: "Crear tu identidad ",
  description:
    "Podemos crear la identidad de tu marca, hacer que tus potenciales clientes desarrollen un lazo con tu marca y así puedas tener clientes que siempre esten contigo.",
};

export const TESTIMONIALS = [
  {
    name: "Alverich Root Jordison",
    title: "Lead Developer, Digital Solutions",
    quote:
      "El trabajo de Alverich es de vital importancia ya que sus fundamentos y visiones en el mundo de la tecnologia logran posionar todas las plataformas en los mejores lugares .",
    image: user1,
  },
  {
    name: "Carlos Guerrero",
    title: "CTO, Creative Minds",
    quote:
      "Uno de los mejores diseñadores de México, pues sus inovadores ideas logran crear la perfeccion visual que estas buscando",
    image: user2,
  },
  {
    name: "Jorge Melendez",
    title: "CEO, Marketing",
    quote:
      "Nuestro CEO tiene una de las mejores visiones en el mundo del marketing pues sus ideas han ayudado a posicionar a las mejores marcas en posiciones de alto nivel.",
    image: user3,
  },
  {
    name: "",
    title: "",
    quote:
      "",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61560385270437&mibextid=LQQJ4d",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/andromedia.mkt?igsh=Y3FzMHl5bWk5cDVy&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
