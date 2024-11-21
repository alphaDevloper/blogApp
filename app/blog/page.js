// app/blog/page.js
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"; // I see you're using this in your workflow
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

export default function BlogPage() {
  const dirContent = fs.readdirSync("content", "utf-8");
  const blogPosts = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });
  // const blogPosts = [
  //   {
  //     title: "Getting Started with Next.js",
  //     slug: "getting-started-with-nextjs",
  //     excerpt:
  //       "Learn the basics of Next.js and how to create your first application with this powerful React framework.",
  //     date: "Nov 17, 2023",
  //     readTime: "5 min read",
  //     imageUrl: "/blog-1.jpg",
  //   },
  //   {
  //     title: "Mastering Tailwind CSS",
  //     slug: "mastering-tailwind-css",
  //     excerpt:
  //       "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes.",
  //     date: "Nov 16, 2023",
  //     readTime: "4 min read",
  //     imageUrl: "/blog-2.jpg",
  //   },
  //   {
  //     title: "Building Responsive Layouts",
  //     slug: "building-responsive-layouts",
  //     excerpt:
  //       "Tips and tricks for creating layouts that work perfectly across all device sizes.",
  //     date: "Nov 15, 2023",
  //     readTime: "6 min read",
  //     imageUrl: "/blog-3.jpg",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section remains the same */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Discover the latest insights, tutorials, and updates from our team
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
