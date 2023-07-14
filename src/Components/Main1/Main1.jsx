import project111 from "../../assets/project111.png"
import image222 from "../../assets/image222.png"
import project333 from "../../assets/project333.png"
import project444 from "../../assets/project444.png"
import project555 from "../../assets/project555.png"
import project666 from "../../assets/project666.png"

const Main1 = () => {
  return (
    <>
      <div className="phone:flex phone:flex-col phone:items-center phone:justify-center   w-full h-screen phone:h-[70vh]  flex">
        <div className="w-1/2 h-full   flex items-center justify-end ">
          <img src="https://vishal-resume.vercel.app/assets/me1.avif" alt="" />
        </div>
        <div className="w-1/2 h-full phone:w-[70%] phone:justify-center phone:items-start flex items-center justify-center ">
          <div className="w-10/12 h-4/6 flex-col gap-3  flex items-start justify-center  phone:items-center  pl-7  mt-6 ">
            <h6 className=" phone:font-semibold phone:text-3xl ">
              {" "}
              Hello, I'm
            </h6>
            <h1 className="text-5xl font-bold phone:text-[35px]   ">
              Hussain Basha
            </h1>
            <h3 className="text-4xl text-slate-500  phone:text-[30px] phone:font-extrabold ">
              MERN Stack Developer
            </h3>
            <button className="w-1/3 h-16 rounded-full border-4 hover:bg-blue-600 border-slate-700  phone:w-[60%] phone:h-[20vh] phone:bg-slate-200 phone:font-extrabold phone:text-2xl  ">
              <a href="https://zety.com/cv-maker?utm_source=google&utm_medium=&utm_campaign=16724360371&utm_term=&network=x&device=c&adposition=&adgroupid=&placement=&utm_source=google&utm_medium=permax&utm_campaign=16724360371&utm_term=&network=x&device=c&adposition=&adgroupid=&placement=&gad=1&gclid=EAIaIQobChMIqpqa5fz7_wIVUBODAx0OPwV4EAAYASAAEgI31PD_BwE">
                Download CV
              </a>
            </button>
            <span className="w-1/4 h-11  flex items-center justify-evenly  ">
              <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
              <a href="https://github.com/">
                <i class="fa-brands fa-github  text-4xl phone:ml-[100%] "></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-full h-screen phone:h-[110vh]  flex flex-col   "
      >
        <div className="w-full h-32  flex flex-col items-center justify-center ">
          <h4 className="text-lg text-slate-500 phone:text-xl phone:font-medium ">
            Get To Know More
          </h4>
          <h1 className="text-5xl font-bold">About Me</h1>
        </div>
        <div className="w-full h-screen flex phone:flex phone:flex-col phone:gap-1  phone:items-center phone:justify-center  ">
          <div className="w-2/4 h-screen  flex items-center justify-center ">
            <img
              className="w-10/12 h-3/4 "
              src="https://vishal-resume.vercel.app/assets/me2.avif"
              alt=""
            />
          </div>
          <div className="w-2/4 h-screen phone:w-[70%]  phone:gap-2  flex flex-col items-start justify-evenly ">
            <span className="w-3/4 h-44 border-2 border-slate-700 rounded-3xl phone:-[10vh] flex flex-col items-center justify-center ">
              <img
                className="w-16 h-10"
                src="https://vishal-resume.vercel.app/assets/experience.png"
                alt=""
              />
              <h1 className="font-bold text-2xl">Experience</h1>
              <h2 className="font-normal text-slate-500 text-lg">2+ years</h2>
              <h4 className=" text-slate-900 text-lg font-bold ">
                MERN Development
              </h4>
            </span>

            <span className="w-3/4 h-2/5   ">
              <p className="w-full h-24 text-lg phone:text-[12px]   phone:font-medium ">
                As a MERN stack developer at the age of 21, you possess an
                exceptional level of dedication, passion, and ambition within
                the software development field. Your early immersion in this
                technology stack showcases your drive to excel and embrace
                technology stack showcases your drive to excel and embrace
                emerging technologies. Your unique position as a young developer
                allows you to bring fresh perspectives and adaptability to the
                table.
              </p>
            </span>
            <span className="w-10 h-14  absolute bottom-auto right-20 mt-96 flex items-center justify-end">
              <a href="#experience">
                <img
                  src="https://vishal-resume.vercel.app/assets/arrow.png"
                  className="w-9 h-10 flex "
                  alt=""
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        id="experience"
        className="w-full h-screen phone:h-[80vh]  flex flex-col"
      >
        <div className="w-full h-32  flex flex-col items-center justify-center ">
          <h4 className="text-lg text-slate-500 phone:text-xl phone:font-semibold  ">
            Explore My
          </h4>
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <div className="w-full h-screen phone:h-[35vh] flex phone:items-start phone:justify-center  items-center justify-center">
          <div className="w-[970%] h-[480px] border-2 border-slate-700 rounded-3xl ">
            <div className="w-full h-20  flex items-center justify-center ">
              <h1 className="text-3xl text-slate-500">MERN Development</h1>
            </div>
            <div className="w-full h-[310px] phone:flex phone:items-center phone:justify-centert phone:gap-[20px]   flex items-center justify-evenly">
              <div className="w-[230px] phone:w-[90px] phone:pl-[65px] h-64 flex flex-col items-center phone:flex phone:items-center phone:justify-center justify-evenly ">
                <div className="w-52 h-20 phone:w-[120px]   flex">
                  <div className="w-2/4 phone:w-[40%]  h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/html.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%]  phone:flex phone:flex-col phone:items-start phone:justify-start  ">
                    <h1 className="text-lg font-bold phone:text-base ">HTML</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold  ">
                      Experienced
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/tailwind.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">Tailwind</h1>
                    <h3 className="text-lg text-slate-900  phone:text-[12px] phone:font-semibold ">
                      Intermediate
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className=" w-2/4 h-20 phone:w-[40%] flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/digi.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">VPS</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold ">
                      Intermediate
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] phone:w-[90px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20 phone:w-[120px] flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/css.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">CSS</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold ">
                      Experienced
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/mongo.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold phone:text-[13px] ">
                      Mongo-DB
                    </h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold  ">
                      Intermediate
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className=" w-2/4 h-20 phone:w-[40%] flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/git.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold phone:text-[13px]  ">
                      Git/GIthub
                    </h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold  ">
                      Intermediate
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] phone:w-[90px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/js.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold phone:text-[14px] ">
                      JavaScript
                    </h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] font-semibold ">
                      Expert
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/docker.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">Docker</h1>
                    <h3 className="text-lg text-slate-900  phone:text-[12px] phone:font-semibold ">
                      Intermediate
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px] flex">
                  <div className=" w-2/4 h-20 phone:w-[40%] flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/linux.jpg"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">Linux</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold  ">
                      Intermediate
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] phone:w-[90px] h-64 phone:pr-[40px] flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/react.jpg"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">React</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold ">
                      Expert
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px] flex">
                  <div className="w-2/4 h-20 phone:w-[40%] flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/ex.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">Express</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold ">
                      Intermediate
                    </h3>
                  </div>
                </div>
                <div className="w-52 h-20 phone:w-[120px]  flex">
                  <div className=" w-2/4 h-20 phone:w-[40%] flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/firebas.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 phone:w-[60%] ">
                    <h1 className="text-lg font-bold">Firebase</h1>
                    <h3 className="text-lg text-slate-900 phone:text-[12px] phone:font-semibold ">
                      Intermediate
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[85px] flex items-center justify-center  ">
              <img
                src="https://vishal-resume.vercel.app/assets/ndoe.png"
                className="w-[60px] h-6 mb-[25px] "
                alt=""
              />
              <span className="">
                <h1 className="text-[18px] font-bold">Node -js</h1>
                <h3 className="text-[18px] text-slate-900 ">Intermediate</h3>
              </span>
            </div>
          </div>
        </div>
        <span className="w-10 h-14  absolute top-[240%] phone:top-[220%] phone:hidden phone:right-[4%] right-20 mt-96 flex items-center justify-end">
          <a href="#projects">
            <img
              src="https://vishal-resume.vercel.app/assets/arrow.png"
              className="w-9 h-10 flex "
              alt=""
            />
          </a>
        </span>
      </div>
      <div
        id="projects"
        className="w-full h-[200vh]  phone:h-[220vh]  flex flex-col "
      >
        <div className="w-full h-16  flex items-center justify-center">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>

        <div className="w-full h-[190vh] pr-32 pl-32 phone:w-[100%] phone:h-[200vh]   phone:flex gap-3 phone:flex-wrap  flex flex-wrap items-center justify-evenly ">
          <div className="w-[300px] h-[500px] border-2 border-slate-500 phone:w-[200px] phone:h-[300px] phone:gap-2 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={project111}
              className="w-[70%] h-[300px] phone:h-[150px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center phone:text-[20px] font-bold">
              Netflex-
            </h1>
            <h1 className="text-[35px] flex items-center justify-center phone:text-[20px] font-bold">
              Product
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://www.netflix.com/in">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] phone:w-[200px] phone:h-[300px] phone:gap-2 border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={project333}
              className="w-[70%] h-[300px] rounded-3xl phone:h-[150px] "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold phone:text-[20px]   ">
              Flow bite
            </h1>
            <h1 className="text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
              Properties
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://fetch-data-seven.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] phone:w-[200px] phone:h-[300px] phone:gap-2 border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={project444}
              className="w-[70%] h-[300px] rounded-3xl phone:h-[150px] "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
              Data -
            </h1>
            <h1 className="text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
              website
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://data-three-ebon.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px]  phone:w-[200px] phone:h-[300px]  phone:gap-2 border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={project555}
              className="w-[70%] h-[300px] rounded-3xl phone:h-[150px] "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
              Login
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project33-three.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] phone:w-[200px] phone:h-[300px] phone:gap-2 border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={project666}
              className="w-[70%] h-[300px] rounded-3xl phone:h-[150px] "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
            AspironKhuze
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project22-delta.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] phone:w-[200px] phone:h-[300px] phone:gap-2 border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src={image222}
              className="w-[70%] h-[300px] rounded-3xl phone:h-[150px] "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold phone:text-[20px] ">
              Ak-
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 phone:w-[40%] phone:h-[50px] hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project44-two.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full h-[400px] phone:h-[50vh]   flex flex-col items-center justify-center"
      >
        <h3 className="text-1xl text-slate-500 phone:text-2xl phone:font-semibold ">
          Get in Touch
        </h3>
        <h1 className="text-5xl text-black font-bold">Contact Me</h1>
        <span className="w-[60%] h-24 phone:h-[18vh] phone:flex phone:flex-col rounded-3xl border-2 mt-16 border-slate-500 flex items-center justify-center gap-5">
          <span className="w-[40%] h-20 phone:w-[80%] phone:h-[70px]   flex phone:flex phone:items-center phone:justify-start phone:gap-3 items-center justify-evenly ">
            <i class="fa-solid fa-envelope w-10 h-10 bg-black  rounded-full flex items-center justify-center text-3xl text-white"></i>
            <p className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl phone:text-2xl phone:font-bold ">
              <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100">
                useremail@gmail.com
              </a>
            </p>
          </span>
          <span className="w-[20%] h-28 flex items-center justify-evenly  phone:w-[80%] phone:h-[70px]   phone:flex phone:items-center phone:gap-3 phone:justify-start   ">
            <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
            <h1 className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl phone:text-2xl phone:font-bold  ">
              <a href="https://in.linkedin.com/">LinkedIn</a>
            </h1>
          </span>
          <span className="w-[20%] h-28 flex items-center phone:w-[80%] phone:h-[70px] phone:flex phone:items-center phone:justify-start phone:gap-3 justify-evenly">
            <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
            <h1 className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl phone:text-2xl phone:font-bold ">
              <a href="https://www.instagram.com/">Instagram</a>
            </h1>
          </span>
        </span>
      </div>
    </>
  );
};

export default Main1;
