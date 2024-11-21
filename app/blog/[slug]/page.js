// app/blog/[slug]/page.js
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
export default async function BlogPost({ params }) {
  // const { slug } = params;

  // In a real application, you would fetch the blog post data here
  // based on the slug from your database or CMS
  // const post = {
  //   title: "Sample Blog Post",
  //   description: "This is description",
  //   content: "This is the full content of the blog post...",
  //   author: "John Doe",
  //   date: "Nov 17, 2023",
  //   readTime: "5 min read",
  // };
  const filePath = `content/${params.slug}.md`;
  if (!fs.existsSync(filePath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold  mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span className="text-sm italic mr-1">By {data.author},</span>
        <span className="text-sm italic mr-1">{data.date},</span>
        <span>{data.readTime}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
    </article>
  );
}
