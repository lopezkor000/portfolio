import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";

const test = `
# title
1. list
2. list
3. list

### smaller title
- ul
- ul

*italic*
**bold**
`;

export default async function Blog() {
  console.log("Reloading blogs");

  const base = "./app/blog/_blogs/";

  let blogs = [];
  const files = await fs.readdir(base);
  for (let file of files) {
    const data = (await fs.readFile(base + file)).toString();
    blogs.push(data);
  }

  console.log(blogs);

  return (
    <div className="flex flex-col gap-20 my-10">
      {blogs.map((blog) => (
        <div key={blog} className="flex flex-col gap-5 border rounded-xl p-10">
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
                  className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6"
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
