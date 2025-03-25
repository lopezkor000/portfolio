"use client";

import { BlogEntry } from "./BlogEntry";

let items = [1, 2, 3, 4, 5];

export default function Blog() {
  return (
    <ul>
      {items.map((item) => {
        return <BlogEntry key={item} title={item.toString()} />;
      })}
    </ul>
  );
}
