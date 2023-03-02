import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import logo from "./../../public/logo.png";

const navigation = {
  nav: [
    {
      id: 1,
      name: "Home",
      href: "/",
    },

    {
      id: 3,
      name: "Pricing",
      href: "/pricing",
    },
    {
      id: 4,
      name: "Gallery",
      href: "/gallery",
    },
  ],
};

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="mx-3 h-5 w-5 text-primaryDark "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="mx-3 h-5 w-5 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

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
          <>
            <div
              key={1}
              className="mr-auto flex-none py-2"
              aria-label="Go home"
            >
              <span className="sr-only">AMA Sunday Farmers Market</span>
              <Image
                className="sm-h-8 md:w-30 aspect-w-10 aspect-h-4 md:h-12 lg:h-8"
                src={logo}
                alt="Visit Zimbabwe"
                fill="#28a745"
                quality={90}
                width={105.5}
                height={55}
                loading={"lazy"}
              />
            </div>
          </>
        </Link>
        {/* // className=> */}

        <div className="hidden lg:mx-auto lg:flex lg:w-auto  lg:items-center lg:space-x-10">
          {navigation.nav.map((page, i) => (
            <div
              key={i}
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
        {/* Theme Changer Icon */}
        {renderThemeChanger()}
        {/* Menu Icon */}
        <button
          type="button"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
          className="hs-collapse-toggle navbar-burger -my-1 ml-1 -mr-1 flex items-center justify-center p-2 lg:hidden"
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
        <button
          className="relative inline-flex items-center rounded-full bg-cyan-500 py-1.5 px-2 text-cyan-200 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          id="headlessui-switch-5"
          role="switch"
          type="button"
          tabIndex="0"
          aria-checked="false"
          data-headlessui-state=""
        >
          <span className="sr-only">Disable dark mode</span>
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="scale-0 transform transition-transform duration-500"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="ml-3.5 scale-100 transform transition-transform duration-300"
          >
            <path
              d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="absolute top-0.5 left-0.5 flex h-8 w-8 transform items-center justify-center rounded-full bg-white transition duration-500">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="flex-none scale-100 transform text-cyan-500 opacity-100 transition duration-500"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="-ml-6 flex-none scale-0 transform text-slate-700 opacity-0 transition duration-500"
            >
              <path
                d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
        <div className="hidden text-sm font-medium lg:ml-8 lg:flex lg:items-center">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/register"
            className={`flex items-center gap-x-2 text-gray-900 hover:text-primary/90 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primaryDark sm:my-6 sm:border-l sm:border-gray-300 sm:pl-6 ${
              currentRoute === "/register" && "text-primary dark:text-primary"
            }`}
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
          <Link href="/contact">
            <label
              className={`-my-2.5 ml-8 inline-flex justify-center rounded-lg bg-secondary/95 py-2.5 px-4 text-white hover:bg-primary/[.16] hover:text-primary/95 dark:bg-secondary/95 ${
                currentRoute === "/contact" &&
                " bg-primary/95 text-white  hover:bg-primary/[.16] dark:bg-primary/95 dark:hover:bg-primary/[.16] dark:hover:text-primary/95"
              }`}
            >
              {" "}
              Get in-touch{" "}
              <span
                aria-hidden="true"
                className="transition ease-in-out hover:translate-x-1"
              >
                →
              </span>
            </label>
          </Link>
        </div>
      </div>
    </nav>
  );
}
