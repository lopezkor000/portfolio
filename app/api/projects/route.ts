import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/lopezkor000/repos?sort=pushed",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.token}`,
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

    return NextResponse.json({ projects: projects, status: 200 });
  } catch {
    return NextResponse.json(
      { message: "cant connect to github" },
      { status: 500 }
    );
  }
}
