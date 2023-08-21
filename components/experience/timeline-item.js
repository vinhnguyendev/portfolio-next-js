import React from "react";

const SkillItems = (props) => {
  return(
    <li className="m-1 bg-[#f1807e]/30 inline-flex p-1 px-4 rounded-full " key={props.skill}><p className="text-[#f1807e] font-light text-xs">{props.skill}</p></li>
  )
}

export default function TimelineItem(props) {
  const experience = props.experience;
  const { id, date, title, company, description, skills } = experience;

  return (
    <li className="lg:ml-5 py-5 lg:py-10" key={title}>
      <div className="lg:absolute lg:w-3 lg:h-3 lg:bg-gray-200 lg:rounded-full lg:mt-1.5 lg:-left-1.5 lg:border lg:border-white lg:dark:border-gray-900 lg:dark:bg-gray-700"></div>
      <div className="p-2 md:p-4 lg:p-3 hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-lg hover:rounded drop-shadow-lg ease-in duration-100 ">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {company}
      </p>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
     <ul>
      {skills.map((skill, index) => <SkillItems key={index} skill={skill}/>)}
     </ul>
      </div>
    </li>
  );
}
