import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiResponsive, DiSass } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiStyledcomponents, SiRedux } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const icons = [
  {
    id: 1,
    name: 'Html',
    icon: <AiOutlineHtml5 />,
  },
  {
    id: 2,
    name: 'Css',
    icon:  <DiCss3/>,
  },
  {
    id: 3,
    name: 'Javascript',
    icon: <IoLogoJavascript/>,
  },
  {
    id: 4,
    name: 'React',
    icon: <GrReactjs/>,
  },
  {
    id: 5,
    name: 'git',
    icon: <FaGitAlt/>,
  },
  {
    id: 6,
    name: 'github',
    icon: <AiFillGithub/>,
  },
  {
    id: 7,
    name: 'Next',
    icon: <SiNextdotjs/>,
  },
  {
    id: 8,
    name: 'Bootstrap',
    icon: <BsBootstrap/>,
  },
  {
    id: 9,
    name: 'Styled Components',
    icon: <SiStyledcomponents/>,
  },
  {
    id: 10,
    name: 'Redux',
    icon: <SiRedux/>,
  },
  
  {
    id: 11,
    name: 'Responsive design',
    icon: <DiResponsive/>,
  },
  {
    id: 12,
    name: 'Sass',
    icon: <DiSass/>,
  },
]

export default icons;