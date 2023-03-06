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

export default function Nav() {
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
          className="mt-2 mr-2 inline-flex h-5 w-5 items-center text-primaryDark md:mr-0 md:mt-0 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="mt-2  mr-2 inline-flex h-5 w-5 items-center text-gray-900 md:mr-0 md:mt-0 "
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
      className={classNames(
        scrollPosition > 0
          ? "bg-white/[.9]  shadow-md backdrop-blur-lg dark:bg-slate-900/90"
          : "bg-transparent shadow-none dark:bg-slate-900",
        "sticky top-0 left-0 z-20 w-full px-2 py-2.5 sm:px-4"
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className="mr-3 h-3 sm:h-6"
            height={45}
            width={100}
            quality={80}
            loading={"lazy"}
            alt="AMA Sunday Farmers Market"
          />
        </Link>
        <div className="flex md:order-2">
          {/* Theme Changer Icon */}
          {renderThemeChanger()}

          <div className="hidden text-sm font-medium lg:ml-8 lg:flex lg:items-center">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/register"
              className={`flex items-center gap-x-2 text-gray-900 hover:text-primary/90 dark:border-gray-700 dark:text-gray-400 dark:hover:text-primaryDark  sm:border-l sm:border-gray-300 sm:pl-6 ${
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

          {/* Menu Icon */}
          <button
            data-collapse-toggle="navbar-sticky"
            data-hs-collapse="#navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col  md:mt-0 md:flex-row md:space-x-4  md:text-sm md:font-medium ">
            {navigation.nav.map((page, i) => (
              <li
                key={i}
                className={`block rounded py-2 pl-3 pr-4 text-gray-900 hover:text-primaryDark dark:text-white/80 dark:hover:text-primary/75 ${
                  currentRoute === page.href &&
                  "text-primary/95 decoration-primary/95 decoration-4 dark:text-primary/95  dark:decoration-primary/95 lg:underline lg:underline-offset-[16px]"
                }`}
              >
                <Link href={page.href} aria-current="page">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
