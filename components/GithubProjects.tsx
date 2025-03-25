"use client";

import { useEffect, useState } from "react";

export function GithubProjects() {
  const [projects, setProjects] = useState({ status: 200, data: [] });

  useEffect(() => {
    fetch("/api/projects", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setProjects({
          status: Number(data.status),
          data: data.projects.slice(0, 5),
        });
      });
    });
  }, []);

  return (
    <div>
      <p className="text-xl font-bold">5 Recently Pushed GitHub Projects</p>
      <ul className="w-fit">
        {projects.status == 200 ? (
          projects.data.map((project: any) => {
            return (
              <li
                key={project.title}
                className="border border-yellow-500 border-solid rounded-sm px-5 py-1"
              >
                <p>
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-xl font-bold text-yellow-300 hover:text-white"
                  >
                    {project.title}
                  </a>
                </p>
                {project.description ? (
                  <p>{project.description}</p>
                ) : (
                  <p className="text-zinc-500">No Description</p>
                )}
              </li>
            );
          })
        ) : (
          <div className="text-red-400">Refresh or try again later 😥</div>
        )}
      </ul>
    </div>
  );
}
