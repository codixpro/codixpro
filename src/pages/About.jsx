import LogoLoop from '../components/LogoLoop';
import { SiReact,SiPhp,SiLaravel,SiNextdotjs,SiLangchain,SiNodedotjs,SiExpress,SiCanva, SiWordpress, SiTypescript, SiTailwindcss,} from 'react-icons/si';
const techLogos = [
  { node: <SiReact />, title: "React"},
  { node: <SiWordpress />, title: "Wordpress"},
  { node: <SiPhp />, title: "PHP"},
  { node: <SiLaravel />, title: "Laravel"},
  { node: <SiTypescript />, title: "Typescript"},
  { node: <SiNextdotjs />, title: "Next.js"},
  { node: <SiLangchain />, title: "Langchain"},
  { node: <SiNodedotjs />, title: "Node.js"},
  { node: <SiExpress />, title: "Express"},
  { node: <SiTailwindcss />, title: "Tailwind CSS"},
  { node: <SiCanva />, title: "Canva"},
];


const About = () => {

  return (
    <div className='bg-black pt-5'>
      <LogoLoop
        className="text-white"
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        loop
        ariaLabel="Technology partners"
      />
    </div>
  )
}

export default About