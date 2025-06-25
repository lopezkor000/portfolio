import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";

export default async function Blog() {
  const base = "./app/blog/_blogs/";

  let blogs = [];
  const files = await fs.readdir(base);
  for (let file of files) {
    const data = (await fs.readFile(base + file)).toString();
    blogs.push(data);
  }

  return (
    <div className="flex flex-col gap-20 my-10 md:w-1/2">
      {blogs.map((blog) => (
        <div
          key={blog}
          className="flex flex-col gap-5 border border-2 rounded-xl p-7 md:p-10"
        >
          <ReactMarkdown
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
                  className="text-base inline-flex text-wrap items-center bg-gray-800 text-white rounded-lg p-2 md:p-5"
                  {...props}
                />
              ),
            }}
          >
            {blog}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
