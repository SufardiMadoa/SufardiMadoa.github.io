import Navbar from "../components/Navbar";
import im from "../img/my image.png";
import "../index.css";


const Index = () => {

  return (
    <>
      <div className="min-h-screen  md:bg-gradient-to-tl from-white via-slate-400 to-slate-900 md:from-slate-900  bg-gradient-to-t md:bg-center md:bg-cover">
        {/* Your content goes here */}
        <nav>
          <Navbar></Navbar>
          
        </nav>
       
        <div className="   identyty2   mt-12 text-white">
          <h1 className="flex items-end text-xl w-96 font-medium text-white">
          Sufardi Madoa <br />Symphony of Skills in 
          </h1>
          <div className="learn flex items-end text-xl w-[250px] font-medium text-white">
          <span className="relative  h-[35px] w-[250px] overflow-hidden learn  ">
              <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0s]">
                PHP
              </span>
              <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:3.5s]">
                React JS
              </span>
              <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.5s]">
                Express JS
              </span>
            </span>
          </div>   
        </div>
        <div className="head flex bg-black">
          <a href="#" className="photo">
            <img src={im} />
            <div className="glow-wrap">
              <i className="glow"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Index;
