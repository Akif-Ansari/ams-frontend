import { useState } from "react";
import Login from "./Login";
import LoginTeacher from "./TeacherLogin";
const Homepage = () => {
  const [toggleLogin, setToggleLogin] = useState<boolean>(false);
  return (
    <section className="h-screen w-full">
      <div className="min-h-screen container border-4 mx-auto relative">
        <div className="flex justify-between w-full 2xl:pt-28 pt-16">
          <h1 className="2xl:text-4xl text-3xl font-semibold  text-black">
            KMCLU Assignment Portal
          </h1>
          <button
            onClick={() => setToggleLogin((x) => !x)}
            className="bg-[#00c9bd] text-primary text-xl font-bold
           rounded-md 2xl:px-12 px-8 
          2xl:py-3 py-2 active:bg-[#37aab5]"
          >
            {!toggleLogin ? "Student Login" : "Teacher Login"}
          </button>
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform translate-x-[-50%]
         translate-y-[-50%]"
        >
          {!toggleLogin ? <Login /> : <LoginTeacher />}
        </div>
        <h1
          className="absolute 2xl:text-6xl text-4xl 2xl:w-[360px] w-64 text-black font-semibold top-1/2
         transform
         translate-y-[-50%] left-0"
        >
          Welcome to KMCLU Assignment Portal
        </h1>
        <div className="flex absolute bottom-16 w-full justify-between text-2xl">
          <p>Get Your Assignment Questions</p>
          <p>Submit Your Assignment</p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
