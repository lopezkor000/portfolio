"use client";

import { useEffect, useState } from "react";

interface ProjectProps {
  title?: string;
  items: string[];
}

export function ExperienceList(props: ProjectProps) {
  return (
    <div>
      <p className="underline">{props.title}</p>
      <ul>
        {props.items.map((item) => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ExperienceProps {
  position: string;
  where: string;
  when: string;
  skills: string[];
  children?: React.ReactNode;
}

export default function ExperienceCard(props: ExperienceProps) {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  return (
    <div className="flex flex-col pb-20 gap-10">
      <div>
        <div className="font-bold text-xl">
          <p>{props.position}</p>
        </div>
        <div className="text-bold">
          <p>{props.where}</p>
        </div>
        <div className="text-bold">
          <p>{props.when}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">{props.children}</div>
      <div className={`${width < 500 ? "columns-2" : "columns-3"} text-center`}>
        {props.skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
