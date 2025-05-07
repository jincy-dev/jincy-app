

import { RiNextjsFill,RiReactjsFill} from "react-icons/ri";
import { FaHtml5,FaJs,FaNodeJs,FaGithub,FaAws } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTypescript,SiVite,SiJest } from "react-icons/si";

export default function Home() {
  
  return (
    <><div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        column1
      </div>
      <div style={{ flex: 1, display: "flex", 
        alignItems: "center", justifyContent: "center" }}
      >
        <RiNextjsFill size={100}/>
        <RiReactjsFill size={100}/>
        <FaHtml5 size={100}/>
        <IoLogoCss3 size={100}/>
        <FaJs size={100}/>        
        <FaNodeJs size={100}/>
        <SiTypescript size={100}/>
        <FaGithub size={100}/>
        <SiVite size={100}/>
        <FaAws size={100}/>
        <SiJest size={100}/>

        </div>
    </div>
    </>
  );
}
