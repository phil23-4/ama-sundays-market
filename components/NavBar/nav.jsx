/* eslint-disable react/jsx-key */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useScrollPosition from "../../hooks/useScrollPosition";

import logo from "./../../public/vercel.svg";

const navigation = {
  nav: [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Services",
      href: "/services",
    },
    // {
    //   id: 4,
    //   name: "Contact",
    //   href: "/contact",
    // },
  ],
};

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const router = useRouter();
  const currentRoute = router.pathname;
  const scrollPosition = useScrollPosition();
  return (
    <nav
      aria-label="Top"
      className={classNames(
        scrollPosition > 0
          ? "bg-white/[.9]  shadow-md backdrop-blur-lg dark:bg-slate-900/90"
          : "bg-transparent shadow-none dark:bg-slate-900",
        "max-w-container sticky top-0 z-50 mx-auto w-full flex-none px-4 leading-6  transition-shadow sm:px-6 lg:px-8"
      )}
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="relative flex flex-wrap items-center py-[0.125rem]">
        {/* <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div> */}
        <Link href="/">
          <a key={1} className="mr-auto flex-none" aria-label="Go home">
            <span className="sr-only">Visit Zimbabwe</span>
            <Image
              className="md:w-30 md:h-20"
              src={logo}
              alt="Visit Zimbabwe"
              fill="#28a745"
              quality={90}
              width={110.5}
              height={40.75}
              blurDataURL="data:image/png;base64, iVBORwKGgoAAAANSUhEUgAAAMAAAADA..."
              placeholder="blur"
            />
          </a>
        </Link>
        {/* // className=> */}

        <div className="hidden lg:mx-auto lg:flex lg:w-auto  lg:items-center lg:space-x-10">
          {navigation.nav.map((page) => (
            <div
              className={`ml-8 text-base font-medium  text-gray-900 hover:text-primaryDark dark:text-white/80 dark:hover:text-primary/75 ${
                currentRoute === page.href &&
                "text-primary/95 underline decoration-primary/95 decoration-4  underline-offset-[16px] dark:text-primary/95 dark:decoration-primary/95"
              }`}
            >
              <Link href={page.href} aria-current="page">
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        {/* Menu Icon */}
        <button
          type="button"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
          className="hs-collapse-toggle navbar-burger -my-1 ml-6 -mr-1 flex items-center justify-center p-2 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="hidden text-sm font-medium lg:ml-8 lg:flex lg:items-center">
          <a
            className="flex items-center gap-x-2  text-gray-900 hover:text-primary/90 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primaryDark sm:my-6 sm:border-l sm:border-gray-300 sm:pl-6"
            href="/register"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            Register
          </a>
          <a
            className="-my-2.5 ml-8 inline-flex justify-center rounded-lg bg-primary/95 py-2.5 px-4 text-white hover:bg-primary/[.16] hover:text-primary/95"
            href="/contact"
          >
            <span>
              Get in-touch{" "}
              <span
                aria-hidden="true"
                className="transition ease-in-out hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
