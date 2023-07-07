const Main1 = () => {
  return (
    <>
      <div className="w-full h-screen  flex">
        <div className="w-1/2 h-full  flex items-center justify-end ">
          <img src="https://vishal-resume.vercel.app/assets/me1.avif" alt="" />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center ">
          <div className="w-10/12 h-4/6 flex-col gap-3  flex items-center justify-center pl-7  mt-6 ">
            <h6> Hello, I'm</h6>
            <h1 className="text-5xl font-bold  ">Hussain Basha</h1>
            <h3 className="text-4xl text-slate-500">MERN Stack Developer</h3>
            <button className="w-1/3 h-16 rounded-full border-4 hover:bg-blue-600 border-slate-700">
              <a href="https://zety.com/cv-maker?utm_source=google&utm_medium=&utm_campaign=16724360371&utm_term=&network=x&device=c&adposition=&adgroupid=&placement=&utm_source=google&utm_medium=permax&utm_campaign=16724360371&utm_term=&network=x&device=c&adposition=&adgroupid=&placement=&gad=1&gclid=EAIaIQobChMIqpqa5fz7_wIVUBODAx0OPwV4EAAYASAAEgI31PD_BwE">
                Download CV
              </a>
            </button>
            <span className="w-1/4 h-11  flex items-center justify-evenly ">
              <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
              <a href="https://github.com/">
                <i class="fa-brands fa-github  text-4xl "></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div id="about" className="w-full h-screen flex flex-col   ">
        <div className="w-full h-32  flex flex-col items-center justify-center ">
          <h4 className="text-lg text-slate-500">Get To Know More</h4>
          <h1 className="text-5xl font-bold">About Me</h1>
        </div>
        <div className="w-full h-screen flex  ">
          <div className="w-2/4 h-screen  flex items-center justify-center ">
            <img
              className="w-10/12 h-3/4 "
              src="https://vishal-resume.vercel.app/assets/me2.avif"
              alt=""
            />
          </div>
          <div className="w-2/4 h-screen  flex flex-col items-start justify-evenly ">
            <span className="w-3/4 h-44 border-2 border-slate-700 rounded-3xl flex flex-col items-center justify-center ">
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
              <p className="w-full h-24 text-lg">
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
      <div id="experience" className="w-full h-screen  flex flex-col">
        <div className="w-full h-32  flex flex-col items-center justify-center ">
          <h4 className="text-lg text-slate-500">Explore My</h4>
          <h1 className="text-5xl font-bold">Experience</h1>
        </div>
        <div className="w-full h-screen flex  items-center justify-center">
          <div className="w-[80%] h-[480px] border-2 border-slate-700 rounded-3xl ">
            <div className="w-full h-20  flex items-center justify-center ">
              <h1 className="text-3xl text-slate-500">MERN Development</h1>
            </div>
            <div className="w-full h-[310px]  flex items-center justify-evenly">
              <div className="w-[230px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/html.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">HTML</h1>
                    <h3 className="text-lg text-slate-900">Experienced</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/tailwind.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Tailwind</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className=" w-2/4 h-20 flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/digi.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">VPS</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/css.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">CSS</h1>
                    <h3 className="text-lg text-slate-900">Experienced</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/mongo.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Mongo-DB</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className=" w-2/4 h-20 flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/git.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Git/GIthub</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/js.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">JavaScript</h1>
                    <h3 className="text-lg text-slate-900">Expert</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/docker.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Docker</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className=" w-2/4 h-20 flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/linux.jpg"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Linux</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
              </div>
              <div className="w-[230px] h-64 flex flex-col items-center justify-evenly ">
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/react.jpg"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">React</h1>
                    <h3 className="text-lg text-slate-900">Expert</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className="w-2/4 h-20 flex items-star justify-center ">
                    <img
                      src="https://vishal-resume.vercel.app/assets/ex.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Express</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
                  </div>
                </div>
                <div className="w-52 h-20  flex">
                  <div className=" w-2/4 h-20 flex items-star justify-center">
                    <img
                      src="https://vishal-resume.vercel.app/assets/firebas.png"
                      className="w-11 h-7 flex items-center justify-center"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 h-20 ">
                    <h1 className="text-lg font-bold">Firebase</h1>
                    <h3 className="text-lg text-slate-900">Intermediate</h3>
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
        <span className="w-10 h-14  absolute top-[250%] right-20 mt-96 flex items-center justify-end">
          <a href="#projects">
            <img
              src="https://vishal-resume.vercel.app/assets/arrow.png"
              className="w-9 h-10 flex "
              alt=""
            />
          </a>
        </span>
      </div>
      <div id="projects" className="w-full h-[200vh] flex flex-col ">
        <div className="w-full h-16  flex items-center justify-center">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>

        <div className="w-full h-[190vh] pr-32 pl-32  flex flex-wrap items-center justify-evenly ">
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\project111.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              Aspirings Ak-
            </h1>
            <h1 className="text-[35px] flex items-center justify-center font-bold">
              Product
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://www.netflix.com/in">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\project333.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              Rent my
            </h1>
            <h1 className="text-[35px] flex items-center justify-center font-bold">
              Properties
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://fetch-data-seven.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\project444.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              Synerge -
            </h1>
            <h1 className="text-[35px] flex items-center justify-center font-bold">
              website
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://data-three-ebon.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\project555.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              Kitelle
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project33-three.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\project666.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              AspironKhuze
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project22-delta.vercel.app/">Live Demo</a>
            </button>
          </div>
          <div className="w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl flex flex-col items-center justify-center ">
            <img
              src="src\assets\Screenshot 2023-07-06 181605.png"
              className="w-[70%] h-[300px] rounded-3xl "
              alt=""
            />
            <h1 className=" text-[35px] flex items-center justify-center font-bold">
              Ak-
            </h1>
            <button className="w-[60%] h-16  text-black font-bold border-2 hover:bg-black hover:text-white border-slate-500 rounded-full flex items-center justify-center">
              <a href="https://project44-two.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full h-[400px]  flex flex-col items-center justify-center"
      >
        <h3 className="text-1xl text-slate-500">Get in Touch</h3>
        <h1 className="text-5xl text-black font-bold">Contact Me</h1>
        <span className="w-[60%] h-24 rounded-3xl border-2 mt-16 border-slate-500 flex items-center justify-center gap-5">
          <span className="w-[40%] h-20  flex items-center justify-evenly ">
            <i class="fa-solid fa-envelope w-10 h-10 bg-black  rounded-full flex items-center justify-center text-3xl text-white"></i>
            <p className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl ">
              <a href="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100">
                useremail@gmail.com
              </a>
            </p>
          </span>
          <span className="w-[20%] h-28 flex items-center justify-evenly">
            <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
            <h1 className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl">
              <a href="https://in.linkedin.com/">LinkedIn</a>
            </h1>
          </span>
          <span className="w-[20%] h-28 flex items-center justify-evenly">
            <i class="fa-brands fa-linkedin-in bg-black w-8 h-8 flex items-center justify-center text-white text-2xl rounded-full"></i>
            <h1 className="hover:border-b-2 border-slate-500 hover:text-slate-500 cursor-pointer text-2xl">
              <a href="https://www.instagram.com/">Instagram</a>
            </h1>
          </span>
        </span>
      </div>
    </>
  );
};
export default Main1;
