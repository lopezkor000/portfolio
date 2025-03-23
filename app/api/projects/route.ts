import { NextResponse } from "next/server";

export async function GET() {
  // let response = {};
  try {
    const response = await fetch(
      "https://api.github.com/users/lopezkor000/repos?sort=pushed",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );

    const data = await response.json();

    const projects = data.map((project: any) => {
      return {
        title: project.name,
        description: project.description,
        url: project.html_url,
      };
    });

    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      { message: "cant connect to github" },
      { status: 500 }
    );
  }
}
