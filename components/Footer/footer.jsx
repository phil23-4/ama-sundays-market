import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
];
const socials = [
  {
    name: "google",
    icon: "M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z",
  },
  {
    name: "twitter",
    icon: "M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z",
  },
  {
    name: "facebook",
    icon: "M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 dark:bg-slate-900 ">
      <div className="mx-auto max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 items-center gap-5 text-center md:grid-cols-3">
          <div>
            <a
              key={1}
              href={"/"}
              className="mr-auto flex-none py-2"
              aria-label="Go home"
            >
              <span className="sr-only">AMA Sunday Farmers Market</span>
              <Image
                className="md:w-30 aspect-w-10 aspect-h-4 md:h-12 lg:h-8"
                src={logo}
                alt="Visit Zimbabwe"
                fill="#28a745"
                quality={90}
                width={105.5}
                height={55}
                loading={"lazy"}
                blurDataURL="data:image/png;base64, iVBORwKGgoAAAANSUhEUgAAAMAAAADA..."
                placeholder="blur"
              />
            </a>
          </div>
          {/* <!-- End Col --> */}

          <ul className="text-center">
            {navigation.map((nav, i) => (
              <li
                key={i}
                className="relative inline-block pr-8 before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:text-gray-300 before:content-['/'] last:pr-0 last-of-type:before:hidden dark:before:text-gray-600"
              >
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href={nav.href}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          {/* <!-- End Col --> */}

          {/* <!-- Social Brands --> */}
          <div className="space-x-2 md:text-right">
            {socials.map((icon, i) => (
              <a
                key={i}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-center text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-offset-slate-900"
                href="#"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={icon.icon} />
                </svg>
              </a>
            ))}
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </footer>
  );
}
