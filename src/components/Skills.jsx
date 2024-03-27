import React from "react";
import { Link } from "react-router-dom";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle1" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-50"
                />
              </div>
              <div>
                <h6>
                  <Link to={`/${skill.name.toLowerCase().replace(" ", "-")}`}>
                    {skill.name}
                  </Link>
                </h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
                  {skills.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
