import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <nav className="w-full h-32  flex items-center justify-evenly ">
        <div className=" w-[30%]  h-32 flex items-center justify-center text-4xl ">
          <h1>Hussain Basha</h1>
        </div>
        <div className="w-[50%]  h-32  flex items-center gap-12 text-3xl">
          <a
            className=" hover:border-b-2 border-slate-500 hover:text-slate-500"
            href="#about"
          >
            About
          </a>

          <a
            className=" hover:border-b-2 border-slate-500 hover:text-slate-500"
            href="#experience"
          >
            Experience
          </a>

          <a
            className=" hover:border-b-2 border-slate-500 hover:text-slate-500"
            href="#projects"
          >
            Projects
          </a>

          <a
            className=" hover:border-b-2 border-slate-500 hover:text-slate-500"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};
export default Head;
