"use client";

import { useEffect, useState } from "react";

export function GithubProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setProjects(data.splice(0, 5));
      });
    });
  }, []);

  return (
    <div>
      <p>5 Recent GitHub Projects</p>
      <ul className="w-fit">
        {projects.map((project: any) => {
          return (
            <li
              key={project.title}
              className="border border-yellow-500 border-solid rounded-sm px-5"
            >
              <p>
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-yellow-300"
                >
                  {project.title}
                </a>
              </p>
              <p>{project.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
