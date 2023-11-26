import { BLOGIMG_URL, REGISTER_URL } from '@/config/app-config';
import { FaReact, FaNode } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiStrapi,
  SiStyledcomponents,
} from 'react-icons/si';

export const Skils = [
  {
    id: 0,
    tech: 'React JS',
    icon: FaReact,
  },
  {
    id: 1,
    tech: 'Node JS',
    icon: FaNode,
  },
  {
    id: 2,
    tech: 'StyledComponents',
    icon: SiStyledcomponents,
  },
  {
    id: 3,
    tech: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 4,
    tech: 'JavaScript',
    icon: SiJavascript,
  },
  {
    id: 5,
    tech: 'Strapi',
    icon: SiStrapi,
  },
];

export type ProjectDetailsProps = {
  projetc_name: string;
  project_desc: string;
  tech_stack: string[];
  projetc_img: string;
  projet_url: string;
  repository_url: string;
};

export const ProjectDetails = [
  {
    id: 0,
    projetc_name: 'Blog',
    project_desc:
      'A blog with a front-end using NextJS, Typescript that has a pagination feature and filters posts by category and that consumes an api developed using strapi. ',
    tech_stack: ['NextJs', 'Strapi', 'React', 'Typescript', 'StyledComponents'],
    projetc_img: BLOGIMG_URL,
    projet_url: 'https://blog.matheusdario.com.br',
    repository_url: 'https://github.com/MatheusDario/blog-next',
  },
  {
    id: 1,
    projetc_name: 'Register Students System',
    project_desc:
      'Student registration system where only registered users can register, edit and delete students. The api was developed using nodejs',
    tech_stack: ['NodeJS', 'Javascript', 'React'],
    projetc_img: REGISTER_URL,
    projet_url: 'https://escola.matheusdario.com.br/',
    repository_url: 'https://github.com/MatheusDario/usando-apiAlunos-react',
  },
];
