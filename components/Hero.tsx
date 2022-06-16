import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-left p-10 static items-start md:mx-10 my-11">
        <h1 className="md:text-6xl text-3xl font-semibold md:leading-[5rem]">
          Hey There, I'm <br /> Aayush Mohan
        </h1>
        <p className="py-4 md:w-2/5 md:py-14">
          I'm a Frontend Web Developer with a passion for outstanding design and
          technology. I'm extremely enthusiastic about design and carrying it
          through to completion. I'm a big fan of science and technology, so I
          strive to stay on top of things so that our consumers get the greatest
          experience possible.
        </p>

        <button
          className="bg-slate-800 p-4 rounded-lg transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300"
          onClick={() =>
            (window.location.href = "mailto:aayushmohan1702@gmail.com")
          }
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Hero;
