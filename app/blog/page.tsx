import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { promises as fs } from "fs";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://db.koriel.net");
const blogsDB = pb.collection("blogs");

export default async function Blog() {
  // const base = "./app/blog/_blogs/";

  // let blogs = [];
  // const files = (await fs.readdir(base)).filter((file) => file != ".obsidian");
  // for (let file of files) {
  //   const data = (await fs.readFile(base + file)).toString();
  //   blogs.push({ date: file.substring(0, file.length - 3), content: data });
  // }

  const blogs = await blogsDB.getFullList();

  return (
    <div className="flex flex-col gap-20 my-10 md:w-1/2">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          id={blog.id}
          className="flex flex-col gap-5 border border-2 rounded-xl p-7 md:p-10"
        >
          <p className="text-right text-lg">{blog.title}</p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-5xl" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h1 className="text-3xl" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code
                  className="text-base inline-flex text-wrap items-center bg-gray-800 text-white rounded-lg px-2 md:px-5"
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-yellow-300 hover:text-white hover:decoration-yellow-200 hover:underline"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="text-base/8" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img
                  className="w-96 h-96 rounded-xl justify-self-center"
                  {...props}
                />
              ),
            }}
          >
            {blog.body}
          </ReactMarkdown>
          <p className="text-lg">Cheers!</p>
        </div>
      ))}
    </div>
  );
}
