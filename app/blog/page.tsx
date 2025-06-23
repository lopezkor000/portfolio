import ReactMarkdown from "react-markdown";
import styles from "page.module.css";

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

export default function Blog() {
  return (
    <div>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="text-5xl" {...props} />,
          h3: ({ node, ...props }) => <h1 className="text-3xl" {...props} />,
          ol: ({ node, ...props }) => (
            <ol className="list-decimal" {...props} />
          ),
          ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
        }}
      >
        {test}
      </ReactMarkdown>
    </div>
  );
}
