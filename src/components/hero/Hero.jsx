import styled from "styled-components";
import Typewriter from "./Typewriter";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section>


      {/* <div
        className="canvas abstract-background"
        id="abstract-bg-js"
        data-color="#848484"
      >
        <canvas
          id="defaultCanvas0"
          className="p5Canvas"
          width="3072"
          height="1552"
          style={{ width: 1536 + "px", height: 776 + "px" }}
        ></canvas>
      </div> 
      
      <Glitch
        src="https://res.cloudinary.com/demo/image/fetch/c_scale,w_600/https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80"
        key="glitch-1"
      />
      <Glitch
        src="https://res.cloudinary.com/demo/image/fetch/c_scale,w_600/https://images.unsplash.com/photo-1544794040-a6ab770bec83?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80"
        key="glitch-2"
      />
      */}
    </section>
  );
};

export default Hero;

const Glitch = styled.div`
  background-image: url(${(props) => props.src});
  /* add other CSS properties for the glitch effect */
`;
