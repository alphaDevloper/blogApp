"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-btn";
// import LoadingBar from "react-top-loading-bar";
// import { usePathname } from "next/navigation";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const [progress, setProgress] = useState(0);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setProgress(30);
  //   setTimeout(() => {
  //     setProgress(70);
  //   }, 100);
  //   setTimeout(() => {
  //     setProgress(100);
  //   }, 400);
  // }, [pathname]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setProgress(0);
  //   }, 500);
  // });

  return (
    <nav className="bg-background/50 shadow-lg sticky top-0 backdrop-blur-sm z-10">
      {/* <LoadingBar
        color="#4d50e2"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold hover:text-blue-600">
              Alpha
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className=" hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-blue-600 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/blog"
              className=" hover:text-blue-600 transition duration-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className=" hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
            <div className="mt-4 flex">
              <Link href="/login">
                <button className="w-full mr-3 mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full py-2 px-4 ml-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign Up
                </button>
              </Link>
              <span className="ml-6">
                <ModeToggle className="m-1" />
              </span>
            </div>
            {/* <div className="flex items-center">
              <Button className="m-1">Login</Button>
              <Button className="m-1">Sign Up</Button>
              <ModeToggle className="m-1" />
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <span className="mx-4">
              <ModeToggle />
            </span>
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu - Sliding from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ zIndex: 10 }}
      >
        <div className="pt-4 pb-4 px-4 bg-white">
          <Link
            href="/"
            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
          >
            Contact
          </Link>
          <div className="mt-4">
            <Button className="w-full mb-2">Login</Button>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-5 md:hidden"
          onClick={toggleMenu}
          style={{ zIndex: 5 }}
        />
      )}
    </nav>
  );
}
